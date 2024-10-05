import { React, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import image1 from "../assests/Illustrator.png";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Verification = () => {
  const { id } = useParams();


  const UserDetails = useSelector(store => store.User);
  console.log(UserDetails);


  const photoRef = useRef(null);

  //  const capture =  ()=>
  //    {
  const videoRef = useRef(null);
  const [name ,setName] = useState("Enter your Name");
  const [email ,setEmail] = useState("Enter your email");
  const [Id ,setId] = useState("");
  const [mobile ,setMobile] = useState("");

  const [loading, setLoading] = useState(false);
  const capturePhoto = useCallback(async () => {
    const imageSrc = videoRef?.current?.getScreenshot();
    setLoading(imageSrc);
  }, [videoRef]);




  return (
    <div className="container-fluid p-4">
      <div className="row p-0 m-0">
        <div className="col-md-6 p-0 m-0 tw-flex tw-justify-center tw-items-center tw-flex-col">
          <div className=" tw-w-full tw-flex tw-justify-start ">
            {" "}
            <h1>Good, Luck!!</h1>
          </div>
          <img src={image1} alt="" className=" tw-w-2/3 tw-h-2/3" />

          <div className=" sm:tw-w-1/2 tw-w-1/2 tw-flex tw-justify-center tw-items-center tw-gap-5 tw-flex-col tw-p-4 tw-rounded-md tw-shadow-xl sm:tw-ml-10 sm:tw-mt-[-180] border border-success tw-mt-[-50] tw-ml-10">
            <input
              type="text"
              name=""
              id=""
              className=" tw-w-full tw-p-2 tw-rounded-md"
              placeholder="Enter your Name"
              value={UserDetails?.displayName ? UserDetails?.displayName : name }
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />

            <input
              type="text"
              className="tw-w-full tw-p-2 tw-rounded-md"
              placeholder="Enter your email"
              value={UserDetails?.email ? UserDetails?.email : email }
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />

            <input
              type="text"
              className=" tw-w-full tw-p-2 tw-rounded-md"
              placeholder="Enter your rollno/unique id"
              value={Id}
              onChange={(e)=>{
                setId(e.target.value)
              }}
            />
            <input
              type="tel"
              className=" tw-w-full tw-p-2 tw-rounded-md"
              placeholder="Enter your Mobile phone"
              value={mobile}
              onChange={(e)=>{
                setMobile(e.target.value)
              }}
            />
            <button className=" tw-p-2 tw-w-full tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md tw-text-lg"
            >
              {" "}
              Submit
            </button>
          </div>
        </div>
        <br />
        <div className="col-md-6 tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-3 p-0 m-0">
          <div className=" tw-w-full tw-p-2 tw-shadow-md tw-rounded-md border border-success">
            <p className=" tw-text-lg">
              {" "}
              1) Position your face within the camera frame
            </p>
            <p className=" tw-text-lg">
              2) If the picture is blurry ,Retake picture
            </p>
            <p className="tw-text-lg">
              3) Sit in clear and Noiseless Background
            </p>
          </div>

          <div className=" border border-success tw-mt-[100] tw-rounded-md sm:tw-w-[401] tw-w-96 tw-shadow-md border border-success">
            <Webcam
              height={400}
              width={400}
              className="tw-object-cover"
              screenshotFormat="image/jpeg"
              ref={videoRef}
            />
          </div>
          <img src={`${loading}`} />
          <button
            className=" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md"
            onClick={capturePhoto}
          >
            Take a Snapshot
          </button>
          <button
            className=" tw-px-8 tw-py-2 tw-bg-green-500 tw-border-0 tw-rounded-md tw-shadow-md"
            onClick={() => {
              setLoading(null);
            }}
          >
            Retake
          </button>
          <br />
          <Link
            to={`/testenv/${id}`}
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
