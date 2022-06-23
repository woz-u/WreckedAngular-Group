import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await SignIn(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className='bg-slate-800'>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20 bg-slate-600'>
        <h1 className='text-2xl font-bold text-white'>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label className='text-white'>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-2xl'
                type='email'
              />
              <AiOutlineMail className='absolute left-2 top-3 text-gray-700 shadow-xl' />
            </div>
          </div>
          <div className='my-4'>
            <label className='text-white'>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-2xl'
                type='password'
              />
              <AiFillLock className='absolute left-2 top-3 text-gray-700 shadow-xl' />
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl bg-white text-slate-800'>
            Sign in
          </button>
        </form>
        <p className='my-4 text-white'>
          Don't have an account?{' '}
          <Link to='/SignUp' className='text-accent hover:text-indigo-200'>
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
