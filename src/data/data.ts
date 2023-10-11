export interface IContent {
  image: string;
  title: string;
  description: string;
  name: string;
}

export  interface review {
  author: string,
  review: string
}

export interface IPlace {
  name: string,
  id: string,
  shortDesc: string,
  description: string,
  image: string,
  liked: boolean,
  starred: boolean,
  category: string,
  reviews: review[],
  link:string,
  address: string,
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
    name: "Yarkon",
    shortDesc: "Spend your Shabbat or day off at Tel Aviv’s version of New York’s Central Park with these family-fun activities",
    id:'1',
    description: "Yarkon Park (Yarkon Park (Hebrew: פארק הירקון, Park HaYarkon) is a large park in Tel Aviv, Israel, with about sixteen million visits annually. Named after the Yarkon River which flows through it, the park includes extensive lawns, sports facilities, botanical gardens, an aviary, a water park, two outdoor concert venues and lakes. The park covers an area of 3.5 km². At 375 hectares, it is slightly larger than Central Park in New York, and double the size of Hyde Park, London. Park HaYarkon) is a large park in Tel Aviv, Israel, with about sixteen million visits annually. Named after the Yarkon River which flows through it, the park includes extensive lawns, sports facilities, botanical gardens, an aviary, a water park, two outdoor concert venues and lakes. The park covers an area of 3.5 km². At 375 hectares, it is slightly larger than Central Park in New York, and double the size of Hyde Park, London.",
    image: "https://media.timeout.com/images/103602639/image.jpg",
    starred: false,
    category: 'parks',
    liked: false,
    reviews: [],
    link:"http://park.co.il",
    address: "Rokach Blvd, Tel Aviv-Yafo",
  },
  {
    name: "Independence Park",
    id: '2',
    shortDesc: "Great viewpoint over the beach and good place for family picnic",
    description: "Independence Park is at the western end of Hayarkon Street in the Old North of Tel Aviv. The first trees were planted on Israel’s first Independence Day in 1949. The official opening was in 1952. In 2009, the park was renovated as part of Tel Aviv’s centennial anniversary celebrations.\n" +
      "\n" +
      "The site on which the park now stands was formerly a limestone hill. During the British Mandate, part of the area was used as a military base. The Etzel ship Altalena was fired upon from this location. A Hasmonean citadel were discovered in the southern portion of the park.\n" +
      "\n" +
      "The park was once known as a meeting place for cruising and homosexual encounters.\n" +
      "\n" +
      "The park was designed by landscape architect Zvi Dekel",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/גןהעצמאות2011.jpg",
    starred: false,
    category: 'parks',
    liked: false,
    reviews: [],
    link:"https://israelbusinessguide.com",
    address: "HaYarkon St, Tel Aviv-Yafo",
  },
  {
    name: "Meir Park",
    id: '3',
    shortDesc: "This park is located in the city center. It is good for children",
    description: "Meir Park is a park dating back to the early 1940s in the center of Tel Aviv, Israel. It is named after the first mayor of Tel Aviv, Meir Dizengoff and is home to the Tel Aviv Municipal LGBT Community Center.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/PikiWiki_Israel_50709_cities_in_israel.jpg',
    starred: false,
    liked: false,
    category: 'parks',
    reviews: [],
    link:"Tchernikhovski St 24, Tel Aviv-Yafo",
    address: ""
  },
  {
    name: "Rav Chen Dizengoff",
    id: '4',
    shortDesc: "The cinema is located in the city center",
    description: "Special offers, discounts are available on website",
    image:'https://upload.wikimedia.org/wikipedia/commons/a/a8/PikiWiki_Israel_8903_Dizengoff_Square_in_Tel_-_Aviv.JPG',
    starred: false,
    liked: false,
    category: 'movies',
    reviews: [],
    link:"https://www.rav-hen.co.il/",
    address: "Ben Ami St 16, Tel Aviv-Yafo"

  },
  {
    name: "Lev Tel Aviv Cinema",
    id: '5',
    shortDesc: " Lev Cinema has 6 theatres around the country",
    description: "Lev Cinemas are committed to providing the audience with the highest standards not only in the choice of films, but also in the quality of screen and sound standards, and in the welcoming and personal treatment by our cinema loving staff. Lev’s members’ club, with more than 60,000 active members, offers its members special ticket prices, exclusive screenings and monthly benefits.",
    image: "https://shimeba.blob.core.windows.net/shimeba-new-container/30a0c96dc1d6480bb707437a57bf0b5e.jpg",
    starred: false,
    liked: false,
    category: 'movies',
    reviews: [],
    link:"https://www.lev.co.il/",
    address: "Dizengoff St 50, Tel Aviv-Yafo"

  },
  {
    name: "Tel Aviv Cinematheque",
    id: '6',
    shortDesc: "The Cinematheque is open during all the week and welcomes 60,000 visitors monthly.",
    description: "With over 1,500 different films screened each year, The Tel Aviv Cinematheque’s rich program features fresh releases alongside cult classics, fiction films and documentaries, avant-premières and film festivals, and academic lectures and meetings with international filmmakers and artists.",
    image: "https://www.cinema.co.il/wp-content/uploads/2017/11/cc.jpg",
    starred: false,
    liked: false,
    category: 'movies',
    reviews: [],
    link:"https://www.cinema.co.il",
    address: "HaArba'a St 5, Tel Aviv-Yafo"

  },
  {
    name: "Cafe Puaa",
    id: '7',
    shortDesc: " On Saturdays, the entire alley becomes a recreation area and a cafeteria, and kids are offered theatrical story hours",
    description: "",
    image: 'https://media.timeout.com/images/103715654/1536/1152/image.jpg',
    starred: false,
    liked: false,
    category: 'food',
    reviews: [],
    link:"https://ontopo.co.il/puaa",
    address: "Rabbi Yohanan St 8, Tel Aviv-Yafo"

  },
  {
    name: "Cafe Puaa",
    id: '8',
    shortDesc: " On Saturdays, the entire alley becomes a recreation area and a cafeteria, and kids are offered theatrical story hours",
    description: "Charming, cozy, and quirky, Café Puaa is a Jaffa neighborhood staple. Located in the heart of Jaffa’s flea market, this iconic café feels like a retro living room. Its colorful carpets, antique ornaments and comfy couches give the restaurant a homey, authentic feel. Plus, Puaa embodies the spirit of its flea market surroundings, whereby every piece of furniture is for sale! But, what makes Puaa truly special are its wholesome, unique Mediterranean dishes. Treat yourself to their famous curried pumpkin dumplings, their hearty moussaka with quinoa and feta cheese or their all-day breakfast (yep, you heard me right). Each dish is creative and packs a flavourful punch - it’s no wonder Puaa’s loyal customers leave in good spirits, even when the weather is grey.",
    image: 'https://media.timeout.com/images/103715654/1536/1152/image.jpg',
    starred: false,
    liked: false,
    category: 'food',
    reviews: [],
    link:"https://ontopo.co.il/puaa",
    address: "Rabbi Yohanan St 8, Tel Aviv-Yafo"

  },
  {
    name: "Cafe Puaa",
    id: '9',
    shortDesc: " On Saturdays, the entire alley becomes a recreation area and a cafeteria, and kids are offered theatrical story hours",
    description: "",
    image: 'https://media.timeout.com/images/103715654/1536/1152/image.jpg',
    starred: false,
    liked: false,
    category: 'food',
    reviews: [],
    link:"https://ontopo.co.il/puaa",
    address: "Rabbi Yohanan St 8, Tel Aviv-Yafo"

  },
];