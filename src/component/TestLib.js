import React, { useContext, useEffect, useState } from "react";
import SideBar from "./SideBar";
import TestCard from "./TestCard";
import alltestContext from "../utils/Context";
import { AllTest } from "../assests/AllTest";
import { Link } from "react-router-dom";

const TestLib = () => {
  const { show, setShow, crum } = useContext(alltestContext);
  const [searchText, setSearchText] = useState("");

  // Filter tests based on search text
  useEffect(() => {
    const filteredData = AllTest.filter((test) =>
      test.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setShow(filteredData);
  }, [searchText, setShow]);

  return (
    <div className=" container-fluid tw-bg-[#212A31] tw-mt-[74]">
      <div className="row flex-xl-nowrap">
        {/* Sidebar Section */}
        <div className="col-12 col-md-2 tw-bg-[#F3F4F6] tw-p-2">
        <div className="tw-flex tw-justify-center tw-items-center tw-w-full tw-p-2">
            <input
              type="search"
              className="tw-w-full tw-p-2 tw-rounded-md tw-focus:outline-none form-control ds-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search...."
            />
          </div>
          <div className="border tw-mt-2 tw-mb-2"></div>
          <SideBar />
        </div>
 
        {/* Main Content Section */}
        <div className="col-12 col-md-10 tw-p-2">
         
       

          {/* Breadcrumb and Custom Test Button */}
          <div className="tw-flex tw-justify-between tw-items-center tw-px-4 tw-mb-5">
            <h3 className="tw-text-white">{crum}</h3>
            <Link
              to="/customtest"
              className="tw-no-underline tw-px-4 tw-py-2 tw-text-lg tw-bg-green-500 tw-text-white tw-rounded-md tw-shadow-md"
            >
              Custom Test &nbsp; <i className="fa-solid fa-plus"></i>
            </Link>
          </div>

          {/* Display Test Cards */}
          <div className=" tw-flex md:tw-justify-start tw-justify-center tw-flex-wrap">
            {show.map((test) => (
              <TestCard
                key={test.id}
                id={test.id}
                name={test.name}
                desc={test.desc}
                icon={test.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLib;
