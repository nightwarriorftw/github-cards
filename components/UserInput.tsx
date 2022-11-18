import React, { useRef, useState } from "react";
import { useProfileContext } from "./CardApp";
import styles from "../styles/Home.module.css";

const UserInput = () => {
  const [err, setErr] = useState("");
  const [profiles, setProfiles] = useProfileContext();
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const refVal = ref.current as HTMLInputElement;
    const isPresent = profiles
      .map((profile) => profile.login)
      .includes(refVal.value);

    if (isPresent) {
      setErr("Profile already exists below !!");
      return;
    }

    const endpoint = `https://api.github.com/users/${refVal.value}`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const {
          name,
          login,
          avatar_url,
          blog,
          bio,
          public_repos,
          public_gists,
          followers,
          following,
        } = data;
        if (!login) {
          setErr("No profile Found");
          return;
        }
        setProfiles([
          ...profiles,
          {
            name,
            login,
            avatar_url,
            blog,
            bio,
            public_repos,
            public_gists,
            followers,
            following,
          },
        ]);
      });
  };

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit} className="p-2">
          <input
            ref={ref}
            type="text"
            className="rounded-md p-2"
            placeholder="Search Github User..."
          />
          <button className="btn btn-danger p-2 ml-2 rounded-md bg-blue-500">Add Profile</button>
        </form>
      </section>
      <span>{err && <p>{err}</p>}</span>
    </div>
  );
};

export default UserInput;
