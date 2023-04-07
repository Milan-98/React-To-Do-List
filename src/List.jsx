import Delete from "./assets/delete.svg";
import { useState } from "react";

const List = (props) =>
{
    const data = props.data;
    const [ids,setIds] = useState();
    const [array,setArray] = useState("");
    const [decor,setdecor] = useState();


    const displayNone = (event) =>
    {
     let syam= event.target.parentElement.parentElement.id;
     setIds(syam.match(/\d+/)[0])
    setArray(data.splice(ids,1))
    array;
    }

    const handleCheck = (event) =>
    {
     event.target.nextSibling.style.textDecoration="line-through"
    }


    return(
        
        <>
          
            
            <ul className="mt-12 " >
             {/* list member */}
            {
                
                data.map((i,j) =>
                (
               <div className={`${ props.dark ? `${j%2==0 ? "bg-slate-600" : "bg-slate-500" }` : `${j%2==0 ?  "bg-slate-50" : "bg-white" }`} flex  justify-between  item-center w-screen px-3 md:px-32 h-10`} id={`A${j}`} key={j} >
               <div className="flex">

               {/* ckeckbox */}
               <input className={`${ props.dark ? "accent-slate-300" : "accent-purple-600" } outline-1 outline-purple-700 focus:outline-double outline-offset-2 my-auto w-4 md:w-6 h-4 md:h-6 mr-2 md:mr-12`} type="checkbox" id={j} onChange={handleCheck} /> 

               {/* data */}
               <li className="my-auto" id={`B${j}`}> 
               <label className={`text-slate-800 font-semibold text-lg`} htmlFor={j}  > {i}  </label> 
               </li></div> 

               {/* delete button */}
               <button className="cursor-pointer" onClick={displayNone} ><img src={Delete}  className="w-5 h-6" alt="" /></button>
               </div>
                    
                    )
                    ) }
                    </ul>
                   
                   </>
                   
                   )
}
export default List;