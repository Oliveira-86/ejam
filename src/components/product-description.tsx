import Image from "next/image"

const ProductDescription = () => {
    return (
        <div className="w-full">
            <div className="w-full hidden lg:block">
                <p className="text-center text-3xl  font-normal">
                <span className="text-blue-500"> ONE TIME ONLY </span> 
                    special price for 6 extra Clarifion for only 
                    <span className="text-blue-500"> $14 each </span> ($84.00 total!)
                </p>
            </div>
            <div className="w-full flex items-center justify-center mt-6">

                {/* mobile */}
                <div className="p-1 bg-blue-500 rounded-lg block lg:hidden">
                    <Image 
                        alt="product image"
                        src='/images/cellphone.svg'
                        width={85}
                        height={85}
                    />
                </div>


                {/* 1280px */}
                <div className="p-2 bg-blue-500 rounded-lg hidden lg:block">
                    <Image 
                        alt="product image"
                        src='/images/cellphone.svg'
                        width={138}
                        height={138}
                    />
                </div>
                <div className="w-full flex flex-col items-start justify-between h-full py-2 ml-4 gap-y-2">
                    <div className="w-full flex items-center justify-between">
                        <span className="text-sm lg:text-xl text-start font-medium text-gray-900"> Clarifion Air Ionizer</span>
                        <div className="flex items-center justify-center gap-1">
                            <span className="text-gray-700 text-[10px] lg:text-base font-semibold">$180</span>
                            <span className="text-blue-500 text-sm lg:text-xl font-semibold">$84</span>
                        </div>
                    </div>
                    {/* mobile */}
                    <div className="w-full flex items-center justify-start gap-1 lg:hidden">
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

                    <div className="hidden w-full lg:flex items-center justify-start gap-1">
                        {[1,2,3,4,5].map((item) => (
                            <Image 
                                key={item}
                                alt="product image"
                                src='/icons/star.svg'
                                width={14}
                                height={14}
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-x-5">
                        <div className="flex items-center justify-center h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-blue-300">
                            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-blue-500" />
                        </div>
                        <p className="text-xs lg:text-base font-light text-gray-600">12 left in Stock</p>
                    </div>
                    {/* 1280px */}
                    <p className="hidden lg:block w-full text-base text-start text-gray-600">
                        Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                    </p>
                </div>
            </div>

            {/* mobile  */}
            <p className="block lg:hidden w-full text-sm text-center mt-2 text-gray-600">
                Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
            </p>

            <div className="flex items-center justify-start gap-3 mt-7 mb-2">
                <Image    
                    alt="product image"
                    src='/icons/check.svg'
                    width={20}
                    height={20}
                />
                <p className="text-sm lg:text-base text-gray-700">Negative Ion Technology may <span className="font-bold"> help with allergens</span></p>
            </div>
            <div className="flex items-center justify-start gap-3 mb-2">
                <Image    
                    alt="product image"
                    src='/icons/check.svg'
                    width={20}
                    height={20}
                />
                <p className="text-sm lg:text-base text-gray-700">Designed for air <span className="font-bold">rejuvenation</span></p>
            </div>
            <div className="flex items-center justify-start gap-3 mb-7">
                <Image    
                    alt="product image"
                    src='/icons/check.svg'
                    width={20}
                    height={20}
                />
                <p className="text-sm lg:text-base text-gray-700"><span className="font-bold">Perfect for every room</span> in all types of places.</p>
            </div> 
            <div className="w-full flex gap-3 items-center bg-blue-50 rounded-lg p-4 mb-7">
                <Image    
                    alt="product image"
                    src='/icons/percent.svg'
                    width={24}
                    height={24}
                /> 
                <span className="text-sm lg:text-base text-black">Save<span className="text-sm text-blue-500"> 53%</span> and get <span className="text-sm text-blue-500"> 6 extra Clarifision </span> for only <span className="text-sm text-blue-500">$14 Each.</span></span>            
            </div>  
            <button className="w-full flex items-center justify-center gap-x-3 bg-green-500 p-3 mb-7 rounded-full">
                <p className="text-white font-semibold text-sm lg:text-lg">YES - CLAIM MY DISCOUNT</p>

                {/* mobile */}
                <Image    
                    alt="product image"
                    src='/icons/arrow-right.svg'
                    width={12}
                    height={12}
                    className="block lg:hidden"
                /> 

                {/* 1280px */}
                 <Image    
                    alt="product image"
                    src='/icons/arrow-right.svg'
                    width={16}
                    height={12}
                    className="hidden lg:block"
                /> 
            </button> 

            {/* mobile */}
            <div className="block lg:hidden w-full border border-gray-300 rounded-md p-3 mb-7">
                 <div className="w-full flex items-center justify-center">
                    <p className="text-xs font-normal text-gray-600 border-r border-gray-300 pr-3 mr-3">
                        Free shipping
                    </p>
                    <Image    
                        alt="product image"
                        src='/icons/lock-gray.svg'
                        width={12}
                        height={12}
                    />
                    <p className="text-xs font-normal text-gray-600 ">
                        Secure 256-bit SSL encryption
                    </p>
                 </div>
                 <div className="w-full border-t border-gray-300 my-3" />
                <div className="flex items-center justify-center gap-x-1">
                    <Image    
                        alt="product image"
                        src='/images/visa.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="product image"
                        src='/images/shop pay.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="product image"
                        src='/images/paypal.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="mastercard"
                        src='/images/mastercard.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="product image"
                        src='/images/gpay.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="product image"
                        src='/images/apple pay.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="product image"
                        src='/images/amex.svg'
                        width={24}
                        height={14}
                    />
                </div>
            </div>

            {/* mobile */}
            <div className="w-full border flex border-gray-300 rounded-md p-3 mb-7">
                 <div className="w-full flex items-center justify-center gap-2">
                    <p className="text-xs font-normal text-gray-600 border-r border-gray-300 pr-4 mr-3">
                        Free shipping
                    </p>
                    <Image    
                        alt="product image"
                        src='/icons/lock-gray.svg'
                        width={12}
                        height={12}
                    />
                    <p className="text-xs font-normal text-gray-600 border-r border-gray-300 pr-4 mr-3">
                        Secure 256-bit SSL encryption
                    </p>
                <div className="flex items-center justify-center gap-x-1">
                    <Image    
                        alt="product image"
                        src='/images/visa.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="product image"
                        src='/images/shop pay.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="product image"
                        src='/images/paypal.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="mastercard"
                        src='/images/mastercard.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="product image"
                        src='/images/gpay.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="product image"
                        src='/images/apple pay.svg'
                        width={24}
                        height={14}
                    />
                    <Image    
                        alt="product image"
                        src='/images/amex.svg'
                        width={24}
                        height={14}
                    />
                </div>
                 </div>
            </div>
            <p className="w-full text-center mb-7 text-red-500 font-medium lg:text-lg">
                NO THANKS, I DON&apos;T WANT THIS.
            </p>
            <div className="w-full flex items-start justify-start gap-x-5 mb-7">

                {/* mobile */}
                <Image    
                    alt="product image"
                    src='/images/garantee.svg'
                    width={48}
                    height={48}
                    className="block lg:hidden"
                />

                 {/* 1280px */}
                 <Image    
                    alt="product image"
                    src='/images/garantee.svg'
                    width={88}
                    height={88}
                    className="hidden lg:block"
                />
                <span className="font-normal text-xs lg:text-base text-gray-600">
                    If you are not completely thrilled with your Clarifion 
                    - We have a <span className="font-bold"> 30 day satisfaction guarantee</span>. 
                    Please refer to our return policy at the bottom of the page for more details. 
                    Happy Shopping!
                </span>
            </div>
        </div>
    )
}

export default ProductDescription