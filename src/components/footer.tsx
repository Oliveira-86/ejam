import Image from "next/image"
import Container from "./container"

const Footer = () => {
    return (
        <footer className="py-5 px-5 md:px-20 2xl:px-40 gap-5  w-full flex flex-col md:flex-row md:justify-between text-white" style={{ backgroundColor: '#252F3D'}}>
            <span className="text-center text-xs font-light">
               <span className="border-r border-gray-50 mr-3 pr-3"> Cospanyright (c) 2023 </span> Clarifionsupport@clarifion.com
            </span>
            <div className="flex items-center justify-center gap-3">
                <Image 
                    alt='lock icon'
                    src='/icons/lock.svg'
                    width={15}
                    height={15}
                />
                <p className="text-center text-xs font-light">
                    Secure 256-bit SSL encryption.  
                </p>
            </div>
        </footer>
    )
}

export default Footer