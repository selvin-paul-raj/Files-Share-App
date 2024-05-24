import SideNav from '@/components/SideNav'
import TopHeader from '@/components/TopHeader'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <div className='h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden '>
        <SideNav/>
        </div>
        <div className='md:ml-64'>
          <TopHeader/>
        {children}
        </div>
    </div>
  )
}

export default layout