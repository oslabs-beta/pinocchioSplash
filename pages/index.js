import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Header from '../components/Header';
import Intro from '../components/Intro';
import HowToUseIt from '../components/HowToUseIt';
import MeetTheTeam from '../components/MeetTheTeam';

export default function Splash() {
  return (
    <>
    <div> 
      <Head>
        <title>pinocchio</title>
        <link rel="icon" href="/vertical-blue.jpeg" />
        </Head> 
      <main className={styles.main}>
        <Header /> 
        <Intro/> 
        <HowToUseIt /> 
        <MeetTheTeam/> 
        {/* <div>Description</div>
        <div>Description</div>
        <div>Install Puppeteer, Mocha, and Chai before running your tests.</div>
        <div></div>
        <div>Contact Us</div> */}
      </main>
    </div>
    </>
    )
};