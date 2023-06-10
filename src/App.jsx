import React from 'react'
import UserInfo from './Component/UserInfo'


const App = (props) => {
  return (
    

<div>
<h2 onClick={props.clicking}> Person: {props.name}</h2>
<input onChange={props.clicking} value={props.name } type="text" />
</div>
  )
}

export default App







