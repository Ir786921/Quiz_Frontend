import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import User from "../assests/user.jpg";
import GoodID from "../assests/GoodID.png";
import Bad1 from "../assests/Bad1.png";
import Bad2 from "../assests/Bad2.png";


const CaptureID = () => {
    const videoRef = useRef(null);
    const [loading, setLoading] = useState(false);
  
    const capturePhoto = useCallback(async () => {
      const imageSrc = videoRef?.current?.getScreenshot();
      setLoading(imageSrc);
    }, [videoRef]);
  
    return (
      <div className="row tw-p-2">
        <div className="col-md-5 tw-p-2 tw-flex tw-justify-center tw-border-r-2 tw-border-black">
        <div className=" tw-shadow-md tw-w-3/4 tw-bg-white tw-rounded-md">
        <h1 className=" tw-underline tw-bg-gray-200 tw-text-sm tw-p-3 tw-w-full  tw-rounded-tl-md tw-rounded-tr-md  hover:tw-border-b-black">Instructions </h1>
        
        <div className=" tw-p-2">
        <h4 className=" tw-text-sm"> <i className="fa-solid fa-square"></i>&nbsp; Photo Needs to be taken clealy </h4>
  
        <h4 className=" tw-text-sm"> <i className="fa-solid fa-square"></i> &nbsp; light need to be proper</h4>
        </div>
  
        <div className=" tw-p-2">
          <h4 className=" tw-text-sm tw-text-emerald-500">Good Scenario</h4>
          <img src={GoodID} alt="" />
  <br />
  <br />
          <h4 className="tw-text-sm tw-text-red-600">Bad Scenario</h4>
          <img src={Bad1} alt="" />
          <br />
          <img src={Bad2} alt="" />
  
  
  
        </div>
        </div>
          {/* <h1 className="tw-text-xl tw-p-2 tw-underline">Instructions </h1>
          <br /> */}
          {/* <div className=" tw-p-2">
            <div className=" tw-flex tw-flex-col">
              <span>Inst:1 Place your face in the middle of frame</span>
              <img src={Frame} alt="" className=" tw-w-[300] tw-items-center" />
            </div>
            <div>
              <span>
              Inst:2 Please do not capture blur image if it is blur then try
                recapturing.
              </span>
              <img src={Blur} alt="" className=" tw-w-[300] tw-items-center" />
            </div>
            <div className="">
            <span> Inst:3 Make sure Background is Clear</span>
            <br />
            <img
              src={Background}
              alt=""
              className=" tw-w-[300] tw-h-24 tw-object-contain"
            />
          </div>
          </div> */}
  
       
        </div>
        <div className="col-md-1">
            <div className=" tw-border-2 tw-border-gray-500 tw-border-solid tw-w-full md:tw-w-[2] tw-h-full tw-rounded-xl "></div>
        </div>
        <div className="col-md-6 tw-border-r-2 tw-border-r-gray-600">
        <h4 className=" tw-px-3 tw-text-sm tw-text-gray-400">Please allign yourself to the Center of screen and press "capture your ID" button</h4>
          <div className=" tw-p-3 tw-flex tw-justify-start tw-flex-col md:tw-flex-row tw-gap-9">
            <Webcam
              className="tw-object-cover tw-w-[300] tw-h-[250] tw-rounded-md tw-border-1 tw-border-solid tw-border-slate-500"
              screenshotFormat="image/jpeg"
              ref={videoRef}
            />
            <img
              src={`${loading ? loading : User}`}
              className=" tw-border-1 tw-w-[300] tw-h-[250] tw-border-solid tw-border-slate-500 tw-rounded-md"
            />
          </div>
          
          <div className=" tw-flex tw-justify-center tw-gap-8 tw-p-6">
            <button
              className=" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md"
              onClick={capturePhoto}
            >
              Capture your ID
            </button>
  
            <button
              className=" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md"
              onClick={() => {
                setLoading(null);
              }}
            >
              Retake
            </button>
          </div>
        </div>
      </div>
    );
}

export default CaptureID;