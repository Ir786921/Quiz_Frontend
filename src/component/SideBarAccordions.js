import React from 'react'

const SideBarAccordions = ({heading,subpoints,isvisible,setIsvisible,icon}) => {
  return (
    <div>
        <div onClick={()=>{
  setIsvisible(!isvisible);
 }} className='hover:tw-bg-green-500 tw-cursor-pointer'><p className='hover:tw-bg-gray-300 tw-text-start  tw-ml-1 p-2'><i class={`fa-solid ${icon} tw-text-green-300 tw-text-lg`}></i> &nbsp;{heading}</p>
 
 </div>
 {isvisible && (<>
  <div className='tw-cursor-pointer'><p className='hover:tw-bg-gray-300 tw-text-start  tw-ml-10 p-2'><i class="fa-solid fa-angles-right"></i>&nbsp; {subpoints.first} </p></div>
  <div className='tw-cursor-pointer'><p className='hover:tw-bg-gray-300 tw-text-start  tw-ml-10 p-2'><i class="fa-solid fa-angles-right"></i>&nbsp;{subpoints.second} </p></div>
  <div className='tw-cursor-pointer'><p className='hover:tw-bg-gray-300 tw-text-start  tw-ml-10 p-2'><i class="fa-solid fa-angles-right"></i>&nbsp;{subpoints.third}</p></div>
  <div className='tw-cursor-pointer'><p className='hover:tw-bg-gray-300 tw-text-start  tw-ml-10 p-2'><i class="fa-solid fa-angles-right"></i>&nbsp;{subpoints.fourth} </p></div>
  <div className='tw-cursor-pointer'><p className='hover:tw-bg-gray-300 tw-text-start  tw-ml-10 p-2'><i class="fa-solid fa-plus"></i>&nbsp; More</p></div>
 </>

 )}
    </div>
  )
}

export default SideBarAccordions;