import { Link } from 'react-router-dom';
function RelatedProduct({ relatedproducts }) {
  const related = relatedproducts;
  return (
    <div>
      <div className="font-bold text-xl text-center pb-4">Related Products</div>
      {related.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {related.map((product) => (
            <div
              key={product.id}
              className="flex flex-col  justify-center items-center border-gray-200 border-2 w-[90vw]  md:w-[300px] h-[175px] hover:bg-[#d9d9d9] hover:cursor-pointer hover:transition-transform duration-300 hover:border-0 hover:scale-105"
            >
              <Link to={`/product/${product.slug}`}>
                <div className="flex justify-center px-4 items-center border-gray-200 border-2 w-[90vw] rounded-md  md:w-[300px] h-[175px] hover:bg-[#d9d9d9] hover:cursor-pointer hover:transition-transform duration-300 hover:border-0 hover:scale-105">
                  <div className="min-w-[150px] md:w-[25%]">
                    <div>
                      <img
                        className=" rounded-md object-cover w-full max-h-[150px]"
                        src={`http://localhost:3000/files/${product.images}`}
                        alt={product.name}
                      />
                    </div>
                  </div>
                  <div className="min-w-[50%] p-2">
                    <div className="font-light text-sm">{product.category}</div>
                    <div className="font-bold text-xl pb-2">{product.name}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div key="noData">No related products</div>
      )}
    </div>
  );
}

export default RelatedProduct;
