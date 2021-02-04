import styles from '../styles/Header.module.css';


export default function MeetTheTeam (){
  return(
    <>
    <div className={styles.grid}> 
    <h1> Meet the Team </h1>
        <img src="./pinocchio-website/public/pinsplash-adam.jpeg"/>
        <h2> Adam J </h2>
        <p> Github  <a href="https://github.com/AdamJoesten"> </a> </p>
        <p> Linkedln <a href="https://www.linkedin.com/in/adamjoesten/"> </a> </p>

        <img src="./pinocchio-website/public/pinsplash-brandi.jpeg"/>
        <h2> Brandi R. </h2>
        <p> Github  </p> <a href="https://github.com/bjr2008"> </a>
        <p> Linkedln <a href="https://www.linkedin.com/in/brandi-richardson-28295158/"> </a></p>

        <img src="./pinocchio-website/public/pinsplash-giao.jpeg"/>
        <h2> Giao T. </h2>
        <p> Github  <a href="https://github.com/gd-tran"> </a> </p>
        <p> Linkedln <a href="https://www.linkedin.com/in/giao-tran-91353654/"> </a> </p>

        <img src="./pinocchio-website/public/pinsplash-harlan.jpeg"/>
        <h2> Harlan E. </h2>
        <p> Github  <a href="https://github.com/harlanevans"> </a> </p>
        <p> Linkedln <a href="https://www.linkedin.com/in/harlan-evans/"> </a> </p>

        <img src="./pinocchio-website/public/pinsplash-lex.jpeg"/>
        <h2> Lex Choi. </h2>
        <p> Github  <a href="https://github.com/lexiphur"> </a> </p>
        <p> Linkedln <a href="https://www.linkedin.com/in/lexchoi3/"> </a> </p>

    </div>
    </>
  )
}