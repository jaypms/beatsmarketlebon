// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'  // On va créer ce fichier aussi juste après
import './styles/index.css'      // fichier CSS global, à créer ou adapter selon toi

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
