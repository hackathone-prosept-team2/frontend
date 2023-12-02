import { useSelector } from "react-redux" 
import { Link } from 'react-router-dom';
import { Logotype, Button } from "Ui-Kit"

function Header() {
  const { isAuthenticated } = useSelector((state) => state.auth)
  
  return (
    <header className="header">
      <Link to='/'>
        <Logotype/>
      </Link>
      
      { 
        isAuthenticated ? <Button name="Выйти"/> : null
      }
    </header>
  )
}

export default Header;