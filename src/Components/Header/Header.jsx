import { Link, useLocation } from 'react-router-dom';
import { Logotype } from "Ui-Kit"

function Header() {
  const location = useLocation().pathname;

  return (
    <header className="header">
      <Link to='/'>
        <Logotype />
      </Link>
      <div className="container">
        <div className="links">
          {location === '/users/create/' &&
            <Link to='/users/login/' className="link">Войти</Link>}
          {location === '/users/login/' &&
            <Link to='/users/create/' className="link">Регистрация</Link>}
          {location === '/' &&
            <Link to='/logout' className="link">Выйти</Link>}
          {location === '/logout' &&
            <Link to='/users/login/' className="link">Войти</Link>}
        </div>
      </div>

    </header>
  )
}

export default Header;
