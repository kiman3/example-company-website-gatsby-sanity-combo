import React from 'react'
import Header from './header'
import HeaderSub from './header-sub'

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, companyInfo, siteTitle }) => (
  <>
    {location.pathname === '/' &&
      <Header siteTitle={siteTitle} />
    }
    <div className={styles.content}>{children}</div>
  </>
)

export default Layout
