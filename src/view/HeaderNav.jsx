import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LOGO from '../../public/Logo.png'

export default function HeaderNav() {
  return (
    <>
      <header className="gride gride-cols-3  bg-white sticky top-0 z-50 p-5 shadow-md md:px-10 ">
        <div className="relative my-auto flex h-10 cursor-pointer items-center">
          <Image src={LOGO} postition="left" />
        </div>
        {/* ul links */}
        <div></div>
      </header>
    </>
  )
}
