import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../SocialLogin";

const Register = ({socialTitle}) => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            photoURL: data.photoURL,
          };
          console.log(userInfo);
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Save-Life | Registration</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Registration with Save Life!</h1>
          </div>
          <div className="card shadow-2xl w-full max-w-lg bg-base-100 mx-auto my-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="name"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    {...register("photoURL", { required: true })}
                    placeholder="photo url"
                    className="input input-bordered"
                    required
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
              <div className="flex gap-6 w-full">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="name"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.email && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
              </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">This field is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less then 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one uppercase, one lower case, one
                      number and one special characters
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    name="confirm_pass"
                    {...register(
                      "confirm_pass",
                      {
                        validate: (data) => {
                          if (watch("password") !== data) {
                            return "Password do not match";
                          }
                        },
                      },
                      {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      }
                    )}
                    placeholder="confirm password"
                    className="input input-bordered w-full"
                    required
                  />
                  {/* <p className="text-red-600">{errors.confirm_pass?.message}</p> */}
                  {errors.confirm_pass?.type === "required" && (
                    <p className="text-red-600">This field is required</p>
                  )}
                  {errors.confirm_pass?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.confirm_pass?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less then 20 characters
                    </p>
                  )}
                  {errors.confirm_pass?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one uppercase, one lower case, one
                      number and one special characters
                    </p>
                  )}
                </div>
              <div className="flex justify-start items-center gap-2 mt-2">
                <input
                  onClick={() => setShowPass(!showPass)}
                  type="checkbox"
                  checked={showPass ? "checked" : ""}
                  readOnly
                  className="checkbox checkbox-sm checkbox-error"
                />
                <span className="label-text">Show Password</span>
              </div>
              <div className="form-control mt-6">
                <p className="text-red-600 mb-3 bg-red-50 text-center">
                  {errors.confirm_pass?.message}
                </p>
                <input
                  type="submit"
                  value="Register"
                  className="btn bg-black hover:bg-black text-white px-6 rounded-none border-none"
                />
              </div>
            </form>
            <p className="text-center">
              <small>
                Already have an Register?
                <Link to="/login" className="underline text-blue-700">
                  {" "}
                  Login here
                </Link>
              </small>
            </p>
            <div className="divider">OR</div>
            <SocialLogin socialTitle={"Register with"}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
