import React, { useRef, useEffect } from "react";
import swal from 'sweetalert';
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

import Webcam from "react-webcam";
var count_facedetect = 0;

const Detection = () => {
    
        const videoRef = useRef(null);
        const canvasRef = useRef(null);
      
        
  useEffect(() => {
    const runCoco = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const webCamPromise = navigator.mediaDevices
          .getUserMedia({
            audio: false,
            video: {
              facingMode: "user",
              width: 500,
              height: 300,
            },
          })
          .then((stream) => {
            window.stream = stream;
            videoRef.current.srcObject = stream;
            return new Promise((resolve) => {
              videoRef.current.onloadedmetadata = () => {
                resolve();
              };
            });
          });

        const modelPromise = cocoSsd.load();

        Promise.all([modelPromise, webCamPromise])
          .then((values) => {
            detectFrame(videoRef.current, values[0]);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };

    runCoco();
  }, []);

  const detectFrame = (video, model) => {
    model.detect(video).then((predictions) => {
      if (canvasRef.current) {
        renderPredictions(predictions);
        requestAnimationFrame(() => {
          detectFrame(video, model);
        });
      }
    });
  };

  const renderPredictions = (predictions) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";

    predictions.forEach((prediction) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];

    //   // Draw the bounding box.
    //   ctx.strokeStyle = "#00FFFF";
    //   ctx.lineWidth = 2;
    //   ctx.strokeRect(x, y, width, height);

    //   // Draw the label background.
    //   ctx.fillStyle = "#00FFFF";
    //   const textWidth = ctx.measureText(prediction.class).width;
    //   const textHeight = parseInt(font, 10); // base 10
    //   ctx.fillRect(x, y, textWidth + 8, textHeight + 8);

      for (let i = 0; i < predictions.length; i++) {
        // Face, object detection
        if (predictions[i].class === "cell phone") {
          swal("Cell Phone Detected", "Action has been Recorded", "error");
          count_facedetect += 1;
        } else if (predictions[i].class === "book") {
          swal("Object Detected", "Action has been Recorded", "error");
          count_facedetect += 1;
        } else if (predictions[i].class === "laptop") {
          swal("Object Detected", "Action has been Recorded", "error");
          count_facedetect += 1;
        } else if (predictions[i].class !== "person") {
          swal("Face Not Visible", "Action has been Recorded", "error");
          count_facedetect += 1;
        }
      }
    });

    predictions.forEach((prediction) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];

      ctx.fillStyle = "#000000";
      if (
        prediction.class === "person" ||
        prediction.class === "cell phone" ||
        prediction.class === "book" ||
        prediction.class === "laptop"
      ) {
        ctx.fillText(prediction.class, x, y);
      }
    });

    sessionStorage.setItem("count_facedetect", count_facedetect);
  };
        
      
  return (
    <div className="">
        <video
          className="tw-w-full"
          autoPlay
          playsInline
          muted
          ref={videoRef}
          
        />
        <canvas
          className="tw-hidden"
          ref={canvasRef}
          width="250"
          height="300"
        />
      </div>
  )
}

export default Detection;