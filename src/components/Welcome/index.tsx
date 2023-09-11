

import styles from "./Welcome.module.scss"
export default function Welcome() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src="https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png" alt="Google Drive Logo" className={styles.logo} />
      </header>
      <main>
        <section className={styles.welcomeText}>
          <h1>Welcome to Google Drive</h1>
          <p>Your files in one secure place, accessible from anywhere.</p>
        </section>
      </main>
      <footer className={styles.footer}>
      <h3>Google drive Clone 2023 &copy; Terence Faid JABO</h3>

      </footer>
    </div>
  )
}
