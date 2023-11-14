import { unsplash, unsplashCategories } from "@/app/unsplash/unsplash";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const getRandomCategories = () => {
  let chosenCategories: string[] = [];
  for (let i = 0; i < 5; i++) {
    const filteredCategories = unsplashCategories.filter(
      (category) => !chosenCategories.includes(category)
    );
    chosenCategories.push(
      filteredCategories[Math.floor(Math.random() * filteredCategories.length)]
    );
  }
  return chosenCategories;
};

const fakeimage = {
  id: "zZOq1CeMSNM",
  slug: "grayscale-photo-of-road-between-trees-zZOq1CeMSNM",
  created_at: "2020-02-13T15:36:53Z",
  updated_at: "2023-11-13T07:12:22Z",
  promoted_at: null,
  width: 3119,
  height: 4367,
  color: "#262626",
  blur_hash: "LiFPNkWBIUt7~qWBRjof%MWBofj[",
  description: "A quiet drive home..",
  alt_description: "grayscale photo of road between trees",
  breadcrumbs: [],
  urls: {
    raw: "https://images.unsplash.com/photo-1581608198007-4801faa3859a?ixid=M3w1Mjc1Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4OTU1MjV8&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1581608198007-4801faa3859a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1Mjc1Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4OTU1MjV8&ixlib=rb-4.0.3&q=85",
    regular:
      "https://images.unsplash.com/photo-1581608198007-4801faa3859a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjc1Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4OTU1MjV8&ixlib=rb-4.0.3&q=80&w=1080",
    small:
      "https://images.unsplash.com/photo-1581608198007-4801faa3859a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjc1Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4OTU1MjV8&ixlib=rb-4.0.3&q=80&w=400",
    thumb:
      "https://images.unsplash.com/photo-1581608198007-4801faa3859a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjc1Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4OTU1MjV8&ixlib=rb-4.0.3&q=80&w=200",
    small_s3:
      "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1581608198007-4801faa3859a",
  },
  links: {
    self: "https://api.unsplash.com/photos/grayscale-photo-of-road-between-trees-zZOq1CeMSNM",
    html: "https://unsplash.com/photos/grayscale-photo-of-road-between-trees-zZOq1CeMSNM",
    download:
      "https://unsplash.com/photos/zZOq1CeMSNM/download?ixid=M3w1Mjc1Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4OTU1MjV8",
    download_location:
      "https://api.unsplash.com/photos/zZOq1CeMSNM/download?ixid=M3w1Mjc1Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4OTU1MjV8",
  },
  likes: 53,
  liked_by_user: false,
  current_user_collections: [],
  sponsorship: null,
  topic_submissions: {},
  user: {
    id: "E62zUBdx8DQ",
    updated_at: "2023-10-11T01:21:30Z",
    username: "dannylines",
    name: "Danny Lines",
    first_name: "Danny",
    last_name: "Lines",
    twitter_username: "dlinesvisuals",
    portfolio_url: "https://www.instagram.com/dannylines.visuals",
    bio: "Follow me on Instagram for (much) more content @dannylines.visuals",
    location: null,
    links: {
      self: "https://api.unsplash.com/users/dannylines",
      html: "https://unsplash.com/@dannylines",
      photos: "https://api.unsplash.com/users/dannylines/photos",
      likes: "https://api.unsplash.com/users/dannylines/likes",
      portfolio: "https://api.unsplash.com/users/dannylines/portfolio",
      following: "https://api.unsplash.com/users/dannylines/following",
      followers: "https://api.unsplash.com/users/dannylines/followers",
    },
    profile_image: {
      small:
        "https://images.unsplash.com/profile-1612894844221-07aee3dd5953image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
      medium:
        "https://images.unsplash.com/profile-1612894844221-07aee3dd5953image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
      large:
        "https://images.unsplash.com/profile-1612894844221-07aee3dd5953image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
    },
    instagram_username: "dannylines.visuals",
    total_collections: 5,
    total_likes: 230,
    total_photos: 177,
    total_promoted_photos: 55,
    accepted_tos: true,
    for_hire: true,
    social: {
      instagram_username: "dannylines.visuals",
      portfolio_url: "https://www.instagram.com/dannylines.visuals",
      twitter_username: "dlinesvisuals",
      paypal_email: null,
    },
  },
  exif: {
    make: null,
    model: null,
    name: null,
    exposure_time: null,
    aperture: null,
    focal_length: null,
    iso: null,
  },
  location: {
    name: "Leamington Spa, UK",
    city: "Royal Leamington Spa",
    country: "United Kingdom",
    position: {
      latitude: 52.2851905,
      longitude: -1.5200789,
    },
  },
  views: 455698,
  downloads: 2446,
};

const categories = getRandomCategories();
const testImages = Array(20).fill(fakeimage);
const testSlites = categories.map((category) => {
  return { slides: testImages, category: category };
});

export const GET = async () => {
  return NextResponse.json({ error: "Failed to get images" }, { status: 500 });
  // return new Response(JSON.stringify(testSlites), { status: 201 });
};
