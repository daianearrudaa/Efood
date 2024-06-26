import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import RestaurantPage from './pages/RestaurantPage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<RestaurantPage />} />
  </Routes>
)

export default Rotas
