import {Link} from "react-router-dom";

function Products() {

  // ручка api/v1/products/

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
      </div>
    </section>
  )
}

export default Products;
