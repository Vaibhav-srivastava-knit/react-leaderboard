import "./add.css"
import {useState} from 'react'
const Add = () => {
    const [name,setName]=useState('')
    const [score,setScore] = useState('')
    const [image,setImage] = useState('')
    const student={name,score,image}
    const handleSubmit=(e)=>
    {
      e.preventDefault();
      fetch('http://localhost:8000/student',{
      method :'POST',
      headers: {'Content-Type': 'application/json'},
      body :JSON.stringify(student)
       }
      )
      setName('')
      setScore('')
      setImage('')
    }
    return (
        ///       <div></div>
        
        <div className="add-box">
            <div className="form">
            <form onSubmit={handleSubmit}>
                <div> Name: <input type="textArea" value={name} onChange={(e)=>setName(e.target.value)}></input></div>
                <div> score: <input type="textArea" value={score} onChange={(e)=>setScore(e.target.value)}></input> </div>
                <div> image: <input type="textArea" value={image} onChange={(e)=>setImage(e.target.value)}></input> </div>
               <button>
                     submit
               </button>
            </form>
            </div>
        </div>
    );
}

export default Add;