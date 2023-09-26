import Image from "next/image"

const ProductDescription = () => {
    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-center mt-6">
                <div className="p-1 bg-blue-500 rounded-lg">
                    <Image 
                        alt="product image"
                        src='/images/cellphone.svg'
                        width={85}
                        height={85}
                    />
                </div>
                <div className="w-full flex flex-col items-start justify-between h-full py-2 ml-4 gap-y-2">
                    <div className="w-full flex items-center justify-between">
                        <span className="text-sm text-start font-medium text-gray-900"> Clarifion Air Ionizer</span>
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-gray-700 text-[10px] font-semibold">$180</span>
                            <span className="text-blue-500 text-sm font-semibold">$84</span>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-start gap-1">
                        {[1,2,3,4,5].map((item) => (
                            <Image 
                                key={item}
                                alt="product image"
                                src='/icons/star.svg'
                                width={10}
                                height={10}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-x-5">
                        <div className="flex items-center justify-center h-3 w-3 rounded-full bg-blue-300">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                        </div>
                        <p className="text-xs font-light text-gray-600">12 left in Stock</p>
                    </div>
                </div>
            </div>
            <p className="w-full text-sm text-center mt-2 text-gray-600">
                Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
            </p>
            <div className="flex items-center justify-start gap-3 mt-7 mb-2">
                <Image    
                    alt="product image"
                    src='/icons/check.svg'
                    width={20}
                    height={20}
                />
                <p className="text-sm text-gray-700">Negative Ion Technology may <span className="font-bold"> help with allergens</span></p>
            </div>
            <div className="flex items-center justify-start gap-3 mb-2">
                <Image    
                    alt="product image"
                    src='/icons/check.svg'
                    width={20}
                    height={20}
                />
                <p className="text-sm text-gray-700">Designed for air <span className="font-bold">rejuvenation</span></p>
            </div>
            <div className="flex items-center justify-start gap-3 mb-7">
                <Image    
                    alt="product image"
                    src='/icons/check.svg'
                    width={20}
                    height={20}
                />
                <p className="text-sm text-gray-700"><span className="font-bold">Perfect for every room</span> in all types of places.</p>
            </div> 
            <div className="w-full flex gap-3 items-center bg-blue-100 rounded-lg p-4">
                <Image    
                    alt="product image"
                    src='/icons/percent.svg'
                    width={24}
                    height={24}
                /> 
                <span className="text-sm text-black">Save <span className="text-sm text-blue-500"> 53%</span> and get <span className="text-sm text-blue-500"> 6 extra Clarifision </span> for only <span className="text-sm text-blue-500">$14 Each.</span></span>            
            </div>   
        </div>
    )
}

export default ProductDescription