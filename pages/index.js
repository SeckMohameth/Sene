import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Freelancer from '../components/Freelancer.js'
import HeroBanner from "../components/Hero-banner"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jambar

        </h1>

        <div className={styles.grid}>
          <Freelancer/>

        </div>
      </main>

      <footer className={styles.footer}>
          Made with ❤️ in Dakar
      </footer>
    </div>
  )
}
