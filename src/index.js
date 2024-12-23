import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";


import { useContext, useState } from "react";
import alltestContext from "./utils/Context";
import CreateTest from "./component/CreateTest";
import Instruction from "./component/Instruction";
import Verification from "./component/Verification";
import TestEnv from "./component/TestEnv";
import { Provider, useDispatch } from "react-redux";
import Store from "./Redux/reduxStore";

import Signup from "./component/Login";
import { addUser, removeUser } from "./Redux/UserSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import SystemCheck from "./component/SystemCheck";

const TestLib = lazy(()=> import("./component/TestLib")

)


const Index = () => {
  const {
    ALLTEST,
    Coding,
    Role,
    technical,
    Foundation,
    aptitude,
    breadcrum,
    title,
    duration,
    instruction,
    newTest,
  } = useContext(alltestContext);

  const [show, setShow] = useState(ALLTEST);
  const [crum, setCrum] = useState(breadcrum);
  const [newTitle, setNewTitle] = useState(title);
  const [newDuration, setNewDuration] = useState(duration);
  const [newInst, setNewInst] = useState(instruction);

  const path = useLocation().pathname;
  console.log(path.slice(0,8));
  
  
  const { id } = useParams();

  return (
    <alltestContext.Provider
      value={{
        aptitude,
        Foundation,
        technical,
        show,
        setShow,
        Role,
        Coding,
        crum,
        setCrum,
        setNewTitle,
        setNewDuration,
        setNewInst,
        ALLTEST,
        newTitle,
        newInst,
        newDuration,
        newTest,
      }}
    >
      <Provider store={Store}>
        <div className="">
          {path == "/Signup" ? (
            <Signup />
          ) : (
            <>{
              path.slice(0,8) == "/testenv" ? (<Outlet />) :( <><Header /> <Outlet />  <Footer/></>)

            }
              
              
            </>
          )}
        </div>
      </Provider>
    </alltestContext.Provider>
  );
};

const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/test",
        element: <Suspense> <TestLib /></Suspense> ,
      },
      {
        path: "/SignUp",
        element: <Signup />,
      },
      {
        path: "/customtest",
        element: <CreateTest />,
      },
      {
        path: "/details/:id",
        element: <Instruction />,
      },
      {
        path: "/verification/:id",
        element: <Verification />,
      },
      {
        path: "/testenv/:id",
        element: <TestEnv />,
      },
      {
        path: "/systemcheck/:id",
        element: <SystemCheck />,
      },
      {
        path: "/getdata/:id",
        element: <TestEnv />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routeConfig} />);
