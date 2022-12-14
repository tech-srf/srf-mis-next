import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
        <Head>
            <title>SRF MIS</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <div className={styles.background}>
                    <main className={styles.main}>
                        <Image 
                            src='/logo.png'
                            width={200}
                            height={100}
                        />
                        <p className={styles.text}>
                            Management Information System
                        </p>

                    </main>
            </div>
        </div>
    )
}
