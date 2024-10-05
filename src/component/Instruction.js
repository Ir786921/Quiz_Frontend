import React, { useContext } from "react";
import alltestContext from "../utils/Context";
import { Link, useParams } from "react-router-dom";

const Instruction = () => {
  const { newInst, newDuration, newTitle, ALLTEST } =
    useContext(alltestContext);
  let { id } = useParams();

  const FilteredObj = ALLTEST.filter((ele) => {
    return ele.id == id;
  });
  console.log(FilteredObj);
  return (
    <div className="container-fluid tw-bg-[#F5F6F6]">
      <div className="row tw-p-2">
        <h1 className="text-center tw-font-bold tw-m-6">
          {FilteredObj[0]?.name}&nbsp;:&nbsp;Find top candidates with our
          pre-employment assessment
        </h1>
       
        <div className="col-md-6 tw-flex-col tw-p-4">
        <Link to="/test" className="tw-no-underline tw-px-8 tw-py-2 tw-border-0 tw-bg-gray-200 tw-rounded-md tw-text-lg tw-text-green-400">Back to test library</Link>
       
          <h4 className="tw-mb-3 tw-mt-5">Description of {FilteredObj[0]?.name} test</h4>
          <p className=" tw-text-xl tw-text-gray-500">{FilteredObj[0]?.desc}</p>
          <p className=" tw-text-xl tw-text-gray-500">
             {FilteredObj[0]?.summary}  
            </p>
            <p className="tw-text-xl tw-text-gray-500">
            Candidates who perform well on this test are best fit in moving forward in hiring process.
          </p>
          
          
          <h3>Some Instruction before starting test</h3>
        
          <p className=" tw-text-xl tw-text-slate-500">
          <i class="fa-solid fa-circle tw-text-sm tw-text-green-500"></i> &nbsp;Test is of {newDuration === " "?FilteredObj[0]?.time:newDuration}
          </p>
          <p className=" tw-text-xl tw-text-slate-500">
          <i class="fa-solid fa-circle tw-text-sm tw-text-green-500"></i> &nbsp;Allow Camera and Microphone
          </p>
          <p className=" tw-text-xl tw-text-slate-500">
          <i class="fa-solid fa-circle tw-text-sm tw-text-green-500"></i> &nbsp;Do not indulge in unfair means,otherwise disqualified
          </p>
          <p className=" tw-text-xl tw-text-slate-500">
          <i class="fa-solid fa-circle tw-text-sm tw-text-green-500"></i> &nbsp;Do not switch tab during test
          </p>
          <p className=" tw-text-xl tw-text-slate-500">
          <i class="fa-solid fa-circle tw-text-sm tw-text-green-500"></i> &nbsp;Give test using laptop/pc only
          </p>
          <p className=" tw-text-xl tw-text-slate-500">
          <i class="fa-solid fa-circle tw-text-sm tw-text-green-500"></i> &nbsp;This test is A.I Pro Proctored

          </p>
          <br />
          <h3>Use the {FilteredObj[0].name} test to hire</h3>
          <p className=" tw-text-xl tw-text-slate-500">
                {FilteredObj[0].hire}
          </p>
        </div>
        <div className="col-md-6 tw-flex tw-justify-center tw-items-center tw-gap-1 tw-flex-col">
          <div className=" tw-flex tw-justify-center tw-items-center tw-gap-1">
          <div className=" tw-flex tw-justify-center tw-items-center tw-flex-col tw-bg-white tw-rounded-tl-md tw-p-3 tw-w-72">
          <i class="fa-solid fa-file-lines tw-text-green-400 tw-text-4xl tw-p-2"></i>
            <h4>type</h4>
            <p>{FilteredObj[0]?.part}</p>
          </div>
          <div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-bg-white tw-rounded-tr-md tw-p-3 tw-w-72">
          <i class="fa-regular fa-clock tw-text-green-400 tw-text-4xl tw-p-2"></i>
            <h4>Time</h4>
            <p>{FilteredObj[0]?.time}</p>
          </div>
          </div>

          <div className=" tw-flex tw-justify-center tw-items-center tw-gap-1">
          <div className=" tw-flex tw-justify-center tw-items-center tw-flex-col tw-bg-white tw-rounded-bl-md tw-p-3 tw-w-72">
          <i class="fa-regular fa-flag tw-text-green-400 tw-text-4xl tw-p-2"></i>
            <h4>Language</h4>
            <p>English</p>
          </div>
          <div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-bg-white tw-rounded-br-md tw-p-3 tw-w-72">
          <i class="fa-solid fa-chart-simple tw-text-green-400 tw-text-4xl tw-p-2"></i>
            <h4>Level</h4>
            <p>{FilteredObj[0]?.level}</p>
          </div>
          </div>
            <br />
            <br />
          <Link to={`/verification/${id}`} className=" tw-no-underline tw-px-10 tw-rounded-md tw-shadow-md tw-py-3 hover:tw-bg-green-500 tw-bg-[#31766A] tw-text-white tw-text-lg tw-border-0">Get Started</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Instruction;
