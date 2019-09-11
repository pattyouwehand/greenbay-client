import * as React from 'react'

export default function List(props) {
  console.log('List props:', props)
    return(
      <div>
        <h1>Welcome at Green Bay</h1>
        <p>Your indoor forrest starts here</p>
        <ul>
          {props.advertisements.map(adv => {
            console.log("ADV", adv)
            return <li key={adv}>
            {adv.id}
          </li>})}
        </ul>
      </div>
    )
  }