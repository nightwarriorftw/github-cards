import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import CardList from "../components/CardList";
import UserInput from "../components/UserInput";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <UserInput />
        <CardList />
      </main>
    </div>
  );
}
