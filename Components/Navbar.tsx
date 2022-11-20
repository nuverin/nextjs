import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <Link href="/">
        <div className='flex items-center cursor-pointer'>
          <span className='font-bold  text-white mr-[5rem]'>NuvBlog</span>
        </div>
      </Link>
      <ul className='flex items-center'>
        <li className='mr-6 font-medium text-white'>
          <a href="#">Blog</a>
        </li>
        <li className='mr-6 font-medium text-white'>
          <a href="#">Notes</a>
        </li>
        <li className='mr-6 font-medium text-white'>
          <a href="#">Games</a>
        </li>
        <li className='mr-6 font-medium text-white'>
          <a href="#">Products</a>
        </li>
      </ul>
      <ul className='flex items-center justify-between'>
        <li className='mr-6 font-medium text-white'>
          <a href="#">
            Log in
          </a>
        </li>
        <li className=' font-medium text-white'>
          <a href="#" className='bg-emerald-500 py-2 px-4 rounded-sm text-white'>
           Sign up
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar