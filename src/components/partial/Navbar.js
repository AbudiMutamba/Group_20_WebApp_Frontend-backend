import React, { useState } from 'react'

import Buttons from '../partial/Buttons';

export default function Navbar() {
    let Link =[
        {name: "HOME", Link: "/"},
        {name: "INTERNATIONAL NEWS", Link: "/international"},
        {name: "WEATHER INFO", Link: "/weather"},

    ]
    let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2x1 cursor-pointer flex item-center font-[Poppins] text-gray-800'>
                    <span className='text-3x1 text-indigo-600 mr-1 pt-0.5'>
                    <ion-icon name="newspaper-outline"></ion-icon>
                    </span>
                    Agakagwawo
                    
                </div>
                <div onClick={() => setOpen(!open)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>
                     <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-20 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 opacity-100': 'top-[-450px]'} md:opacity-100 opacity-0`}>
                   {
                        Link.map((link) =>(
                                <li key={link.name} className='md:ml-8 text-md md:my-0 my-7 '>
                                    <a href={link.Link} className='text-gray-800 hover:text-gray-400 duration-500 '>{link.name}</a>
                                </li>
                        ))
                   }
                   <Buttons>
                    <a href='/Contact'>Subscribe</a>
                   </Buttons>
                </ul>
                
            </div>

    </div>
    
  )
}
