import React from 'react'

export const Header2 = () => {
     const List = [
        {
            name:"Bangalore",
        },
        {
            name:"Culcutta",
        },
        {
            name:"Delhi",
        },
        {
            name:"Mumbai",
        },
        {
            name:"Hyderabad",
        },
        {
            name:"Noida",
        }
     ]
  return (
    <div >
        <div className='flex px-10 py-2 bg-gray-100 justify-between'>
        {
            List.map((e)=>{
                return(
                    <span key={e.name}>{e.name}</span>
                )
            })
        }
        </div>
    </div>
  )
}
