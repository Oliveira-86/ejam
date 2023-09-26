import Container from "@/components/container"
import ProductDescription from "@/components/product-description"
import Image from "next/image"

const Services = () => {
    return (
        <Container>
            <section className="lg:bg-gray-50 rounded-2xl mb-16 mt-5 lg:mt-16">
                <div className="w-full py-5">
                    <div className="w-full block lg:hidden">
                        <p className="text-center lg:text-start text-2xl  font-normal">
                            <span className="text-blue-500"> ONE TIME ONLY </span> 
                            special price for 6 extra Clarifion for only 
                            <span className="text-blue-500"> $14 each </span> ($84.00 total!)
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-16 lg:px-16">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <Image 
                            alt="product banner"
                            src='/images/banner.svg'
                            width={800}
                            height={800}
                        />
                        <div className="hidden lg:block w-full my-7 p-5  bg-white rounded-lg">
                            <div className="flex items-center justify-start gap-3">
                                <Image 
                                    alt="product banner"
                                    src='/images/avatar.svg'
                                    width={48}
                                    height={48}
                                /> 
                                <div className="flex flex-col items-start gap-1">
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
                                    <div className="flex items-center justify-center gap-3">
                                        <p className="text-sm font-bold text-gray-900">Ken T.</p>
                                        <Image 
                                            alt="product image"
                                            src='/icons/verify.svg'
                                            width={16}
                                            height={16}
                                        />
                                        <p className="text-xs font-normal text-green-600">Verified Customer</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-base text-gray-600 font-normal mt-3">
                                “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. 
                                When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
                            </p>
                        </div>
                    </div>
                    <ProductDescription />
                </div>
            </section>
        </Container>
    )
}

export default Services