import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800 text-white h-12 py-2 px-3 flex justify-between items-center ">
        <div>
          <Image
            src="/pakwheel-logo.png"
            alt="Pak logo"
            width={55}
            height={12}
          />
        </div>
        <div>
          <ul className="flex space-x-3 ">
            <li>
              <Link href="/" className="hover:text-red-400">
                UsedCars
              </Link>
            </li>
            <li>
              <Link href="/newcars" className="hover:text-red-400 ">
                NewCars
              </Link>
            </li>
            <li>
              <Link href="/bikes" className="hover:text-red-400>Bikes">
                Bikes
              </Link>
            </li>
            <li>
              <Link href="/autostore" className="hover:text-red-400">
                AutoStore
              </Link>
            </li>
            <li>
              <Link href="/videos" className="hover:text-red-400">
                Videos
              </Link>
            </li>
            <li>
              <Link href="/forums" className="hover:text-red-400">
                Forums
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-red-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/more" className="hover:text-red-400">
                More
              </Link>
            </li>
            <button className="bg-red-500 flex py-1 px-4 rounded-lg">
              Post an Ad
            </button>
          </ul>
        </div>

        <div>
          <ul className="flex space-x-2">
            <li>
              <Link href="/sign up" className="hover:text-red-400">
                sign up
              </Link>
            </li>
            <li> |</li>
            <li>
              <Link href="/sign in" className="hover:text-red-400">
                sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
