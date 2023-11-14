import { createApi } from "unsplash-js";

export const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!,
});

export interface Unsplash {
  id: string;
  blur_hash: string;
  alt_description: string;
  width: number;
  height: number;
  links: {
    html: string;
    download_location: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string;
    profile_image: {
      medium: string;
    };
    links: {
      html: string;
    };
  };
  urls: {
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  location: {
    name: string | null;
  };
}

export const unsplashCategories: string[] = [
  "nature",
  "food",
  "buildings",
  "animal",
  "cat",
  "holiday",
  "fashion",
  "travel",
  "art",
  "people",
  "happy",
  "weather",
];
