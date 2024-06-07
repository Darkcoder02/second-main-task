import React, { useState, useEffect } from "react";
import Header from "./Header";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import {GoogleLogin} from "react-google-login";
const Login = () => {
//   const clientId =
//     "378154955519-leeh8thg8thtgqd488kdcpkkcqeqimcd.apps.googleusercontent.com";
    const clientId = "913836679168-mkhj7svtq8f3vq5pv20t1jvcsn9ai35h.apps.googleusercontent.com";
  const navigate = useNavigate();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });


  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if(loggedUser===null || loggedUser.name===null || loggedUser.password===null){
      alert('Please Signup.')
      navigate('/signup')
    }
    else if(input.name===null || input.password===null){
      alert("Enter Username/Password");
    }
    else if (
      input.name === loggedUser.name &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedIn", true);
      navigate("/");
    } else {
      alert("wrong email or password");
    }
  };

  const onSuccess = (res) => {
    console.log("Login Success! current user: ", res.profileObj);
    localStorage.setItem("google-image", res.profileObj.imageUrl);
    localStorage.setItem("loggedIn", true)
    console.log(localStorage.getItem("loggedin"));
    navigate("/");
  };

  const onFailure = (res) => {
    console.log("Login Failure! res: ", res);
  };
  return (
    <div className="flex flex-col gap-y-44">
      <div className="sticky">
        <Header />
      </div>
      <div className="form bg-red-500 text-white mx-auto p-4 rounded-md w-9/12 sm:w-6/12 lg:w-5/12 xl:w-4/12">
        <h1 className="text-3xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container mt-4">
            <label>Username </label>
            <input
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              type="text"
              name="uname"
              className="p-2 rounded-md text-black"
              required
            />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              type="password"
              name="pass"
              className="p-2 rounded-md text-black"
              required
            />
          </div>
          <div className=" mt-8 flex">
            <input
              type="submit"
              className="bg-white mx-auto text-black py-1 px-2 rounded-md font-semibold"
            />
          </div>
        </form>
        <p className="mt-4">
          New here?{" "}
          <button
            className="cursor-pointer underline font-semibold"
            onClick={() => navigate("/signup")}
          >
            SignUp here
          </button>
        </p>
        <div className="mt-4 flex items-center justify-center">
          <GoogleLogin
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            redirectUri={"http://localhost:3000"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
