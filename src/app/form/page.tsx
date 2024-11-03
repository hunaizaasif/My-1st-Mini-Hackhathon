
export const metadata = {
  title: "detail-page"
}


export default function Form() {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center uppercase">
        enter your details
      </h1>

      <div>
        <form className="mt-10 flex gap-5 justify-center  items-center flex-col border">
          <input
            type="text"
            className="p-2 rounded-2xl w-2/5 border text-center border-black"
            placeholder="Enter your Name"
          />

          <input
            type="email"
            className="p-2 rounded-2xl w-2/5 border text-center border-black"
            placeholder="Enter your Email"
          />

          <input
            type="text"
            className="p-2 rounded-2xl w-2/5 border text-center border-black"
            placeholder="Card Number"
          />

          <input
            type="text"
            className="p-2 rounded-2xl w-2/5 border text-center border-black"
            placeholder="Adress"
          />

          <button
            className=" py-3 px-7 rounded-lg 
                 bg-blue-500 text-white"
          >
            Place your order
          </button>
        </form>
      </div>
    </div>
  );
}
