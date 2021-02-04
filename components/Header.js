import styles from '../styles/Header.module.css';

export default function Header(){
  return(
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet"></link>
      <div className={styles.head}>
        <img src="../../public/pinocchio-white-nobg.png"></img>        
        <h1 className={styles.title}>pinocchio</h1>
        <h3>a graphical user interface for Puppeteer test generation</h3>
      </div>
    </>
  )
}