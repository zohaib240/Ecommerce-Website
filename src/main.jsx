

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import About from '/src/pages/About.jsx'
import Home from '/src/pages/Home.jsx'
import Services from '/src/pages/Services.jsx'
import Contact from '/src/pages/Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([

  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "service",
        element: <Services />
      },
      {
        path: "contact",
        element: <Contact />
      }
     
    ]
  }

])



createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

  

)

