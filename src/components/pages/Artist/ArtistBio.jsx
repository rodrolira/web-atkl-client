// ArtistBio.jsx
import React from 'react'
import Title from '../../atoms/Title'

const ArtistBio = ({ artist, language }) => {
    return (
        <>
            <Title >
                {language === 'en' ? 'Biography' : 'Biografía'}
            </Title>

            <p className='text-white'>
                {artist && artist.bio
                    ? artist.bio
                    : (language === 'en'
                        ? 'No information available'
                        : 'No hay información disponible')}
            </p></>
    )
}

export default ArtistBio
