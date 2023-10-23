import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const {user, logOut} = UserAuth()
  const Navigate = useNavigate()
  //console.log(user.email)

const handleLogout = async () => {
  try {
    await logOut()
    Navigate('/')
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/' >
      <h1 className='text-red-600 text-5xl font-bold cursor-pointer md:ml-7'>ALPHAX</h1>
      </Link>
      {user?.email ? (
        <div>
        <Link to='/account'>
          <button className='text-white pr-4'>Account</button>
          </Link>
          <button onClick={handleLogout} className='text-white bg-red-600 px-5 py-2 rounded cursor-pointer'>Logout</button>
      </div> 
      ):(
              <div>
      <Link to='/login'>
        <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to='/signup'>
        <button className='text-white bg-red-600 px-5 py-2 rounded cursor-pointer'>Sign Up</button>
        </Link>
    </div>
    )}
    </div>
  )
}

export default Navbar