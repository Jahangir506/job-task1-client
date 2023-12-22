import { Helmet } from "react-helmet-async";
import { BiDonateBlood } from "react-icons/bi";
import { FaHome, FaUser } from "react-icons/fa";
import { MdOutlineBloodtype } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useVolunteer from "../hooks/useVolunteer";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isVolunteer] = useVolunteer();

  return (
    <>
      <Helmet>
        <title>Save-Life | dashboard-home</title>
      </Helmet>
      <div className="flex">
        <div className="w-72 min-h-screen bg-blue-600 text-white">
          <ul className="menu">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/admin-home">
                    <FaUser />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/all-users">
                    <BiDonateBlood /> All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin-all-blood-donation-request">
                    <MdOutlineBloodtype /> All Blood Donation Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin-content-management">
                    <MdOutlineBloodtype /> Content Management
                  </NavLink>
                </li>
              </>
            ) : isVolunteer ? (
              <>
                <li>
                  <NavLink to="/dashboard/volunteer-home">
                    <FaUser />
                   Volunteer Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/all-blood-donation-request">
                    <BiDonateBlood /> All Blood Donation Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/content-management">
                    <MdOutlineBloodtype /> Content Management
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/users-home">
                    <FaUser />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-donation-requests">
                    <BiDonateBlood /> My Donation Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/create-donation-request">
                    <MdOutlineBloodtype /> Create Donation Request
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome /> Home
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-12 bg-blue-100">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
