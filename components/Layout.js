import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand}>
          <Link href="/"><a>Mohand Zeyara</a></Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/about"><a>About</a></Link>
          <Link href="/projects"><a>Projects</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Mohand Zeyara — FAU Medizintechnik</p>
      </footer>
    </>
  )
}
