import Image from 'next/image'
import React from 'react'
import CTA from '../../public/12.svg'

export default function Welcome() {
  return (
    <div className="relative z-20 flex items-center  dark:bg-Solid-2">
      <div className="container relative mx-auto flex flex-col items-center justify-between px-6 py-8">
        <div className="flex flex-col">
          <h1 className="dark:text-white text-gray-800 w-full text-center text-4xl font-light uppercase sm:text-5xl">
            The React Framework for Production
          </h1>
          <h2 className="dark:text-white text-gray-500 mx-auto w-full max-w-2xl py-8 text-center text-xl font-light">
            Next.js gives you the best developer experience with all the
            features you need for production: hybrid static &amp; server
            rendering, TypeScript support, smart bundling, route pre-fetching,
            and more. No config needed.
          </h2>
          <div className="mt-4 flex items-center justify-center">
            <a
              href="#"
              className="bg-gray-800 border-transparent text-white text-md hover:bg-gray-900 mr-4 border-2 py-2 px-4 uppercase"
            >
              Get started
            </a>
            <a
              href="#"
              className="bg-transparent border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md border-2 py-2 px-4 uppercase"
            >
              Documentation
            </a>
          </div>
        </div>
        <div className="relative mx-auto mt-6 block w-full md:mt-0">
          <Image
            layout="fill"
            src={CTA}
            className="m-auto max-w-xs md:max-w-2xl"
          />
        </div>
      </div>
    </div>
  )
}
