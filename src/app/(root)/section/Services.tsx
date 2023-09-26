import Container from "@/components/container"
import ProductDescription from "@/components/product-description"

const Services = () => {
    return (
        <Container>
            <section className="w-full mt-5">
                <div className="w-full">
                    <p className="text-center text-2xl font-normal">
                    <span className="text-blue-500"> ONE TIME ONLY </span> 
                        special price for 6 extra Clarifion for only 
                        <span className="text-blue-500"> $14 each </span> ($84.00 total!)
                    </p>
                </div>
            </section>
            <ProductDescription />
        </Container>
    )
}

export default Services