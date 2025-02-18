import styles from "./Footer.module.css";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.footer}>
      <p>© {currentYear} GigBud. All rights reserved.</p>
    </footer>
  );
}
