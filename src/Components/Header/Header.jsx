import { useDispatch, useSelector } from "react-redux" 
import { Link } from 'react-router-dom';
import { Logotype, Button } from "Ui-Kit"
import { logout } from "Features"

function Header() {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.auth)
  
  const handlerLogout = async () => {
    await dispatch(logout())
  }

  return (
    <header className="header">
      <Link to='/'>
        <Logotype/>
      </Link>
      
      { 
        isAuthenticated ? <Button name="Выйти" onClick={handlerLogout} /> : null
      }
    </header>
  )
}

export default Header;