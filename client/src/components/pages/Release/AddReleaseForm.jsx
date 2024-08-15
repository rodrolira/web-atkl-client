import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useReleases } from '../../../contexts/ReleaseContext'
import { useArtists } from '../../../contexts/ArtistContext'
import { useGenres } from '../../../contexts/GenreContext'
import FileUploadRelease from '../../molecules/FileUploadRelease'
import { Button } from 'flowbite-react'
import { createReleaseRequest } from '../../../api/releases'
import { useTranslation } from 'react-i18next'

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    release_date: Yup.date().required('Release date is required'),
    genre_id: Yup.number().required('Genre is required'),
    release_type: Yup.string().required('Release type is required'),
    artist_id: Yup.array().of(Yup.number()).min(1, 'At least one artist is required'),
    bandcamp_link: Yup.string(),
    beatport_link: Yup.string(),
    spotify_link: Yup.string(),
    apple_music_link: Yup.string(),
    youtube_link: Yup.string(),
    soundcloud_link: Yup.string(),
    cover_image_url: Yup.mixed(),
    description: Yup.string(),
})

const AddReleaseForm = ({ onReleaseAdded }) => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(null)
    const { createRelease } = useReleases()
    const { artists, fetchArtists } = useArtists()
    const { genres, fetchGenres } = useGenres()

    const openPopup = () => setOpen(true)
    const closePopup = () => setOpen(false)

    const onSubmit = async (values, actions) => {
        const formData = new FormData()
        Object.keys(values).forEach(key => {
            if (Array.isArray(values[key])) {
                values[key].forEach((value, index) => {
                    formData.append(`${key}[${index}]`, value)
                })
            } else if (values[key] instanceof File) {
                formData.append(key, values[key])
            } else {
                formData.append(key, values[key])
            }
        })

        try {
            const newRelease = await createReleaseRequest(formData)
            actions.setSubmitting(false)
            closePopup()
            onReleaseAdded && onReleaseAdded(newRelease)
        } catch (error) {
            console.error('Error adding release:', error)
            setError('Failed to add release')
            actions.setSubmitting(false)
        }
    }

    useEffect(() => {
        fetchArtists()
        fetchGenres()
    }, [fetchArtists, fetchGenres])

    return (
        <>
            <Button color='success' onClick={openPopup} className="mx-auto" variant="contained">
                Add Release
            </Button>
            <Dialog
                open={open}
                onClose={closePopup}
                fullWidth
                maxWidth="sm"
                PaperProps={{
                    sx: {
                        borderRadius: '0px',
                        margin: '0',
                        display: 'inline-flex',
                        flexDirection: 'column',
                        position: 'relative',
                        float: 'right',
                    },
                }}
                scroll="body"
            >
                <DialogTitle style={{ textAlign: 'center' }}>
                    {t('Add Release')}
                    <IconButton style={{ float: 'right' }} onClick={closePopup}>
                        <CloseIcon color='error' />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{
                            title: '',
                            release_date: '',
                            genre_id: '',
                            release_type: '',
                            artist_id: [],
                            bandcamp_link: '',
                            beatport_link: '',
                            spotify_link: '',
                            apple_music_link: '',
                            youtube_link: '',
                            soundcloud_link: '',
                            cover_image_url: '',
                            description: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isSubmitting, setFieldValue, values }) => (
                            <Form>
                                <Stack spacing={2} margin={2}>
                                    <Field name="title">
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                label="Title"
                                                variant="outlined"
                                                error={form.errors.title && form.touched.title}
                                                helperText={form.errors.title && form.touched.title && form.errors.title}
                                            />
                                        )}
                                    </Field>
                                    <Field name="release_date">
                                        {({ field, form }) => (
                                            <TextField
                                                {...field}
                                                variant="outlined"
                                                type="date"
                                                error={form.errors.release_date && form.touched.release_date}
                                                helperText={form.errors.release_date && form.touched.release_date && form.errors.release_date}
                                            />
                                        )}
                                    </Field>
                                    <FormControl fullWidth variant='outlined'>
                                        <InputLabel>Genre</InputLabel>
                                        <Field name='genre_id'>
                                            {({ field, form }) => (
                                                <Select
                                                    {...field}
                                                    label="Genre"
                                                    onChange={(e) => setFieldValue('genre_id', e.target.value)}
                                                    value={values.genre_id}
                                                    error={form.errors.genre_id && form.touched.genre_id}
                                                >
                                                    {genres.map((genre) => (
                                                        <MenuItem key={genre.id} value={genre.id}>
                                                            {genre.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        </Field>
                                    </FormControl>
                                    <FormControl fullWidth variant='outlined'>
                                        <InputLabel>Artist</InputLabel>
                                        <Field name='artist_id'>
                                            {({ field, form }) => (
                                                <Select
                                                    {...field}
                                                    multiple
                                                    label="Artist"
                                                    value={values.artist_id}
                                                    onChange={(e) => setFieldValue('artist_id', e.target.value)}
                                                    renderValue={(selected) => (
                                                        <div>
                                                            {selected.map(id => (
                                                                <div key={id}>
                                                                    {artists.find(artist => artist.id === id)?.artist_name}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                    error={Boolean(form.errors.artist_id && form.touched.artist_id)}
                                                >
                                                    {artists.map((artist) => (
                                                        <MenuItem key={artist.id} value={artist.id}>
                                                            {artist.artist_name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            )}
                                        </Field>
                                    </FormControl>
                                    <FileUploadRelease />
                                    <Field name="description">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                label="Description"
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                            />
                                        )}
                                    </Field>
                                    <Field name="bandcamp_link">
                                        {({ field }) => (
                                            <TextField {...field} label="Bandcamp Link" variant="outlined" />
                                        )}
                                    </Field>
                                    <Field name="beatport_link">
                                        {({ field }) => (
                                            <TextField {...field} label="Beatport Link" variant="outlined" />
                                        )}
                                    </Field>
                                    <Field name="spotify_link">
                                        {({ field }) => (
                                            <TextField {...field} label="Spotify Link" variant="outlined" />
                                        )}
                                    </Field>
                                    <Field name="apple_music_link">
                                        {({ field }) => (
                                            <TextField {...field} label="Apple Music Link" variant="outlined" />
                                        )}
                                    </Field>
                                    <Field name="youtube_link">
                                        {({ field }) => (
                                            <TextField {...field} label="Youtube Link" variant="outlined" />
                                        )}
                                    </Field>
                                    <Field name="soundcloud_link">
                                        {({ field }) => (
                                            <TextField {...field} label="Soundcloud Link" variant="outlined" />
                                        )}
                                    </Field>
                                    <Button className="flex justify-center mx-auto" type="submit" variant="contained" color="success" disabled={isSubmitting}>
                                        {isSubmitting ? 'Adding...' : 'Add'}
                                    </Button>
                                    {error && <div style={{ color: 'red' }}>{error}</div>}
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddReleaseForm
