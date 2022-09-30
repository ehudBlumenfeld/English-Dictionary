import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import axios from 'axios';

function WordComp() {
const storeData=useSelector(state=>state)
const [word,setWord]=useState([])
const [data,setData]=useState([])
const [isData,setIsData]=useState(false)

useEffect(()=>{
    setWord(storeData.searchRes)
    setIsData(false)
},[storeData.searchRes.length])
const getData=async(wrd)=>{
 await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+wrd).then(data=>{
    setWord([data.data.word])
    setData(data.data);
    setIsData(true)
 })
 .catch(error=>{
     alert("somthing  wrong")
 })
}

  return (
    <div >
        {
        !isData&&!data.length&&<h3 style={{textAlign:"center"}}>for more inforwtion,please click on the word</h3>
        }
        {
    word.length?
        isData&&data.length?<div> 
        <h4>{data[0].word} :</h4>       
        Part Of Speech :  {data[0].meanings.map(x=>x.partOfSpeech + ", ")}<br/> 
        Phonetic :{data[0].phonetic}     
     </div>
        :
        word.map((item,index)=>{
            return <div style={{}} key={index}>
                <span value={item} onClick={()=>getData(item)}>{item}</span>             
            </div>
        })       
    :
    <> <h1 style={{textAlign:'center'}}>
        Im waiting for you :-)
        </h1>  </>   
}
    </div>
  );
}

export default WordComp;