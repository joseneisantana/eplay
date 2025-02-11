import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidade</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoção</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0- produtos(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
