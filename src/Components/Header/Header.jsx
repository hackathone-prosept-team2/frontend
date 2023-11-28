import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation().pathname;

  return (
    <header className="header">
      <Link to='/' className="header__logo"></Link>
      <div className="header__container">
        <div className="header__links">
          {location === '/users/create/' &&
            <Link to='/users/login/' className="header__link">Войти</Link>}
          {location === '/users/login/' &&
            <Link to='/users/create/' className="header__link">Регистрация</Link>}
          {location === '/' &&
            <Link to='/logout' className="header__link">Выйти</Link>}
          {location === '/logout' &&
            <Link to='/users/login/' className="header__link">Войти</Link>}
        </div>
      </div>

    </header>
  )
}

export default Header;
