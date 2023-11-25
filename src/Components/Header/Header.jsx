import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation().pathname;

  return (
    <header className="header">
      <h2 className="header__logo">PROSEPT</h2>
      {location === '/users/create/' &&
        <Link to='/users/login/' className="header__link">Войти</Link>}
      {location === '/users/login/' &&
        <Link to='/users/create/' className="header__link">Регистрация</Link>}
      {location === '/' &&
        <Link to='/logout' className="header__link">Выйти</Link>}
    </header>
  )

}

export default Header;
