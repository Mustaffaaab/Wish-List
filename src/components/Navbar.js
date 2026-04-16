"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNotif = (e) => {
    e.stopPropagation();
    setShowNotif(!showNotif);
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  const isDashboard = pathname === '/dashboard';

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          Universal Wishlist.
        </Link>
        
        {/* Dektop Menu */}
        <nav className={styles.desktopMenu}>
          <Link href="/" className={styles.link}>Hem</Link>
          <Link href="/about" className={styles.link}>Om oss & Tankar</Link>
          <Link href="/dashboard" className={styles.link}>Dashboard</Link>
          <div className={styles.authLinks}>
            {isDashboard ? (
              <>
                <div className={styles.bellContainer} onClick={toggleNotif}>
                  <div className={styles.bellIcon}>🔔</div>
                  <div className={styles.bellBadge}></div>
                  {showNotif && (
                    <div className={styles.notifDropdown}>
                      <h4>Nya Notiser (1)</h4>
                      <div className={styles.notifItem}>
                        <p>Ett bevakat pris har sjunkit kraftigt! Gå till din dashboard för att se <span>📉 Prissänkta</span> produkter.</p>
                      </div>
                    </div>
                  )}
                </div>
                <button onClick={handleLogout} className="btn-secondary">Logga ut</button>
              </>
            ) : (
              <>
                <Link href="/login" className="btn-secondary">Logga in</Link>
                <Link href="/register" className="btn-primary">Skapa konto</Link>
              </>
            )}
          </div>
        </nav>

        {/* Hamburger Icon */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink} onClick={toggleMenu}>Hem</Link>
          <Link href="/about" className={styles.mobileLink} onClick={toggleMenu}>Om oss & Tankar</Link>
          <Link href="/dashboard" className={styles.mobileLink} onClick={toggleMenu}>Dashboard</Link>
          <Link href="/login" className={styles.mobileAuthBtn} onClick={toggleMenu}>Logga in</Link>
          <Link href="/register" className={styles.mobileAuthBtnPrimary} onClick={toggleMenu}>Skapa konto</Link>
        </nav>
      )}
    </header>
  );
}
