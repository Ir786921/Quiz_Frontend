import { React, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import image1 from "../assests/Illustrator.png";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Registration from "./Registration.js";
import CaptureImage from "./CaptureImage.js";
import CaptureID from "./CaptureID.js";

const Verification = () => {
  const { id } = useParams();

  const UserDetails = useSelector((store) => store.User);
  console.log(UserDetails);

  const photoRef = useRef(null);

  //  const capture =  ()=>
  //    {
  const videoRef = useRef(null);

  const [Id, setId] = useState("");
 
  const [regisTab, setRegisTab] = useState(true);
  const [capImg, setCapImg] = useState(false);
  const [capId, setCapId] = useState(false);

  const [loading, setLoading] = useState(false);
  const capturePhoto = useCallback(async () => {
    const imageSrc = videoRef?.current?.getScreenshot();
    setLoading(imageSrc);
  }, [videoRef]);

  return (
    <div className="container-fluid p-4">
      <div className="row p-0 m-0">
        

        <div className="col-md-12  p-0 m-0">
        

          <div className="tw-border tw-border-solid tw-rounded-md tw-shadow-md">
            <h1 className=" tw-bg-gray-200 tw-flex tw-gap-4 tw-text-sm tw-p-2  tw-rounded-tl-md tw-rounded-tr-md  hover:tw-border-b-black">
              {" "}
              <span className="tw-border-2 tw-p-2 tw-border-solid tw-border-gray-200 hover:tw-cursor-pointer  hover:tw-border-b-black"
              onClick={()=>{
                setCapId(false)
                setCapImg(false)
                setRegisTab(true)

              }}>
                {" "}
                Registration
              </span>
              <span className="tw-border-2 tw-p-2 tw-border-solid tw-border-gray-200 hover:tw-cursor-pointer  hover:tw-border-b-black"
               onClick={()=>{
                setCapId(false)
                setCapImg(true)
                setRegisTab(false)

              }}>
                {" "}
                Capture Image
              </span>
              <span className="tw-border-2 tw-p-2 tw-border-solid tw-border-gray-200 hover:tw-cursor-pointer  hover:tw-border-b-black"
                onClick={()=>{
                setCapId(true)
                setCapImg(false)
                setRegisTab(false)

              }}>
                {" "}
                Capture Card
              </span>
            </h1>
            <div className=" tw-p-2">
              {/*  */}
            </div>
        {regisTab &&  <Registration />}
        {capImg &&  <CaptureImage />}
        {capId && <CaptureID />} 

            {/* <div className=" tw-p-2">
              <button
                className=" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md"
                onClick={capturePhoto}
              >
                Take a Picture
              </button>
            </div> */}
          </div>

          

          {/* <div className=" border border-success tw-mt-[100] tw-rounded-md sm:tw-w-[401] tw-w-96 tw-shadow-md border border-success">
            <Webcam
              height={400}
              width={400}
              className="tw-object-cover"
              screenshotFormat="image/jpeg"
              ref={videoRef}
            />
          </div> */}
          {/* <img src={`${loading}`} />
          <button
            className=" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md"
            onClick={capturePhoto}
          >
            Take a Snapshot
          </button> */}
          {/* <button
            className=" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md"
            onClick={() => {
              setLoading(null);
            }}
          >
            Retake
          </button> */}
          <br />
         
          <Link
            to={`/systemcheck/:${id}`}
            className="tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md tw-no-underline tw-text-black"
          >
            Proceed to the test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Verification;
