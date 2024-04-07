import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ to, text, isActive, onClick }) => {
  const [isActiveLink, setIsActiveLink] = useState(isActive)

  const handleClick = event => {
    event.preventDefault() // Evita que la ruta del navegador cambie al hacer clic en el enlace
    setIsActiveLink(true) // Establece el enlace actual como activo
    onClick() // Llama a la función onClick proporcionada desde el padre
  }

  return (
    <li>
      <Link
        className={`block lg:text-xl md:text-sm rounded ${
          isActive ? 'text-red-700' : 'text-white'
        } hover:bg-gray-700 hover:text-red-600 md:hover:bg-transparent border-gray-700`}
        aria-current={isActive ? 'page' : undefined}
        data-controller='scroll-to'
        to={to}
        onClick={onClick}
      >
        {text}
      </Link>
    </li>
  )
}

export default NavItem
