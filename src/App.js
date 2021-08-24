import { useRoutes } from "react-router"
import Navbar from './components/Navbar/Navbar'
import GlobalStyles from './globalStyles'
import Account from "./views/Account/Account"
import Home from "./views/Home/Home"
import Offers from "./views/Offers/Offers"
import Order from "./views/Order/Order"
import Reorder from "./views/Reorder/Reorder"

const routes = [
  {path: '/', element: <Home />},
  {path: '/order', element: <Order />},
  {path: '/offers', element: <Offers />},
  {path: '/reorder', element: <Reorder />},
  {path: '/account', element: <Account />},
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
