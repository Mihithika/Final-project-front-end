import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminDashboard from './components/DashboardAdmin/AdminDashboard.tsx';
import CreateTicket from './components/CreateTicket/CreateTicket.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTicket /> ,
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
