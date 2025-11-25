import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './routes/Homepage/index.tsx';
import Error from './routes/Error/index.tsx';
import AboutJoaoHBL from './routes/AboutJoaoHBL/index.tsx';
import BuyMeACoffee from './routes/BuyMeACoffee/index.tsx';
const router = createBrowserRouter([
  {
    path:"/", element: <App/>, errorElement: <Error/>, children:[
      {path:"/home", element: <Home/>},
      {path:"/about", element: <AboutJoaoHBL/>},
      {path:"/buy-me-a-coffee", element: <BuyMeACoffee/>}
    ]}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
