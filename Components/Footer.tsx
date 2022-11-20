import React from 'react'
import {BsGithub, BsTwitter, BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer  className='text-gray-200 mt-12 fixed bottom-0 left-0 bg-gray-900/80 backdrop-blur-sm  w-full'>
        <div className='container mx-auto flex items-center flex-col sm:flex-row py-4'>
            <a href="/" className='flex items-center justify-center md:justify-start '>
                <span className='ml-3 text-md'>NuvBlog</span>
            </a>
            <p className='text-sm  sm:ml-4 sm:pl-4 border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-5'>
                2022 NuvBlog
            </p>
            <span className='inline-flex gap-x-5 text-lg sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                <a href="#" className='text-white'>
                  <BsGithub />
                </a>
                <a href="#" className='text-white'>
                  <BsTwitter />
                </a>
                <a href="#" className='text-white'>
                  <BsFacebook />
                </a>
                
            </span>
        </div>
    </footer>
  )
}

export default Footer