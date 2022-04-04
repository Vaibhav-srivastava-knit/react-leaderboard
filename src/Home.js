import Student from "./Student";
import { useState } from "react";  
import useFetch from "./useFetch"; 
import "./student.css"
const Home = () => {
    const arr=[]
    let r=1;
    const {data,ispending}=useFetch('http://localhost:8000/student');
    if(!ispending)
    {
        for(let i=0;i<data.length;i++)
        arr.push(data[i])
    }
  arr.sort((a,b)=>{return b.score-a.score})
    return (
         <div>
        {
            arr.map(d=>(
                <div className="student-box">
                <h1></h1>
                        <div className="left-box">
                            <img src={d.image}> 
                            </img>
                        </div>
                        <div className="right-box">
                            <h2>Name:{d.name}</h2>
                           <h2> score:{d.score} </h2> 
                           <h2>rank {r++}</h2>
                        </div>
             </div> 
            ))
        }
        </div>
    );
}
 
export default Home;