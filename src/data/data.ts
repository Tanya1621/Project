export interface IContent {
  image: string;
  title: string;
  description: string;
  name: string;
}

export interface IPlace {
  name: string,
  shortDesc: string,
  description: string,
  image: string,
  liked: boolean,
  starred: boolean,
  category: string
}


export const cards: IContent[] = [
  {
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9wY29ybnxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "Movies",
    description: "",
    name: "movies"
  },
  {
    image: "https://www.tclf.org/sites/default/files/thumbnails/image/Denver_Park_and_Parkway_System2_Barrett_Doherty2014.jpg",
    title: "Parks",
    description: "",
    name: "parks"
  },
  {
    image: "https://media.istockphoto.com/id/1312283557/photo/classic-thai-food-dishes.jpg?s=612x612&w=0&k=20&c=9Y0NBylnjNiNl6EkK6XabETzj3tHnHOQWwVk-6iUE_I=",
    title: "Food and Drinks",
    description: "",
    name: "food"
  }
];

export const places: IPlace[] = [
  {
    name: "Mega Giga Park",
    shortDesc: "This park is located in the city center. It is good for children",
    description: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Halleyparknovember.jpg/1200px-Halleyparknovember.jpg",
    starred: false,
    liked: false,
    category: 'parks'
  },
  {
    name: "Mega Giga Park",
    shortDesc: "This park is located in the city center. It is good for children",
    description: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Halleyparknovember.jpg/1200px-Halleyparknovember.jpg",
    starred: false,
    liked: false,
    category: 'parks'
  },
  {
    name: "Mega Giga Park",
    shortDesc: "This park is located in the city center. It is good for children",
    description: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Halleyparknovember.jpg/1200px-Halleyparknovember.jpg",
    starred: false,
    liked: false,
    category: 'parks'
  },
  {
    name: "Tel Aviv Cinema",
    shortDesc: "Watch the best films here",
    description: "",
    image: "https://shimeba.blob.core.windows.net/shimeba-new-container/30a0c96dc1d6480bb707437a57bf0b5e.jpg",
    starred: false,
    liked: false,
    category: 'movies'
  },
  {
    name: "Tel Aviv Cinema",
    shortDesc: "Watch the best films here",
    description: "",
    image: "https://shimeba.blob.core.windows.net/shimeba-new-container/30a0c96dc1d6480bb707437a57bf0b5e.jpg",
    starred: false,
    liked: false,
    category: 'movies'
  },
  {
    name: "Tel Aviv Cinema",
    shortDesc: "Watch the best films here",
    description: "",
    image: "https://shimeba.blob.core.windows.net/shimeba-new-container/30a0c96dc1d6480bb707437a57bf0b5e.jpg",
    starred: false,
    liked: false,
    category: 'movies'
  },
  {
    name: "Cafe Pua",
    shortDesc: " On Saturdays, the entire alley becomes a recreation area and a cafeteria, and kids are offered theatrical story hours",
    description: "",
    image: 'https://media.timeout.com/images/103715654/1536/1152/image.jpg',
    starred: false,
    liked: false,
    category: 'food'
  },
  {
    name: "Cafe Pua",
    shortDesc: " On Saturdays, the entire alley becomes a recreation area and a cafeteria, and kids are offered theatrical story hours",
    description: "",
    image: 'https://media.timeout.com/images/103715654/1536/1152/image.jpg',
    starred: false,
    liked: false,
    category: 'food'
  },
  {
    name: "Cafe Pua",
    shortDesc: " On Saturdays, the entire alley becomes a recreation area and a cafeteria, and kids are offered theatrical story hours",
    description: "",
    image: 'https://media.timeout.com/images/103715654/1536/1152/image.jpg',
    starred: false,
    liked: false,
    category: 'food'
  },



];