import MenuLink from '../MenuLink/index.jsx';
import styles from './Menu.module.css';

export default function Menu() {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to={'/'}>
                    Inicio
                </MenuLink>

                <MenuLink to={'/sobremim'}>
                    Sobre mim
                </MenuLink>

            </nav>
        </header>
    )
}