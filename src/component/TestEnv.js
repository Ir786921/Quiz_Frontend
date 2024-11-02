import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import alltestContext from "../utils/Context";
import { Link } from "react-router-dom";
import axios from "axios";
import Store from "../Redux/reduxStore";
import Detection from "./Detection";
import UserResponseSlice, { addResponse } from "../Redux/UserResponseSlice";
import { useDispatch, useSelector } from "react-redux";
import CountdownTimer from "./Timer";



const TestEnv = () => {
  const { newInst, newDuration, newTitle, ALLTEST } =
    useContext(alltestContext);

  const [searchParams, setSearchParams] = useSearchParams();
  var path = parseInt(searchParams.get("v1"));
  const [apidata, setApidata] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState(path);
  const [userResponses, setUserResponses] = useState({});
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  const newData = [];

  apidata.map((item) => {
    const data = {
      Question: item.Question,
      options: [item.option1, item.option2, item.option3, item.option4],
      correctAnswer: item.Answer,
      QuestionId: item.quesId,
    };

    newData.push(data);
  });

  const [clicked, setClicked] = useState(false);
  const [next, setNext] = useState(path);
  const [previous, setPrevious] = useState(false);

  const [markfor, setMarkfor] = useState(false);
  const [key, setKey] = useState(path + 1);
  var stringpath = `key${path}`;
  var j = 1;

  const history = useNavigate();
  const [optionNo, setOptionNo] = useState("0");

  const [getanswer, setGetanswer] = useState(" ");

  const UserResponse = useSelector((Store) => Store.userResponse.item);
  const dispatch = useDispatch();
  const fullUrl = window.location.href;
  console.log(fullUrl);
  console.log(UserResponse);

  const [data, setData] = useState([]);

  const { id } = useParams();
  const FilteredObj = ALLTEST.filter((ele) => {
    return ele.id == id;
  });

  

  

  const sendToBackend = {
    QuestionNo: path,
    selectedAnswer: userResponses[path],

    status: userResponses.hasOwnProperty(path) ? " Answered" : "not Answered",

    QuizCategory: FilteredObj[0]?.name,
  };

  console.log(sendToBackend);
  console.log(userResponses.currentQuestions);
  const openFullscreen = () => {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      history(`/testenv/${id}`);
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
      history(`/testenv/${id}`);
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
      history(`/testenv/${id}`);
    }
  };
 
  const clickHandle = (e, id) => {
    setClicked(true);
    setSearchParams({ v1: e.target.innerText });
    setCurrentQuestions(path);

    setKey(id);
    setGetanswer(" ");
  };

  function clickNext() {
    if (path < apidata.length - 1) {
      setSearchParams({ v1: path + 1 });

      setOptionNo(0);
    }
  }

  function clickPrevious() {
    if (path > 0) {
      setSearchParams({ v1: path - 1 });
    }
  }

  const targetTime =
    new Date().getTime() + (((24 / 24) * (60 * 15)) / 60) * 60 * 1000;

  function clearResponse() {
   setUserResponses({});
   const currentDiv = document.getElementById(`key${path}`);
    currentDiv.style.backgroundColor = "#e5e7eb";
  }

  var i = 1;
  useEffect(() => {
    openFullscreen()
    getapi();
  }, []);

  // useEffect(() => {
  //  postData();
  // }, [path]);

  // async function postData() {
  //   try {
  //     const { markForReview, selectedAnswer, status, QuestionNo } =
  //       UserResponse;
  //     const response = await fetch("http://localhost:8000/quiz/useranswer", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         markForReview: markForReview,
  //         selectedAnswer: selectedAnswer,
  //         status: status,
  //         QuestionNo: QuestionNo,
  //       }),
  //     });

  //     const result = await response.json();
  //     setData(result);
  //   } catch (error) {
  //     console.error("Error sending data:", error);
  //   }
  // }

  const date = new Date();
  const Hour = date.getHours();
  console.log(Hour);
  const Min = date.getMinutes();
  const sec = date.getSeconds();

  const handleOptionSelect = (event) => {
    const { value } = event.target;
    const { id } = event.target;
    console.log(id);

    setUserResponses({
      ...userResponses,
      [path]: value,
    });
  };
  console.log(userResponses);

  async function getapi() {
    const response = await fetch(`http://localhost:3000/api/aptitude/timework`);
    const result = await response.json();
    setApidata(result);
  }

  if (userResponses.hasOwnProperty(path)) {
    const currentDiv = document.getElementById(`key${path}`);
    currentDiv.style.backgroundColor = "#4ADE80";
  }
  console.log();

  return (
    <div className="container-fluid  p-0">
      <div className="row">
        <h3 className="text-center p-2 tw-bg-fuchsia-200">
          {FilteredObj[0]?.name}
        </h3>
        <div className="col-md-3 tw-p-3">
          <h4>Question Platlee</h4>
          <hr />
          <div className=" tw-flex tw-gap-4 tw-flex-wrap tw-p-2">
            {/* <QuestionNo apidata = {apidata} path = {path} clickHandle = {clickHandle} /> */}
            {apidata.map((item) => {
              return (
                <div
                  key={item.quesId}
                  className={`tw-cursor-pointer tw-w-16 tw-h-16 rounded-circle tw-flex tw-justify-center tw-items-center tw-bg-gray-200 tw-shadow-md`}
                  id={`key${j++}`}
                  onClick={() => {
                    clickHandle(event, item.quesId);
                  }}
                >
                  <span>{i++}</span>
                </div>
              );
            })}
          </div>
          <br />
          <hr />
          <div className=" tw-flex tw-justify-start tw-items-center">
            <div className=" border border-success tw-w-16 tw-h-16 rounded-circle tw-flex tw-justify-center tw-items-center tw-bg-gray-200 tw-shadow-md">
              <span className=" tw-text-lg">{1}</span>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p className=" tw-text-lg">Not Answered</p>
          </div>

          <br />
          <div className=" tw-flex tw-justify-start tw-items-center">
            <div className=" border border-success tw-w-16 tw-h-16 rounded-circle tw-flex tw-justify-center tw-items-center tw-bg-green-500 tw-shadow-md">
              <span className=" tw-text-lg">{1}</span>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p className=" tw-text-lg"> Answered</p>
          </div>
          <br />

          <p className=" tw-text-lg">
            Answered question consider for evaluation
          </p>
        </div>
        <div className="col-md-6 tw-p-3">
          <h4>Question {path}:</h4>
          <hr />
          <div>
            <h5 className=" tw-text-start">{apidata[path]?.Question}</h5>
            <br />
            <br />
            <h5>Select only one :</h5>
          </div>
          <br />
          {newData[path]?.options.map((item, index) => {
            return (
              <div key={index}>
                <>
                  {/* <label>{item}</label> */}
                  <div
                    id="1"
                    className={` tw-m-6 tw-flex tw-gap-6 tw-border-2 tw-border-gray-200 tw-border-solid tw-p-5 tw-rounded-lg hover:tw-shadow-md hover:tw-border-green-600 ${
                      index === "1" ? "tw-bg-green-500" : "tw-border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      className=" tw-h-[20px] tw-w-[20px] active:tw-bg-green-500"
                      name={`question_${path}`}
                      id={`question_${path + index}`}
                      value={item}
                      checked={userResponses[path] === item}
                      onChange={() => handleOptionSelect(event)}
                    />

                    <label
                      htmlFor={`question_${path + index}`}
                      id={index + 1}
                      className="answer1 tw-text-xl tw-items-center tw-flex tw-justify-center"
                    >
                      {item}
                    </label>
                  </div>
                </>
              </div>
            );
          })}

          <div className=" tw-p-2 tw-flex tw-justify-between">
            <div className=" tw-flex tw-justify-between tw-gap-6">
              <div>
                {" "}
                <button
                  onClick={() => {
                    clearResponse();
                  }}
                  className=" tw-px-4 tw-py-2 tw-bg-green-400 tw-rounded-md tw-shadow-md tw-border-0 tw-text-lg"
                >
                  {" "}
                  Clear Response
                </button>
              </div>
            </div>
            <div className=" tw-flex tw-justify-between tw-gap-6">
              <div>
                <button
                  disabled={path === 0}
                  className=" tw-px-6 tw-py-2 tw-bg-green-400 tw-rounded-md tw-shadow-md tw-border-0 tw-text-lg"
                  onClick={() => {
                    clickPrevious();
                  }}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  disabled={path === apidata.length - 1}
                  className=" tw-px-6 tw-py-2 tw-bg-green-400 tw-rounded-md tw-shadow-md tw-border-0 tw-text-lg"
                  onClick={() => {
                    clickNext();
                  }}
                >
                  Save & Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">

        <div className="">
             <Detection/>
          </div>
         
         <div className=" tw-flex tw-flex-col tw-justify-center tw-gap-3">
         <div className=" tw-flex tw-justify-start tw-items-center">
              {" "}
              <h3>User Name</h3>
            </div>

            <div className="  tw-flex tw-justify-center tw-items-center tw-p-2 tw-bg-gray-200 tw-rounded-md">
              <h4 className=" tw-text-center tw-m-auto">
                {" "}
                <CountdownTimer targetTime={targetTime} />
              </h4>
            </div>

            <div className=" tw-flex tw-justify-center">
            <button className=" tw-bg-green-500 tw-px-6 tw-py-[5px] tw-border-0 tw-text-xl tw-shadow-lg tw-rounded-md">
              End Test
            </button>
          </div>
         </div>
          

          {/* <div className=" tw-flex tw-justify-end">
            <button className=" tw-bg-green-500 tw-px-6 tw-py-[5px] tw-border-0 tw-text-xl tw-shadow-lg tw-rounded-md">
              End Test
            </button>
          </div>
          <hr />

          <div className="">
          <div className=" tw-flex tw-justify-center tw-items-center">
             <Detection/>
          </div>
            <div className=" tw-bg-gray-300 tw-rounded-full tw-border tw-border-black tw-border-solid tw-w-[50px] tw-h-[50px] tw-flex tw-justify-center tw-items-center">
              <h3 className=" tw-text-gray-500 tw-m-auto">I</h3>
            </div>
            <div className=" tw-flex tw-justify-center tw-items-center">
              {" "}
              <h3>User Name</h3>
            </div>
          </div>

          <div className=" tw-flex tw-justify-start tw-gap-6 tw-bg-gray-100 tw-p-2">
            <div>
              <h4 className=" tw-font-semibold tw-p-2">Time Left &nbsp; :</h4>
            </div>
            <div className="  tw-flex tw-justify-center tw-items-center tw-p-2 tw-bg-gray-200 tw-rounded-md">
              <h4 className=" tw-text-center tw-m-auto">
                {" "}
                <CountdownTimer targetTime={targetTime} />
              </h4>
            </div>
          </div>

          <hr />
          
          

          <br /> */}
        </div>
      </div>
    </div>
  );
};

export default TestEnv;
