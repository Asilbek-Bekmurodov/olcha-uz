import Product from "./product";

const Products = ({ productsData }) => {
  return (
    <div className="products-container">
      {productsData.map((productData) => (
        <Product key={productData.id} productData={productData} />
      ))}
    </div>
  );
};

export default Products;
