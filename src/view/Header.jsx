import React from 'react'
import LOGO from '../../public/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import ProfileCard from '../components/ProfileCard'

export default function Header() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <header className="stictky bg-white top-0 z-[1000] flex h-[72px] items-center px-10 shadow-md md:px-10  ">
      <Image
        src={LOGO}
        className="cursor-pointer"
        onClick={() => router.push('/')}
      />
      {session && (
        <div className="ml-auto hidden items-center space-x-6 md:flex">
          <a className="header-link group">
            <span className="relative cursor-pointer text-sm font-medium uppercase text-Solid-1 before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-Solid-1 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              Home
            </span>
          </a>
          <a className="header-link group">
            <span className="relative cursor-pointer text-sm font-medium uppercase text-Solid-1 before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-Solid-1 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              Courses
            </span>
          </a>
          <a className="header-link group">
            <span className="relative cursor-pointer text-sm font-medium uppercase text-Solid-1 before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-Solid-1 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              Blog
            </span>
          </a>
          <a className="header-link group">
            <span className="relative cursor-pointer text-sm font-medium uppercase text-Solid-1 before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-Solid-1 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              About Us
            </span>
          </a>
          <a className="header-link group">
            <span className="relative cursor-pointer text-sm font-medium uppercase text-Solid-1 before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-Solid-1 before:transition-all before:duration-200 group-hover:before:scale-x-100">
              Contact Us
            </span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          onClick={signIn}
          className="translate w-50/4 ml-auto rounded-full bg-Solid-1 px-4 py-1.5 font-medium uppercase  tracking-wide text-HoverColor duration-200"
        >
          Log in
        </button>
      ) : (
        // <img
        //   onClick={signOut}
        //   src={session.user.image}
        //   className="ml-auto h-12 w-12 cursor-pointer rounded-full object-cover"
        // />
        <ProfileCard />
      )}
    </header>
  )
}
