import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LOGO from '../../public/Logo.png'

const Navithems = (props) => (
  <li className="items-center px-2 py-1 text-sm font-bold text-Nav-color hover:underline">
    <Link href={props.href}>{props.text}</Link>
  </li>
)

export default function HeaderNav() {
  return (
    <>
      <div className="container mx-auto w-full">
        <nav className="  flex justify-between py-2 px-3 ">
          <div>
            <span>Hack the coding</span>
          </div>
          <div>
            <ul className="flex space-x-2">
              <Navithems href="/home" text="Home" active="active" />
              <Navithems href="/courese" text="Courses" />
              <Navithems href="/blog" text="Blog" />
              <Navithems href="/aboutus" text="About Us" />
              <Navithems href="/contactus" text="Contact Us" />
              <button className=" ">Save changes</button>
              <span className=" float-left">
                <a>Log in</a>
              </span>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
