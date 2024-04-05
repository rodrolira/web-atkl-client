/* eslint-disable no-unused-vars */

import React from 'react'
import { useParams } from 'react-router-dom'
import Releases from './Releases'
import Title from '../atoms/Title'
import PropTypes from 'prop-types'
import { useLanguage } from '../../contexts/LanguageContext' // Importa el hook useLanguage

function ArtistDetail ({ artistsData, currentAdminUser }) {
  ArtistDetail.propTypes = {
    artistsData: PropTypes.array.isRequired,
    currentAdminUser: PropTypes.object.isRequired
  }

  const { id } = useParams()
  if (id === undefined) {
    return <div>Error: No se proporcionó un ID válido</div>
  }

  // Busca el artista correspondiente en los datos de los artistas
  const artist = artistsData.find(artist => artist.id === parseInt(id))

  if (!artist) {
    return <div>Error: No se encontró el artista con ID {id}</div>
  }

  const { language } = useLanguage() // Obtiene el estado del idioma desde el contexto

  return (
    <div className='inline-block w-full mt-32'>
      <div></div>
      {/* Botón de edición */}
      {currentAdminUser && (
        <a
          href={`/artists/${artist.id}/edit`}
          className='mx-auto text-white bg-blue-600 rounded-full py-2 px-4 mt-4 inline-block font-medium cursor-pointer'
        >
          {language === 'en' ? 'Edit Artist' : 'Editar Artista'}
        </a>
      )}

      <div className='flex mt-12'>
        {/* Sección de información básica del artista */}
        <div className='w-1/3 p-4 border-r text-center text-white'>
          <h1 className='text-2xl font-bold mb-2'>{artist.name}</h1>

          {/* Mostrar la imagen del artista */}
          <img
            className='rounded-t-lg'
            src='/img/avatar.jpg'
            alt={artist.name}
          />
          <p className='mb-2 uppercase'>{artist.role}</p>
          {/* Iconos de redes sociales aquí */}
        </div>

        {/* Sección de biografía y releases del artista */}
        <div className='w-2/3 p-4 text-white text-center'>
          <Title>{language === 'en' ? 'Biography' : 'Biografía'}</Title>
          <p className='text-white'>
            {artist.bio ||
              (language === 'en'
                ? 'No information available'
                : 'No hay información disponible')}
          </p>

          {artist.releases ? (
            artist.releases.map(release => (
              <div key={release.id} className='mb-4'>
                {/* Renderiza cada release */}
                <Releases />
              </div>
            ))
          ) : (
            <p>
              {language === 'en'
                ? 'No releases available'
                : 'No hay releases disponibles'}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArtistDetail
