import { promotion } from "@/mock/navbar"
import Carousel from "../carousel"
import Image from "next/image"

export interface PromotionProps { 
    id?: number
    src: string
    label: string
}

const NavbarInfo = () => {

    const Item: React.FC<PromotionProps> = ({ src, label }, key) => (
        <div key={key} className="flex items-center justify-center -mt-5">  
            <Image width={20} height={20} src={src} alt={label} />
            <h2 className="text-xs text-white ml-2">{label}</h2>
        </div>
    )

    return (
    <>  
        {/* mobile  */}
        <div className="block lg:hidden top-0 w-full h-10" style={{ backgroundColor: '#252F3D'}}>        
            <Carousel />
        </div>

        {/* 1280px  */}
        <div className="hidden lg:flex items-center justify-around -mt-10 w-full h-16" style={{ backgroundColor: '#252F3D'}}>        
            {promotion.map((item, index) => (
                <Item 
                    key={item.id}
                    label={item.label}
                    src={item.src}
                />
            ))}
        </div>
    </>
)
}

export default NavbarInfo