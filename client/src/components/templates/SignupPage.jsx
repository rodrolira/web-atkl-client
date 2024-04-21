import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Box, Button, Checkbox, colors, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import CustomInput from '../atoms/CustomInput'
import Logo from '../atoms/Logo'

const SignupPage = () => {
  const { language } = useLanguage()

  return (
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
          xl: '15px 2px 5px -5px'
        },
        marginTop: {
          xs: '0px',
          sm: '0px',
          md: '100px',
          lg: '100px',
          xl: '100px'
        }
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
            xl: '30px 0 0 30px'
          }
        }}
      >
        <Box width='80%'>
          <Box display='flex' flexDirection='column' alignItems='center'>
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
                justifyContent: 'center'
              }}
            >
              <Logo />
            </Box>
            {/* LOGO END */}

            <Typography
              color='white'
              fontSize='24px'
              fontWeight='bold'
              mt={7}
              mb={3}
            >
              {language === 'en' ? 'Sign up' : 'Regístrate'}
            </Typography>
          </Box>

                  {/* INPUTS */}
                  <CustomInput
                      label={language === 'en' ? 'Email' : 'Email'}
                      placeholder={
                          language === 'en'
                          ? 'Enter your email...'
                          : 'Ingrese su correo...'
                      }
                      />
          <CustomInput
            label={language === 'en' ? 'Username' : 'Nombre de usuario'}
            placeholder={
              language === 'en'
                ? 'Enter your username...'
                : 'Ingrese su nombre de usuario...'
            }
            isIconActive={false}
            textAlign='center'
            mx='auto'
          />
          <CustomInput
            label={language === 'en' ? 'Password' : 'Contraseña'}
            placeholder={
              language === 'en'
                ? 'Enter your password...'
                : 'Ingrese su contraseña...'
            }
            isIconActive={true}
          />
          <CustomInput
            label={
              language === 'en' ? 'Confirm Password' : 'Confirmar Contraseña'
            }
            placeholder={
              language === 'en'
                ? 'Confirm your password...'
                : 'Confirme su contraseña...'
            }
            isIconActive={true}
          />

          {/* INPUT END */}

          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            mt={2}
            width='100%'
            color='white'
          >
            <div style={{ display: 'flex' }}>
              <Checkbox disableRipple sx={{ p: 0, pr: 1 }} />
              <Typography>
                {language === 'en'
                  ? 'I agree to the terms and conditions'
                  : 'Acepto los términos y condiciones'}
              </Typography>
            </div>
          </Box>
          <Button
            variant='contained'
            fullWidth
            sx={{ mt: 4, mb: 4, boxShadow: `0 0 20px ${colors.green[500]}` }}
          >
            {language === 'en' ? 'Sign up' : 'Registrarse'}
          </Button>
        </Box>
      </Box>
    </Grid>
  )
}

export default SignupPage
