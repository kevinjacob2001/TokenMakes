import React from 'react'
import { CashIcon, ChartBarIcon, ClockIcon, CogIcon, CurrencyDollarIcon, DatabaseIcon, HeartIcon, HomeIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Component1 from './Component1.png'

function LeftSidebar() {
    return (
        <div className=" flex-col border-r-[.6px] border-gray-800 pr-1  pl-1 pt-5  flex-[0.1]  lg:pt-5  lg:pl-6 lg:pr-6  justify-between relative">


            <div className=" ">

                {/*Marketplace*/}
                <div className="space-y-2 font-semibold mt-5">
                    <h4 className="hidden lg:block text-[#96375F] font-bold text-xs tracking-[.3rem]  pb-3">MARKETPLACE</h4>
                    <div className="bg-box flex items-center justify-center md:justify-start md: space-x-2"><HomeIcon className="w-7" /> <h1 className="hidden lg:block">Market</h1></div>
                    <div className="bg-box flex items-center justify-center md:justify-start space-x-2"><ChartBarIcon className="w-7" /> <h1 className="hidden lg:block">Active Bid</h1></div>
                    <div className="bg-box flex items-center justify-center md:justify-start space-x-2"><HeartIcon className="w-7" /> <h1 className="hidden lg:block">Saved</h1></div>
                </div>

                {/*Account*/}
                <div className="space-y-2 mt-6 font-semibold">
                    <h4 className="hidden lg:block text-[#96375F] font-bold text-xs tracking-[.3rem] pb-1">ACCOUNT</h4>
                    <div className="bg-box flex items-center justify-center md:justify-start space-x-2"><DatabaseIcon className="w-7" /> <h1 className="hidden lg:block">Collection</h1></div>
                    <div className="bg-box flex items-center justify-center md:justify-start space-x-2"><CashIcon className="w-7" /> <h1 className="hidden lg:block">Wallet</h1></div>
                    <div className="bg-box flex items-center justify-center md:justify-start space-x-2"><ClockIcon className="w-7" /> <h1 className="hidden lg:block">History</h1></div>
                    <div className="bg-box flex items-center justify-center md:justify-start space-x-2"><CogIcon className="w-7" /> <h1 className="hidden lg:block">Settings</h1></div>
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