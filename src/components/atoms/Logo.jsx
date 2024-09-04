// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Logo({ isAdminSignin }) {
  const logoClass = isAdminSignin
    ? 'rtl:space-x-reverse max-[320px]:mx-0 lg:block sm:hidden md:hidden sm:mx-auto h-full w-full'
    : 'rtl:space-x-reverse max-[320px]:mx-0 lg:block sm:hidden md:hidden sm:mx-auto h-full w-full'

  return (
    <a className={logoClass} href='/'>
      <img
        alt='ATKL Records logo'
        className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
        src='/img/main.png'
      />
    </a>
  )
}

export default Logo
