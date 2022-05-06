import React from 'react'
import Header from './Header'

const BaseLayout = (props) => {
  return (
    <>
        <Header /><br /><br /><br />

        {props.children}

        <br /><br />

        Footer Information here<br /><br />
    </>
  )
}

export default BaseLayout