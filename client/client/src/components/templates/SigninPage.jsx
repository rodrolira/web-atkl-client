/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react' // Importa React y useEffect
import { useLanguage } from '../../contexts/LanguageContext' // Importa el hook useLanguage
import { Box, Button, Checkbox, colors, Typography } from '@mui/material'
import CustomInput from '../atoms/CustomInput'
import Logo from '../atoms/Logo'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../../contexts/AuthContext'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useNavigate } from 'react-router-dom'

function SigninPage() {
    const { language } = useLanguage() // Usa el hook para obtener language
    const { signin, isAuthenticated, errors: signinErrors } = useAuth() // Obtener la función signin del contexto de autenticación de artistas
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/') // Navigate to the home page on successful login
        }
    }, [isAuthenticated, navigate])

    // Define validation schema using Yup
    const validationSchema = Yup.object({
        username: Yup.string().required('El nombre de usuario es requerido'),
        password: Yup.string().required('La contraseña es requerida'),
    })

    // Validacion del Form
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            await signin(values)
            if (isAuthenticated) {
                navigate('/') // Navigate to the home page on successful login
            }
        },
    })

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Grid
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                minHeight={550}
                sx={{
                    boxShadow: {
                        xs: '',
                        sm: '',
                        md: '15px 2px 5px -5px',
                        lg: '15px 2px 5px -5px',
                        xl: '15px 2px 5px -5px',
                    },
                    marginTop: {
                        xs: '0px',
                        sm: '0px',
                        md: '100px',
                        lg: '100px',
                        xl: '100px',
                    },
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                        borderRadius: {
                            xs: '30px',
                            sm: '30px',
                            md: '30px 0 0 30px',
                            lg: '30px 0 0 30px',
                            xl: '30px 0 0 30px',
                        },
                    }}
                >
                    <Box width="80%">
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            {/* LOGO */}
                            <Box
                                sx={{
                                    mt: '60px',
                                    width: '150px',
                                    height: '150px',
                                    bgcolor: 'black',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Logo isAdminSignin={false} />
                            </Box>
                            {/* LOGO END */}

                            <Typography
                                color="white"
                                fontSize="24px"
                                fontWeight="bold"
                                mt={7}
                                mb={3}
                            >
                                {language === 'en'
                                    ? 'Sign in'
                                    : 'Inicia Sesión'}
                            </Typography>
                        </Box>

                        <div>
                            {/* FORM */}
                            <Box
                                component="form"
                                onSubmit={formik.handleSubmit}
                            >
                                <CustomInput
                                    type="text"
                                    label={
                                        language === 'en'
                                            ? 'Username'
                                            : 'Nombre de usuario'
                                    }
                                    placeholder={
                                        language === 'en'
                                            ? 'Enter your username...'
                                            : 'Ingrese su nombre de usuario...'
                                    }
                                    isIconActive={false}
                                    text-align="center"
                                    mx="auto"
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                    onBlur={formik.handleBlur}
                                    name="username"
                                    id="username"
                                />
                                {formik.touched.username &&
                                    formik.errors.username
                                    ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.username}</p>
                                        </div>
                                    )
                                    : null}

                                <CustomInput
                                    label={
                                        language === 'en'
                                            ? 'Password'
                                            : 'Contraseña'
                                    }
                                    placeholder={
                                        language === 'en'
                                            ? 'Enter your password...'
                                            : 'Ingrese su contraseña...'
                                    }
                                    type="password"
                                    isIconActive={true}
                                    text-align="center"
                                    mx="auto"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    name="password"
                                    id="password"
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password &&
                                    formik.errors.password
                                    ? (
                                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                                            <p className="font-bold">Error</p>
                                            <p>{formik.errors.password}</p>
                                        </div>
                                    )
                                    : null}

                                {/* BUTTON */}
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    justifyContent="space-between"
                                    mt={2}
                                    width="100%"
                                    color="white"
                                >
                                    <div style={{ display: 'flex' }}>
                                        <Checkbox
                                            disableRipple
                                            sx={{ p: 0, pr: 1 }}
                                        />
                                        <Typography>
                                            {language === 'en'
                                                ? 'Remember me'
                                                : 'Recuérdame'}
                                        </Typography>
                                    </div>
                                    <a
                                        href="#yoyo"
                                        style={{
                                            color: colors.green[500],
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {language === 'en'
                                            ? 'Forget password?'
                                            : '¿Olvidó su contraseña?'}
                                    </a>
                                </Box>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        mt: 4,
                                        mb: 4,
                                        boxShadow: `0 0 20px ${colors.green[500]}`,
                                    }}
                                    value="Login"
                                >
                                    {language === 'en'
                                        ? 'Login'
                                        : 'Iniciar Sesión'}
                                </Button>
                                {signinErrors && signinErrors.length > 0 && (
                                    <div>
                                        {signinErrors.map((error, index) => (
                                            <div
                                                className="text-red-900 font-bold mb-4 bg-red-200"
                                                key={index}
                                            >
                                                {error}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Box>
                            {/* FORM END */}
                        </div>
                    </Box>
                </Box>
            </Grid>
        </React.Suspense>
    )
}

export default SigninPage
