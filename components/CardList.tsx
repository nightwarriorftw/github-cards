import { useProfileContext } from "./CardApp";
import Card from "./Card";
import styles from "../styles/Home.module.css";

const CardList = () => {
  const [profiles] = useProfileContext();
  return (
    <div className={styles.grid}>
      {profiles.map((profile, idx) => (
        <Card key={idx} profile={profile} />
      ))}
    </div>
  );
};

export default CardList;
