import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = ({socialTitle}) => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogle = ()=> {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photoURL: result.user?.photoURL
            }
            axiosPublic.post('/users', userInfo)
            .then(res=> {
                console.log(res.data);
                navigate('/')
            })
        })
    }

  return (
    <>
      <div className="card-body pt-3 mx-auto">
        <button onClick={handleGoogle} className="btn w-96  rounded-full" >
          {socialTitle}
          <FcGoogle className="text-xl"/>
        </button>
      </div>
    </>
  );
};
export default SocialLogin;
