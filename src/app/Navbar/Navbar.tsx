import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <nav className='navbar'>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/episodes">Episodes</NavLink>
          </li>
          <li>
            <NavLink to="/locations">Locations</NavLink>
          </li>
        </ul>
      </nav>
    );
};