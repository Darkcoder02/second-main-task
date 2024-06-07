import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import logo from "../assets/logo.png";
import { RiMenu4Line } from "react-icons/ri";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

const Header = () => {
  // const clientId =
  //   "378154955519-leeh8thg8thtgqd488kdcpkkcqeqimcd.apps.googleusercontent.com";
  const clientId = "913836679168-mkhj7svtq8f3vq5pv20t1jvcsn9ai35h.apps.googleusercontent.com";
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [open, setOpen] = new useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("google-image");
    navigate("/login");
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  const onSuccess = () => {
    console.log("Logout successful");
    handleLogout();
  };
  return (
    <div className=" backdrop-blur-xl grid grid-cols-3 p-2 justify-items-center sm:p-4 shadow-lg items-center">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="h-8 cursor-pointer"
        onClick={() => navigate("/")}
      />
      {/* middle */}
      <div>
        {localStorage.getItem('loggedIn') && (<h1 className="text-md pt-1 text-slate-600 lg:text-slate-500 lg:text-xl lg:font-bold">
          Amazon Inc.
        </h1>)}
      </div>
      {/* button */}
      <div>
        <div className="md:hidden cursor-pointer">
          <RiMenu4Line
            onClick={() => (open ? setOpen(false) : setOpen(true))}
          />
          <Modal
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            style={customStyles}
            contentLabel="Modal"
          >
            <div>
              <div className="flex gap-12 border-b w-full items-center justify-between text-white bg-black rounded-md p-2">
                <div className="text-xl font-semibold">Navigate</div>
                <button onClick={() => setOpen(false)}>
                  <IoIosClose />
                </button>
              </div>
              <div className="flex flex-col justify-center items-start">
                {!localStorage.getItem("loggedIn") && (
                  <div className="w-full">
                    <button
                      className="button mt-2"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </button>
                    <button
                      className="button mt-1"
                      onClick={() => navigate("/signup")}
                    >
                      Sign Up
                    </button>
                  </div>
                )}
                <button className="button mt-1">Notification</button>
                <button className="button mt-1">About</button>
                <button className="button mt-1">Settings</button>
                {localStorage.getItem("google-image") &&
                localStorage.getItem("loggedIn") ? (
                  <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSuccess}
                    className="button"
                  />
                ) : (
                  localStorage.getItem("loggedIn") && (
                    <button className="button" onClick={handleLogout}>
                      Logout
                    </button>
                  )
                )}
              </div>
            </div>
          </Modal>
        </div>

        {localStorage.getItem("loggedIn") ? (
          <div>
            {localStorage.getItem("google-image") ? (
              <div className="hidden md:inline-flex gap-2 items-center">
                <img
                  className="rounded-full h-9"
                  src={localStorage.getItem("google-image")}
                  alt="display"
                />
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={onSuccess}
                />
              </div>
            ) : (
              <div className="hidden md:inline-flex gap-2 items-center">
                <button className="button" onClick={handleLogout}>
                  Logout
                </button>
                <p className="button">{user.name}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden md:inline-flex gap-2 items-center">
            <button className="button" onClick={() => navigate('/login')}> Login </button>
            <button className="button" onClick={() => navigate('/signup')}> SignUp </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
