"use client"

import React, { useContext } from 'react'
import styles from './darkModeToggle.module.css'
import { ThemeContext } from '../../../Context/ThemeContext'

const DarkModeToggle = () => {
  // use the hook useContext to bring the toggle and mood
  const {toggle, mode} = useContext(ThemeContext)
  
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon} >🌑</div>
      <div className={styles.icon} >🌞</div>
      <div className={styles.ball} style={mode === "light" ? { left: "2p" } : { right: "2px" }} />
    </div>

  )
}

export default DarkModeToggle
