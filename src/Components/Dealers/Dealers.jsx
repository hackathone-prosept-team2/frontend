import {Link} from "react-router-dom";

// ручка api/v1/dealers + api/v1/dealers/{id}-переход по Link

function Dealers() {
  return (
    <section className="dealers">
      <h2 className="dealers__title">Дилеры</h2>
      <div className="dealers__container">
        <ul className="dealers__subtitle">ID
          <li className="dealers__item">
            <Link to='/' className="dealers__link">
              ozon
            </Link>
          </li>
        </ul>
        <ul className="dealers__subtitle">Дилер
          <li className="dealers__item">
            <Link to='/' className="dealers__link">
              article
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Dealers;
