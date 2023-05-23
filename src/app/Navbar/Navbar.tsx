import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <nav className='navbar'>
        <ul>
          <li>
            <Link to="/rick-and-morty">Characters</Link>
          </li>
          <li>
            <Link to="/rick-and-morty/episodes">Episodes</Link>
          </li>
          <li>
            <Link to="/rick-and-morty/locations">Locations</Link>
          </li>
        </ul>
      </nav>
    );
};