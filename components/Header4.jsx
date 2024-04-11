'use client'
import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 border-gray-300 px-5 rounded-lg">
        <div className="flex items-center">
            <Image src="/fire.jpg" alt="fire" width={200} height={200} className=" mr-5 w-32 h-32 rounded-full"></Image>
            <div className="text-xl">
                <p className="font-bold">Get access to exclusive deals</p>
                <p>Only the best deals reach your inbox</p>
            </div>
        </div>
         <div className="flex">
            <input type="email" className="px-6 py-3 rounded-lg outline-none w-80 h-15 border border-gray-300"
            placeholder="e.g. john@gmail.com" />
            <button type="submit" className=" w-32 h-14 bg-red-500 rounded-lg text-xl text-white cursor-pointer">Notify</button>
         </div>
    </div>
  )
}

export default Header4