import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useAdminAuth } from '../../../contexts/AdminAuthContext'
import Button from '../../atoms/Button'
import Modal from '../../atoms/Modal'
import EditArtistModal from './EditArtistModal'
import { useArtists } from '../../../contexts/ArtistContext'
import ArtistLinks from './ArtistLinks'
import { getArtistRequest } from '../../../api/artists'
import { useArtist } from '../../../hooks/useArtist'

const ArtistCard = ({ artist }) => {
    const [currentArtist, setCurrentArtist] = useState(artist)
    const { setArtists } = useArtists() // Obtener la función de eliminación del contexto
    const { deleteArtist } = useArtist()
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    const [showEditModal, setShowEditModal] = useState(false) // Estado para controlar la visibilidad del modal

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                const response = await getArtistRequest(artist.id)
                setCurrentArtist(response.data)
            } catch (error) {
                console.error('Error fetching artist:', error)
            }
        }

        fetchArtist()
    }, [artist.id])

    const handleDelete = async () => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar al artista ${artist.artist_name}?`)) {
            try {
                await deleteArtist(artist.id)
                setArtists(prevArtists => prevArtists.filter(a => a.id !== artist.id))
            } catch (error) {
                console.error('Error deleting artist:', error)
            }
        }
    }

    const openEditModal = () => {
        setShowEditModal(true)
    }

    const closeEditModal = () => {
        setShowEditModal(false)
        // Fetch artist again to get updated data
        const fetchArtist = async () => {
            try {
                const response = await getArtistRequest(currentArtist.id)
                setCurrentArtist(response.data)
            } catch (error) {
                console.error('Error fetching artist:', error)
            }
        }
        fetchArtist()
    }

    return (
        <>
            <div className='bg-black max-w-sm border border-gray-200 rounded-lg shadow dark:border-purple-500 relative'>
                <div className='w-full rounded-t-lg overflow-hidden relative'>

                    <Link to={`/artists/${currentArtist.id}`} className='block relative'>
                        <img
                            className='rounded-t-lg'
                            src={`http://localhost:3000/${currentArtist.image}`}
                            alt={currentArtist.artist_name}
                        />
                    </Link>

                    {adminAuthenticated && (
                        <div className='absolute top-2 right-2 flex space-x-2'>
                            <Button
                                aria-label='Edit Artist'
                                className='text-yellow-400 hover:text-yellow-500 text-xl'
                                onClick={openEditModal}
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </Button>

                            <Button
                                onClick={handleDelete}
                                aria-label='Delete Artist'
                                className='text-red-400 hover:text-red-500 text-xl'
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </div>
                    )}
                </div>

                <Link to={`/artists/${currentArtist.id}`} className='block relative'>
                    <h5 className='text-2xl font-bold tracking-tight text-white text-center'>
                        {currentArtist.artist_name}
                    </h5>
                </Link>
                <h4 className='mb-2 text-xl font-bold tracking-tight text-white text-center'>
                    {currentArtist.role}
                </h4>
                <ArtistLinks artist={currentArtist} />
            </div >
            {/* Modal de Edición del Artista */}
            {
                showEditModal && (
                    <Modal onClose={closeEditModal}>
                        <EditArtistModal id={currentArtist.id} onClose={closeEditModal} />
                    </Modal>
                )
            }
        </>
    )
}

ArtistCard.propTypes = {
    artist: PropTypes.shape({
        id: PropTypes.number.isRequired,
        artist_name: PropTypes.string.isRequired,
        image: PropTypes.string,
    }).isRequired,
}

export default ArtistCard
