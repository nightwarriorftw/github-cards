import Header from "../components/Header";
import CardList from "../components/CardList";
import UserInput from "../components/UserInput";
import { NextPage } from "next";
import { defaultProfiles, ProfileType } from "../utils";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [profiles, setProfiles] = useState(defaultProfiles);

  const addCard = (newCard: ProfileType) => {
    setProfiles([...profiles, newCard]);
  };

  useEffect(() => {
    setTimeout(() => {
      setProfiles([...profiles, defaultProfiles[0]]);
    }, 500);
  }, []);

  return (
    <div>
      <Header />
      <UserInput addCard={addCard}/>
      <CardList profiles={profiles} />
    </div>
  );
};

export default Home;
