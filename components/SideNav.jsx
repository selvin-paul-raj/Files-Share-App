"use client";
import { File, Shield, Upload } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const SideNav = () => {
    const menuList = [
        {
            id:1,
            name:"Upload",
            icon:Upload,
            path:"/upload"
        },
        {
            id:2,
            name:"Files",
            icon:File,
            path:"upload"
        },
        {
            id:3,
            name:"Upgrade",
            icon:Shield,
            path:"/upgrade"
        },
    ]
    const [activeIndex,setActiveIndex]= useState(0)
  return (
    <div className='shadow-sm border-r h-full'>
        <div className='p-5 border-b'> 
        <Link class="flex text-center text-teal-600" href="/">
          <Image src="/logo.svg" width={40} height={40} />
          <br className='mx-1'/>
          <h2 className='text-center text-primary text-[1.7rem] font-bold font-serif' >Filea</h2>
        </Link>
        </div>
        <div className='flex flex-col  w-full'>
        {menuList.map((item,index)=>(
            <Link className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 ${activeIndex==index?'bg-blue-100 text-primary':null}`}
            onClick={()=> setActiveIndex(index)} href={item.path}>
               <item.icon/>
                <h2>{item.name}</h2>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default SideNav