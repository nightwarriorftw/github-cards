import { useRef, useState } from "react";
import { ProfileType } from "../utils";

interface PropType {
  addCard(newCard: ProfileType): void;
}

const UserInput = ({ addCard }: PropType) => {
  const [err, setErr] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const refVal = ref.current as HTMLInputElement;
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
              addCard({
                name,
                login,
                avatar_url,
                blog,
                bio,
                public_repos,
                public_gists,
                followers,
                following,
              });
            });
        }}
      >
        <input ref={ref} type="text" />
        <button className="btn btn-danger">Add Profile</button>
      </form>
      <span>{err && <p>{err}</p>}</span>
    </div>
  );
};

export default UserInput;
