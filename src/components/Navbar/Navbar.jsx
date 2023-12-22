import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Mange Task</Link>
      </li>
      <li>
        <Link to="/">Create Task</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="">
        <div className="navbar fixed top-0 z-50 bg-[#00B5FF] text-white max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/" className="text-2xl font-semibold">
             QuickTask
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal items-center px-1">{navLinks}     {user ? (
        <div className="dropdown dropdown-end ml-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user && <img src={user?.photoURL} />}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-4 shadow bg-base-100 text-black rounded-box w-40 mt-4"
          >
            <div className="text-center">
              {user && <p className="mb-3">{user?.displayName}</p>}
              {user && (
                <li>
                  {" "}
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              )}

                <li>
                  <Link onClick={handleLogOut}>Log Out</Link>
                </li>
            </div>
          </ul>
        </div>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
