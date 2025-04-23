import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.brandSection}>
        <Image src="/icon.png" alt="Albal Radio" width={24} height={24} className={styles.logo} />
        <span className={styles.brand}>AlBal Radio</span>
      </div>

      <button className={styles.menuToggle} onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`${styles.navLinks} ${open ? styles.open : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/privacy">Privacy</Link></li>
        <li><Link href="/terms">Terms</Link></li>
      </ul>
    </nav>
  );
}
