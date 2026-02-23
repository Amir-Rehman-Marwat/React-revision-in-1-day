import React, { Fragment, useState } from 'react'
import Submit from './components/submit'
import Footer from './components/footer'
import Card from './components/Card'
Card
function App() {
  console.log("app is rendering ")
let x=10
  // hooks
  const [a, seta] = useState(x)
  console.log(a)
  // other
const response=[{heading:"gym",data:"i was goin to gym"},{heading:"cafe",data:"i have to open cafe "}]
const run=async(data)=>{
console.log("fnc runing")
}

  return (
    <Fragment key={"helooo"}>
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
