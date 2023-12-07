function KeysMatched() {

  // ручка api/v1/keys/{id}/matches
  // ручка api/v1/keys/{id}/choose__match button yes
  // ручка api/v1/keys/{id}/decline__matched  button no


  return (
    <section className="keysMatched">
      <h2 className="productID__title">keysMatched</h2>
      <p className="productID__text">ID</p>
      <p className="productID__text">product</p>
      <p className="productID__text">metrics</p>
      <p className="productID__text">status</p>
      <div className="keys__container">
        <button
          className="btn keys__container-btn"
          type="submit"
          aria-label="yes">
          Да
        </button>
        <button
          className="btn keys__container-btn"
          type="submit"
          aria-label="no">
          Нет
        </button>
      </div>
    </section>
  )
}

export default KeysMatched;
