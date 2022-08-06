import { Link } from 'react-router-dom'
import './NavBarItem.css'

const NavBarItem = ({ title, link }) => {
  return (
    <li className='nav-item'>
      <Link className='nav-link' to={link}>
        {title}
      </Link>
    </li>
  )
}

export default NavBarItem
