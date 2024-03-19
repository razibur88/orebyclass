import React, { useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");
  const auth = getAuth();
  let navigate = useNavigate();
  const db = getDatabase();
  let handleFullname = (e) => {
    setFullName(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
    setErr("");
  };
  let handlepassword = (e) => {
    setPassword(e.target.value);
  };

  let handleSubmit = (e) => {
    if (!email) {
      setErr("ami faka");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        set(ref(db, "users/" + user.user.uid), {
          username: fullName,
          email: email,
        }).then(() => {
          setEmail("");
          setErr("");
        });
      })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <Container>
      <div className="py-[124px]">
        <h2 className="font-dm font-bold text-[49px] line-height:[63px] text-[#262626]">
          Sign up
        </h2>
        <span className="font-dm font-bold text-[16px] line-height:[36px] text-[#767676]">
          <Link to="/">Home</Link> / Sign up{" "}
        </span>
      </div>
      <p className="w-[644px] pb-[60px] font-dm font-normal text-[16px] line-height:[30px] text-[#767676]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the.
      </p>{" "}
      <hr />
      <div className="py-10">
        <h2 className="font-dm font-bold text-[39px] line-height:[36px] text-[#262626] pb-[42px]">
          Your Personal Details
        </h2>
        <form action="">
          <div className="w-[70%] flex justify-between">
            <div className="w-[45%]">
              <label
                htmlFor=""
                className="font-dm font-bold text-[16px] text-[#262626]"
              >
                {" "}
                First Name
              </label>{" "}
              <br />
              <input
                className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="text"
                placeholder="First Name"
                onChange={handleFullname}
              />{" "}
              <hr />
            </div>
            <div className="w-[45%]">
              <label
                className="font-dm font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                {" "}
                Last Name
              </label>{" "}
              <br />
              <input
                className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="email"
                placeholder="Last Name"
              />{" "}
              <hr />
            </div>
          </div>
          <div className="w-[70%] flex justify-between pt-[24px]">
            <div className="w-[45%]">
              <label
                htmlFor=""
                className="font-dm font-bold text-[16px] text-[#262626]"
              >
                {" "}
                Email address
              </label>{" "}
              <br />
              <input
                className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                type="email"
                placeholder="company@domain.com"
                onChange={handleEmail}
              />{" "}
              <hr />
              <p>{err}</p>
            </div>
            <div className="w-[45%] pb-12">
              <label
                className="font-dm font-bold text-[16px] text-[#262626]"
                htmlFor=""
              >
                {" "}
                Telephone
              </label>{" "}
              <br />
              <input
                className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full"
                type="text"
                placeholder="Your phone number"
              />{" "}
              <hr />
            </div>
          </div>{" "}
          <hr />
          <div className="pt-10 pb-14">
            <h2 className="font-dm font-bold text-[39px] line-height:[36px] text-[#262626] pb-[42px]">
              New Customer
            </h2>
            <div className="w-[70%] flex justify-between">
              <div className="w-[45%]">
                <label
                  htmlFor=""
                  className="font-dm font-bold text-[16px] text-[#262626]"
                >
                  Address 1
                </label>{" "}
                <br />
                <input
                  className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                  type="text"
                  placeholder="4279 Zboncak Port Suite 6212"
                />{" "}
                <hr />
              </div>
              <div className="w-[45%]">
                <label
                  className="font-dm font-bold text-[16px] text-[#262626]"
                  htmlFor=""
                >
                  {" "}
                  Address 2
                </label>{" "}
                <br />
                <input
                  className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                  type="email"
                  placeholder="--"
                />{" "}
                <hr />
              </div>
            </div>
            <div className="w-[70%] flex justify-between pt-[24px]">
              <div className="w-[45%]">
                <label
                  htmlFor=""
                  className="font-dm font-bold text-[16px] text-[#262626]"
                >
                  City
                </label>{" "}
                <br />
                <input
                  className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                  type="text"
                  placeholder="Your city"
                />{" "}
                <hr />
              </div>
              <div className="w-[45%]">
                <label
                  className="font-dm font-bold text-[16px] text-[#262626]"
                  htmlFor=""
                >
                  Post Code
                </label>{" "}
                <br />
                <input
                  className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                  type="code"
                  placeholder="05228"
                />{" "}
                <hr />
              </div>
            </div>
            <div className="w-[70%] flex justify-between pt-[24px]">
              <div className="w-[45%]">
                <label
                  htmlFor=""
                  className="font-dm font-bold text-[16px] text-[#262626]"
                >
                  Division
                </label>{" "}
                <br />
                <input
                  className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                  type="text"
                  placeholder="Please select"
                />{" "}
                <hr />
              </div>
              <div className="w-[45%]">
                <label
                  className="font-dm font-bold text-[16px] text-[#262626]"
                  htmlFor=""
                >
                  {" "}
                  District
                </label>{" "}
                <br />
                <input
                  className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                  type="text"
                  placeholder="Please select"
                />{" "}
                <hr />
              </div>
            </div>
          </div>{" "}
          <hr />
          <div className="pt-10 pb-14">
            <h2 className="font-dm font-bold text-[39px] line-height:[36px] text-[#262626]">
              Your Password
            </h2>
            <div className="w-[70%] flex justify-between pt-[24px]">
              <div className="w-[45%]">
                <label
                  htmlFor=""
                  className="font-dm font-bold text-[16px] text-[#262626]"
                >
                  Password
                </label>{" "}
                <br />
                <input
                  className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                  type="password"
                  placeholder="Password"
                  onChange={handlepassword}
                />{" "}
                <hr />
              </div>
              <div className="w-[45%]">
                <label
                  className="font-dm font-bold text-[16px] text-[#262626]"
                  htmlFor=""
                >
                  {" "}
                  Repeat Password
                </label>{" "}
                <br />
                <input
                  className="font-dm font-normal text-[14px] placeholder:text-[#767676] py-2 px-2 w-full "
                  type="password"
                  placeholder="Repeat password"
                />{" "}
                <hr />
              </div>
            </div>
          </div>
          <div className=" pb-14">
            <div onClick={handleSubmit}>
              <Link className="py-2 px-12 bg-[#262626] font-dm font-bold text-[#ffff] text-[16px]">
                Sign in
              </Link>
            </div>
          </div>
          <div className="pt-4">
            Already have account ? Please <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
