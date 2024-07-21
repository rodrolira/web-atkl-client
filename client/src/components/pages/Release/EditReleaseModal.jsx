import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from '../../atoms/Button'
import FileUploadRelease from '../../molecules/FileUploadRelease'
import { useArtists } from '../../../contexts/ArtistContext'
import { useGenres } from '../../../contexts/GenreContext'
import {
    getReleaseRequest
} from '../../../api/releases'
import { useReleases } from '../../../hooks/useReleases'
import { MenuItem, Stack, TextField } from '@mui/material'

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    artist: Yup.string().required('Artist is required'),
    cover_image_url: Yup.mixed(),
    release_date: Yup.date().required('Release Date is required'),
    description: Yup.string(),
    genre_id: Yup.string().required('Genre is required'),
    release_type: Yup.string(),
    bandcamp_link: Yup.string().url('Invalid URL'),
    beatport_link: Yup.string().url('Invalid URL'),
    spotify_link: Yup.string().url('Invalid URL'),
    apple_music_link: Yup.string().url('Invalid URL'),
    youtube_link: Yup.string().url('Invalid URL'),
    soundcloud_link: Yup.string().url('Invalid URL')
})

function EditReleaseModal({ id, onClose }) {
    const navigate = useNavigate()
    const [initialValues, setInitialValues] = useState({
        title: '',
        artist_id: [],
        cover_image_url: '',
        release_date: '',
        is_explicit: false,
        description: '',
        genre_id: '',
        release_type: '',
        bandcamp_link: '',
        beatport_link: '',
        spotify_link: '',
        apple_music_link: '',
        youtube_link: '',
        soundcloud_link: ''
    })

    const { updateRelease, deleteRelease } = useReleases()
    const { artists } = useArtists()
    const { genres } = useGenres()

    useEffect(() => {
        console.log('Release ID:', id)
        fetchRelease(id)
    }, [id])

    const fetchRelease = async release_id => {
        try {
            const response = await getReleaseRequest(release_id)
            setInitialValues(response.data)
        } catch (error) {
            console.error('Error fetching release:', error)
        }
    }

    const onSubmit = async (values, { setSubmitting }) => {
        const formData = new FormData()
        for (const key in values) {
            formData.append(key, values[key])
        }
        console.log('Submitting form with values:', values)

        try {
            await updateRelease(id, formData)
            onClose()
        } catch (error) {
            console.error('Error updating release:', error)
            setSubmitting(false)
        }
    }

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this release?')) {
            try {
                await deleteRelease(id)
                navigate('/releases')
            } catch (error) {
                console.error('Error deleting release:', error)
            }
        }
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <Formik
                initialValues={initialValues}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form className='w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center'>
                        <Stack spacing={2} margin={2}>

                            <h2 className='text-2xl mb-4 font-bold'>Edit Release</h2>
                            <div className='mb-4'>
                                <label
                                    htmlFor='title'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Title
                                </label>
                                <Field
                                    type='text'
                                    id='title'
                                    name='title'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Title'
                                    autoComplete='off'
                                    autoFocus
                                />
                                <ErrorMessage
                                    name='title'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <Field name="artist_id">
                                {({ field, form }) => (
                                    <TextField
                                        {...field}
                                        select
                                        label="Artist"
                                        variant="outlined"
                                        error={Boolean(form.errors.artist_id && form.touched.artist_id)}
                                        helperText={form.errors.artist_id && form.touched.artist_id && form.errors.artist_id}
                                        onChange={(e) => {
                                            const selectedIds = e.target.value
                                            setFieldValue('artist_id', selectedIds)
                                        }}
                                        SelectProps={{
                                            multiple: true,
                                            value: field.value || [],
                                            onChange: (e) => {
                                                const selectedIds = e.target.value
                                                setFieldValue('artist_id', selectedIds)
                                            },
                                            renderValue: (selected) => (
                                                <div>
                                                    {selected.map(id => (
                                                        <MenuItem key={id} value={id}>
                                                            {artists.find(artist => artist.id === id)?.artist_name}
                                                        </MenuItem>
                                                    ))}
                                                </div>
                                            )
                                        }}
                                    >
                                        {artists.map((artist) => (
                                            <MenuItem key={artist.id} value={artist.id}>
                                                {artist.artist_name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            </Field>
                            <div className='mb-4'>
                                <FileUploadRelease />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='release_date'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Release Date
                                </label>
                                <Field
                                    type='date'
                                    id='release_date'
                                    name='release_date'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                />
                                <ErrorMessage
                                    name='release_date'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='is_explicit'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Explicit Content
                                </label>
                                <Field
                                    type='checkbox'
                                    id='is_explicit'
                                    name='is_explicit'
                                    className='mr-2 leading-tight'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='description'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Description
                                </label>
                                <Field
                                    as='textarea'
                                    id='description'
                                    name='description'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Description'
                                />
                                <ErrorMessage
                                    name='description'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <Field name="genre_id" className="w-full">
                                {({ field, form }) => (
                                    <TextField
                                        {...field}
                                        select
                                        label="Genre"
                                        variant="outlined"
                                        error={form.errors.genre_id && form.touched.genre_id}
                                        helperText={form.errors.genre_id && form.touched.genre_id && form.errors.genre_id}
                                        onChange={(e) => setFieldValue('genre_id', e.target.value)}
                                    >
                                        {genres.map((genre) => (
                                            <MenuItem key={genre.id} value={genre.id}>
                                                {genre.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                            </Field>
                            <ErrorMessage
                                name='genre_id'
                                component='div'
                                className='text-red-500 text-sm mt-1'
                            />
                            <div className='mb-4'>
                                <label
                                    htmlFor='release_type'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Release Type
                                </label>
                                <Field
                                    as='select'
                                    id='release_type'
                                    name='release_type'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                >
                                    <option value=''>Select Release Type</option>
                                    {/* Add your release type options here */}
                                </Field>
                                <ErrorMessage
                                    name='release_type'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='bandcamp_link'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Bandcamp Link
                                </label>
                                <Field
                                    type='text'
                                    id='bandcamp_link'
                                    name='bandcamp_link'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Bandcamp Link'
                                />
                                <ErrorMessage
                                    name='bandcamp_link'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='beatport_link'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Beatport Link
                                </label>
                                <Field
                                    type='text'
                                    id='beatport_link'
                                    name='beatport_link'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Beatport Link'
                                />
                                <ErrorMessage
                                    name='beatport_link'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='spotify_link'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Spotify Link
                                </label>
                                <Field
                                    type='text'
                                    id='spotify_link'
                                    name='spotify_link'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Spotify Link'
                                />
                                <ErrorMessage
                                    name='spotify_link'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='apple_music_link'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    Apple Music Link
                                </label>
                                <Field
                                    type='text'
                                    id='apple_music_link'
                                    name='apple_music_link'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='Apple Music Link'
                                />
                                <ErrorMessage
                                    name='apple_music_link'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='youtube_link'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    YouTube Link
                                </label>
                                <Field
                                    type='text'
                                    id='youtube_link'
                                    name='youtube_link'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='YouTube Link'
                                />
                                <ErrorMessage
                                    name='youtube_link'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='soundcloud_link'
                                    className='block text-gray-700 font-bold mb-2'
                                >
                                    SoundCloud Link
                                </label>
                                <Field
                                    type='text'
                                    id='soundcloud_link'
                                    name='soundcloud_link'
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder='SoundCloud Link'
                                />
                                <ErrorMessage
                                    name='soundcloud_link'
                                    component='div'
                                    className='text-red-500 text-sm mt-1'
                                />
                            </div>
                            <div className='flex items-center justify-between'>
                                <Link
                                    type='button'
                                    onClick={onClose} // Cambia a navigate para cerrar el modal
                                    className='btn btn-cancel'
                                >
                                    Cancel
                                </Link>
                                <button
                                    type='submit'
                                    className='btn btn-save'
                                    disabled={isSubmitting}
                                >
                                    Save
                                </button>
                                <Button
                                    type='button'
                                    className='btn btn-delete'
                                    onClick={handleDelete}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default EditReleaseModal
