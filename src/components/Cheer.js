import React from 'react'
import propTypes from 'prop-types'

const Cheer = ({name, description}) => {
  return (
    <article>
      <h1>{name}</h1>
      <p>{description}</p>
    </article>
  )
}

Cheer.defaultProps = {
  name: 'Missing Cheer',
  description: ''
}

Cheer.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired
}

export default Cheer;