

const appReducer=(state={dictionaryByLength:[],sortDictionary:[],searchBy:[],searchRes:[]},action)=>
{
    switch (action.type)
  {
        case "LOAD DATA":
          let sortDict =action.payload.sort()
          let searchCategory=["prefix","suffix","any","repetitions"].sort()
            return {...state,dictionary:action.payload,sortDictionary:sortDict,searchBy:searchCategory}

        case "SEARCH":
          let search=action.payload.search
          let arr=[]
              switch (action.payload.type)
              {
                case "prefix":   
                  let tempArr=state.sortDictionary.filter(x=>x[0]===search[0])
                    tempArr.forEach(word=>{
                      if(word.toLowerCase().startsWith(search)){
                        arr.push(word)   
                      }}) 
                    return {...state,searchRes:arr}

                case "suffix":
                  let suffixArr=state.sortDictionary.filter(x=>x[x.length-1]===search[search.length-1]);
                      suffixArr.forEach(word=>{
                      if(word.toLowerCase().endsWith(search)){
                        arr.push(word)
                       }})            
                    return {...state,searchRes:arr}

                case "any":
                  state.sortDictionary.forEach(word=>{
                      if(word.toLowerCase().includes(search)){
                        arr.push(word)
                        }
                        })                
                   return {...state,searchRes:arr}
                 
                case "repetitions":
                        state.sortDictionary.forEach(word=>{
                      if(word.toLowerCase().includes(search)){
                        arr.push(word)
                        }
                        })
                       // let repetitions=                
                   return {...state,searchRes:[search+" "+ "is appeapred"+" "+arr.length+" "+"times"]}
                
                case "":
                  return state

                default : return state
              }               
        default : return state
  }
}

export default appReducer;