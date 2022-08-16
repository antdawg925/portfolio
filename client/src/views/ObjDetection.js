import React, { useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs"
import { useNavigate } from "react-router-dom";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { DrawRect } from "../components/DrawRect";

const ObjDetection = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);
      console.log(obj[0].class + " " + (obj[0].score * 100) + " %");

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      console.log("obj", obj);
      DrawRect(obj, ctx);
    }
  };

  useEffect(() => {
    console.log("RunCOCO now");
    // Main function
    const runCoco = async () => {
      console.log(tf);
      console.log("At runCoco func trying to await cocossd.load");
      const net = await cocossd.load();
      console.log("Objs model loaded.");
      //  Loop and detect objs
      setInterval(() => {
        detect(net);
      }, 200)
    };
    // runCoco();
  }, []);

  return (
    <div className="App">
      <h3 className="head">
        A machine learning model using TensorFlow.Js to predict objects that appear in your webcam! 
      </h3>
      <h2 className="nav head" onClick={() => navigate("/")}>Home</h2>
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            margin: "auto",
            marginTop: "3rem",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}
export default ObjDetection;