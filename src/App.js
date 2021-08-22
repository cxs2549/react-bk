import { useRoutes } from "react-router"
import Navbar from './components/Navbar/Navbar'
import GlobalStyles from './globalStyles'
import Home from "./views/Home/Home"

const routes = [
  {path: '/', element: <Home />}
]

const App = () => {
  const element = useRoutes(routes)
  return (
    <>
    <GlobalStyles />
      <Navbar />
      <main>
        {element}
      </main>
    </>
  )
}

export default App
