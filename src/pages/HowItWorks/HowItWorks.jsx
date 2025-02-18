import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <div className={styles.howItWorks}>
      <h1>How It Works</h1>
      <div className={styles.steps}>
        <div className={styles.step}>
          <h2>Step 1: Sign Up</h2>
          <p>Create an account to get started.</p>
        </div>
        <div className={styles.step}>
          <h2>Step 2: Post or Find Tasks</h2>
          <p>Post tasks you need help with or find tasks to complete.</p>
        </div>
        <div className={styles.step}>
          <h2>Step 3: Get Paid or Pay</h2>
          <p>Earn money by completing tasks or pay for tasks you need done.</p>
        </div>
      </div>
    </div>
  );
}