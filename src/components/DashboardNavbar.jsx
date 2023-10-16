import React from 'react'
import {AiFillDashboard, AiOutlineLogout} from 'react-icons/ai'
import {MdPeople, MdCategory, MdPerson} from 'react-icons/md'
import { Link } from 'react-router-dom'

const DashboardNavbar = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='m-8'>
            <h1 className='text-2xl text-white font-semibold'>Joseph dat Dev</h1>
        </div>

        <Link to={""} className='w-full flex items-center mt-5 text-start pl-6 hover:border-2 py-3 hover:bg-[#ff2930]'>
            <AiFillDashboard className='text-2xl  text-white mr-2'/>
            <h1 className='text-xl text-white'>Dashboard</h1>
        </Link>


        <Link to={"/dashboard/employee"}  className='w-full flex text-start items-center mt-5 pl-6 py-3 hover:border-2 hover:bg-[#ff2930]'>
            <MdPeople className='text-2xl text-white mr-2'/>
            <h1 className='text-xl text-white'>Manage Employee</h1>
        </Link>
        
        <Link to={"/dashboard/category"} className='w-full flex text-start items-center mt-5 pl-6 py-3 hover:border-2 hover:bg-[#ff2930]'>
            <MdCategory className='text-2xl text-white mr-2'/>
            <h1 className='text-xl text-white'>Category</h1>
        </Link>

        <Link to={"/dashboard/profile"} className='w-full flex text-start items-center mt-5 pl-6 py-3 hover:border-2 hover:bg-[#ff2930]'>
            <MdPerson className='text-2xl text-white mr-2'/>
            <h1 className='text-xl text-white'>Profile</h1>
        </Link>

        <Link to={"/login"} className='w-full flex text-start items-center mt-5 pl-6 py-3 hover:border-2 hover:bg-[#ff2930]'>
            <AiOutlineLogout className='text-2xl text-white mr-2'/>
            <h1 className='text-xl text-white'>Log out</h1>
        </Link>



    </div>
  )
}

export default DashboardNavbar