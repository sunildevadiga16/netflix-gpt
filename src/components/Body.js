import React, { useEffect } from 'react';
import Login from '../components/Login';
import Browse from '../components/Browse';
import Error from '../components/Error';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path: '/error',
            element: <Error />
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body