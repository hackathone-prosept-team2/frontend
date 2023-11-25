import { Link, useLocation } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

function Register() {
  const location = useLocation().pathname;

  return (
    <>
    <Header/>
      <section className="register">
        {location === '/users/create/' &&
          <>
            <h2 className="register__title">Регистрация</h2>
            <form className="register__form">
              <fieldset className="register__fieldset">
                <label className="register__label">Логин</label>
                <input
                  className="register__input"
                  type="email"
                  id="email"
                  name="email"
                  pattern="^[\w]+@[A-Za-z]+\.[A-Za-z]{2,30}$"
                  required
                />
                <label className="register__label">Пароль</label>
                <input
                  className="register__input"
                  type="password"
                  id="password"
                  name="password"
                  minLength="8"
                  required
                />
              </fieldset>
              <button className="register__btn">Зарегистрироваться</button>
            </form>
            <p className="register__text">Уже зарегистрированы?
              <Link to="/users/login/" className="register__link"> Войти</Link>
            </p>
          </>
        }
        {location === '/users/login/' &&
          <>
            <h2 className="register__title">Войти</h2>
            <form className="register__form">
              <fieldset className="register__fieldset">
                <label className="register__label">Логин</label>
                <input
                  className="register__input"
                  type="email"
                  id="email"
                  name="email"
                  pattern="^[\w]+@[A-Za-z]+\.[A-Za-z]{2,30}$"
                  required
                />
                <label className="register__label">Пароль</label>
                <input
                  className="register__input"
                  type="password"
                  id="password"
                  name="password"
                  minLength="8"
                  required
                />
              </fieldset>
              <button className="register__btn">Войти</button>
            </form>
          </>
        }
      </section>
      <Footer/>
    </>

  )
}

export default Register;
