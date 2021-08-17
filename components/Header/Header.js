import { MenuIcon, SearchIcon, ShoppingBagIcon } from '../Icons/Icons';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <span className={styles.actions}>
        <SearchIcon color="#fff" />
        <ShoppingBagIcon color="#fff" />
        <MenuIcon color="#fff" />
      </span>
    </header>
  );
};

export default Header;
