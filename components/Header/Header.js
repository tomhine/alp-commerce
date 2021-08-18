import useWindowSize from '../../hooks/useWindowSize';
import { HeartIcon, MenuIcon, SearchIcon, ShoppingBagIcon } from '../Icons/Icons';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.scss';

const Header = () => {
  const winWidth = useWindowSize().width;

  return (
    <header className={styles.header}>
      <Logo />
      {winWidth >= 1024 && <SearchBar />}
      <span className={styles.actions}>
        {winWidth < 768 && <SearchIcon />}
        {winWidth >= 768 && winWidth < 1024 && <SearchBar />}
        <HeartIcon />
        <ShoppingBagIcon />
        <MenuIcon />
      </span>
    </header>
  );
};

export default Header;
