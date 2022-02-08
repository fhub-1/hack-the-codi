import React from 'react'
import LOGO from '../../public/Logo.png'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="stictky bg-white top-0 z-[1000] flex h-[72px] items-center px-10 shadow-md md:px-12  ">
      <Image src={LOGO} className="cursor-pointer" />
      <div className="ml-auto hidden items-center space-x-6 md:flex">
        <a className="header-link group">
          <span className="relative text-sm font-medium uppercase before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-Solid-1 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Home
          </span>
        </a>
        <a className="header-link group">
          <span className="relative text-sm font-medium uppercase before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-Solid-1 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Courses
          </span>
        </a>
        <a className="header-link group">
          <span className="relative text-sm font-medium uppercase before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-Solid-1 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Blog
          </span>
        </a>
        <a className="header-link group">
          <span className="relative text-sm font-medium uppercase before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-Solid-1 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            About Us
          </span>
        </a>
        <a className="header-link group">
          <span className="relative text-sm font-medium uppercase before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-Solid-1 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Contact Us
          </span>
        </a>
      </div>
      <button className="translate ml-auto rounded-md bg-Solid-1 px-4 py-1.5 font-medium uppercase  tracking-wide text-HoverColor duration-200">
        Log in
      </button>
    </div>
  )
}
