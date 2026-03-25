import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import { body, validationResult } from 'express-validator'
import { config as dotenvConfig } from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'
import hpp from 'hpp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenvConfig({ path: path.join(__dirname, '.env') })

const app = express()

// Security middleware
app.use(helmet())
app.use(hpp())
app.use(express.json({ limit: '10kb' }))

// CORS (allow same-origin by default, or specify comma-separated origins in ALLOWED_ORIGIN)
const allowed = (process.env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim()).filter(Boolean)
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true) // allow same-origin / server-to-server
      if (allowed.length === 0 || allowed.includes(origin)) return cb(null, true)
      return cb(new Error('Not allowed by CORS'))
    },
    methods: ['POST'],
  })
)

// Global rate limit (basic)
app.use(
  rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 120,
    standardHeaders: true,
    legacyHeaders: false,
  })
)

// Tighter limit for the quote endpoint
const quoteLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: { error: 'Too many requests. Please try again later.' },
})

const required = ['GMAIL_USER', 'GMAIL_APP_PASSWORD']
const missing = required.filter((k) => !process.env[k])
if (missing.length) {
  console.warn(`Missing env vars: ${missing.join(', ')}. Email sending will be disabled until set.`)
}

// Mail transport (Gmail App Password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

app.post(
  '/api/quote',
  quoteLimiter,
  [
    body('name').trim().isLength({ min: 2 }).withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('phone').optional({ checkFalsy: true }).trim().isLength({ max: 32 }),
    body('company').optional({ checkFalsy: true }).trim().isLength({ max: 128 }),
    body('service').trim().notEmpty().withMessage('Please select a service'),
    body('message').optional({ checkFalsy: true }).trim().isLength({ max: 2000 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Validation failed', details: errors.array() })
    }

    const { name, email, phone, company, service, message } = req.body

    const to = process.env.MAIL_TO || process.env.GMAIL_USER
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return res.status(500).json({ error: 'Mail server not configured' })
    }

    const subject = `New Quote Request - ${service} - ${name}`
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        ${message ? `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>` : ''}
        <hr/>
        <small>Sent from Fort Knox Guards website</small>
      </div>
    `
    const text = [
      'New Quote Request',
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      company ? `Company: ${company}` : '',
      `Service: ${service}`,
      message ? `Message:\n${message}` : '',
      '\nSent from Fort Knox Guards website',
    ]
      .filter(Boolean)
      .join('\n')

    try {
      await transporter.sendMail({
        from: `"Fort Knox Guards" <${process.env.GMAIL_USER}>`,
        to,
        replyTo: email,
        subject,
        text,
        html,
      })
      return res.json({ ok: true })
    } catch (err) {
      console.error('Mailer error:', err)
      return res.status(502).json({ error: 'Failed to send email' })
    }
  }
)

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const PORT = process.env.PORT || 8787
app.listen(PORT, () => {
  console.log(`Mailer server listening on port ${PORT}`)
})
