// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from '../atoms/Button'
import { useLanguage } from '../../contexts/LanguageContext'

const LoginButton = () => {
  const { language } = useLanguage()

  return (
    <div className='sm:h-full lg:h-[60%] xl:h-auto'>
      <Button
        href='/login'
        className='justify-center lg:text-sm md:text-xs sm:w-32 md:w-auto h-full md:font-normal lg:font-bold bg-red-600 hover:bg-red-700 focus:ring-4  focus:outline-none focus:ring-red-300 px-5 md:m-0 lg:mx-2 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 md:order-2'
        onClick={undefined}
      >
        {language === 'en' ? 'Artist Login' : 'Artist Login'}
      </Button>
    </div>
  )
}

export default LoginButton
