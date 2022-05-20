import React from 'react'

export default function Buttons(props) {
  return (
    <button className='bg-indigo-800 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
        {props.children}
    </button>
  )
}
