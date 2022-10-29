import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Visits() {
    return (
        <div className={styles.container}>
        <Head>
            <title>SRF MIS</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Visits page
            </h1>
        </main>

        <footer className={styles.footer}>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
        </footer>
        </div>
    )
}
