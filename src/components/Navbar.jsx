import React,{useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import Phonesidebar from './Phonesidebar';
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate()
  const[load,setLoad] = useState(true)
  function Load(){

    navigate("/sidebar")
  }
  return (
    <div className=''>
      <div className='w-full hidden sm:block'>
      <div className='w-full flex border-b-2 sm:text-base '>
      <div className='text-center w-[10%] md:text-base lg:text-xl  pb-[0.5%] pt-[2%] font-semibold'>Logo</div>
      <div className='flex w-[90%] justify-between'>
        <div className='text-center w-[17%]   md:text-base lg:text-xl  pt-[2%] font-semibold  flex justify-center'>
          <div className='w-[40%] h-full border-b-4 border-green-600 '>Home</div>
        </div>
        <div className='text-center w-[17%] md:text-base lg:text-xl  pb-[0.5%] pt-[2%] font-semibold'>Services</div>
        <div className='text-center w-[17%] md:text-base lg:text-xl  pb-[0.5%] pt-[2%] font-semibold'>Blog</div>
        <div className='text-center w-[17%] md:text-base lg:text-xl  pb-[0.5%] pt-[2%] font-semibold'>Offers</div>
        <div className='text-center w-[17%] md:text-base lg:text-xl  pb-[0.5%] pt-[2%] font-semibold'>About Us</div>
        <div className='flex justify-evenly w-[20%] pb-[0.5%] pt-[2%] font-semibold'>
          <CiSearch size={30}/>
          <IoNotifications size={30}/>
          <FaRegUserCircle size={30}/>
        </div>
      </div>
      
    </div>

      </div>
      {
        load?(
          <div className='w-full pb-[2%] pt-[4%] border-b-2 px-[5%] sm:hidden'>
        <IoReorderThreeOutline size={40} onClick={Load}/>
      </div>
        ):(
          <Phonesidebar load={Load} />
        )
      }
    </div>
  )
}

export default Navbar
