//ReleasesPage.jsx

import React, { Suspense } from 'react' // Importa React y Suspense
import { useLanguage } from '../../contexts/LanguageContext'
import Button from '../atoms/Button'
import { useAdminAuth } from '../../contexts/AdminAuthContext'

// Importa ReleaseSection usando importación dinámica
const ReleaseSection = React.lazy(() => import('./Release/ReleasesSection'))
import Navbar from '../organisms/Navbar'

function ReleasesPage() {
    const { language } = useLanguage()
    const { isAdmin } = useAdminAuth()


    return (
        <div>
            <Navbar />
            <div className='sm:m-0 inline-block sm:mx-auto my-12 lg:my-16 sm:my-10 w-full'>
                <div className='flex items-center justify-between'>
                    <a href='/releases' className='mx-auto'></a>
                    {isAdmin && (
                        <Button
                            className='btn-add'
                            children={
                                language === 'en'
                                    ? 'Add Release'
                                    : 'Añadir Lanzamiento'
                            }
                        />
                    )}
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <ReleaseSection />{' '}
                    {/* Renderiza el componente ReleaseSection */}
                </Suspense>
            </div>
        </div>
    )
}

export default ReleasesPage
