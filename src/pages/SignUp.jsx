import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src='bg.jpg' alt='/' />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 top-56 z-50'>
      <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
      <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-bold py-2'>Sign Up</h1>
          <form onSubmit={handleSubmit} className='w-full flex flex-col'>
            <input 
            onChange={(e) => setEmail(e.target.value)} 
            className='p-3 my-2 bg-[#333333] rounded' 
            type='email' 
            placeholder='Email' 
            autoComplete='email'
            />
            <input 
            onChange={(e) => setPassword(e.target.value)} 
            className='p-3 my-2 bg-[#333333] rounded' 
            type='password' 
            placeholder='Password' 
            autoComplete='password'
            />
            <button className='bg-red-600 rounded py-3 my-6'>
              Sign Up
            </button>
            <div className='flex items-center justify-between text-sm text-gray-400'>
              <p><input className='mr-2 ' type="checkbox"/>Remember Me</p>
              <Link to='/help'><p>Need Help?</p></Link>
            </div>
            <p className='py-20'><span className='text-gray-600'>
              Already Subscribed to Netflix?
              </span> {' '}
              <Link to='/login'> Sign In</Link>
              </p>
          </form>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Signup