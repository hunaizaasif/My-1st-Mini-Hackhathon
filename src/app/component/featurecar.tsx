import { LuStar } from "react-icons/lu";
import { HiMiniStar } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeatureCar() {
  return (
    <div>
      <div className="flex justify-around mt-10 ">
        <h1 className="font-semibold text-2xl">Feature New Cars</h1>
        <h2 className="text-blue-300 "> View All New Cars</h2>
      </div>
      <div >
        <ul className="flex mt-4 ml-60 mb-10 space-x-5  ">
          <li>
            <Link href="/Popular" className="underline underline-color-blue">
              Popular
            </Link>
          </li>
          <li>
            <Link href="/Upcoming" className=""></Link>Upcoming
          </li>
          <li>
            <Link href="/Newly Launched" className=""></Link>Newly Launched
          </li>
        </ul>
      </div>

      <div className="flex mt-10 space-x-0  mr-20">
        <Link 
          href="/toyyota-corolla-1.jpg"
          className="text-center w-3/12 px-3 "
        ></Link>
        <div className="hover :scale-105 transform trancetion text-center border duration-400 ease-in-out">
          <Image
            src="/Corolla.jpg"
            alt="TOYOTA CROLLA"
            width={300}
            height={300}
          />
          <h4 className="text-blue-600 font-bold pt-5 ">Toyota Corolla</h4>
          <h1 className="text-green-300">PKR 59.7 - 75.5 lacs</h1>
          <span className="flex text-center justify-center">  
            <span className="text-orange-400  ">
              {" "}
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              {" "}
              <LuStar />{" "}
            </span>
            <span className="text-orange-400 ">
              <LuStar />{" "}
            </span>
          </span>
          <span className="text-gray-600 font-italic pl-3 ">621 Riviews</span>
        </div>
      

        
        <Link
          href="/suzuki-Altuo"
          className="w-3/12  "
        ></Link>
        <div className="hover :scale-105 transform trancetion border text-center w-3/12  duration-400 ease-in-out">
          <Image
            src="/suzuki-Altuo-2.png"
            alt="SUZUKI ALTUO"
            width={300}
            height={300}
          />
          <h4 className="text-blue-600 font-bold pt-5 ">Suzuki Altuo</h4>
          <h1 className="text-green-300">PKR23.3 -30.5 lacs</h1>
          <span className="flex text-center justify-center">  
            <span className="text-orange-400  ">
              {" "}
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              {" "}
              <LuStar />{" "}
            </span>
            <span className="text-orange-400 ">
              <LuStar />{" "}
            </span>
          </span>
          <span className="text-gray-600 font-italic pl-3 ">199 Riviews</span>
        </div>
      

      
        <Link
          href="Honda-civic-3.jpg"
          className="text-center w-3/12 px-3 bg-white"
        ></Link>
        <div className="hover :scale-105 transform trancetion border text-center  duration-400 ease-in-out">
          <Image
            src="/Honda-civic-3.jpg"
            alt="/HONDA CIVIC"
            width={300}
            height={300}
          />
          <h4 className="text-blue-600 font-bold pt-5  ">HOnda Civic</h4>
          <h1 className="text-green-300">PKR 86.6 - 99.0 lacs</h1>
          <span className="flex text-center justify-center">
            <span className="text-orange-400 "> 
              {" "}
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              {" "}
              <LuStar />{" "}
            </span>
            <span className="text-orange-400 ">
              <LuStar />{" "}
            </span>
          </span>
          <span className="text-gray-600 font-italic pl-3 ">357 Riviews</span>
        </div>
      

      
        <Link
          href="/Honda_City_4.jpg"
          className="text-center w-3/12 px-3 bg-white"
        ></Link>
        <div className="hover :scale-105 transform trancetion border text-center duration-400 ease-in-out">
          <Image
            src="/Honda_City_4.jpg"
            alt="/HONDA CIty"
            width={300}
            height={300}
          />
          <h4 className="text-blue-600 font-bold pt-5 ">Honda City</h4>
          <h1 className="text-green-300">PKR 46.5 - 58.5 lacs</h1>
          <span className="flex text-center justify-center">
            <span className="text-orange-400  ">
              {" "}
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              <HiMiniStar />{" "}
            </span>
            <span className="text-orange-400  ">
              {" "}
              <LuStar />{" "}
            </span>
            <span className="text-orange-400 ">
              <LuStar />{" "}
            </span>
          </span>
          <span className="text-gray-600  ">458 Riviews</span>
        </div>
        </div>
      </div>
    
  );
}
