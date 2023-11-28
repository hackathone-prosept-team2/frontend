import Header from '../Header/Header.jsx';
import List from './List/List.jsx';
import Card from './Card/Card.jsx';
import Form from './Form/Form.jsx';

function Main() {
  return (
    <>
      <Header/>
      <main className="main">
        <Form/>
        <section className="main__container">
          <List/>
          <Card/>
        </section>
      </main>
    </>

  )
}

export default Main;
