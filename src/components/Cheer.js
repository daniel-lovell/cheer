import React from 'react'
import propTypes from 'prop-types'
import './Cheer.css'

const Cheer = ({name, description}) => {
  return (
    <article className="cheer">
      <h1>{name}</h1>
      <p>{description}</p>
    </article>
  )
}

Cheer.defaultProps = {
  name: 'Error: Missing Cheer',
  description: ''
}

Cheer.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired
}

export default Cheer;