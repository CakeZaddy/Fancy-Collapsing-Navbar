import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar-style.css'

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const screenHeight = window.innerHeight
      const currentScroll = window.scrollY

      if (currentScroll > screenHeight) {
        setCollapsed(true)
      } else {
        setCollapsed(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`flex text-white opacity-100 space-x-2.5 fixed top-0 left-0 p-[40px] justify-center landing ${
        collapsed ? 'collapsed' : ''
      } `}
    >
      <li
        style={{ '--index': 0 }}
        className='bg-white block w-[90px] text-center py-[5px] rounded-full text-white shadow-black shadow-md bg-opacity-10 hover:bg-opacity-80 hover:text-black transition-all duration-500 relative z-50 home '
      >
        Home
      </li>
      <li
        style={{ '--index': 1 }}
        className='bg-white block w-[90px] text-center py-[5px] rounded-full text-white shadow-black shadow-md bg-opacity-10 hover:bg-opacity-80 hover:text-black transition-all duration-500 relative z-40'
      >
        Work
      </li>
      <li
        style={{ '--index': 2 }}
        className='bg-white block w-[90px] text-center py-[5px] rounded-full text-white shadow-black shadow-md bg-opacity-10 hover:bg-opacity-80 hover:text-black transition-all duration-500 relative z-30'
      >
        Product
      </li>
      <li
        style={{ '--index': 3 }}
        className='bg-white block w-[90px] text-center py-[5px] rounded-full text-white shadow-black shadow-md bg-opacity-10 hover:bg-opacity-80 hover:text-black transition-all duration-500 relative z-20'
      >
        About
      </li>
      <li
        style={{ '--index': 4 }}
        className='bg-white block w-[90px] text-center py-[5px] rounded-full text-white shadow-black shadow-md bg-opacity-10 hover:bg-opacity-80 hover:text-black transition-all duration-500 relative z-10'
      >
        Tools
      </li>
      <li
        style={{ '--index': 5 }}
        className='bg-white block w-[90px] text-center py-[5px] rounded-full text-white shadow-black shadow-md bg-opacity-10 hover:bg-opacity-80 hover:text-black transition-all duration-500 relative z-0'
      >
        Blog
      </li>
      <li
        style={{ '--index': 6 }}
        className='bg-white block w-[90px] text-center py-[5px] rounded-full text-white shadow-black shadow-md bg-opacity-10 hover:bg-opacity-80 hover:text-black transition-all duration-500 relative z-0'
      >
        Contact
      </li>
    </div>
  )
}
