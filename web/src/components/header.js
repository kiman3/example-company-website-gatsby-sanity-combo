import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import srOnly from '../styles/layout.css'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.titleMain}>
        <Link to='/'>{siteTitle}</Link>
      </h1>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to='/' activeClassName="active">Projects</Link>
          </li>
          <li>
            <Link to='/texts/' activeClassName="active">Texts</Link>
          </li>
          <li>
            <Link to='/about/' activeClassName="active">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
