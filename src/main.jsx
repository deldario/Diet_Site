import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormAddFood from './components/FormAddFood.jsx';
import FormAddClient from './components/FormAddClient.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/vClient",
    element: ""
  },
  {
    path: "/aClient",
    element: <FormAddClient></FormAddClient>
  },
  {
    path: "/dClient",
    element: ""
  },
  {
    path: "/vFood",
    element: ""
  },
  {
    path: "/aFood",
    element: <FormAddFood></FormAddFood>
  },
  {
    path: "/dFood",
    element: ""
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
    
  </React.StrictMode>
);
