import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './components/Index'
import About from './components/About'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index/>
    },
    {
      path: '/about',
      element: <About/>
    }
  ])
  return (
    <>
      <RouterProvider router ={router}/>
    </>
  )
}

export default App
