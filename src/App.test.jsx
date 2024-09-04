import { render } from '@testing-library/react'
import { describe, it, expect } from '@jest/globals'
import App from './App'
import { LanguageProvider } from './contexts/LanguageContext'

describe('App', () => {
    // Renders the App component without crashing after importing the render function
    it('should render the App component without crashing', () => {
        const { container } = render(
            <LanguageProvider>
                <App />
            </LanguageProvider>
        )
        expect(container).toBeInTheDocument()
    })
})
