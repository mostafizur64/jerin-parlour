import React, { useContext } from "react";
import Container from "../../../components/Container";
import RNavbar from "../../../Shared/RNavbar";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../../assets/image/Login/google.png";
import faceBookIcon from "../../../assets/image/Login/facebook.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
const Registration = () => {
  const { createUser, user, signWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    const data = { fName, lName, email, password, confirm_password };
    console.log(data);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
        toast.success("Registration successfully!");
      })
      .catch((err) => console.log(err));
  };

  const handleWithGoogleSignIn = () => {
    signWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
        toast.success("Registration successfully! with google");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white ">
      <Container>
        <div>
          <div>
            <RNavbar />
          </div>
          <h3>{user.displayName}</h3>
          <div className="md:mt-20 mt-12">
            <div className="md:w-[570px] mx-auto ">
              <div className="  border p-10">
                <h2 className="text-headingColor py-4 font-bold text-2xl">
                  Create an account
                </h2>
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="space-y-5 md:mt-8 mt-4"
                >
                  <div className="text-headingColor ">
                    <input
                      type="text"
                      name="fName"
                      placeholder="First Name"
                      className="py-3 border-b-[2px] w-full focus:outline-none placeholder:text-headingColor font-medium"
                    />
                  </div>
                  <div className="text-headingColor ">
                    <input
                      type="text"
                      name="lName"
                      placeholder="Last Name"
                      className="py-3 border-b-[2px] w-full focus:outline-none placeholder:text-headingColor font-medium"
                    />
                  </div>
                  <div className="text-headingColor ">
                    <input
                      name="email"
                      type="email"
                      placeholder="Username or Email"
                      className="py-3 border-b-[2px] w-full focus:outline-none placeholder:text-headingColor font-medium"
                    />
                  </div>
                  <div className="text-headingColor ">
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="py-3 border-b-[2px] w-full focus:outline-none placeholder:text-headingColor font-medium"
                    />
                  </div>
                  <div className="text-headingColor ">
                    <input
                      name="confirm_password"
                      type="password"
                      placeholder="Confirm Password"
                      className="py-3 border-b-[2px] w-full focus:outline-none placeholder:text-headingColor font-medium"
                    />
                  </div>
                  <button type="submit" className="btn w-full ">
                    Create an account
                  </button>
                </form>
                <div className="mt-8 flex items-center justify-center">
                  <h3>
                    Already have an account?
                    <Link to="/login" className="text-textColor =">
                      Login
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="md:px-12 md:mt-12 mt-4 md:space-y-4 space-y-3">
                <div className="flex items-center justify-center ">
                  <div className="border border-gray-400 w-full"></div>
                  <div className="mx-4 text-gray-500">OR</div>
                  <div className="border border-gray-400 w-full"></div>
                </div>
                <div className=" relative">
                  <button
                    type="submit"
                    className="bg-white border border-slate-200 rounded-full  py-2 px-4 md:w-[457px] w-[100%] "
                  >
                    Continue with Facebook
                  </button>
                  <div className="w-[31px] h-[31px] absolute top-[5px] left-3">
                    <img src={faceBookIcon} alt="login" />
                  </div>
                </div>
                <div className=" relative">
                  <button
                    onClick={handleWithGoogleSignIn}
                    type="submit"
                    className="bg-white border border-slate-200 rounded-full  py-2 px-4 md:w-[457px] w-[100%] "
                  >
                    Continue with Google
                  </button>
                  <div className="w-[31px] h-[31px] absolute top-[5px] left-3">
                    <img src={googleIcon} alt="login" />
                  </div>
                </div>
              </div>

              {/* bottom part =============/ */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
