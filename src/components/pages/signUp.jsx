import { LuseStateockClosedIcon } from '@heroicons/react/20/solid'
import React, { useRef } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import app from '../../firebase';


const SignUp = () => {
  const auth = getAuth(app)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

const signup = e => {
  console.log(auth)
  createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).
  then( user => console.log(user)).catch(err => console.log(err))
  e.preventDefault()
}

  return <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create a new account
        </h2>
       
      </div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              {/* Email address */}
            </label>
            <input
              id="name"
              name="name"
              type="name"
              required
              className="relative block w-full rounded-md mb-4 border-0 py-4 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Name"
            />
            
          
          <input
           ref={emailRef}
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="relative block w-full border-0 py-4 px-4 rounded-md mb-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Email address"
        />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>



            {/* password */}
            <input ref={passwordRef}
              id="new_password"
              name="password"
              type="password"
              required
              className="relative block w-full rounded-t-md border-0 py-4 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Type a new Password"
            />
            
            
            
            {/* <input
            id="confirm_password"
            name="password"
            type="password"
            required
            className="relative block w-full rounded-b-md border-0 py-4 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Confirm Password"
          /> */}
          </div>
        </div>

  

        <div>
          <button
           onClick={signup} 
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            </span>
            Get started
          </button>
        </div>
        <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              I agree to recieve updates
            </label>
          </div>

        
      </form>
      <p className="mt-2 text-center text-sm text-gray-600">
        <Link to={'/signin'} className="font-medium text-indigo-600 hover:text-indigo-500">I already have an account</Link>
        </p>
    </div>
  </div>

}

export default SignUp