function Form() {
  return (
    <section>
      <form className="form">
        <fieldset className="form__fieldset">
          <label className="form__label">Введите артикул</label>
          <input
            className="form__input"
            type="text"
            id="search"
            name="search"
            placeholder="article"
          />
          <div className="form__container">
            <button
              className="form__btn"
              type="submit"
              aria-label="yes">
              Да
            </button>
            <button
              className="form__btn"
              type="submit"
              aria-label="no">
              Нет
            </button>
            <button
              className="form__btn"
              type="submit"
              aria-label="put__aside">
              Отложить
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Form;
