import React from 'react'

function RectangularCard() {
  return (
    <div>

    <div className="flex justify-center flex-col box-gradient rounded-lg h-40  mt-7 pl-10 relative">

        <h1 className="text-2xl font-semibold text-white">Create Your</h1>
        <h1 className="text-2xl font-semibold text-white">Own NFT</h1>
        <button className=" bg-white text-black pl-4 pr-4 pt-1 pb-1 rounded-md mt-4 w-28 font-semibold">State Sale</button>
        <img className="absolute bottom-0 right-3.5 w-60"  src="https://www.lunapic.com/editor/premade/transparent.gif"/>
      </div>
    </div>
  )
}

export default RectangularCard