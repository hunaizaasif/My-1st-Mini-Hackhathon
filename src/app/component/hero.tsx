
export const metadata = {
    title: "Hero "
  }
  
  export default function Hero() {
    return (
      <section>
      <div className="bg-gray-100  border">
        <h1 className="text-2xl  py-10 font-semibold text-center ">Sell Your Car on PakWheels Aand Get the Best Price</h1>
  
       <div className="flex justify-center mt-7 ">
         
         {/* left section*/}
        <div className=" pr-3 border border-r-inherit  py-11  px-10 bg-slate-100">
          <h2 className="font-semibold py-2 text-blue-950 text-2xl">Post Your Ad on PakWheels</h2>
          <ul className=" space-y-2 ">
          <li>Post Your Ad for Free in 3 Easy steps </li>
          <li>Get Genuine offers from Verifed Buyers</li>
          <li>Sell your Car Fast at the Best Price</li>
  
          <button className=" bg-red-400  w-40 rounded-lg py-1 text-white hover:bg-red-900 ">Post Your Ad</button>
          </ul>
        </div>
      {/*Dividor */}
      <span className="text-center mt-40  text-slate-950 font-bold">OR</span>
          {/*Right section */}
          
             <div className=" border-r-inherit border -ml-0 py-11 mr-10 px-10 bg-slate-100 ">
              <h3 className="font-semibold py-2 text-blue-950 text-2xl">Try PakWheels Sell It For Me</h3>
              <ul className="space-y-2">
              <li>Dedicated Sale Expert to Sell Your Car</li>
              <li>We Bargain for You and share the Best Offer</li>
              <li>We ensure Safe & Secure Transaction</li>
              <button className=" bg-blue-400 w-40 rounded-lg py-1 text-white hover:bg-blue-900 ">Register Your Car</button>
            </ul>
            </div>
            </div>
            </div>
            </section>
    )
}