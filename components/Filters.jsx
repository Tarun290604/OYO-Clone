'use client'
import { useEffect, useState } from "react";
import axios from "axios";


const Filters = ({ 
    price, 
    setPrice, 
    handlePrice, 
    checkedList, 
    setCheckedList }) => {
    const [list, setList] = useState([]);

    const fetchFacilities = async () => {
        try {
            const { data } = await axios.get(`/api/facilities`);
            if (data?.facilities) {
                setList(data.facilities);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleCheckList = (e)=>{
        let newList = [];
        if(e.target.checked){
            newList.push(e.target.value);
            setCheckedList(newList);
            return;
        }
        newList=newList.filter((i)=>i !==e.target.value);
        setCheckedList(newList);
    }
    useEffect(() => {
        fetchFacilities();
    }, []);
    return (
        <>
            <div className="border-2 border-red-500 rounded-md m-5 h-auto py-10 px-3">
                <label htmlFor="price" className="text-xl font-bold">
                    Price :  {" "}
                </label>
                <input
                    type="range"
                    name="price"
                    id="price"
                    min={500} max={3000}
                    onChange={(e) => setPrice(e.target.value)}
                    defaultValue={price ? price : 0}
                />
                <span className="ml-10"> &#8377; {price ? price : ""}</span>
                <div>
                    <button className="w-40 h-10 bg-green-300 cursor-pointer my-3"
                        onClick={handlePrice}
                    >
                        Search
                    </button>
                </div>
                <div className="my-10">
                    <h3 className="text-xl font-bold my-3 ">Filter by Faciities:</h3>
                    {
                        list?.map((e) => {
                            return (
                                <p className="grid grid-cols-4 my-3 ">
                                    <label htmlFor="checkbox" className="cols-span-2">{e}{" "}</label>
                                    <input type="checkbox"
                                        name="checkbox"
                                        id="checkbox"
                                        value={e}
                                        className="w-5 h-5 ml-3 cols-span-1"
                                        onChange={handleCheckList}
                                    />
                                </p>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Filters