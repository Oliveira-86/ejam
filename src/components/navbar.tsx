'use client'

import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="w-full lg:-mt-10 px-5 sm:px-16 md:px-20 2xl:px-40 flex-col bg-white">
                <div className="relative w-full px-8" style={{ backgroundColor: '#252F3D'}}>        
                    
                </div>

                {/* mobile */}
                <div className="flex py-5 lg:hidden items-center justify-between">
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

                {/* 1280px */}
                <div className="hidden py-5 lg:flex items-center justify-between">
                    <Image 
                        alt='logo'
                        src='/icons/logo.svg'
                        width={192}
                        height={36}
                    />
                    <div className="flex items-center justify-center gap-x-3">
                    <Image 
                        alt='McAfee logo'
                        src='/icons/security.svg'
                        width={88}
                        height={32}
                    />
                    <Image 
                        alt='norton logo'
                        src='/icons/norton.svg'
                        width={88}
                        height={32}
                    />
                    </div>
                </div> 
        </nav>
    )

}

export default Navbar