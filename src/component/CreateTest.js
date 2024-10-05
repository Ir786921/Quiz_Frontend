import React, { useContext } from "react";
import React, { useState } from "react";
import alltestContext from "../utils/Context";
import TestCard from "./TestCard";

const CreateTest = () => {
  const {
    setNewTitle,
    setNewDuration,
    setNewInst,
    ALLTEST,
    newTest,
    newTitle,
    newInst,
  } = useContext(alltestContext);
  const [newQuestion, setNewQuestion] = useState("");
  const [newOption1, setNewOption1] = useState("");
  const [newOption2, setNewOption2] = useState("");
  const [newOption3, setNewOption3] = useState("");
  const [newOption4, setNewOption4] = useState("");
  const [newanswer, setNewAnswer] = useState("");

  function clickHandle() {
    const obj = {
      name: newTitle,
      icon: "fa-solid fa-pen-to-square tw-text-white tw-text-4xl m-auto",
      desc: newInst,
      part: "Your Tests",
    };
    newTest.push(obj);
    ALLTEST.push(obj);
    setNewTitle(" ");
    setNewInst(" ");
  }

 
  function AddQuestion() {
    postData();
    setNewQuestion("");
    setNewOption1("");
    setNewOption2("");
    setNewOption3("");
    setNewOption4("");
    setNewAnswer("");
  }

  // useEffect(() => {
  //  postData();
  // }, [path]);

  async function postData() {
    try {
      const response = await fetch(
        `https://backendformajor.onrender.com/quiz/customtest/${newTitle}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Question: newQuestion,
            option1: newOption1,
            option2: newOption2,
            option3: newOption3,
            option4: newOption4,
            Answer: newanswer,
          }),
        }
      );

      const result = await response.json();
      if (result) {
        alert("Data saved succesfully");
       
    }
      
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }

  return (
    <div className="container border border-success tw-p-2 tw-shadow-md tw-rounded-md">
      <h4 className="text-center mt-2 tw-text-emerald-600">
        Create your own customize test
      </h4>
      <br />
      <div className="m-auto  tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3">
        <input
          type="text"
          className=" tw-w-2/5 tw-p-2 tw-text-lg tw-rounded-md"
          placeholder="Enter the Title of Test"
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <input
          type="tel"
          className="tw-w-2/5 tw-p-2 tw-rounded-md"
          placeholder="Enter the duration of the test"
          onChange={(e) => {
            setNewDuration(e.target.value);
          }}
        />
      </div>
      <br />
      <div className=" tw-flex tw-flex-col tw-justify-center tw-rounded-md tw-gap-4">
        <textarea
          name=""
          id=""
          cols="100"
          rows="5"
          className="m-auto tw-w-4/5 tw-text-lg tw-p-2 tw-rounded-md"
          placeholder="Enter the Instruction for the test in serial number.. "
          onChange={(e) => {}}
        ></textarea>

        <input
          type="text"
          className="tw-w-4/5 tw-m-auto tw-p-2 tw-rounded-md"
          placeholder="Enter type of test example Coding Programming,Aptitude & Reasoning,Technical Assessment,Foundation schools,Domain Specific Roles"
          onChange={(e) => {
            setNewInst(e.target.value);
          }}
        />
      </div>
      <br />
      <div className=" tw-p-2 border border-success tw-flex tw-flex-col tw-justify-center tw-bg-gray-100 tw-shadow-xl tw-rounded-md">
        <textarea
          name=""
          id=""
          cols="100"
          rows="5"
          className="m-auto tw-w-4/5 tw-text-lg tw-p-2 tw-rounded-md"
          placeholder="Enter your Questions"
          value={newQuestion}
          onChange={(event) => {
            setNewQuestion(event.target.value);
          }}
        ></textarea>
        <br />
        <div className=" tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3">
          <input
            type="text"
            className=" tw-w-2/5 tw-p-2 tw-text-lg tw-rounded-md"
            placeholder="Enter the option 1"
            value={newOption1}
            onChange={(event) => {
              setNewOption1(event.target.value);
            }}
          />
          <input
            type="tel"
            className="tw-w-2/5 tw-p-2 tw-rounded-md"
            placeholder="Enter the option 2"
            value={newOption2}
            onChange={(event) => {
              setNewOption2(event.target.value);
            }}
          />
        </div>
        <div className="tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3">
          <input
            type="text"
            className=" tw-w-2/5 tw-p-2 tw-text-lg tw-rounded-md"
            placeholder="Enter the option 3"
            value={newOption3}
            onChange={(event) => {
              setNewOption3(event.target.value);
            }}
          />
          <input
            type="tel"
            className="tw-w-2/5 tw-p-2 tw-rounded-md"
            placeholder="Enter the option 4"
            value={newOption4}
            onChange={(event) => {
              setNewOption4(event.target.value);
            }}
          />
        </div>
        <div className=" tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3">
          <input
            type="text"
            className=" tw-w-[81%] tw-p-2 tw-text-lg tw-rounded-md"
            placeholder="Enter the Answer here"
            value={newanswer}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </div>
        <div className=" tw-p-4 tw-flex tw-flex-row tw-justify-center tw-gap-3">
          <button
            className="tw-bg-green-600 tw-border-0 tw-p-2 tw-rounded-md tw-text-lg tw-text-white tw-shadow-md"
            onClick={AddQuestion}
          >
            Add Question
          </button>
        </div>
      </div>
      <div className="tw-p-4 tw-flex tw-flex-row tw-justify-center tw-mt-3 tw-gap-3">
        <button
          className="tw-bg-green-600 tw-border-0 tw-px-4 tw-py-2 tw-rounded-md tw-text-lg tw-text-white"
          onClick={clickHandle}
        >
          Create a Test
        </button>
      </div>
    </div>
  );
};

export default CreateTest;
