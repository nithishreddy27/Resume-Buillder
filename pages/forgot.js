import React from 'react'

const forgot = () => {
  return (
    <div className='flex-col'>
    <div className="login mx-auto relative bg-white w-screen h-screen justify-center align-middle">
    <div className="className='sm:mx-auto sm:w-full sm:max-w-md w-[300px] mx-auto my-0 pt-32">
        <form>
        <h1 className="text-center font-bold text-2xl">Forgot Password</h1>
        <div className="mb-4 mt-5">
            <label className="block text-gray-700 text-sm mb-2 font-semibold">Email address</label>
            </div>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 " type="email"></input>
            <div className='text-center mt-3'>
            <input type="submit" value="Submit Email Address" className='bg-orange-600 font-semibold cursor-pointer block w-[100%] text-white h-10 rounded-md hover:bg-orange-700'></input>
            </div>
        </form>
    </div>
  </div>
  </div>
  )
}

export default forgot