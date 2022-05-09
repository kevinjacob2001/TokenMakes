import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

import Card from '../components/Card'
import RectangularCard from '../components/RectangularCard'

function Main() {
  return (
    <div className=" p-6 flex-[.50] justify-center">
      {/*Input section*/}
      <div className="flex bg-[#262C3A] w-[60vw] p-3 rounded-lg">
        <SearchIcon className="ml-3 w-5 mr-3" /><input className="border-0 pt-1 pb-1 bg-[#262C3A] outline-none" placeholder="Search Artwork" />
      </div>

      <RectangularCard/>


      <h1 className="mt-5 font-semibold text-white text-2xl">Hot Bids</h1>

      <div class="grid mt-5 grid-cols-1 md:grid-cols-3 gap-5">

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>


    </div>
  )
}

export default Main