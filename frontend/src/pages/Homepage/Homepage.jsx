import Hero from './Hero';
import Benefits from './Benefits';
import Topitems from './Topitems';
import Newitems from './Newitems';
import Category from './Category';

import { useProducts } from '../../context/ProductsContext';

function Homepage() {
  const { products } = useProducts();
  // console.log(products[0]);
  const featured = products.slice(0, 1);
  const filteredProducts = products.slice(1).filter((x) => x.inStock);
  const shuffledProducts = [...filteredProducts]; // Create a copy and exclude the first product
  for (let i = shuffledProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledProducts[i], shuffledProducts[j]] = [
      shuffledProducts[j],
      shuffledProducts[i],
    ];
  }
  const randomTopItems = shuffledProducts.slice(0, 3);
  const newestItems = filteredProducts.slice(0, 6);
  return (
    <>
      {products.length > 0 && <Hero featured={featured} />}
      <Benefits />
      <Topitems topitems={randomTopItems} />
      <Newitems newestItems={newestItems} />
      <Category />
    </>
  );
}

export default Homepage;
