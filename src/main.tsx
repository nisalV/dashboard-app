import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
