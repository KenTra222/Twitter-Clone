import styles from './post.module.scss'

const Post = ( {content, time}) => {
    return(
        <>
            <p className={styles.postContent}>
                {content}
            </p>
            <p className={styles.postTime}>
                {time}
            </p>
        </>
    )
}

export default Post