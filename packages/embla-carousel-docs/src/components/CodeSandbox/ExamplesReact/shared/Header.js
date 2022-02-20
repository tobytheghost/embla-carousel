import React from 'react'
import packageJson from '../../package.json'

const Header = () => (
  <header>
    <h1 className="header">
      {packageJson.name.replace(/(^\w|-\w)/g, (replaceString) =>
        replaceString.replace(/-/, ' ').toUpperCase(),
      )}
    </h1>
  </header>
)

export default Header
