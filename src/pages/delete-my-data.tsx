// pages/delete-my-data.tsx
import Head from "next/head";
import styles from "../styles/DeleteMyData.module.css";

export default function DeleteMyData() {
  return (
    <>
      <Head>
        <title>Data Deletion Policy – Albal Radio</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.heading}>Data Deletion Policy</h1>
          <p className={styles.text}>
            This app only accesses Instagram content from the owner's account and does not store or process any user data.
            <br /><br />
            If you believe your data has been used incorrectly, please contact us at:
            <br />
            <a href="mailto:albalradio966@gmail.com" className={styles.link}>
              albalradio966@gmail.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
