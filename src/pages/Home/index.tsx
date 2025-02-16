import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/starWars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['50% , R$ 299,90'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PS4',
    infos: ['30% , R$ 299,90'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Xbox One',
    infos: ['10% , R$ 299,90'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PlayStation 5',
    infos: ['20% , R$ 299,90'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RGP',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RGP',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Zelda',
    system: 'megadrive',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    category: 'RGP',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'star Wars',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    category: 'RGP',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'resident',
    system: 'Playstation 5',
    infos: ['17/05'],
    image: resident
  }
]
const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
