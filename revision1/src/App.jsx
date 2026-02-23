import React, { Fragment } from 'react'
import Submit from './components/submit'
import Footer from './components/footer'
import Card from './components/Card'
Card
function App() {
const response=[{heading:"gym",data:"i was goin to gym"},{heading:"cafe",data:"i have to open cafe "}]
  return (
    <Fragment key={"helooo"}>
      <h2>before</h2>
      <Submit/>
      <h2>after</h2>
{response.map((val,idx)=>{
  return <Fragment key={idx}> <Card heading={val.heading} data={val.data}/> </Fragment>
})}
      
      
      <Footer data={{name:"amir",age:17}} data2={[1,2,3]}/>

      </Fragment>
    
    
  )
}

export default App
