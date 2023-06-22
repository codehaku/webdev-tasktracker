import PropTypes from 'prop-types'
//import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
        <button>Add</button>

    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header 