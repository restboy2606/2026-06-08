import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PixelClicker from './components/PixelClicker'
import './index.css'

function PlayPage() {
  return (
    <main className="play-page">
      <a className="play-back" href={import.meta.env.BASE_URL}>
        ← PIXELFORGE
      </a>
      <PixelClicker standalone />
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayPage />
  </StrictMode>
)
