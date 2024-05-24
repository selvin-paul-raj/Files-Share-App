import { UserButton } from '@clerk/nextjs'
import {  AlignLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='flex p-5 border-b item-center justify-between md:justify-end'>
        <AlignLeft className='md:hidden'/>
        <Link class="flex text-center text-teal-600" href="/">
          <Image src="/logo.svg" width={40} height={40} className='md:hidden'/>
          <br className='mx-1'/>
          <h2 className='text-center text-primary text-[1.7rem] font-bold font-serif md:hidden' >Filea</h2>
        </Link>
        <UserButton/>
    </div>
  )
}

export default TopHeader