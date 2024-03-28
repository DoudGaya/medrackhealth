import Image from "next/image";
import banner from '@/app/img/coming-soon-banner.png'
import medrackLogo from '@/app/img/medrack-logo.png'
import Notify from "@/components/Notify";
import mobileBanner from '@/app/img/coming-soon-banner-mobile.png'

export default function Home() {
  return (
    <div className=" h-screen w-full bg-white bg-gradient-to-tr from-white via-emerald-300/20 to-emerald-400/30 text-black flex flex-col ">
      <div className=" w-full flex justify-between px-8 max-w-7xl mx-auto py-6">
       <div className=""><Image alt="Medrack Logo" src={medrackLogo} className=" h-10 w-full"  /></div>
       <div className=" text-xl hidden md:block font-semibold">Medrack Health Pharmaceuricals Limited</div>
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 max-w-6xl h-full mx-auto">
        <Notify />
      <div className=" h-full w-full flex justify-center items-center">
          <Image src={banner} className=" h-[400px] hidden md:block w-[400px] object-contain object-center" alt="Medrack banner Image" />
          <Image src={mobileBanner} className=" h-[400px] block md:hidden w-[400px] object-contain object-center" alt="Medrack banner Image" />
        </div>
      </div>
    </div>
  );
}
