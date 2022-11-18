import { ProfileType } from "../utils";
import Image from "next/image";

interface CardPropType {
  profile: ProfileType;
}

const Card = ({ profile }: CardPropType) => {
  return (
    <div className="card">
      <div>
        <Image src={profile.avatar_url} alt="avatar" width={100} height={100} />
      </div>
      <div>
        <h2>
          {profile.name} ({profile.login})
        </h2>
        <p>{profile.bio}</p>
        <p>
          {profile.blog && (
            <a href={profile.blog} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
          <code>Public Repos {profile.public_repos} </code>
          <code>Public Gists {profile.public_repos}</code>
        </p>
      </div>
    </div>
  );
};

export default Card;
