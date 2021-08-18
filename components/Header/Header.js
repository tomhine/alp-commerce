import useWindowSize from '../../hooks/useWindowSize';
import { HeartIcon, MenuIcon, SearchIcon, ShoppingBagIcon } from '../Icons/Icons';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  const winWidth = useWindowSize().width;

  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      {winWidth >= 1024 && <SearchBar />}
      <span className={styles.actions}>
        {winWidth < 768 && <SearchIcon />}
        {winWidth >= 768 && winWidth < 1024 && <SearchBar />}
        <HeartIcon />
        <ShoppingBagIcon />
        <Link href="/menu">
          <a>
            <MenuIcon />
          </a>
        </Link>
      </span>
    </header>
  );
};

export default Header;
