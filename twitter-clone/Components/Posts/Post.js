import styles from './post.module.scss'
import {HiHeart, HiShare} from 'react-icons/hi'

const Post = ( {content, time}) => {
    return(
        <>
            <p className={styles.postContent}>
                {content}
            </p>
            <ul className={styles.postMeta}>
                <li className={styles.postMetaData}>
                  <HiHeart className={styles.svg}/>
                    323
                </li>

                <li className={styles.postMetaData}>
                    <HiShare className={styles.svg}/>
                    share
                </li>

                <li className={styles.postMetaData}>
                    {time}
                </li>
            </ul>
           
        </>
    )
}

export default Post