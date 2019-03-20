import React from 'react'
import {Link} from 'react-router-dom'


export default function AdsList(props) {
  console.log(props)
  // const advert = Object.values(props.advertisements)
  console.log(props.advertisements)
  if (!props.advertisements) {
    return "Loading.. "
  } 
  return (
    <div>
      <ul>
        { !props.advertisements && <li>Loading advertisements...</li> }
        
        { props.advertisements && props.advertisements.advertisements.map(advertisement => (
          <li key={advertisement.id}>
            <Link to={`/advertisements/${advertisement.id}`}>
              {advertisement.title},{advertisement.price}
            </Link>
          </li>
        )) 
        }
      </ul>
    </div>
  )
}