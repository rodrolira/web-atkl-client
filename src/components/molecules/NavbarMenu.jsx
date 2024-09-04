import React from 'react'
import LanguageMenu from './LanguageMenu'
import DemoButton from './DemoButton'
import NavbarLinks from './NavbarLinks'
import { useLanguage } from '../../contexts/LanguageContext'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import Button from '../atoms/Button'
import AddArtistButton from './AddArtistButton'
import AddReleaseButton from './AddReleaseButton'
import AdminLogoutButton from './AdminLogoutButton'

function NavbarMenu() {
    const { language } = useLanguage()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()

    return (
        <div className='md:flex lg:block md:flex-row-reverse md:justify-around md:items-center w-full'>
            <div className='flex items-center justify-end h-[50%]'>
                <div className='z-10 flex divide-y rounded-lg text-center '>
                    <ul
                        className='py-2 text-sm  flex text-white dark:text-white sm:font-normal'
                        aria-labelledby='dropdownHoverButton'
                    >
                        {adminAuthenticated && (
                            <>
                                <li className='mx-1'>
                                    <AddArtistButton className='!capitalize'>
                                        {language === 'en'
                                            ? 'Add Artist'
                                            : 'Agregar Artista'}
                                    </AddArtistButton>
                                </li>
                                <li className='mx-1'>
                                    <AddReleaseButton className='btn-add'>
                                        {language === 'en'
                                            ? 'Add Release'
                                            : 'Agregar Lanzamiento'}
                                    </AddReleaseButton>
                                </li>
                                <li>
                                    <Button href='/admin' className='mx-auto flex justify-center' colorClass='bg-[#22581d] text-white'>
                                        {language === 'en'
                                            ? 'Admin Dashboard'
                                            : 'Panel de Administrador'}
                                    </Button>
                                </li>
                            </>
                        )}
                        {!adminAuthenticated && (
                            <li>
                                <DemoButton />
                            </li>
                        )}
                        <LanguageMenu />
                        {adminAuthenticated && (
                            <li>
                                <AdminLogoutButton />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <NavbarLinks />
        </div>
    )
}

export default NavbarMenu
