import React from 'react'
import Main from './Main';
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className={styles.container}>
        <Sidebar />
        <Main />
    </div>
  )
}

export default Layout;
 const styles = {
    container: `pt-[60px] flex w-full`
 }