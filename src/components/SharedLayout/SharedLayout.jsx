import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <nav className="navigation">
        <NavLink className="navigation__item" to="/" end>
          Home
        </NavLink>
        <NavLink className="navigation__item" to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
