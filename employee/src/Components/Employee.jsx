import axios from 'axios';
import React ,{useEffect, useState}from 'react'
import '../App.css'

const Employee = () => {
    const [empdata,setempdata]=useState([])
   
   
    const addemp=(e)=>{
      
       adddata(e)
       window.location.reload()
      
    }
   
const adddata= async(data)=>{
    await axios.post("http://localhost:8080/team",data)
    .then((r)=>{
        console.log(r.data);
    }).catch((e)=>{
        console.log(e);
    })
}

  const fetch= async()=>{
   await axios.get("http://localhost:8080/employees",{
        method: 'GET',
    }).then((r)=>{
        console.log("r",r.data);
        setempdata(...r.data)
    }).catch((e)=>{
        console.log(e);
    })
    console.log("empdata",empdata);
  }

  useEffect(()=>{
    fetch()
  },[])
  return (
   <>
   <div className="all">
   <h1>Employees</h1>
   <div className="emp">
        
        {
            empdata.map((el)=>{
                return <div className="empdetails" key={el.id}>
                        <div >{el.first_name}</div>
                        <div>{el.age}</div>
                        <button
                        // disabled={true}
                        onClick={()=>addemp(el)}
                        >ADD</button>
                </div>
            })
        }

       
    </div>
   </div>
   
   </>
  )
}

export default Employee