import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './components/Index'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index/>
    },
  ])
  return (
    <>
      <RouterProvider router ={router}/>
    </>
  )
}

export default App
