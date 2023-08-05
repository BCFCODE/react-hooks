import React from 'react'

const nameTag = (props) => {
  return (
    <h3 className="name">{props.children}</h3>
  )
}

export default nameTag