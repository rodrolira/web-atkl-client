import React from 'react'
import AppRouter from './routes/AppRouter' // Asegúrate de que la ruta sea correcta
import Layout from './layouts/Layout'
import { AdminAuthProvider } from './contexts/AdminAuthContext'
import { AuthProvider } from './contexts/AuthContext'
import { GenreProvider } from './contexts/GenreContext'
import { ReleaseProvider } from './contexts/ReleaseContext'
import { ArtistProvider } from './contexts/ArtistContext'
import './i18n'

const App = () => {
    return (
        <div data-testid="app">
            <AdminAuthProvider >
                <AuthProvider>
                    <ArtistProvider>
                        <ReleaseProvider data-testid="release-provider">
                    <GenreProvider data-testid="genre-provider">
                                {/* <LanguageProvider > */}
                                    <Layout data-testid="layout">
                                        <AppRouter data-testid="app-router" />
                                    </Layout>
                                {/* </LanguageProvider> */}
                    </GenreProvider>
                        </ReleaseProvider>
                    </ArtistProvider>
                </AuthProvider>
            </AdminAuthProvider>
            {/* </AdminAuthProvider> */}
        </div>
    )
}

export default App
