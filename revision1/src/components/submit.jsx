import React from 'react'

function Submit({run,seta}) {
  return (
    <div>
        <button onClick={()=>{
          seta("hello from submit")
        }}> Submit</button>
    </div>
  )
}

export default Submit