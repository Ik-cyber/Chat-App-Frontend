import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home"
import Chat from "./components/Chat"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "chat",
    element: <Chat/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
