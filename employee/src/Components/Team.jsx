import axios from 'axios';
import React ,{useState,useEffect}from 'react'

const Team = () => {
    const [team, setteam] = useState([])

    const remove=async(id)=>{
        await axios.delete(`http://localhost:8080/team/${id}`)
        .catch((err)=>{
            console.log(err);
        })
        window.location.reload()
    }
    const fetch= async()=>{
        await axios.get("http://localhost:8080/team",{
             method: 'GET',
         }).then((r)=>{
             console.log("r",r.data);
             setteam(r.data)
         }).catch((e)=>{
             console.log(e);
         })
         console.log("team",team);
       }
     
       const sortbyage=()=>{
        team.sort((a,b)=>{
            return (b.age-a.age)
        })
       }


       useEffect(()=>{
         fetch()
       },[])
  return (
   <>
   <div className="team">
   <div className="emp">
        <h1>Employees</h1>
        <button onClick={sortbyage}>Sort By Age</button>
        {
            team.map((el)=>{
                return <div className="empdetails" key={el.id}>
                        <div >{el.first_name}</div>
                        <div>{el.age}</div>
                        <button
                        // disabled={true}
                        onClick={()=>remove(el.id)}
                        >Remove</button>
                </div>
            })
        }

       
    </div>
   </div>
   </>
  )
}

export default Team