import Constant from '@/utils/Constant'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="text-black bg-white">
  <div className="max-w-screen-xl px-4 py-32 mx-auto lg:flex ">
    <div className="max-w-3xl mx-auto text-center">
      <h1
        className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-black/50 via-primary to-black/20 bg-clip-text sm:text-5xl"
      >
        Upload,Save and easily

        <span className="sm:block">Share your files in one place </span>
      </h1>

      <p className="max-w-xl mx-auto mt-4 sm:text-xl/relaxed">
       {Constant.desc} 
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link
          className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded bg-primary focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:bg-blue-700"
          href="/files"
        >
          Get Started
        </Link>

        <a
          className="block w-full px-12 py-3 text-sm font-medium border border-blue-600 rounded text-balck hover:bg-blue-600 hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero