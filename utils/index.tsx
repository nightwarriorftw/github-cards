export type ProfileType = {
  name: string;
  login: string;
  avatar_url: string;
  blog: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
};

export const defaultProfiles: ProfileType[] = [
  {
    name: "Aman Verma",
    login: "nightwarriorftw",
    avatar_url: "https://avatars.githubusercontent.com/u/32111606?v=4",
    blog: "https://nightwarriorftw.netlify.app/",
    bio: "Senior Software Engineer @Codingal (YC W21) | Full Stack Developer | Core Team @osdc ( prev ) | Curious Learner",
    public_repos: 84,
    public_gists: 4,
    followers: 27,
    following: 9,
  },
];
