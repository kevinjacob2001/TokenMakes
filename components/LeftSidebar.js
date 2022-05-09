import React from 'react'
import { CashIcon, ChartBarIcon, ClockIcon, CogIcon, CurrencyDollarIcon, DatabaseIcon, HeartIcon, HomeIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Component1 from './Component1.png'

function LeftSidebar() {
    return (
        <div className="flex-col border-r-[.6px] border-gray-800 flex-[0.25]  pt-5  pl-8 pr-16  justify-between relative">


            <div className=" ">
                <Image height="60" width="130" src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg" />
                {/*Marketplace*/}
                <div className="space-y-8 font-semibold mt-5">
                    <h4 className="text-[#96375F] font-bold text-xs tracking-[.3rem]  pb-3">MARKETPLACE</h4>
                    <div className="flex items-center space-x-2"><HomeIcon className="w-7" /> <h1 className="">Market</h1></div>
                    <div className="flex items-center space-x-2"><ChartBarIcon className="w-7" /> <h1 className="">Active Bid</h1></div>
                    <div className="flex items-center space-x-2"><HeartIcon className="w-7" /> <h1 className="">Saved</h1></div>

                </div>

                {/*Account*/}
                <div className="space-y-8 mt-6 font-semibold">
                    <h4 className="text-[#96375F] font-bold text-xs tracking-[.3rem] pb-3">ACCOUNT</h4>

                    <div className="flex items-center space-x-2"><DatabaseIcon className="w-7" /> <h1 className="">My Collection</h1></div>
                    <div className="flex items-center space-x-2"><CashIcon className="w-7" /> <h1 className="">Wallet</h1></div>
                    <div className="flex items-center space-x-2"><ClockIcon className="w-7" /> <h1 className="">History</h1></div>
                    <div className="flex items-center space-x-2"><CogIcon className="w-7" /> <h1 className="">Settings</h1></div>

                </div>
            </div>
{/* 
            <div className="bg-pink-600 w-64 h-48 rounded-xl mt-5 relative flex justify-center ">
                <div className="mt-6 text-center font-bold text-white text-lg  ">
                    <h1>Enter your mail to</h1>
                    <h1>get product</h1>
                    <h1>update.</h1>
                </div>
                <input className="absolute bottom-4 w-52 rounded-xl bg-[#1C1E2A]  p-3" placeholder="Enter your email here" />
            </div>
*/}

        </div>
    )
}

export default LeftSidebar