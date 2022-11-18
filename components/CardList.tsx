import { ProfileType } from "../utils";
import Card from "./Card";

interface CardListPropType {
  profiles: ProfileType[];
}

const CardList = ({ profiles }: CardListPropType) => {
  return (
    <div>
      {profiles.map((profile, idx) => (
        <Card key={idx} profile={profile} />
      ))}
    </div>
  );
};

export default CardList;
