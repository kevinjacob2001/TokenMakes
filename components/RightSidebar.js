import { UserCircleIcon } from '@heroicons/react/outline'
import { BellIcon, ChevronDownIcon, UsersIcon } from '@heroicons/react/solid'
import React from 'react'

function RightSidebar() {
  return (
    <div className="hidden md:block md:flex-[0.45] bg-[#262C3A] pt-5 pl-3 pr-3 ">
      {/*Right sidebar header*/}
      <div className="flex items-center  space-x-4">
        <BellIcon className="w-7"/>
        <UserCircleIcon className="w-7"/>
        <h1 className="font-semibold">Kevin</h1>
        <ChevronDownIcon className="w-7"/>
      </div>

      {/*Recently added*/}
      <div className="mt-5 flex justify-between items-center">
        <h1 className="font-semibold  text-md">Recently Added</h1>
        <h1 className="  text-sm">See All</h1>
      </div>

      <a href="#" class=" block mt-3 p-2 max-w-sm bg-[#1C1E2A] rounded-lg  shadow-md hover:bg-[#1b1e28]">
        <img src="https://images.unsplash.com/photo-1541701571234-ffe036ddf1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JlZCUyMHNtb2tlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="object-cover rounded-lg h-28 w-96 ..." />
        <div className=" items-center flex justify-center">
        </div>
        <div className="flex items-center space-x-1 p-3 pb-2"><h1 class="text-base font-medium ">Pagoda</h1></div>
        </a>

      {/*Profiles*/}
      <div className="flex items-center space-x-3 mt-5 ml-2">
      <img className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <div>
        <h1 className="text-white">Propw</h1>
        <h1>@sakwan_21</h1>
      </div>
      </div>

      <div className="flex items-center space-x-3 mt-5 ml-2">
      <img className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <div>
        <h1 className="text-white">Propw</h1>
        <h1>@sakwan_21</h1>
      </div>
      </div>

      <div className="flex items-center space-x-3 mt-5 ml-2">
      <img className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <div>
        <h1 className="text-white">Propw</h1>
        <h1>@sakwan_21</h1>
      </div>
      </div>

      <div className="flex items-center space-x-3 mt-5 ml-2">
      <img className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <div>
        <h1 className="text-white">Propw</h1>
        <h1>@sakwan_21</h1>
      </div>
      </div>


      <div className="flex items-center space-x-3 mt-5 ml-2">
      <img className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <div>
        <h1 className="text-white">Propw</h1>
        <h1>@sakwan_21</h1>
      </div>
      </div>


      <div className="flex items-center space-x-3 mt-5 ml-2">
      <img className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <div>
        <h1 className="text-white">Propw</h1>
        <h1>@sakwan_21</h1>
      </div>
      </div>



      <div className="flex items-center space-x-3 mt-5 ml-2">
      <img className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <div>
        <h1 className="text-white">Propw</h1>
        <h1>@sakwan_21</h1>
      </div>
      </div>


      <div className="flex items-center space-x-3 mt-5 ml-2">
      <img className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <div>
        <h1 className="text-white">Propw</h1>
        <h1>@sakwan_21</h1>
      </div>
      </div>

      <div className="flex items-center space-x-3 mt-5 ml-2">
      <img className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <div>
        <h1 className="text-white">Propw</h1>
        <h1>@sakwan_21</h1>
      </div>
      </div>




      <div className="flex items-center space-x-3 mt-5 ml-2">
      <img className="w-14 h-14 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <div>
        <h1 className="text-white">Propw</h1>
        <h1>@sakwan_21</h1>
      </div>
      </div>
    </div>
  )
}

export default RightSidebar