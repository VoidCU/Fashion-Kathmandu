import Hero from './Hero';
import Benefits from './Benefits';
import Topitems from './Topitems';
import Newitems from './Newitems';
import Category from './Category';
import { Helmet } from 'react-helmet-async';

import { useProducts } from '../../context/ProductsContext';

function Homepage() {
  const { products } = useProducts();
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
      <Helmet>
        <title>Fashion Kathmandu</title>
        <meta
          name="description"
          content="Nepal-based company making an honest effort to make a brand name on Nepalese hand tailored dress"
        />
        <meta property="og:image" content="images/webLogo.png" />
        <meta property="og:title" content="Fashion Kathmandu" />
        <meta
          property="og:description"
          content="Nepal-based company making an honest effort to make a brand name on Nepalese hand tailored dress"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fashion Kathmandu" />
        <meta name="twitter:image" content="images/webLogo.png" />
      </Helmet>
      {products.length > 0 && <Hero featured={featured} />}
      <Benefits />
      <Topitems topitems={randomTopItems} />
      <Newitems newestItems={newestItems} />
      <Category />
    </>
  );
}

export default Homepage;
