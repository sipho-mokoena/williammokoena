import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/favicon.ico" alt="William Mokoena" className={styles.logo} /> for you
      </footer>
    </>
  )
}
