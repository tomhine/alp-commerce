import { SearchIcon } from '../Icons/Icons';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles.searchContainer}>
      <form>
        <input type="text" />
      </form>
      <SearchIcon color="#333" />
    </div>
  );
};

export default SearchBar;
