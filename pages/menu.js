const Menu = ({ categories }) => {
  const links = categories.map(cat => <li key={cat}>{cat}</li>);

  return (
    <div>
      <h2>Menu</h2>
      <ul>{links}</ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json();

  return {
    props: {
      categories: categories.reverse(),
    },
  };
};

export default Menu;
