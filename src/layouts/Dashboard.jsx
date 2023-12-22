import { Helmet } from "react-helmet-async";
import { FaCheckCircle, FaHome, FaList, FaUser } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { IoMdRefresh } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet>
        <title>QuickTask | dashboard</title>
      </Helmet>
      <div className="flex">
        <div className="w-72 min-h-screen bg-gradient-to-r from-[#009dff] from-10% to-[#BFDBFE] to-110%  text-white">
          <ul className="menu">
            <li>
              <NavLink to="/dashboard/Profile">
                <FaUser />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageTask">
                <FaUser />
                Mange Task
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/todoList">
                <FaList /> Todo List
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/ongoing">
                <IoMdRefresh className="text-lg" /> Ongoing
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/completed">
                <FaCheckCircle /> Completed
              </NavLink>
            </li>

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={handleLogOut}>
                <GrLogout /> Log Out
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-12 bg-blue-200">
          <div className="flex justify-end">
            <h2 className="py-1 px-6 w-28 my-4 bg-[#009dff]">+ Create Task</h2>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
