import { Outlet, Link } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>

          <li>
            <Link to="/category">Category</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default LayoutAdmin;
