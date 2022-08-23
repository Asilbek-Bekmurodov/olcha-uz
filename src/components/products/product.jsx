const Product = ({ productData }) => {
  return (
    <div className="product-container">
      <img src={productData.img} alt="" />
      <div className="card-bottom">
        <p>{productData.type}</p>
        <p>
          {productData.price} <b>сум</b>
        </p>
        <p>{productData.title}</p>
        <button className="btn btn-outline-dark py-2 ">Купить</button>
      </div>
    </div>
  );
};

export default Product;
