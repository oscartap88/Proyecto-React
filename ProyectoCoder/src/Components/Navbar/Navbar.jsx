
import CartWidget from './CartWidget/CartWidget';
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.navUno}>
            <p>Articulos</p>
            <p>Promo</p>
            <p>Crea tu cuenta</p>
            <p>Ingresa</p>
            <p>Mis Compras</p>
            <CartWidget />
    </nav>
  )
};

export default Navbar
