import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Card from './Card';

const Posts = () => {
    const [data,setData]=useState([]);
    const [searchdata,setsearchData]=useState("");
     const [filter,setFilter]=useState([]);
    
const fetchData=async()=>{
    await   axios.get("https://jsonplaceholder.typicode.com/posts",{
        method: 'GET',
    }).then((response)=>{
            setData( response.data);
            setFilter( response.data);
    }).catch((error)=>{
        console.log(error);
    })
    console.log(data);
}

const handleChange=(e)=>{
    setsearchData(e.target.value);
}
const handleClick=()=>{
    console.log(searchdata);
    
    if(filter.length<=data.length){
        setData(data)
    }
    const filt=filter.filter((el)=>{
        return el.title.includes(searchdata.toLowerCase());
    })
    console.log(filt);
    setData(filt)
   
}
useEffect(()=>{
    fetchData()
},[]);
  return (
   <>
   <div className="Container">
   <div className="search">
   <div> <input type="text" name="search"value={searchdata} onChange={handleChange}/></div>
    <div>
        <button onClick={handleClick}>Search</button>
    </div>
   </div>
    <div className="datadiv">
        {
            data && data.map((el)=>{
                return <Card key={el.id} uid={el.userId} title={el.title}body={el.body} />
            })
        }
    </div>
   </div>
   </>
  )
}

export default Posts