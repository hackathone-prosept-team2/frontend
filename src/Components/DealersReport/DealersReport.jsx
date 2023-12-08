function DealersReport() {
  // ручка api/v1/dealers/report

  return (
    <section className="dealers-report">
      <h2 className="dealers__title">Дилер</h2>
      <div className="dealers__container">
        <ul className="dealers__subtitle">ID
          <li className="dealers__item">ID</li>
        </ul>
        <ul className="dealers__subtitle">Name
          <li className="dealers__item">Name</li>
        </ul>
        <ul className="dealers__subtitle">Total prices
          <li className="dealers__item">Total prices</li>
        </ul>
        <ul className="dealers__subtitle">Total keys
          <li className="dealers__item">Total keys</li>
        </ul>
        <ul className="dealers__subtitle">Keys with product
          <li className="dealers__item">Keys with product</li>
        </ul>
        <ul className="dealers__subtitle">Keys without product
          <li className="dealers__item">Keys without product</li>
        </ul>
        <ul className="dealers__subtitle">Confirmed matches
          <li className="dealers__item">Confirmed matches</li>
        </ul>
        <ul className="dealers__subtitle">To be checked
          <li className="dealers__item">To be checked</li>
        </ul>
        <ul className="dealers__subtitle">No matches
          <li className="dealers__item">No matches</li>
        </ul>
      </div>
    </section>
  )
}

export default DealersReport;
