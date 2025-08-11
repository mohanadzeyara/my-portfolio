import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="/profile.svg" alt="Profile" className={styles.avatar} />
      <h1>Mohand Zeyara</h1>
      <h2>Student — Medizintechnik, FAU</h2>
      <p className={styles.bio}>
        I am a Medizintechnik student at FAU interested in biomedical devices, medical imaging, and practical, low-cost healthcare solutions.
        This site is a compact student portfolio showing small projects and contact info.
      </p>
    </div>
  )
}
