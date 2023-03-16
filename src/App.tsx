import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from "./src/routes/routes"
import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
