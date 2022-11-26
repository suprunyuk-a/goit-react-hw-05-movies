import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        exact="true"
        to="/goit-react-hw-05-movies/"
        className={styles.link}
        activeclassname={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        exact="true"
        to="/goit-react-hw-05-movies/movies"
        className={styles.link}
        activeclassname={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  );
}
