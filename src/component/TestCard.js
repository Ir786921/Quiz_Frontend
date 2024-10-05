import React from "react";
import { Link } from "react-router-dom";

const TestCard = ({ name, desc, icon, id }) => {
  return (
    <div className="p-3 tw-group tw-m-4 tw-w-64 border border-success tw-inline-block tw-text-white tw-rounded-lg hover:tw-shadow-md hover:tw-text-black hover:tw-bg-green-500 group">
      <div className=" tw-flex tw-justify-center tw-items-center rounded-circle border border-success tw-w-16 tw-h-16 tw-bg-green-500 group-[hover]:tw-bg-white">
        <i className={`${icon}`}></i>
      </div>
      <br />
      <h4 className="text-start">{name}</h4>

      <p className="text-start">{desc}</p>
      <Link
        to={`/details/${id}`}
        className=" tw-no-underline tw-flex tw-justify-center tw-items-center"
      >
        <button className="tw-rounded-md tw-px-8 tw-py-2 tw-shadow-md tw-border-0 tw-bg-green-500 group-hover:tw-text-green-600 group-hover:tw-bg-white">
          Start test
        </button>
      </Link>
    </div>
  );
};

export default TestCard;
