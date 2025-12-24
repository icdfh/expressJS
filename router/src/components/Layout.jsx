import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Главная</Link> 
        <Link to="/profile">Профиль</Link> 
        <Link to="/login">Логин</Link>
      </nav>

      <hr />

      <Outlet />
    </>
  );
}

export default Layout;
