// import { createContext, useContext, useEffect, useState } from 'react'
// import Cookies from 'js-cookie'
// import {
//   registerRequest,
//   loginRequest,
//   verityTokenRequest
// } from '../api/adminAuth'

// export const AdminAuthContext = createContext()

// // eslint-disable-next-line react-refresh/only-export-components
// export const useAdminAuth = () => {
//   const context = useContext(AdminAuthContext)
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }

// // eslint-disable-next-line react/prop-types
// export const AdminAuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [errors, setErrors] = useState([])
//   const [loading, setLoading] = useState(true)

//   const signup = async user => {
//     try {
//       const res = await registerRequest(user)
//       console.log(res.data)
//       setUser(res.data)
//       setIsAuthenticated(true)
//     } catch (error) {
//       console.log(error.response)
//       setErrors(error.response.data)
//     }
//   }

//   const signin = async user => {
//     try {
//       const res = await loginRequest(user)
//       setUser(res.data)
//       setIsAuthenticated(true)
//       setErrors([]) // Reset errors on successful login
//     } catch (error) {
//       if (Array.isArray(error.response.data)) {
//         setErrors(error.response.data)
//       } else {
//         setErrors([error.response.data.message])
//       }
//     }
//   }

//   const logout = () => {
//     Cookies.remove('token')
//     setIsAuthenticated(false)
//     setUser(null)
//   }

//   useEffect(() => {
//     if (errors.length > 0) {
//       const timer = setTimeout(() => {
//         setErrors([])
//       }, 5000)
//       return () => clearTimeout(timer)
//     }
//   }, [errors])

//   useEffect(() => {
//     async function checkAdminLogin () {
//       const cookies = Cookies.get()

//       if (!cookies.token) {
//         setIsAuthenticated(false)
//         setLoading(false)
//         return setUser(null)
//       }

//       try {
//         const res = await verityTokenRequest(cookies.token)
//         if (!res.data) {
//           setIsAuthenticated(false)
//           setLoading(false)
//           return
//         }

//         setIsAuthenticated(true)
//         setUser(res.data)
//         setLoading(false)
//       } catch (error) {
//         setIsAuthenticated(false)
//         setUser(null)
//         setLoading(false)
//       }
//     }
//     checkAdminLogin()
//   }, [])

//   return (
//     <AdminAuthContext.Provider
//       value={{
//         signup,
//         signin,
//         logout,
//         loading,
//         user,
//         isAuthenticated,
//         errors
//       }}
//     >
//       {children}
//     </AdminAuthContext.Provider>
//   )
// }
