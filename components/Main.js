import { ChevronLeftIcon, SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

import Card from '../components/Card'
import RectangularCard from '../components/RectangularCard'

function Main() {
  return (
    <div className="pl-4 pt-4 pb-4 pr-1 md:p-4  flex-[0.85] md:flex-[.45] justify-center ">
      {/*Input section*/}
      <div className="flex  bg-[#262C3A] w-[60vw] p-3 rounded-lg">
        <SearchIcon className="ml-3 w-5 mr-3" /><input className="border-0 pt-1 w-12 pb-1 bg-[#262C3A] outline-none" placeholder="Search Artwork" />
      </div>

      <RectangularCard />


      <div className="flex  items-center justify-between mt-5 ">
        <h1 className="text-sm flex font-semibold text-gray-200 md:text-2xl">Hot Bids</h1>
        <div className="flex  space-x-1 md:space-x-3 text-gray-200">
          <h1 className="text-sm">Art</h1>
          <h1 className="text-sm">Music</h1>
          <h1 className="text-sm">Sport</h1>
          <h1 className="text-sm">Utility</h1>
          <ChevronLeftIcon className="w-4" />
        </div>
      </div>

      <div class="grid mt-3 grid-cols-2 md:grid-cols-3 gap-5 ">

        <Card />
        <Card />


      </div>


    </div>
  )
}

export default Main