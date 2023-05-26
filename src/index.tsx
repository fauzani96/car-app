import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {SWRConfig} from 'swr'
import {fetcher} from './api'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './pages/error/Error.component'
import Home from './pages/home/Home.component'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <Home />},
      {
        path: 'cars',
        element: (
          <div>
            hello carz hello carzhello carzhello carzhello carzhello carz hello
            carz hello carz hello carz hello carz hello carz hello carz hello
            carz hello carz
          </div>
        ),
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
