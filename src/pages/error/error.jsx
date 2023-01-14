import React from 'react'
import styles from './styles.module.css'

export default function error() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>404</div>
        <div className={styles.divider}></div>
        <div className={styles.notfound}>Page not found.</div>
      </div>
    </>
  )
}
