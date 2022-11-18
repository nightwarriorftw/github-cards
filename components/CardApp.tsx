import Header from "../components/Header";
import CardList from "../components/CardList";
import UserInput from "../components/UserInput";
import { NextPage } from "next";
import { defaultProfiles, ProfileType } from "../utils";
import { useState, useContext, createContext } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

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
      <Head>
        <meta name="keywords" content="" />
        <meta name="description" content="Github App" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Github App</title>
      </Head>
      <div className={styles.main}>
        <Header />
        <UserInput />
        <CardList />
      </div>
    </ProfileContext.Provider>
  );
};

export default CardApp;
