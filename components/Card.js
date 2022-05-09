import React from 'react'

const data=[
    {
        name:"Kevin Jacob",
        imgSrc:"https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3VyZWQlMjBzbW9rZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
        name:"Senne",
        imgSrc:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/5-coloured-smoke-mixing-in-dark-room-henrik-sorensen.jpg"
    },
    {
        name:"Deepak Mathews",
        imgSrc:"https://images.unsplash.com/photo-1541701571234-ffe036ddf1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JlZCUyMHNtb2tlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
        name:"Aleena",
        imgSrc:"https://wallpaperaccess.com/full/1490038.jpg"
    },
    {
        name:"Deepak Mathews",
        imgSrc:"https://images.unsplash.com/photo-1541701571234-ffe036ddf1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JlZCUyMHNtb2tlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    }
]

function Card() {
  return (
    <>
    {data.map((ele)=>(
        <a href="#" class="block p-2 max-w-sm bg-white rounded-lg  shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <img src={ele.imgSrc} className="object-cover rounded-lg h-48 w-96 ..." />
        <div className="flex items-center space-x-1 p-3 pb-2"><h1 class="text-xs text-white">Artwork by</h1>       <h4 className="text-[#96375F] font-bold  text-xs ">{ele.name}</h4></div>
        </a>

    ))}
    </>
    

  )
}

export default Card