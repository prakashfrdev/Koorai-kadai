import React from 'react'
import './style.css'

const Card = ({name}) => {
  return (
    <div className='card-container'>
       <img src={name.img}/>
       <div className="inner-content">
       <p style={{color:'red'}}> {name.food}</p>
       <p>Rs:{name.rs}</p>
       </div>
    </div>
  )
}

export default Card