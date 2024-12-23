import React, { useState ,useContext} from "react";
import SideBarAccordions from "./SideBarAccordions";
import alltestContext from "../utils/Context";


const SideBar = () => {
  const{aptitude,Foundation,technical,show,setShow,Role,Coding,setCrum,ALLTEST,newTest} = useContext(alltestContext)
  
  function ApptClicked(e){
        
         setShow(aptitude);
         setCrum(e.target.innerText)
  }
  function Programing(e) {
    setShow(Coding);
    setCrum(e.target.innerText)

  }
  function tech(e) {
    setShow(technical);
    setCrum(e.target.innerText);

  }
  function fond(e) {
    setShow(Foundation);
    setCrum(e.target.innerText);

  }
  function role(e) {
    setShow(Role);
    setCrum(e.target.innerText);

  }
  function All(e) {
    setShow(ALLTEST);
    setCrum(e.target.innerText);

  }
  function NewTest(e) {
    setShow(newTest);
    setCrum(e.target.innerText);

  }
  const [config, setConfig] = useState({
    o1: true,
    o2: false,
    o3: false,
    o4: false,
    o5: false,
  });
  return (
    <>
      <div className="tw-w-full md:tw-w-68 tw-bg-gray-100 tw-rounded-md">
        <h4 className="m-2 tw-text-slate-600">Test Type</h4>
        <br />
        <div className="hover:tw-bg-green-500 tw-cursor-pointer">
          <p className="hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2" onClick={All}>
            <i class="fa-solid fa-children tw-text-green-300 tw-text-lg"></i>
            &nbsp;All Test{" "}
          </p>
        </div>
        <div className="hover:tw-bg-green-500 tw-cursor-pointer">
          <p className="hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2" onClick={ApptClicked}>
            <i class="fa-solid fa-puzzle-piece tw-text-green-300 tw-text-lg"></i>{" "}
            &nbsp;Aptitude & Reasoning
          </p>
        </div>
        <div className="hover:tw-bg-green-500 tw-cursor-pointer">
          <p className="hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2" onClick={Programing}>
            <i class="fa-solid fa-code tw-text-green-300 tw-text-lg"></i>
            &nbsp;Coding Programming
          </p>
        </div>
        <div className="hover:tw-bg-green-500 tw-cursor-pointer">
          <p className="hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2" onClick={tech}>
            <i class="fa-brands fa-windows tw-text-green-300 tw-text-lg"></i>
            &nbsp;Technical Assessment
          </p>
        </div>
        <div className="hover:tw-bg-green-500 tw-cursor-pointer">
          <p className="hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2" onClick={NewTest}>
            <i class="fa-brands fa-windows tw-text-green-300 tw-text-lg"></i>
            &nbsp;Your Tests
          </p>
        </div>
        <div className="hover:tw-bg-green-500 tw-cursor-pointer">
          <p className="hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2" onClick={fond}>
            <i class="fa-solid fa-children tw-text-green-300 tw-text-lg"></i>
            &nbsp;Foundation schools{" "}
          </p>
        </div>
        <div className="hover:tw-bg-green-500 tw-cursor-pointer">
          <p className="hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2" onClick={role}>
            <i class="fa-solid fa-briefcase tw-text-green-300 tw-text-lg"></i>
            &nbsp;Domain Specific Roles{" "}
          </p>
        </div>
        <hr />
        {/* <SideBarAccordions
          heading={"Aptitude & Reasoning"}
          subpoints={{
            first: "Number System",
            second: "Time & Work",
            third: "Percentage",
            fourth: "Coding Decoding",
          }}
          isvisible={config.o1}
          setIsvisible={() => {
            setConfig({
              o1: true,
              o2: false,
              o3: false,
              o4: false,
              o5: false,
            });
          }}
          icon={"fa-puzzle-piece"}
        />
        <SideBarAccordions
          heading={"Coding  Programming"}
          subpoints={{
            first: "C++",
            second: "DSA",
            third: "Java",
            fourth: "Javascript",
          }}
          isvisible={config.o2}
          setIsvisible={() => {
            setConfig({
              o1: false,
              o2: true,
              o3: false,
              o4: false,
              o5: false,
            });
          }}
          icon={"fa-code"}
        />
        <SideBarAccordions
          heading={"Technical Assessment"}
          subpoints={{
            first: "DBMS",
            second: "Operating System",
            third: "Computer Network",
            fourth: "OOPS",
          }}
          isvisible={config.o3}
          setIsvisible={() => {
            setConfig({
              o1: false,
              o2: false,
              o3: true,
              o4: false,
              o5: false,
            });
          }}
          icon={"fa-windows"}
        />
        <SideBarAccordions
          heading={"Foundation  schools"}
          subpoints={{
            first: "Maths",
            second: "Science",
            third: "English",
            fourth: "Sst",
          }}
          isvisible={config.o4}
          setIsvisible={() => {
            setConfig({
              o1: false,
              o2: false,
              o3: false,
              o4: true,
              o5: false,
            });
          }}
          icon={"fa-children"}
        />
        <SideBarAccordions
          heading={"Domain Specific Roles"}
          subpoints={{
            first: "Web Development",
            second: "Dba",
            third: "Data Science",
            fourth: "Human Resource",
          }}
          isvisible={config.o5}
          setIsvisible={() => {
            setConfig({
              o1: false,
              o2: false,
              o3: false,
              o4: false,
              o5: true,
            });
          }}
          icon={"fa-children"}
        /> */}
      </div>
    </>
  );
};

export default SideBar;
