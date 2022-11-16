import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import CardList from "../components/CardList";
import UserInput from "../components/UserInput";
import { NextPage } from "next";
import { profiles } from "../utils";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <UserInput />
        <CardList profiles={profiles} />
      </main>
    </div>
  );
};

export default Home;
