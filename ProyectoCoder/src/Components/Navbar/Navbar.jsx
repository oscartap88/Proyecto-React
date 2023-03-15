
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.navUno}>
            <Link to ="/">
            <p>Home</p>
            </Link>
            <Link to="/products">
            <p>Catálogo</p>
            </Link>
            <p>Crea tu cuenta</p>
            <p>Ingresa</p>
            <p>Mis Compras</p>
            <Link to="/products">
            <CartWidget />
            </Link>
    </nav>
  )
};

export default Navbar
