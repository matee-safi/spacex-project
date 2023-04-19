import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../styles/Nav.css';

const links = [
  { path: '/', label: 'Rockets' },
  { path: 'missions', label: 'Missions' },
  { path: 'my-profile', label: 'My Profile' },
];

const Nav = () => (
  <nav>
    <div>
      <img src={Logo} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <ul>
      {links.map(({ path, label }) => (
        <li key={path}>
          <NavLink to={path}>{label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
