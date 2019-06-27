import React from 'react'
import PropTypes from 'prop-types'
import './reset.scss'
import layoutStyles  from './Layout.module.scss'

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {props.children}
      </div>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
