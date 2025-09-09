import styles from "./page.module.css";
import Header from "@/components/Header";

export default function About() {
  return (
    <div>
        <Header />
              <main className="p-6">
      <h1 className={styles.title}>Миний тухай</h1>
      <p className={styles.description}>
        Энэ хуудсыг CSS Module ашиглаж загварчилсан.
      </p>
      </main>
    </div>
    
  );
}
