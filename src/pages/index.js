import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Index () {
  return (
    <div className={styles.container}>
      <Head>
        <title>EE2E Demo</title>
      </Head>
    </div>
  )
}
