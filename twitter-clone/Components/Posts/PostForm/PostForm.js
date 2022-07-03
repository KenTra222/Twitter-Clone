import styles from './postForm.module.scss'

const PostForm = () => {
    return(
        
       <form>
        <textarea 
          className={styles.formContent}>
        </textarea>

        <button 
          className={styles.formButton}>
           Add New Tweet
        </button>
       </form>
        
    )
}

export default PostForm