import React from 'react'

export default function Avtar(props) {
  return (
    <div className={props.className}>
         <img onClick={props.click} src={props.url} alt={props.alt}/>
    </div>
  )
}
