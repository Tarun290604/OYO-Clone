'use client'

const Header3 = () => {
    return (
        <div className=" bg-gradient-to-r from-red-600 to-red-400 h-60">
            <div className=" p-5">
                <h2 className=" text-4xl text-white text-center my-1 font-bold">
                    World's Fastest Growing Hotel Chain</h2>
                <div className=" grid grid-cols-5 my-5 mx-20">
                    <input type="text" placeholder="Search...." className=" h-16 px-3 outline-none text-lg border-r-2 border-gray-400 col-span-2"  />
                    <input type="text" placeholder="Search...." className=" h-16 px-3 outline-none text-lg border-r-2 border-gray-400 col-span-1" />
                    <input type="text" placeholder="Search...." className=" h-16 px-3 outline-none text-lg border-r-2 border-gray-400 col-span-1" />
                    <button type="submit" className=" h-16 px-3 py-2 col-span-1 bg-green-400
                    hover:cursorver-pointer hover:green-600 text-white text-xl">Search</button>
                </div>
                <div className="flex mx-20 my-5 font-bold">
                <button type="submit" className=" h-14 px-3 py-2 hover:cursorver-pointer text-white mr-5">Continue your search</button>
                <button type="submit" className=" h-14 px-3 py-2 hover:cursorver-pointer rounded-xl border-2 text-white mr-5 hover:bg-gray-500">Homestay in India Hotels</button>
                </div> 
            </div>
        </div>
    );
};

export default Header3