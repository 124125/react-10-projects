import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobleStyle = createGlobalStyle`
  

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #323334;
    color: white;
    min-height: 100vh;
    font-family: "Inter", sans-serif;
  }

  ::-webkit-scrollbar{
    display: none;
  }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobleStyle />
    <App />
  </StrictMode>,
)
