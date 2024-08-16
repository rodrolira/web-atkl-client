import axios from './axios'

const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
        console.error('No token found in localStorage')
        return {}
    }
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    }
}

export const registerAdminRequest = (user) => axios.post('/admin/register', user)

export const loginAdminRequest = async (user) => {
    try {
        const response = await axios.post('/admin/login', user)
        console.log('Server response:', response.data) // Agrega este log para inspeccionar la respuesta

        const token = response.data.token
        if (token) {
            localStorage.setItem('token', token) // Almacena el token en el localStorage
        } else {
            console.error('No token received from server')
        }
        return response
    } catch (error) {
        console.error('Error during login request:', error)
        throw error
    }
}

export const verifyAdminTokenRequest = () => axios.get('/admin/verify')

export const logoutAdminRequest = () => axios.post('/admin/logout', {}, getAuthHeaders())
