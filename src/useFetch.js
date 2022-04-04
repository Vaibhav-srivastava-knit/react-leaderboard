import {useState,useEffect} from 'react'
// const url='http://localhost:8000/student'
const useFetch=(url)=>{
    const [data,Setdata] = useState('')
    const [ispending,setPend]=useState(true)
    useEffect(()=>{ 
        const abortCont = new AbortController();
        fetch(url).then(res=>{return(res.json())}).then((data)=>{
        Setdata(data);
        setPend(false);
      
    },[url])
    return () => abortCont.abort()
},[url])
return {data,ispending}
};

export default useFetch;
 
