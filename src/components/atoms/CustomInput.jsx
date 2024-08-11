import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
    Box,
    IconButton,
    InputAdornment,
    InputBase,
    Paper,
    Typography,
} from '@mui/material'
<<<<<<< HEAD
import { colors } from '../theme'
=======
import { colors } from '/src/theme'
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
import PropTypes from 'prop-types'

// eslint-disable-next-line react/display-name
const CustomInput = React.forwardRef(
    (
        { isIconActive = true, label = '', placeholder = '', type = 'text', id = '', name = '', onChange = () => { } },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false)

        const togglePasswordVisibility = () => {
            setShowPassword((prev) => !prev)
        }

        return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mb={2}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    width="100%"
                >
                    <Typography color="white" pb={1} textAlign="center">
                        {label}
                    </Typography>
                    <InputBase
                        fullWidth
                        type={
                            type === 'password'
                                ? showPassword
                                    ? 'text'
                                    : 'password'
                                : type
                        }
                        placeholder={placeholder}
                        id={id}
                        name={name}
                        onChange={onChange}
                        inputRef={ref}
                        sx={{
                            bgcolor: colors.input[500],
                            p: 1,
                            borderRadius: '5px',
                        }}
                        endAdornment={
                            type === 'password' &&
                            isIconActive && (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={togglePasswordVisibility}
                                        onMouseDown={(event) =>
                                            event.preventDefault()
                                        }
                                        edge="end"
                                    >
<<<<<<< HEAD
                                        {showPassword
? (
                                            <VisibilityOff />
                                        )
: (
=======
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    />
                </Box>
            </Box>
        )
    }
)

CustomInput.propTypes = {
    isIconActive: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
}

<<<<<<< HEAD
=======

>>>>>>> 8bdbd8a2f72f04acc13eaae10f9f32042ff8ae96
export default CustomInput
