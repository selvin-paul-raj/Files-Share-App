import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <header class="bg-transparent sticky top-0 left-0">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 border-b  ">
    <div class="flex h-16 items-center justify-between">
      <div class="md:flex md:items-center md:gap-12">
        <Link class="flex text-center text-teal-600" href="/">
          <Image src="/logo.svg" width={40} height={40} />
          <br className='mx-1'/>
          <h2 className='text-center text-primary text-[1.7rem] font-bold font-serif' >Filea</h2>
        </Link>
      </div>

      <div class="hidden md:block">
        <nav aria-label="Global">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-black transition hover:text-gray-500/75" href="#"> 
              Home </a>
            </li>

            <li>
              <Link class="text-black transition hover:text-gray-500/75" href="/upload"> Upload </Link>
            </li>

            <li>
              <a class="text-black transition hover:text-gray-500/75" href="#"> About Us </a>
            </li>

            <li>
              <a class="text-black transition hover:text-gray-500/75" href="#"> Contact Us </a>
            </li>
        </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          <Link
            class="rounded-md bg-primary px-5 py-2.5  hover:bg-blue-700 text-sm font-medium text-white shadow"
            href="/files"
          >
            Get Started
          </Link>
        </div>
       

        <div class="block md:hidden">
          <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header