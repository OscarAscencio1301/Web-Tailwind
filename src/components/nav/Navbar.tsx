import { useState } from 'react'
import imageLogo from '../../assets/img/logo.png'

export const Navbar = () => {
    const [isMobile, setisMobile] = useState(false)

    return (
        <nav className="bg-gray-800 flex justify-around lg:justify-start items-center">
            <div className="logo p-2">
                <img src={imageLogo} alt="Logo" />
            </div>
            <div className="links hidden lg:block flex-1">
                <ul className='flex items-center justify-center gap-5'>
                    <li><a href="#" className='link'>Home</a></li>
                    <li><a href="#" className='link'>Play</a></li>
                    <li><a href="#" className='link'>Explore</a></li>
                    <li><a href="#" className='border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500'>Browser Fury</a></li>
                    <li><a href="3" className='rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-700'>Buy Now</a></li>
                </ul>
            </div>
            <div className="block lg:hidden w-1/6 lg:w-4/6">
                <a href="#" className='link' onClick={() => setisMobile(!isMobile)}>Menu</a>
                <ul className={`bg-gray-800 flex flex-col top-24 gap-8 w-full absolute z-50 left-0 text-center ${isMobile ? '' : 'hidden'}`} >
                    <li><a href="#" className='link'>Home</a></li>
                    <li><a href="#" className='link'>Play</a></li>
                    <li><a href="#" className='link'>Explore</a></li>
                    <li><a href="#" className='border-4 border-yellow-400 text-white font-bold p-2 rounded-full hover:bg-white hover:text-black transition duration-500'>Browser Fury</a></li>
                    <li><a href="3" className='rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-700'>Buy Now</a></li>
                </ul>
            </div>
        </nav>
    )
}
