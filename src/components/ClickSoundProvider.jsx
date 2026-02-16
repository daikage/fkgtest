import { useEffect, useRef } from 'react'

/**
 * Global click sound provider.
 * - Plays on all common interactive elements (buttons, links, menuitems, tabs, switches, etc.),
 *   including custom clickable elements (cursor: pointer) and .btn or [data-clickable="true"].
 * - Opt out with data-no-sound="true" on an element or any ancestor.
 * - Optional per-element override with data-sound-src="/sounds/other.mp3".
 * - Put your default file at /sounds/click.mp3 (public/sounds/click.mp3).
 */
export default function ClickSoundProvider({ src = '/sounds/click.mp3', volume = 0.35, poolSize = 4 }) {
  const poolsRef = useRef(new Map()) // Map<string, { list: HTMLAudioElement[], idx: number }>
  const readyRef = useRef(false)

  function getPool(forSrc) {
    if (!poolsRef.current.has(forSrc)) {
      const list = Array.from({ length: poolSize }, () => {
        const a = new Audio(forSrc)
        a.volume = volume
        return a
      })
      poolsRef.current.set(forSrc, { list, idx: 0 })
    }
    return poolsRef.current.get(forSrc)
  }

  useEffect(() => {
    // Prime default pool
    getPool(src)
    readyRef.current = true

    const isDisabled = (el) =>
      el.matches(':disabled,[aria-disabled="true"]') ||
      el.getAttribute('aria-hidden') === 'true'

    const isInteractiveCandidate = (el) => {
      if (!el || el === document.body) return false
      if (el.closest('[data-no-sound="true"]')) return false
      if (isDisabled(el)) return false

      // Semantically interactive elements/roles
      if (
        el.matches(
          [
            'button',
            'a[href]',
            'summary',
            '[role="button"]',
            '[role="link"]',
            '[role="menuitem"]',
            '[role="tab"]',
            '[role="switch"]',
            '[role="checkbox"]',
          ].join(','),
        )
      ) return true

      // Form controls that usually perform actions (not text inputs/textarea)
      if (
        el.matches(
          [
            'input[type="checkbox"]',
            'input[type="radio"]',
            'input[type="submit"]',
            'input[type="button"]',
            'input[type="image"]',
            'input[type="reset"]',
            'select',
          ].join(','),
        )
      ) return true

      // Custom clickable patterns
      if (el.matches('.btn, [data-clickable="true"]')) return true

      // Heuristic: pointer cursor indicates intentional clickability
      const cs = window.getComputedStyle(el)
      if (cs.cursor === 'pointer') return true

      return false
    }

    const findInteractive = (start) => {
      let el = start
      while (el && el !== document.body) {
        if (isInteractiveCandidate(el)) return el
        el = el.parentElement
      }
      return null
    }

    const play = (soundSrc) => {
      if (!readyRef.current) return
      const pool = getPool(soundSrc || src)
      if (!pool || pool.list.length === 0) return
      const a = pool.list[pool.idx % pool.list.length]
      pool.idx += 1
      try {
        a.currentTime = 0
        a.play().catch(() => {
          // Autoplay policy can block on first gesture; safe to ignore
        })
      } catch {
        // ignore
      }
    }

    const onClickCapture = (e) => {
      const target = e.target
      const el = findInteractive(target)
      if (!el) return
      if (el.dataset?.noSound === 'true') return
      const overrideSrc = el.dataset?.soundSrc
      play(overrideSrc)
    }

    // Capture phase to ensure we run even if propagation is stopped later
    document.addEventListener('click', onClickCapture, true)
    return () => {
      document.removeEventListener('click', onClickCapture, true)
      poolsRef.current.clear()
    }
  }, [src, volume, poolSize])

  return null
}
