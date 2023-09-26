import Footer from "@/components/footer";
import Heading from "./section/Heading";
import Services from "./section/Services";
import Navbar from "@/components/navbar";

export default async function Home() {

  return (
    <div className='h-full bg-gray-50 lg:bg-white lg:pt-10'>
      <Navbar />
      <Heading />
      <Services />
      <Footer />
    </div>
  )
} 