import React, { lazy, Suspense, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {  signOut } from "firebase/auth";
import { auth } from "../assests/firebaseConfig";
import logo from "../assests/logo.png";
import TestLib from "./TestLib";



const Header = () => {
const username = useSelector(Store => Store.User);
const navigate = useNavigate();

const [showComponent, setShowComponent] = useState(false);
console.log(username);
const handleClick = () => {
  setShowComponent(true);
};
function HandleSignOut(){

signOut(auth).then(() => {
  navigate("/Signup")
}).catch((error) => {
  navigate("/error")
});
}

  return (
    <nav class="navbar navbar-expand-lg navbar-light tw-bg-white tw-shadow-sm m-0 p-0 fixed-top tw-shadow-black/5 tw-z-50">
      <a className="navbar-brand" href="#Home">
        <img src={logo} alt="" className="tw-h-16 tw-w-16" />
        &nbsp;<h3 className=" tw-inline-block">Testify</h3>
      </a>

      <button
        className="navbar-toggler tw-bg-blue-600"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon tw-text-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto"> 
          <li class="nav-item active link tw-rounded-lg tw-text-xl p-1 hover:tw-bg-green-400">
            <Link to="/" className="nav-link text-black">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item active p-1 link tw-rounded-lg text-white hover:tw-bg-green-400 tw-text-xl">
            <Link to="/About" className="nav-link text-black" href="#About">
              About<span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item active p-1 link tw-rounded-lg text-white hover:tw-bg-green-400 tw-text-xl">
            <Link to="/test" onClick={handleClick} className="nav-link text-black">
            Test Library <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item active p-1 link tw-rounded-lg hover:tw-bg-green-400 tw-text-xl">
            <Link
              to="/Contact"
              className="nav-link text-black"
            >
              Contact <span className="sr-only"></span>
            </Link>
          </li>
          
        </ul>
        
        <ul style={{"listStyleType" : "none"}} className=" tw-flex tw-justify-center tw-items-center tw-gap-3 ">
           <li className=" tw-mt-2 tw-text-lg tw-text-emerald-400 tw-outline tw-outline-emerald-400 tw-rounded-md tw-p-2">{username?.displayName}</li>
          <li className="tw-flex tw-justify-start tw-items-start">
          {username?.uid ? (<button onClick={HandleSignOut} className="tw-px-2 tw-mt-3 tw-py-2 tw-no-underline tw-bg-green-400 tw-text-black tw-rounded-md">SignOut</button>) : (
            <Link to="/Signup" className="tw-px-2 tw-mt-3 tw-py-2 tw-no-underline tw-bg-green-400 tw-text-black tw-rounded-md"
          >SignUp</Link>
          ) }
          
          </li>
        </ul>
      
      </div>
    </nav>
  );
};

export default Header;
