import prosept from "../../../image/prosept.svg";

function Card() {
  return (
    <section className="card">
      <h2 className="card__title">Данные о товаре</h2>
      <div className="card__container">
        <h3 className="card__subtitle">PROSEPT огнебиозащита для древесины с цветовой индикацией. Высшая (1-ая) группа, 20л.</h3>
        <img
          className="card__image"
          src={prosept}
          alt="card__img"
        />
        <p className="card__price">3029 ₽</p>
      </div>
    </section>
  )
}

export default Card;
