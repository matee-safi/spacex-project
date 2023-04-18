import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', label: 'Rockets' },
  { path: 'missions', label: 'Missions' },
  { path: 'my-profile', label: 'My Profile' },
];

const Nav = () => (
  <nav>
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
