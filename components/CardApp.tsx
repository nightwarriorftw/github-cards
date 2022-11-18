import Header from "../components/Header";
import CardList from "../components/CardList";
import UserInput from "../components/UserInput";
import { NextPage } from "next";
import { defaultProfiles, ProfileType } from "../utils";
import { useState, useContext, createContext } from "react";
import styles from "../styles/Home.module.css"

type ProfileContextType = [ProfileType[], (p: ProfileType[]) => void];

const ProfileContext = createContext<ProfileContextType>([
  defaultProfiles,
  (p: ProfileType[]) => {},
]);

export const useProfileContext = () => useContext(ProfileContext);

const CardApp: NextPage = () => {
  const [profiles, setProfiles] = useState(defaultProfiles);

  return (
    <ProfileContext.Provider value={[profiles, setProfiles]}>
      <div className={styles.main}>
        <Header />
        <UserInput />
        <CardList />
      </div>
    </ProfileContext.Provider>
  );
};

export default CardApp;
