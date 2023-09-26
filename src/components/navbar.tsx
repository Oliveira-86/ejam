'use client'

import Image from "next/image"
import CarouselComponent from "./carousel"
import Container from "./container"

const Navbar = () => {
    return (
        <nav className="w-full flex-col bg-white">
                <div className="relative w-full px-8" style={{ backgroundColor: '#252F3D'}}>        
                    
                </div>
                <div className=" py-5 flex items-center justify-between">
                    <Image 
                        alt='logo'
                        src='/icons/logo.svg'
                        width={106}
                        height={20}
                    />
                    <div className="flex items-center justify-center gap-x-3">
                    <Image 
                        alt='McAfee logo'
                        src='/icons/security.svg'
                        width={44}
                        height={16}
                    />
                    <Image 
                        alt='norton logo'
                        src='/icons/norton.svg'
                        width={44}
                        height={16}
                    />
                    </div>
                </div>               
        </nav>
    )

}

export default Navbar