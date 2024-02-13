import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SockectContextProvider } from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthContextProvider>
              <SockectContextProvider>

                  <App />
              </SockectContextProvider>

          </AuthContextProvider>

      </BrowserRouter>
    
  </React.StrictMode>,
)
