import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/organisms/Footer'
import '../App.css'

const Layout = ({ children }) => {
    return (
        <div className='flex' data-testid="layout">
            <div className='layout'>
                <BrowserRouter>
                    {children}
                    <Footer />

                </BrowserRouter>

            </div>
        </div>
    )
}

export default Layout
