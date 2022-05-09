import { UserCircleIcon } from '@heroicons/react/outline'
import { BellIcon, ChevronDownIcon, UsersIcon } from '@heroicons/react/solid'
import React from 'react'

import RecentlyAddedSideCard from '../components/RecentlyAddedSideCard'

function RightSidebar() {
  return (
    <div className="hidden md:block md:flex-[0.45] bg-[#262C3A] pt-5 pl-5 pr-5 ">
      {/*Right sidebar header*/}
      <div className="flex items-center  space-x-4">
        <BellIcon  className="w-7 hover:text-white cursor-pointer"/>
        <UserCircleIcon className="w-7 hover:text-white cursor-pointer"/>
        <h1 className="font-semibold hover:text-white cursor-pointer">Kevin</h1>
        <ChevronDownIcon className="w-7 hover:text-white cursor-pointer"/>
      </div>

      {/*Recently added*/}
      <div className="mt-5 flex justify-between items-center">
        <h1 className="font-semibold  text-md">Recently Added</h1>
        <h1 className="  text-sm hover:text-white cursor-pointer">See All</h1>
      </div>

      <a href="#" class=" block mt-3 p-2 max-w-sm bg-[#1C1E2A] rounded-lg  shadow-md hover:bg-[#1b1e28]">
        <img src="https://images.unsplash.com/photo-1541701571234-ffe036ddf1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JlZCUyMHNtb2tlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="object-cover rounded-lg h-28 w-96 ..." />
        <div className=" items-center flex justify-center">
        </div>
        <div className="flex items-center space-x-1 p-3 pb-2"><h1 class="text-base font-medium hover:text-white cursor-pointer">Pagoda</h1></div>
        </a>

      {/*Profiles*/}
    
    <RecentlyAddedSideCard/>
    <RecentlyAddedSideCard/>
    <RecentlyAddedSideCard/>
    <RecentlyAddedSideCard/>
    <RecentlyAddedSideCard/>
    <RecentlyAddedSideCard/>
    <RecentlyAddedSideCard/>





    </div>
  )
}

export default RightSidebar