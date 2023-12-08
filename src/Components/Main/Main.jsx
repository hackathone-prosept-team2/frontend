import { Dealers, DealersReport, Products, ProductID, Key, KeysMatched } from 'Components';

function Main() {

  // ручка api/v1/dealers + api/v1/dealers/{id}-переход по Link
  // ручка api/v1/dealers/report
  // ручка api/v1/products/
  // ручка api/v1/products/{id}
  // ручка api/v1/keys + api/v1/keys/{id}
  // ручка api/v1/keys/{id}/matches
  // ручка api/v1/keys/{id}/choose__match button yes
  // ручка api/v1/keys/{id}/decline__matched  button no

  return (
    <main className="main">
      <Dealers/>
      <DealersReport/>
      <Products/>
      <ProductID/>
      <Key/>
      <KeysMatched/>
    </main>
  )
}

export default Main;
