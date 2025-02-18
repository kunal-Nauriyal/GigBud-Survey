import styles from "./Header.module.css";
import logo from "../../assets/logo3.png"; // Import the logo

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="GigBud Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <a href="/register" className={styles.registerLink}>Register</a>
      </nav>
    </header>
  );
}