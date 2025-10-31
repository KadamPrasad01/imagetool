import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className=' min-h-15 flex justify-between items-center pl-5 pr-5'>
        <div>
           <h1 className="text-lg font-semibold whitespace-nowrap">ImageTool</h1>
        </div>
        <div className='  flex-1 mx-10'>
            <SearchBar/>
        </div>
       <button className="px-4 py-2 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-100 transition">
        Logout
      </button>
    </div>
  )
}

export default Navbar