import React from 'react'

function RecentlyAddedSideCard() {
  return (
    <div className="flex items-center space-x-3 mt-5  cursor-pointer bg-box__right">
    <img className="w-14 h-14 object-cover rounded-lg hover:opacity-85" src="https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
    <div>
      <h1 className="text-gray-200 hover:text-white ">Propw</h1>
      <h1>@sakwan_21</h1>
    </div>
    </div>

  )
}

export default RecentlyAddedSideCard