import Hotel from "@/components/Hotel"
import Header from "@/components/Header"
import Filters from "@/components/Filters";
import { useEffect, useState } from "react";
import axios from "axios";

const Hotels = ({hotels}) => {
  
  const [price,setPrice] = useState(3000);
  const [list,setList] = useState([]);
  const [checkedList,setCheckedList] = useState([]);
 
  const handleCheckList = async () =>{
    const { data }= await axios.get(`/api/facilities/search?val=${checkedList}`);
    if(data?.hotels){
      setList(data.hotels);
    }
  };

  useEffect(() => {
    if(checkedList){
      handleCheckList();
    }
  },[checkedList])
  const handlePrice = async()=>{
    const {data}= await axios.get(`/api/facilities/range?price=${price}`);
    if(data?.hotels){
      console.log(data.hotels);
      setList(data.hotels);
    }
  };


  return (
    <>
        <Header/>
        <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filters 
          price={price} 
          setPrice={setPrice} 
          handlePrice={handlePrice}
          setCheckedList={setCheckedList}
          />
        </div>
        <div className="col-span-9">
        {
          list.length > 0 
          ? list.map((e)=>{
            return( <div className="m-5 " key={e._id}>
            <Hotel e={e}/>
          </div>);
          }):hotels 
          ?hotels.map((e)=>{
            return (
              <div className="m-5 " key={e._id}>
                <Hotel e={e}/>
              </div>
            );
          }) 
        :""
        }
        </div>
        </div>
    </>
  );
};

export async function getServerSideProps (ctx){
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  // console.log(ctx.query);
  const data = await res.json();
  // console.log(data);

  return{
    props:{
      hotels:data.hotels?data.hotels: data.allhotels,
    }
  }
}

export default Hotels