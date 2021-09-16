export interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

export interface UserDetails {
  type_of: string;
  id: number;
  username: string;
  name: string;
  summary: string;
  twitter_username: string;
  github_username: string;
  website_url: null;
  location: string;
  joined_at: string;
  profile_image: string;
}
