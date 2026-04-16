import styles from './about.module.css';

export default function About() {
  return (
    <main className={styles.container}>
      <div className={styles.glowBlob}></div>
      
      <div className={styles.contentWrapper}>
        <h1 className={`animate-fade-in ${styles.title}`}>Mina Tankar.</h1>
        
        <div className={`animate-fade-in delay-100 ${styles.glassCard}`}>
          <p className={styles.paragraph}>
            Visionen bakom <strong>Universal Wishlist</strong> är superenkel. Jag blev trött på att ha 10 olika appar för att spara skor från Nike, tröjor från Zalando och tech från Webhallen.
          </p>
          <p className={styles.paragraph}>
            E-handeln har blivit alldeles för fragmenterad. Så jag byggde detta premium-verktyg för att automatisera jobbet. Du klistrar in en länk, du fyller i din storlek. Sedan väntar du. <strong>Är storleken slut? Systemet vet det. Går priset ner? Systemet bevakar det.</strong>
          </p>
          <p className={styles.paragraph}>
            Det handlar inte bara om att köpa grejer – det handlar om att äga sin egen data och få en snyggare, mer transparent shoppingupplevelse på sina egna villkor.
          </p>
          
          <div className={styles.signature}>
            <div className={styles.avatar}>🚀</div>
            <div className={styles.authorInfo}>
              <h4>Skaparen</h4>
              <p>Grundare av Universal Wishlist</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
