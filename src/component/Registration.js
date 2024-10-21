import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import RegImg from  "../assests/Register.png"

const Registration = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");

const UserDetails = useSelector((store) => store.User);


  return (
    <div className='row'>
    <div className="col-md-6 tw-p-6">
   
     
    <form action="" className=' tw-p-5 tw-gap-5'>
    <fieldset className=' tw-bg-slate-100 tw-p-[6] tw-w-3/4 tw-rounded-sm'> <i className="fa-solid fa-circle-exclamation"></i> &nbsp;Field marked with <span className=' tw-text-red-600 tw-text-lg'>*</span> are Required </fieldset>
        <fieldset className=' tw-mt-2 tw-font-semibold'>Name <span className=' tw-text-red-600 tw-text-lg'>*</span><br />
        <input
              type="text"
              name=""
              id=""
              className=" tw-w-3/4 tw-p-1  tw-rounded-tr-md tw-rounded-br-md"
              placeholder="Enter your Name"
              value={UserDetails?.displayName ? UserDetails?.displayName : name}
              onChange={(e) => {
                setName(e.target.value);
              }}
    />
        </fieldset>

        <fieldset className=' tw-mt-2 tw-font-semibold'>Email <span className=' tw-text-red-600 tw-text-lg'>*</span> <br />
        <input
              type="text"
              className="tw-w-3/4 tw-p-1  tw-rounded-tr-md tw-rounded-br-md"
              placeholder="Enter your email"
              value={UserDetails?.email ? UserDetails?.email : email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
        </fieldset>

        <fieldset className='tw-mt-2 tw-font-semibold'> Mobile <span className=' tw-text-red-600 tw-text-lg'>*</span> <br />
        <input
              type="tel"
              className=" tw-w-3/4 tw-p-1  tw-rounded-tr-md tw-rounded-br-md"
              placeholder="Enter your Mobile phone"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
        </fieldset>

        <button type="submit" className=' tw-mt-8 tw-px-5 tw-py-1 tw-text-center tw-rounded-md tw-bg-green-500'>Submit</button>

        
    </form>
   
   
  
   
        
        


    
   
    </div>

    <div className="col-md-6 tw-flex tw-justify-center tw-items-center">
        <img src={RegImg} alt="img" className=' tw-w-3/4' />
    </div>
         

    </div>
  )
}

export default Registration;