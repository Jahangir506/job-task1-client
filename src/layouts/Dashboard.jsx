// import { Helmet } from "react-helmet-async";
// import { FaCheckCircle, FaHome, FaList, FaUser } from "react-icons/fa";
// import { GrLogout } from "react-icons/gr";
// import { IoMdRefresh } from "react-icons/io";
// import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useAuth from "../hooks/useAuth";

// const Dashboard = () => {
//   const [isAdmin] = useAdmin();

//   const { user, logOut } = useAuth();
//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((err) => console.log(err));
//   };

//   return (
//     <>
//       <Helmet>
//         <title>QuickTask | dashboard</title>
//       </Helmet>
//       <div className="flex">
//         <div className="w-72 min-h-screen bg-gradient-to-r from-[#009dff] from-10% to-[#BFDBFE] to-110%  text-white">
//           <ul className="menu">
//             <li>
//               <NavLink to="/dashboard/Profile">
//                 <FaUser />
//                 Profile
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/dashboard/manageTask">
//                 <FaList />
//                 Mange Task
//               </NavLink>
//             </li>
//             <div className="divider"></div>
//             <li>
//               <NavLink to="/">
//                 <FaHome /> Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/" onClick={handleLogOut}>
//                 <GrLogout /> Log Out
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <div className="flex-1 px-12 bg-blue-200">
//           <Outlet></Outlet>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Dashboard;



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
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-72 min-h-screen bg-gradient-to-r from-[#009dff] from-10% to-[#BFDBFE] to-110%  text-white">
          <ul className="menu">
            <li>
              <NavLink to="/dashboard/Profile" className="nav-link">
                <FaUser />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageTask" className="nav-link">
                <FaList />
                Manage Task
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/" className="nav-link">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={handleLogOut} className="nav-link">
                <GrLogout /> Log Out
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-4 lg:px-12 bg-blue-200">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
