import styles from '../styles/Intro.module.css';
export default function Intro() {
  return(
    <>
      <div className={styles.container}>
        <div className={styles.item-1}>
          <h1>Making test creation playful.</h1>
          <h1>No code required.</h1>
          <p>sentence goes here selling it.</p>
        </div>
        <div className={styles.item-2}>
          <h1>gif goes here</h1>
        </div>
      </div>
    </>
  )
}