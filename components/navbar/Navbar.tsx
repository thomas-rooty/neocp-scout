import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href="/">
          <div className={styles.title}>
            <div className={styles.title_up}>
              NEO <b>Impact Monitoring</b>
            </div>
            <div className={styles.title_down}>
              <i>Sentry System</i>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.nav__links}>
        <Link href="/">
          NEO
        </Link>
        <Link href="/basics">
          BASICS
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;