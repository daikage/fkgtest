import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ClickSoundProvider from './components/ClickSoundProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      {/* Global click sound for all interactive elements */}
      <ClickSoundProvider src="/sounds/click.mp3" volume={0.35} />
      <App />
    </HashRouter>
  </StrictMode>,
)