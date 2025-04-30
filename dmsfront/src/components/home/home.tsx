import React from 'react';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.mainContent}>
        <h1 className={styles.title}>INSERT NEW APP NAME HERE</h1>
        <img className={styles.logo} src="" alt="Cat Snake Logo" />
        <p className={styles.tagLine}>We're pretty sure this a flawless idea with no consequences</p>
      </main>
    </div>
  );
}

export default Home;