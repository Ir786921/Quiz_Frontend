import React, { useState, useEffect, useRef } from "react";
import DetectRTC from "detectrtc";
import swal from "sweetalert";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ConnectionSpeed from "../assests/ConnectionSpeed";
import Webcam from "react-webcam";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const SystemCheck = () => {
  const [buttonViewDisabled, setButtonViewDisabled] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);
  const [iscamAllowed, setIscamAllowed] = useState(false);
  const [ismicAllowed, setIsmicAllowed] = useState(false);
  

  const [videostream, setVideosetStream] = useState(null);
  const [micstream, setMicsetStream] = useState(null);

  
  const path = useLocation().pathname;
  const videoRef = useRef(null);
  const micRef = useRef(null);

  const { id } = useParams();
  let progress = 0;

  let maxProgress = 100; // Set based on your target speech duration
  
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  

 
  const { transcript, listening, resetTranscript, finalTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const [volume, setVolume] = useState(0);
  function startSpeechRecognition() {

    SpeechRecognition.startListening();
    setVolume(finalTranscript.length)
    

}

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }




 
  

  

  useEffect(() => {
    const handleConnectionChange = () => {
      const connection = navigator.connection;
      if (connection) {
        setDownloadSpeed(connection.downlink);
      }
    };

    handleConnectionChange(); // Initial check

    if (navigator.connection) {
      navigator.connection.addEventListener("change", handleConnectionChange);
    }

    return () => {
      if (navigator.connection) {
        navigator.connection.removeEventListener(
          "change",
          handleConnectionChange
        );
      }
    };
  }, []);

  sessionStorage.setItem("netspeed", downloadSpeed);

  // Validate System Compatibility
  const ValidateCheck = () => {
    let allow = false;

    // Network Check
    const netSpeedVar = sessionStorage.getItem("netspeed");

    if (netSpeedVar > 2) {
      allow = true;
    }

    // Browser Check
    const browserCheck = (name, version) => {
      if (
        DetectRTC.browser.name === name &&
        DetectRTC.browser.version > version
      ) {
        allow = true;
      } else {
        swal("Please Update Browser or Try a Different Browser");
        allow = false;
      }
    };

    switch (DetectRTC.browser.name) {
      case "Chrome":
        browserCheck("Chrome", 80);
        break;
      case "Firefox":
        browserCheck("Firefox", 60);
        break;
      case "Safari":
        browserCheck("Safari", 12);
        break;
      case "Opera":
        browserCheck("Opera", 60);
        break;
      case "Edge":
        browserCheck("Edge", 80);
        break;
      default:
        swal("Unsupported Browser");
        allow = false;
        break;
    }

    // Final Approval
  };

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      setIscamAllowed(true); // Permission granted
    setVideosetStream(stream);
    } catch (error) {
      
    }
  };

  const requestMicPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log(stream);
      

      setIsmicAllowed(true); // Permission granted
      setMicsetStream(stream)
    } catch (error) {
    }
  };

  

  useEffect(() => {
    
    ValidateCheck();
  }, []);

  const handleClick = () => {
    
    
  };



  return (
    <>
      <div className=" tw-bg-[#34495e] tw-m-0">
        <div className="row tw-p-2">
          <h1 className=" text-center tw-p-2 tw-text-xl">
            System Compatibility Check
          </h1>
          <br />
          <div className="col-12 tw-p-2">
            <div className=" tw-w-1/2 tw-m-auto tw-flex tw-flex-wrap tw-gap-6 tw-justify-center">
              <div className=" tw-p-3 tw-rounded-md tw-flex tw-flex-col tw-gap-4 tw-outline tw-outline-sky-400 tw-shadow-md tw-bg-[#d7dbdd]">
                <p className=" tw-text-center tw-flex tw-justify-between ">
                  <span>Browser</span>
                  <span>
                    <i className="fa-brands fa-chrome tw-text-[#a8a9ad]"></i>
                  </span>{" "}
                </p>
                <span>
                  Name{" "}
                  {"- " + JSON.stringify(DetectRTC.browser.name).slice(1, -1)}
                </span>
                <span>
                  Version {"- " + JSON.stringify(DetectRTC.browser.version)}
                </span>
                <span>
                  Status {"- " + "Compatible"} &nbsp;{" "}
                  <i className="fa-solid fa-square-check tw-text-green-700"></i>
                </span>
              </div>
              <div className=" tw-p-3 tw-rounded-md tw-flex tw-flex-col tw-gap-4 tw-outline tw-outline-sky-400 tw-bg-[#d7dbdd]">
                <p className=" tw-text-center tw-flex tw-justify-between ">
                  <span>Internet</span>
                  <span>
                    <i className="fa-solid fa-wifi"></i>
                  </span>{" "}
                </p>
                <span>
                  Speed {"- " + sessionStorage.getItem("netspeed") + " mbps"}
                </span>
                <span>
                  Strength{" "}
                  {+(sessionStorage.getItem("netspeed") > 2)
                    ? "- Strong"
                    : "- Weak"}
                </span>
                <span>
                  Status {"- " + "Compatible"} &nbsp;{" "}
                  <i className="fa-solid fa-square-check tw-text-green-700"></i>
                </span>
                
              </div>
              <div className=" tw-p-3 tw-rounded-md tw-flex tw-flex-col tw-gap-4 tw-outline tw-outline-sky-400 tw-bg-[#d7dbdd]">
                <p className=" tw-text-center tw-flex tw-justify-between ">
                  <span>OS</span>
                  <span>
                    <i className="fa-brands fa-windows"></i>
                  </span>{" "}
                </p>
                <span>
                  Name {"- " + JSON.stringify(DetectRTC.osName, null, 2)}
                </span>
                <span>
                  Version{" "}
                  {"- " +
                    JSON.stringify(DetectRTC.osVersion, null, 0).slice(
                      1,
                      -1
                    )}{" "}
                </span>
                <span>
                  Status {"- " + "Compatible"} &nbsp;{" "}
                  <i className="fa-solid fa-square-check tw-text-green-700"></i>
                </span>
              </div>
              <div className=" tw-p-3 tw-rounded-md tw-flex tw-flex-col tw-gap-6 tw-outline tw-outline-sky-400">
                <p className=" tw-text-center tw-flex tw-justify-between ">
                  <span>Microphone</span>
                  <span>
                    <i className="fa-solid fa-microphone"></i>
                  </span>{" "}
                </p>
                <p>Name and Version</p>
                <p>Status</p>
                <button onClick={requestMicPermission} type="button">
                            Get Mic
                        </button>

                        <button onClick={startSpeechRecognition} type="button">
                            test mic
                        </button>

                        {ismicAllowed === true ? (
                  "granted"
                ) : (
                  <p>Please grant camera access to use this feature.</p>
                )}
      <progress max={100} value={transcript.length} className=" tw-w-full tw-h-4  tw-rounded-xl  tw-bg-green-600" > </progress>
    
              </div>
              <div className=" tw-p-3 tw-rounded-md tw-flex tw-flex-col tw-gap-6 tw-outline tw-outline-sky-400">
                <p className=" tw-text-center tw-flex tw-justify-between ">
                  <span>Camera</span>
                  <span>
                    <i className="fa-solid fa-camera"></i>
                  </span>{" "}
                </p>
                <p>Name and Version</p>
                <p>Status</p>
                <button onClick={requestCameraPermission} type="button">
                            Get Camera
                        </button>
                {iscamAllowed === true ? (
                  "granted"
                ) : (
                  <p>Please grant camera access to use this feature.</p>
                )}
              </div>
            
            </div>
            {/* {iscamAllowed === null && (
        <div>
          <p>Click the button to allow webcam access.</p>
          <button onClick={getMediaStream}>Allow Webcam Access</button>
        </div>
      )} */}

            <div className=" tw-flex tw-justify-center tw-mt-10">
              {" "}
              <Link to={`/testenv/:${id}`} className=" tw-px-6 tw-py-2 tw-text-center tw-rounded-md " onClick={handleClick()}>
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
    //   <body className="App-header">
    //   <div claclassNamess="main">
    //     <p className="sign" align="center">System Compatibility Check</p>
    //     <table align="center">
    //       <tbody><tr>
    //         <td className="text-center">
    //           <div>
    //             <img src="" id="classIcon" />
    //           </div>
    //         </td>
    //         <td>
    //           <ul>
    //             <li className="test">
    //               <span ><b>OS:</b>  {"- " + JSON.stringify(DetectRTC.osName, null, 2).slice(1, -1) + " " + JSON.stringify(DetectRTC.osVersion, null, 0).slice(1, -1)} </span>
    //             </li>
    //             <li class="test">
    //               <span><b>Browser:</b> {"- " + JSON.stringify(DetectRTC.browser.name).slice(1, -1) + " " + JSON.stringify(DetectRTC.browser.version)} </span>
    //             </li>
    //             <li class="test">
    //               <span><b>Internet Speed:</b> {"- " + sessionStorage.getItem("netspeed") + " mbps"} </span>
    //             </li>
    //             <li class="test">
    //               <span><b>Webcam:</b> {"- " + JSON.stringify(DetectRTC.hasWebcam)} </span>
    //             </li>
    //           </ul>
    //         </td>
    //       </tr>
    //       </tbody>
    //     </table>

    //     <center>
    //       <button

    //         className="activateButton"
    //         variant="contained"
    //         color="secondary"
    //         onClick={handleClick}>
    //         Activate Your WebCam and Network Check
    //         </button>
    //          <br/>
    //          <br/>
    //     </center>

    //     <center>
    //       <button
    //         size="large"
    //         disabled={buttonViewDisabled}
    //         variant='contained'
    //         color = "primary"
    //         onClick={openFullscreen}>
    //         Next
    //         </button>
    //     </center>

    //   </div>

    // </body>
  );
};

export default SystemCheck;
