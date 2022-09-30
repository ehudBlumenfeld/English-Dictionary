import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//evfvfimport { css, keyframes } from '@emotion/react'



function HeaderComp() {
  const[word,setWord]=useState(null)
  const[type,setType]=useState(null)
  const inputRef=useRef(null)
  const storeData=useSelector(state=>state)
  const dispatch=useDispatch()
  

  useEffect(()=>{
   inputRef.current.focus()
  },[])

  const find=()=>{
    if (word){
      if(type){
      let obj={search:word,type:type.type}
        dispatch({type:"SEARCH",payload:obj})
      }
      else{
         alert("Please select type")
      }
    }
    else{
        alert("Please enter a word")
    }  
  }
  

  return (
    <div style={{position:'absolute',
    right:0,
    margin:"20px",
    maxWidth:"300px",
    padding:"16px",
    backgroundColor:'white' ,
    textAlign:"center",
    marginBottom:"20px",
    padding:"1px 1px"}} >
     
      <label>Search for:<br/></label>
      <input type="text" style={{width: "70%",
              padding: "15px",
              margin: '5px 0 22px 0',
              border: "none",
              background:"#f1f1f1"}} 
              ref={inputRef} placeholder="Please enter a word" onChange={e=>setWord(e.target.value)}
     /><br/>
      <label >Search type:<br/></label>
          <select style={{width: "70%",
              padding: "8px",
              margin: '5px 0 22px 0',
              border: "none",
              background:"#f1f1f1"}} onChange={e=>setType({type:e.target.value})}>
            <option />
            <option disabled>Select type :</option>
          {
              storeData.searchBy.length&&storeData.searchBy.map((item,index)=>{
              return <option value={item} key={index}>{item}</option>
            })
          }
          </select><br/>
      <input type="button" value={"Find"} onClick={find} style={{ backgroundColor: "#04AA6D",
  color: "white",
  padding:" 16px 16px",
  border: "none",
  width: "80%",
  opacity: "0.9"
}}/>
    </div>
  );
}

export default HeaderComp;
