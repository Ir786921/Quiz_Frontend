import React, { useRef, useState, useEffect } from "react";
import { validation } from "../assests/Validation";
import { auth } from "../assests/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Redux/UserSlice";

const Signup = () => {
  const [isclick, setIsclick] = useState(false);
  const [validationText, setValidationText] = useState(" ");
  const email = useRef(null);
  const password = useRef(null);
  const [fname,setFname] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  function clickHandle() {
    setIsclick(!isclick);
  }
  function LoginClicked() {
    const text = validation(
      email?.current?.value,
      password?.current?.value,
      
    );
    setValidationText(text);

    if (isclick) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: fname,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
            navigate("/");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationText(errorMessage.substring(22, 40));
        });

      if (validationText === " ") {
        navigate("/");
      }
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationText(errorMessage.substring(22, 40));
        });

      if (validationText === " ") {
        navigate("/");
      }
    }
  }

  

  return (
    <div className=" tw-h-[700] tw-flex tw-justify-center tw-items-center tw-bg-[#D09683]">
      <div className="  tw-p-4 tw-bg-[#44AA97] tw-opacity-85 tw-rounded-md tw-shadow-md tw-w-[450px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          action=""
          className="  tw-flex tw-justify-center tw-flex-col "
        >
          <h1 className=" tw-text-start tw-text-[#333333] tw-font-bold tw-text-3xl tw-ml-10">
            {isclick ? "SignUp" : "Login"}
          </h1>
          <br />
          {isclick && (
            <>
              <input
                type="text"
                value={fname}
                className=" tw-bg-[#333333] tw-w-[350px] tw-m-auto tw-p-2 tw-rounded-md tw-shadow-sm tw-text-white"
                placeholder="Full Name"
                onChange={(e)=>{
                  setFname(e.target.value)
                }}
              />
              <br />
            </>
          )}

          <input
            type="email"
            ref={email}
            className=" tw-bg-[#333333] tw-w-[350px] tw-m-auto tw-p-2 tw-rounded-md tw-shadow-sm tw-text-white"
            placeholder="Email or Phone Number"
          />
          <br />
          <input
            type="password"
            ref={password}
            className=" tw-bg-[#333333] tw-w-[350px] tw-m-auto tw-p-2 tw-rounded-md tw-shadow-sm tw-text-white"
            placeholder="Password"
          />
          <br />
          <p className=" tw-text-[#333333] tw-text-lg tw-font-semibold tw-ml-10">
            {validationText}
          </p>
          <br />

          <button
            className="  tw-w-[350px] tw-m-auto tw-p-2 tw-rounded-md tw-shadow-sm tw-text-white tw-bg-[#333333]"
            onClick={LoginClicked}
          >
            {isclick ? "SignUp" : "Login"}
          </button>
        </form>
        <br />
        <p className=" tw-text-gray-600 tw-text-lg tw-ml-10 tw-cursor-pointer">
          {isclick ? "Already registered" : "New Here"} ? &nbsp;
          <span className=" tw-text-white" onClick={clickHandle}>
            {" "}
            {isclick ? "login" : "Sign up now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
