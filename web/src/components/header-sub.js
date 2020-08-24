import { Link } from 'gatsby'
import React from 'react'
import styles from './header-sub.module.css'

const HeaderSub = ({ siteTitle, projTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <Link className={styles.homeLink} to='/' activeClassName="active">Index</Link>
    </div>
  </div>
)

export default HeaderSub