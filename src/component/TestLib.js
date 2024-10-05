import React, { useContext, useState } from 'react'
import SideBar from './SideBar';
import TestCard from './TestCard';
import alltestContext from '../utils/Context';
import { AllTest } from '../assests/AllTest';
import { Link } from 'react-router-dom';



const TestLib = () => {

  const{show,setShow,crum} = useContext(alltestContext);
  const[searchtext,setSearchtext] = useState("");
  
  function SearchFunc( ){
    const filterdata = AllTest.filter((ele)=>{

      return ele.name.toLowerCase().includes(searchtext.toLowerCase()); 
    });
   setShow(filterdata);

  }
  

  return (
    <div className="container-fluid mt-5 p-0 tw-bg-[#1d232A]">
    {/* <div className="container"> */}
        <div className="row">
           <div className=' tw-flex tw-justify-center tw-items-center tw-mb-5'>
            <input type="search" name="" className=' tw-w-3/4 tw-p-2 tw-rounded-md tw-shadow-emerald-600'value={searchtext} onChange={(e)=>{
              setSearchtext(e.target.value)
            }} placeholder='what you looking for?' id="" onKeyUp={SearchFunc} />
           </div>
            <div className="col-md-2 tw-flex sm:tw-justify-end tw-justify-center">
                <SideBar/>
            </div>
            <div className="col-md-10 tw-p-3 tw-items-center">
            <div className=' tw-flex tw-justify-between tw-px-4 tw-mb-5'>
<div> 
<h3>{crum}</h3>             
</div>  
<div className=' tw-mr-7 sm:tw-mr-32'>
<Link to="/customtest" className=' tw-no-underline tw-px-4 tw-py-2 tw-text-lg tw-bg-green-500 tw-text-white tw-rounded-md tw-shadow-md tw-border-0 '>Custom Test &nbsp; <i class="fa-solid fa-plus"></i> </Link>
</div>          </div>
            {show.map((ele)=>{
              return(
                <TestCard key={ele.id} id = {ele.id} name={ele.name} desc={ele.desc} icon={ele.icon}/>
              )
            })}
           
              
            </div>
        </div>
        {/* </div> */}
    </div>
  )
}

export default TestLib;