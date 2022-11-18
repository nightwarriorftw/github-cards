import { ProfileType } from "../utils";
import Image from "next/image";
import styles from "../styles/Home.module.css"

interface CardPropType {
  profile: ProfileType;
}

const Card = ({ profile }: CardPropType) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={profile.avatar_url} alt="avatar" width={1000} height={100} />
      </div>
      <div>
        <h2 className={styles.title}>
          {profile.name} ({profile.login})
        </h2>
        <p className={styles.description}>{profile.bio}</p>
        <p className={styles.description}>
          {profile.blog && (
            <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-1 rounded-md">
              Website
            </a>
          )}
        </p>
        {/* <p className={styles.description}>
          <code className={styles.code}>Public Repos {profile.public_repos} </code>
          <code className={styles.code}>Public Gists {profile.public_repos}</code>
        </p> */}
      </div>
    </div>
  );
};

export default Card;
