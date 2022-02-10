import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function ProfileCard() {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div className=" ml-auto flex items-center justify-between">
      <img
        src={session?.user?.image}
        className="h-16 w-16 rounded-full border  p-[2px]"
      />

      <div className="mx-4 flex">
        <h2 className="font-ProximaNova text-Solid-1">
          Hello {session?.user?.username}
        </h2>
        <h3></h3>
      </div>
      <button
        onClick={signOut}
        className="items-center rounded-full  font-ProximaNova text-sm text-Solid-2"
      >
        Sign Out
      </button>
    </div>
  )
}
