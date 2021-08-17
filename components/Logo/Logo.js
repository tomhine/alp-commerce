import styles from './Logo.module.scss';

const Logo = props => {
  return (
    <h1 className={styles.logo} style={{ color: props.color || '#fff' }}>
      alp
    </h1>
  );
};

export default Logo;
