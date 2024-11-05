import React from "react";
import logo from "../assests/logo.png";
import back1 from "../assests/back1.avif";
import { Link } from "react-router-dom";
import Image1 from "../assests/Test_Your_Self-removebg-preview.png";
import Image2 from "../assests/Analysis-removebg-preview.png";
import Image3 from "../assests/progress2-removebg-preview.png";

const Home = () => {
  return (
    <div className="container-fluid tw-mt-[74]">
      <div className="row">
        <div className="col-12 tw-flex tw-justify-center tw-bg-gradient-to-tl tw-from-[#2d545e] tw-to-[#e1b382]">
          <div className="m-5 p-3 tw-flex tw-justify-center tw-flex-col tw-items-center">
            <img
              src={logo}
              alt="logo"
              className="tw-w-96 tw-h-64 tw-object-contain tw-bg-transparent"
            />
            <br />
            <h1 className="text-center tw-text-gray-200">
              Powerful, Database-based Online Assessment Platform
            </h1>
            <br />
            <h6 className="text-center tw-text-xl tw-text-gray-300">
              {" "}
              A one-stop platform for all your assessments needs <br />
              Hire best talent using Testify
            </h6>
            <br />
            <Link to="/test" className="btn btn-success tw-w-48">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className=" tw-p-2 ">
        <br />
        <h1 className=" tw-text-center tw-font-bold">Hiring made easy.</h1>{" "}
      </div>
      <p className=" tw-text-center tw-contrast-50 md:tw-ml-20">
        Building assessments is a breeze with Testify. Get started with these
        simple steps.
      </p>
      <br />

      <div className="row tw-p-4 ">
        <div className=" offset-md-1 col-md-3 tw-p-2 tw-flex tw-justify-center ">
          <div className=" tw-flex tw-justify-center tw-flex-col ">
            <i class="fa-solid fa-gear tw-text-8xl tw-m-auto tw-text-[#49A997]"></i>
            <h5 className=" text-center tw-mt-2 tw-font-bold">Step 1</h5>
            <h6 className=" tw-text-center tw-font-bold">
              Create high-quality assessments, fast.
            </h6>
            <p className=" tw-text-center tw-contrast-50">
              Pick the perfect assessment name, select the tests that work for
              you, and get personal with your own custom questions.
            </p>
          </div>
        </div>

        <div className=" offset-md-1 col-md-3 tw-p-2 tw-flex tw-justify-start">
          <div className=" tw-flex tw-justify-start tw-flex-col ">
            <i class="fa-solid fa-envelope-open-text tw-text-8xl tw-m-auto tw-text-[#49A997]"></i>
            <h5 className=" text-center tw-mt-2 tw-font-bold">Step 2</h5>
            <h6 className=" tw-text-center tw-font-bold">
              Invite candidates your way.
            </h6>
            <p className=" tw-text-center tw-contrast-50">
              Connect with candidates by sending email invites directly from
              Testify, straight from your ATS or sharing a direct link.
            </p>
          </div>
        </div>

        <div className=" offset-md-1 col-md-3 tw-p-2 tw-flex tw-justify-center ">
          <div className=" tw-flex tw-justify-center tw-flex-col ">
            <i class="fa-solid fa-chart-simple tw-text-8xl tw-m-auto tw-text-[#49A997]"></i>
            <h5 className=" text-center tw-mt-2 tw-font-bold">Step 3</h5>
            <h6 className=" tw-text-center tw-font-bold">
              Analyze and decide on the best candidates.
            </h6>
            <p className=" tw-text-center tw-contrast-50">
              Receive real-time assessment results, compare your candidates
              instantly, and go in-depth with a candidate review.
            </p>
          </div>
        </div>
      </div>

      <div className=" tw-flex tw-justify-center tw-p-2">
        <Link
          to="/test"
          className=" tw-no-underline tw-px-8 tw-py-2 tw-bg-[#44AA97] tw-mt-10 tw-rounded-md tw-shadow-md tw-border-0 tw-text-slate-200"
        >
          {" "}
          Try Now for free
        </Link>
      </div>
      <br />
      <div className="tw-bg-[#EDFCF7] tw-p-2">
        <h1 className=" tw-text-center tw-font-bold tw-p-4">What Can you Do</h1>

        <div className="row">
          <div className="offset-md-1 col-md-3 tw-p-2 tw-flex-col tw-justify-center tw-gap-6 text-center">
            <p className=" tw-font-bold tw-text-xl">Test Your Prepration</p>
            <img className=" tw-h-48" src={Image1} alt="Image" />
            <p className=" tw-mt-4 tw-text-center tw-contrast-50">
              Use Our interactive Quizzes to assess and enhance your knowledge
              and readiness for exams or challenges.
            </p>
          </div>
          <div className="offset-md-1 col-md-3 tw-p-2 tw-flex-col tw-justify-center tw-gap-6 text-center">
            <p className=" tw-font-bold tw-text-xl">Track Your Progress</p>
            <img className=" tw-h-48 " src={Image3} alt="Image" />
            <p className=" tw-mt-4 tw-text-center tw-contrast-50">
              Users can monitor their progress over time with dashboards,
              performance reports, and historical data analysis.
            </p>
          </div>
          <div className="offset-md-1 col-md-3 tw-p-2 tw-flex-col tw-justify-center tw-gap-6 text-center">
            <p className=" tw-font-bold tw-text-xl">Analyze Your Mistake</p>
            <img className=" tw-h-48" src={Image2} alt="Image" />
            <p className=" tw-mt-4 tw-text-center tw-contrast-50">
              We detailed performance analytics to help you improve and
              succeed,Automated grading highlighting strengths and areas for
              improvement.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 tw-p-2">
          <h1 className=" tw-mt-2 text-center tw-text-[32px]">
            Check your Knowledge on{" "}
            <span className=" tw-text-[#49A997]">
              Specific Skill or technology
            </span>
          </h1>
          <br />
          <div className=" tw-flex tw-flex-col tw-gap-8">
          <div className=" tw-flex tw-flex-wrap tw-justify-center tw-gap-6">
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/c.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">C</small>
          </span>
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/cpp.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">C++</small>
          </span>
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/java.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">Java</small>
          </span>
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] tw-px-2 group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/nodejs.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">Nodejs</small>
          </span>
          </div>
          <div className=" tw-flex tw-flex-wrap tw-justify-center tw-gap-6">
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/mongodb.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">Mongodb</small>
          </span>
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/javascript.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">Javascript</small>
          </span>
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/python.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">Python</small>
          </span>
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/sql.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">Sql</small>
          </span>
          </div>

          <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-6">
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/reactjs.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">React</small>
          </span>
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/reactjs.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">React</small>
          </span>
          
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/machine-learning.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">Machine learning</small>
          </span>
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/data-science.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">Data Science</small>
          </span>
          <span className=" tw-flex tw-justify-center tw-px-2 tw-items-center tw-gap-2 tw-min-w-[116px] tw-w-[116px] group-hover:tw-w-max tw-transition-all tw-cursor-default border tw-rounded-xl">
          <img src="https://cdn-media-assets.socratease.co/equip/product/img/homepage/skills-icons/logical-and-analytical-reasoning.png" alt="C" loading="lazy" class="w-4 h-4"></img>
          <small className="tw-truncate tw-text-sm group-hover:overflow-visible">Aptitude</small>
          </span>
          </div>
          </div>
          
          
        
          
          
         
        </div>
      </div>
    </div>
  );
};

export default Home;
