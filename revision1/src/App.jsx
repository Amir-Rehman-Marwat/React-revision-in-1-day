import React, { Fragment, useEffect, useState } from 'react'
import Submit from './components/submit'
import Footer from './components/footer'
import Card from './components/Card'
import axios from "axios"
function App() {
  console.log("app is rendering ")
let x=10
  // hooks
  const [a, seta] = useState(x)
  const [name, setname] = useState("")
  const [age, setage] = useState("")
  const [data, setData] = useState([])
 console.log(data)
  useEffect(() => {
    // alert("runinng use only one time")
    const response=axios.get('https://jsonplaceholder.typicode.com/todos')
    response.then(res=>{
      if(data.length<1){
 setData(res.data)
      }
     
    }).catch(err=>{
      alert("there is an error",err)
    })
     return ()=>{
      
     }
    
  },[data])
  

  const submitHandler=(e)=>{
    e.preventDefault()
console.log("form submitted")
const nameRegex=/^[A-Za-z\s]{2,30}$/;
const ageRegex=/^(?:1[01][0-9]|120|[1-9]?[0-9])$/;
const validName=nameRegex.test(name);
const validAge=ageRegex.test(age);
if(!validName){
  alert("Name must contain only letters and spaces (2–30 characters)")
}
if(!validAge){
  alert("Age must be a number between 0 and 120")
}
setname("")
setage("")
  }
  // other
const response=[{heading:"gym",data:"i was goin to gym"},{heading:"cafe",data:"i have to open cafe "}]
const run=async(data)=>{
console.log("fnc runing")
}

  return (
    <Fragment key={"helooo"}>


      <form  onSubmit={submitHandler} action="">
        <input type="text" placeholder='enter your name' name='name' value={name} onChange={(dets)=>{
          setname(dets.target.value)
        }}/>
        <input type="number" 
        name="age"
         id="" 
          value={age} 
          placeholder='"enter you age use Numbers only ...'
          onChange={(dets)=>{
setage(dets.target.value)
        }}/>
        <button  type="submit">ENTER</button>
      </form>
      <button onClick={()=>{
        seta(prev=> prev+1)
        seta(prev=>prev)
        seta(prev=>prev+3)
      
      }}> Click</button>
      <h3>{a}</h3>
      <h2>before</h2>
      <Submit  run={run} seta={seta}/>
      <h2>after</h2>


{response.map((val,idx)=>{
  return <Fragment key={idx}> <Card heading={val.heading} data={val.data}/> </Fragment>
})}
      
      
      <Footer data={{name:"amir",age:17}} data2={[1,2,3]}/>

      </Fragment>
    
    
  )
}

export default App
