import { useDispatch, useSelector } from "react-redux" 
import { Link } from 'react-router-dom';
import { Logotype, Button } from "Ui-Kit"
import { logout } from "Features"

function Header() {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state)
  console.log(auth)
  
  const handlerLogout = async () => {
    console.log('1111')
    await dispatch(logout())
  }

  return (
    <header className="header">
      <Link to='/'>
        <Logotype/>
      </Link>
      
      { 
        auth.isAuthenticated ? <Button name="Выйти" onClick={handlerLogout} /> : null
      }
    </header>
  )
}

export default Header;