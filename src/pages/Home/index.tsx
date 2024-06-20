import Restaurant from '../../components/models/Restaurants'

import imgStar from '../../assets/images/estrela.png'
import hioki from '../../assets/images/hioki.png'
import laDolce from '../../assets/images/laDolce.png'
import CardRestaurantList from '../../components/CardRestaurantList'
import { Cardapio } from '../RestaurantPage'
import { useEffect, useState } from 'react'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    category: 'Japonesa',
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: hioki,
    rating: 4.9,
    imgStar: imgStar,
    type: 'highlight'
  },
  {
    id: 2,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolce,
    rating: 4.6,
    imgStar: imgStar,
    type: 'no'
  },
  {
    id: 3,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolce,
    rating: 4.6,
    imgStar: imgStar,
    type: 'no'
  },
  {
    id: 4,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolce,
    rating: 4.6,
    imgStar: imgStar,
    type: 'no'
  },
  {
    id: 5,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolce,
    rating: 4.6,
    imgStar: imgStar,
    type: 'no'
  },
  {
    id: 6,
    category: 'Italiana',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: laDolce,
    rating: 4.6,
    imgStar: imgStar,
    type: 'no'
  }
]

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <CardRestaurantList restaurants={restaurantes} />
    </>
  )
}

export default Home
