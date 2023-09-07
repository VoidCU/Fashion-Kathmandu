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
  const newestItems = products
    .slice() // Create a copy to avoid modifying the original array
    .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
    .slice(1, 7);
  return (
    <>
      {products.length > 0 && <Hero featured={featured} />}
      <Benefits />
      <Topitems topitems={newestItems.slice(0, 3)} />
      <Newitems newestItems={newestItems} />
      <Category />
    </>
  );
}

export default Homepage;
