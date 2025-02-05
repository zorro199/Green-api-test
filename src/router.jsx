import { createBrowserRouter, createHashRouter } from "react-router-dom";

import Login from './pages/login/Login'
import Chat from './pages/chat/Chat'

export const router = createHashRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/chat',
        element: <Chat />,
    },
])

export default router
