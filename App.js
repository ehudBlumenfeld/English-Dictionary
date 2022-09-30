import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BarChart from './barChart';
import HeaderComp from './header';
import LineChart from './lineChart';
import WordComp from './words';

function App() {
const dispatch=useDispatch()
const storeData=useSelector(state=>state)
const wordList = require('word-list-json');
const [Data, setData] = useState({})
const [isData, setIsData] = useState(false)
useMemo(()=>{
  let count=0
  setData({ 
   labels: storeData.searchRes.map((data) => count+=1),
    datasets: [
      {
        label: "Length of results",
        data: storeData.searchRes.map((data) => data.length),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],  
  })
  if(storeData.searchRes.length){
  setIsData(true)
  }
},[storeData.searchRes])
    

useEffect(()=>{
dispatch({type:"LOAD DATA",payload:wordList})
},[wordList])

  return (
    <div >
       <h2>Free Dictionary : </h2>
      <header style={{
        backgroundImage:"URL(https://cdn.pixabay.com/photo/2018/04/06/04/59/book-3294946_960_720.jpg)",
        height:250,
        minHeight:300,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}>
            <HeaderComp/>
      </header>
       <hr/>
       {
         isData?
         <div style={{display: "flex"}}>
         <div style={{ width: "50%" }}>
        <BarChart chartData={Data} />
      </div>
      <div style={{ width: "50%" }}>
        <LineChart chartData={Data} />
      </div>
      
      </div>
      :
      <div style={{textAlign:'center'}}>there isn't any data...</div>
       }
       
       <hr/>
      <section style={{
        backgroundColor:"grey",
        color:'white',
        height:"100%",
        minHeight:'300px',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}>

        <WordComp/>

      </section>  
    </div>
  );
}

export default App;
