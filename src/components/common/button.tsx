import React from 'react'

export default function button({btnClass, title, onClick}: Button) {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>{title}</button>
  )
}
