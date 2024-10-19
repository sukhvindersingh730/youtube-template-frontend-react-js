import React from 'react'
import o from './card.module.css'


const Card = (props) => {
  return (
    <div  className={`${o.main}`}>
      
      {
        props.s.map((item)=>{
          return<>
          <div className={`${o.card}`}>
          <video src={item.path} controls/>
          <h5>{item.Name}</h5>

          </div>
          
          
          
          </>
          
        })
      }
      
      

    </div>
  )
}

export default Card