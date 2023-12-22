import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="flex justify-center items-center h-screen bg-blue-200 flex-1">
      <Helmet>
        <title>Profile | Dashboard</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl md:w-3/5 w-3/1">
        <img
          alt="profile"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="mt-2 text-base md:text-xl font-medium text-gray-800 ">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-col space-y-6 flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex ">
                Name
                <span className="font-bold text-[#00B5FF] ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex ">
                Email
                <span className="font-bold text-[#00B5FF] ">
                  {user?.email}
                </span>
              </p>

              <div>
                <button className="bg-[#00B5FF] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-blue-200 hover:text-[#00B5FF] block mb-1">
                  Update Profile
                </button>
                <button className="bg-[#00B5FF] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-blue-200 hover:text-[#00B5FF]">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;