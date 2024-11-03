import Image from "next/image";

export const metadata = {
  title: "toyyota-detail"
}





export default function Toyyota() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-center underline mt-5 mb-5 ">
        Toyota Corolla 2024 Price in Pakistan ,Images,Reviews & Specs
      </h1>

      <div className=" ml-72">
        <Image
          src="/Corolla.jpg"
          alt="TOYOTA CROLLA"
          width={300}
          height={300}
        />
      </div>

      <form className="flex gap-5 items-center ml-72 ">
        <input
          type="text"
          className="p-2 rounded-2xl w-40 hover:bg-blue-600 border border-black"
          placeholder="Book a test drive"
        />

        <input
          type="text"
          className="p-2 rounded-2xl w-48 border border-black"
          placeholder="Request Bank Finance"
        />

        <input
          type="text"
          className="p-2 rounded-2xl w-24 border border-black"
          placeholder="visit place"
        />

        <input
          type="text"
          className="p-2 rounded-2xl w-32 border border-black"
          placeholder="Car Inspection"
        />
      </form>

      <h2 className="text-center pt-5 text-xl ">Vehicle Description</h2>
<ul className="text-center mt-5 ">
      <li className=" font-semibold">Number of door</li>
      <li>4</li>

      <li className="font-bold">Engine </li>

      <li>1800 CC</li>
      <li className="font-bold">Candotion</li>
      <li>8.5/10</li>
      <li className="font-bold">Driven</li>
      <li>9,500 KM</li>
      <li className="font-bold">Suspension Type :</li>
      <li>Soft Suspention</li>
      <li className="font-bold">Avg </li>
      <li>13 Km per ltr</li>
      <li className="font-bold">Transmission</li>
      <li>Automatic</li>
      <li className="font-bold">Fuel Type </li>
      <li>High Octane</li>
      </ul>
      <h1 className="text-green-600 text-center mt-8"> PKR 50,00,000</h1>

    
      <button className="text-center w-32 rounded-2xl border border-black py-3 mt-5 ml-72 mb-11
                           bg-blue-500 text-white">
      
        Make Payment
        </button> 

      </div>
  );
}
