// routes/AppRouter.jsx

import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/pages/Home'
import AdminDashboard from '../components/pages/Admin/AdminDashboard'
import EditReleaseModal from '../components/pages/Release/EditReleaseModal'
import EditArtist from '../components/pages/Artist/EditArtist'
import ReleasesPage from '../components/pages/ReleasesPage'
import ArtistsPage from '../components/pages/Artist/ArtistsPage'
import ArtistPage from '../components/pages/Artist/ArtistPage'
import LoginAdminPage from '../components/pages/LoginAdminPage'
import NotFound from '../components/pages/NotFound'
import AdminRoutes from './AdminRoutes'
import { useAdminAuth } from '../contexts/AdminAuthContext'

const AppRouter = () => {
    const { isAuthenticated: adminAuthenticated } = useAdminAuth()
    return (
        <div data-testid="app-router">
            <Routes>
                {/* Public Routes */}
                <Route path='/' element={<Home />} />
                <Route path='/releases' element={<ReleasesPage />} />
                <Route path='/artists' element={<ArtistsPage />} />
                <Route path='/artists/:id' element={<ArtistPage />} />
                {/* <Route path='/login' element={<LoginArtistPage />} /> */}

                <Route
                    path='/admin/login'
                    element={adminAuthenticated ? <Navigate to='/admin' /> : <LoginAdminPage />}
                />

                {/* Admin Routes */}
                <Route element={<AdminRoutes />}>
                    <Route path='/admin' element={adminAuthenticated ? <AdminDashboard /> : <Navigate to='/admin/login' />} />
                    <Route path='/edit-release/:id' element={<EditReleaseModal />} />
                    <Route path='/artists/:id/edit' element={<EditArtist />} />
                </Route>

                {/* Redirect to NotFound for unknown paths */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default AppRouter
