import Image from "next/image";
import banner from '@/app/img/banner_woman.png'
import medrackLogo from '@/app/img/medrack_logo.png'
import Notify from "@/components/Notify";
import mobileBanner from '@/app/img/medrack_trans.png'

export default function Home() {
  return (
    <div className=" flex flex-col space-y-6">
      <div className=" h-screen w-full bg-white text-black flex flex-col ">
      <div className=" w-full flex justify-between px-8 max-w-6xl mx-auto py-6">
       <div className=""><Image alt="Medrack Logo" src={medrackLogo} className=" h-10 w-full"  /></div>
       <button className=" block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
       </button>
       <div className=" text-xl hidden md:block font-semibold ">Medrack Health Pharmaceuricals Limited</div>
      
      </div>
      <div className=" items-center flex justify-center">
        <Image src={mobileBanner} className=" h-[200px] block md:hidden w-[200px] object-contain object-center" alt="Medrack banner Image" />
       </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 max-w-6xl h-full mx-auto">
        <Notify />
      <div className=" h-full w-full flex justify-center items-center">
          <Image src={banner} className=" h-[400px] hidden md:block w-[500px] object-contain object-center" alt="Medrack banner Image" />
        </div>
      </div>
       </div>
    </div>
  );
}
