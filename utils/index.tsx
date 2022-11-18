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

export const defaultProfiles: ProfileType[] = [];
