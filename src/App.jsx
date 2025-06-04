

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import Home from './Components/Home/Home'
import CarDetails from './Components/CarDetails/CarDetails'
import AllVeichal from './Components/AllVeichal/AllVeichal'

function App() {
  const routes=createBrowserRouter(
  [
    {
      path:'/', element: <MasterLayout/>,
      children:[
        {index:true , element: <Home/>},
        {path:'home' , element: <Home/>},
        {path:'details' , element:<CarDetails/>},
        {path:'all-veichal' , element:<AllVeichal/>},
      ]
    }
  ])

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
