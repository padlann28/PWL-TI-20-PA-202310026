import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from '../Layouts/Layout'
import Home from '../Modules/Components/Homes/Home'
import Explore from '../Modules/Components/Explore/Explore'
import Messages from '../Modules/Components/Messages/Messages'
import Feeds from '../Modules/Components/Explore/widgets/Feeds'
import Reels from '../Modules/Components/Explore/widgets/Reels'
import FYP from '../Modules/Components/Explore/widgets/FYP'
import Profiles from '../Modules/Components/Profiles/Profiles'
import Login from '../login/Login'
import Error404 from '../Modules/Components/PesanError/Error404'

export default function AppRoute() {

    const domain = [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'home',
            element: <Home />,
        },
        {
            path: 'explore',
            element: <Explore />,
            subDomain: [
                {
                    path: 'feeds',
                    element: <Feeds />,
                },
                {
                    path: 'reels',
                    element: <Reels />,
                },
                {
                    path: 'fyp',
                    element: <FYP />,
                },
            ],
        },
        {
            path: 'messages',
            element: <Messages />,
        },
        {
            path: 'profile',
            element: <Profiles />,
        }
    ]


    return (
        <Routes>
            <Route index element={<Login />} />
            {domain.map(route => (
                <Route
                    path={route.path}
                    element={<Layouts>{route.element}</Layouts>}
                    >
                    {route.subDomain && route.subDomain.map(subRoute => (
                        <Route
                            path={subRoute.path}
                            element={subRoute.element}
                        />
                    ))}
                </Route>
            ))}
            <Route path='*' element={<Layouts><Error404 /></Layouts>} />
        </Routes >
    )
}

export { AppRoute };