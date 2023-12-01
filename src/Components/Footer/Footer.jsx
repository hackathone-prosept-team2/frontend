import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  const START_YEAR = 2021

  return (
    <footer className="footer">
      <Link to='/' className="footer__logo">
        &#169; 
        {`${START_YEAR}-${currentYear} PROSEPT`}
      </Link>
    </footer>
  )
}

export default Footer;
