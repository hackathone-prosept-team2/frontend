import { Link } from "react-router-dom";

function ProductID() {

  // ручка api/v1/products/{id}
  return (
    <section className="productID">
      <h2 className="productID__title">Данные о товаре</h2>
      <div className="productID__container">
        <Link to='/' className="productID__subtitle">
          Название
        </Link>
        <p className="productID__text">ID</p>
        <p className="productID__text">name_1C</p>
        <p className="productID__text">article</p>
        <p className="productID__text">cost</p>
        <p className="productID__text">recommended price</p>
        <p className="productID__text">category id</p>
        <p className="productID__text">name</p>
        <p className="productID__text">ean_13</p>
      </div>
    </section>
  )
}

export default ProductID;
