// main.jsx
import React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './App'
// import 'vite/modulepreload-polyfill'
import './index.css'
// import Layout from './layouts/Layout'
// import { AuthProvider } from './contexts/AuthContext'
// import { AdminAuthProvider } from './contexts/AdminAuthContext'
// import { GenreProvider } from './contexts/GenreContext'
// import { ReleaseProvider } from './contexts/ReleaseContext'
import { ArtistProvider } from './contexts/ArtistContext'
import { LanguageProvider } from './contexts/LanguageContext'
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ArtistProvider>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </ArtistProvider>
    </React.StrictMode>
)
