import Container from "@/components/container"
import { cn } from "@/lib/utils"
import { heading } from "@/mock/heading"
import Image from "next/image"

interface ItemProps {
    src: string
    label: string
    alt: string
    step: number
  }

const Heading = () => {
    const Item = ({ label, src, alt, step }: ItemProps) => (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
            <Image 
                alt={alt}
                src={src}
                width={20}
                height={20}
                className="block lg:hidden"
            />
            <Image 
                alt={alt}
                src={src}
                width={38}
                height={38}
                className="hidden lg:block"
            />
            <p className={cn("block lg:hidden text-center font-normal text-xs", label === 'Special Offer' && 'font-bold')}>
                {label}
            </p>
            <p className={cn("hidden lg:block text-center font-normal text-lg", label === 'Special Offer' && 'font-bold')}>
                Step {step.toString()}: {label}
            </p>
        </div>
    )

    return (
        <Container>
            <section className="w-full mt-10">
                <h1 className="w-full text-center text-3xl lg:text-5xl font-medium">
                    Wait ! your order in progress.
                </h1>
                <h2 className="w-full text-center text-base lg:text-2xl text-gray-700 font-normal mt-3 lg:mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                </h2>
                <div className="flex items-center justify-between mt-5 lg:mt-10">
                    {heading.map((item) => (
                        <Item 
                            step={item.id}
                            key={item.id}
                            alt={item.label}
                            src={item.src}
                            label={item.label}
                        />
                    ))}
                </div>
            </section>
        </Container>
    )
}

export default Heading