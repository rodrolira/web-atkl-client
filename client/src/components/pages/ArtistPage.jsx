//ArtistPage.jsx

import React, { Suspense } from 'react' // Importa React y Suspense
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useLanguage } from '../../contexts/LanguageContext'
import Title from '../atoms/Title'
const ReleasesPage = React.lazy(() => import('./ReleasesPage'))

// Importa Releases usando importación dinámica

function ArtistPage ({ artistsData, currentAdminUser }) {
  const { id } = useParams()
  if (id === undefined) {
    return <div>Error: No se proporcionó un ID válido</div>
  }

  const artist = artistsData.find(artist => artist.id === parseInt(id))

  if (!artist) {
    return <div>Error: No se encontró el artista con ID {id}</div>
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language } = useLanguage()

  return (
    <div className='inline-block w-full mt-32'>
      <div></div>
      {currentAdminUser && (
        <a
          href={`/artists/${artist.id}/edit`}
          className='mx-auto text-white bg-blue-600 rounded-full py-2 px-4 mt-4 inline-block font-medium cursor-pointer'
        >
          {language === 'en' ? 'Edit Artist' : 'Editar Artista'}
        </a>
      )}

      <div className='flex mt-12'>
        <div className='w-1/3 p-4 border-r text-center text-white'>
          <h1 className='text-2xl font-bold mb-2'>{artist.name}</h1>
          <img
            className='rounded-t-lg'
            src='../../assets/img/rodro.jpg'
            alt={artist.name}
          />
          <p className='mb-2 uppercase'>{artist.role}</p>
        </div>

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
                ;
                <Suspense fallback={<div>Loading...</div>}>
                  <ReleasesPage release={release} />
                </Suspense>
                {/* Pasa los datos del lanzamiento como propiedades */}
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
ArtistPage.propTypes = {
  artistsData: PropTypes.array.isRequired,
  currentAdminUser: PropTypes.object
}

export default ArtistPage
