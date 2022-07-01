import Head from 'next/head'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1 className={styles.title}>
        My Posts
       </h1>

       <ul className={styles.posts}>
          <li>
            <p className={styles.postContent}>
             I’m working in Figma trying to design a new website that shows all of my tweets
            </p>
            <p className={styles.postTime}>
             6/29/2022 
            </p>
          </li>

          <li>
            <p className={styles.postContent}>
             I’m working in Figma trying to design a new website that shows all of my tweets
            </p>
            <p className={styles.postTime} >
             6/29/2022 
            </p>
          </li>

          <li>
            <p className={styles.postContent}>
             I’m working in Figma trying to design a new website that shows all of my tweets
            </p>
            <p className={styles.postTime}>
             6/29/2022 
            </p>
          </li>
       </ul>

       <form>
        <textarea className={styles.formContent}></textarea>
        <button className={styles.formButton}>Add New Tweet</button>
       </form>
      </main>

 
    </div>
  )
}
