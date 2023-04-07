import { useState } from 'react'
import Input from "./Input";
import List from './List';
import Work from "./assets/Work.svg"
import light from "./assets/light.svg"
import night from "./assets/night.svg"

const App = () => {

const [dark,setDark] = useState(false);


const [data,setData] = useState("");
const [arr,setArr] = useState([]);



const handleInput = (event) =>
{
  setData(event.target.value);
};




const pushList = () =>
{
  
  if(data=="")
  {

  }
  else{

    arr.push(data);
    
    document.querySelector("#main").value="";
    setData("");
  }
}



  return (

  //container
    <div className={`h-screen flex flex-col justify-start items-center ${dark ?  "bg-[#1a202c]" : "bg-white"}  `} >
      
    {/* darkmode */}
      <span onClick={()=>setDark(!dark)} 
      className={`ml-80 md:-mr-[50rem] mt-4  p-3 rounded-full ${dark ? "bg-slate-700": "bg-[#edf2f7]"} cursor-pointer`}>
     <img  src={ dark ? night : light}  />
      </span>

    {/* To Do List */}
      <h1 className={`mt-8 text-3xl font-extrabold  ${dark ?"text-zinc-300" :"text-zinc-700" }`}>
        THINGS TO DO
      </h1>

{/* input */}
<Input dark={dark}   input={handleInput} push = {pushList}/>

{/* background image */}

{
  arr.length==0 ? <img className='w-72 mt-9' src={Work}/> :""
}
 

{/* list */}
<List data={arr}  dark={dark}/>
    </div>

  
  )
}

export default App
