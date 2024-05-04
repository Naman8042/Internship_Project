import React from 'react'
import { BsBank } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { RiLinksFill } from "react-icons/ri";
import { VscNotebook } from "react-icons/vsc";
import { FaArrowLeftLong } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
    <div className='hidden sm:block sm:w-[40%] md:w-[20%]  h-screen border-collapse py-[1%]'>
      <div className='px-[8%] my-[1%]'>
        <FaArrowLeftLong size={25}/>
      </div>
      <div className='w-full flex flex-col items-center text-xl border-seperate'>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <BiSolidDashboard/>
      <p className='text-xs md:text-base lg:text-xl sd:text-sm'>My Dashboard</p>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <RiLinksFill/>
      <p className='text-xs md:text-base lg:text-xl sd:text-sm'>TOTM Links</p>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <VscNotebook/>
      <p className='text-xs md:text-base lg:text-xl sd:text-sm'>Daily Summary</p>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      <div className='w-[90%]  my-[1%] py-[4%] px-[10%] flex justify-evenly bg-gray-100 rounded-xl'>
      <div className='flex w-[90%] gap-3 justify- items-center'>
      <BsBank/>
      <p className='text-xs md:text-base lg:text-xl sd:text-sm'>Bank Details</p>
      </div>
      <div className='w-[10%] flex justify-center items-center'>
      <FaAngleRight />  
      </div>
      </div>
      </div>
      
    </div>
    
    </>
  )
}

export default Sidebar
