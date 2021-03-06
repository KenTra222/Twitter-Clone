import Head from 'next/head'
import Post from '../Components/Posts/Post'
import PostForm from '../Components/PostForm/PostForm'
import Bio from '../Components/Bio/Bio'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta 
          name="description"
          content="Generated by create next app" />
        <link 
          rel="icon" 
          href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Bio
        headshot='https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        name='Fatima Smith'
        tagline='Changing lives and heads one run way at a time!'
        role='Model x Philanthropist'
        />;

       <ul className={styles.posts}>
          <li>
            <Post 
              content='hey i am a new post on the phone right now' 
              time='2/22/2022'/>
          </li>

          <li>
            <Post 
              content='hey i am a new post' 
              time='2/26/2022'/>
          </li>

          <li>
            <Post
              content='hey i am a new post' 
              time='2/30/2022'/>
          </li>
       </ul>

       <PostForm/>


      </main>

 
    </div>
  )
}
