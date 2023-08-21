import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    username: "ajitTesting@gmail.com",
    content:
      "Web development involves creating and maintaining websites and web applications using programming languages like HTML, CSS, and JavaScript. It focuses on designing user interfaces, integrating functionality, and optimizing for various devices. Unlike other skills, it requires a blend of coding expertise, design sensibility, and adaptability to evolving technologies. It plays a pivotal role in shaping the digital experience and interaction of users on the internet.",
    likes: {
      likeCount: 29,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Cyber",
          lastName: "Branch",
          username: "cyberbranch@gmail.com",
          profile_photo:
            "https://i.ibb.co/kXbMgp1/Fingerprint-Computer-Technology-Cyber-Security.jpg",
          userHandler: "CyberBranch",
          password: "pass123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "Protect Your Own Privacy | stay alert | We can't help you",
        },
        {
          _id: uuid(),
          firstName: "Stark",
          lastName: "Industry",
          username: "starkindustry@gmail.com",
          profile_photo:
            "https://i.ibb.co/SxVHf1N/istockphoto-183322339-612x612.jpg",
          userHandler: "StarkIndustry",
          password: "abc123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "We manufacture arms, heads and legs and NASA export it",
        },
      ],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "starkindustry@gmail.com",
        text: "Correct ✔",
      },
      {
        _id: uuid(),
        username: "cyberbranch@gmail.com",
        text: "Agree 👍🏻",
      },
      {
        _id: uuid(),
        username: "ajitTesting@gmail.com",
        text: "This is so true !",
      },
    ],
    createdAt: new Date(2022, 5, 25, 11, 27),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "bahubali@gmail.com",
    content:
      "Preparing for Bahubali three, on the way to destroy Bollywood box office.",
    likes: {
      likeCount: 20,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Pro Video",
          lastName: "Editor",
          username: "videoeditor@gmail.com",
          profile_photo:
            "https://i.ibb.co/gjjXBRd/istockphoto-944137558-170667a.jpg",
          userHandler: "VideoEditor",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "I can edit and fix your futures, trust me",
        },
        {
          _id: uuid(),
          firstName: "Thanos",
          lastName: "Destroyer",
          username: "thanos@gmail.com",
          profile_photo: "https://i.ibb.co/ZHP4VpF/Infinity-War.jpg",
          userHandler: "ThanosDestroyer",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "The Destruction Master | I Hate Ironman",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "thanos@gmail.com",
        text: "Us bro use",
      },
      {
        _id: uuid(),
        username: "videoeditor@gmail.com",
        text: "Why did you play such a bad way in #Adipurush ??",
      },
    ],
    createdAt: new Date(2021, 5, 23, 18, 4),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "ajitTesting@gmail.com",
    postImg: "https://i.ibb.co/PQBWcvY/Office-set-up.jpg",
    content:
      "Java boasts strong portability, enabling code to run on diverse platforms. Its object-oriented nature fosters modular, reusable code. The rich standard library empowers developers with pre-built functions for tasks. Java's automatic memory management reduces manual memory handling, enhancing safety. Additionally, Java's robust community support and continuous updates ensure a vibrant ecosystem for development.",
    likes: {
      likeCount: 98,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Bahubali",
          lastName: "Shiva",
          username: "bahubali@gmail.com",
          profile_photo: "https://i.ibb.co/Kjt8q6z/download.jpg",
          userHandler: "Bahubali",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "https://BahubaliShiva.netlify.app/",
          bio: "Nature enthusiast | Mountain Climber ",
        },
      ],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "bahubali@gmail.com",
        text: "Awesome🤩",
      },
      {
        _id: uuid(),
        username: "ajitTesting@gmail.com",
        text: "😍Nice Laptops😍",
      },
    ],
    createdAt: new Date(2023, 5, 23, 6, 49),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "bahubali@gmail.com",

    content:
      "A mountain is a large natural landform that rises steeply above its surroundings, typically characterized by significant elevation, often featuring rugged terrain and diverse ecosystems.",
    likes: {
      likeCount: 41,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rocky",
          lastName: "Bhai",
          username: "rockybhai@gmail.com",
          profile_photo: "https://i.ibb.co/7SBy3k6/download.jpg",
          userHandler: "RockyBhai",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "Bombay Shooter | Gold Lover | Rocking Man",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "rockybhai@gmail.com",
        text: "Great post !",
      },
      {
        _id: uuid(),
        username: "ajitTesting@gmail.com",
        text: "How is your Bahubali 3 prepartion going on ??!",
      },
    ],
    createdAt: new Date(2023, 5, 18, 15, 1),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "ironman@gmail.com",
    postImg: "https://i.ibb.co/185y56v/Ironman-2.jpg",
    content: "Creativity takes courage.",
    likes: {
      likeCount: 62,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Ironman",
          lastName: "Ultra Pro",
          username: "ironman@gmail.com",
          profile_photo: "https://i.ibb.co/ypSXznn/Iron-man.jpg",
          userHandler: "IronMan",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "Tin Master | High Speed | Arabpati",
        },
        {
          _id: uuid(),
          firstName: "Rocky",
          lastName: "Bhai",
          username: "rockybhai@gmail.com",
          profile_photo: "https://i.ibb.co/7SBy3k6/download.jpg",
          userHandler: "RockyBhai",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "Bombay Shooter | Gold Lover | Rocking Man",
        },
      ],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "thanos@gmail.com",
        text: "Gyaan ka shrap kewal tumhe nhi mila hai, Mr Stark !",
      },
      {
        _id: uuid(),
        username: "rockybhai@gmail.com",
        text: "Who knows it better than you. Can you program an automatic gun for me ? Adhira is getting on my nerves !",
      },
    ],
    createdAt: new Date(2023, 1, 11, 9, 12),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "videoeditor@gmail.com",

    content:
      "I am a professional editor, do let me know if I can fix your videos or movies, last time i fixed the vfx of Adipurush, director usually recognized me during their bad times.",
    likes: {
      likeCount: 71,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Bahubali",
          lastName: "Shiva",
          username: "bahubali@gmail.com",
          profile_photo: "https://i.ibb.co/Kjt8q6z/download.jpg",
          userHandler: "Bahubali",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "https://BahubaliShiva.netlify.app/",
          bio: "Nature enthusiast | Mountain Climber ",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "videoeditor@gmail.com",
        text: "but those vfx were so bad even i failed to made it perfect !",
      },
      {
        _id: uuid(),
        username: "bahubali@gmail.com",
        text: "I shall hire you during my Baubali 3 project, till then edit reels on instagram !",
      },
    ],
    createdAt: new Date(2022, 12, 31, 7, 19),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "thanos@gmail.com",

    content:
      "Humans are wise animals, and they can do anything to let them exist on this planet, but they don't care the nature !, how stupid they are.",
    likes: {
      likeCount: 300,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Ajit",
          lastName: "Sharma",
          username: "ajitTesting@gmail.com",
          profile_photo: "https://i.ibb.co/vkYHs3K/avengers.jpg",
          userHandler: "its_AjitSharma",
          password: "200",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          bio: "Network Engineer| Nature | Learning Web Dev ",
        },
        {
          _id: uuid(),
          firstName: "Bahubali",
          lastName: "Shiva",
          username: "bahubali@gmail.com",
          profile_photo: "https://i.ibb.co/Kjt8q6z/download.jpg",
          userHandler: "Bahubali",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "https://BahubaliShiva.netlify.app/",
          bio: "Nature enthusiast | Mountain Climber ",
        },
        {
          _id: uuid(),
          firstName: "Ironman",
          lastName: "Ultra Pro",
          username: "ironman@gmail.com",
          profile_photo: "https://i.ibb.co/ypSXznn/Iron-man.jpg",
          userHandler: "IronMan",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "Tin Master | High Speed | Arabpati",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "ironman@gmail.com",
        text: "I will be back, marvel confirms it, you just can't destrory me this way !",
      },
    ],
    createdAt: new Date(2022, 6, 11, 5, 28),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "ajitTesting@gmail.com",
    postImg: "https://i.ibb.co/CMGDVFh/Do-Something-Hacker.jpg",
    content:
      "Network engineering involves designing, implementing, and managing communication systems that connect devices and facilitate data exchange. It encompasses tasks like configuring routers, switches, and firewalls, ensuring seamless data flow and security. Engineers optimize network performance, troubleshoot issues, and adapt to evolving technologies. Their role is crucial in maintaining efficient and reliable connections for businesses, organizations, and individuals in our interconnected digital world.",
    likes: {
      likeCount: 199,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Pro Video",
          lastName: "Editor",
          username: "videoeditor@gmail.com",
          profile_photo:
            "https://i.ibb.co/gjjXBRd/istockphoto-944137558-170667a.jpg",
          userHandler: "VideoEditor",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "I can edit and fix your futures, trust me",
        },
      ],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "videoeditor@gmail.com",
        text: "May be, but looks like this is an amazing fields !",
      },
    ],
    createdAt: new Date(2022, 5, 11, 3, 11),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Iron Man, portrayed by Tony Stark, exemplifies genius-level intellect and technological innovation. His suits provide superhuman capabilities, demonstrating resilience, flight, and combat prowess. He embodies courage and determination, using his resources to protect and make a positive impact on the world as a superhero.",
    username: "starkindustry@gmail.com",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "ajitTesting@gmail.com",
        text: "Absolutely, he has 98% intelligence !",
      },
      {
        _id: uuid(),
        username: "rockybhai@gmail.com",
        text: "Aao milo kabhi Bombay me ??",
      },
    ],
    createdAt: new Date(2022, 3, 25, 25, 20),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "rockybhai@gmail.com",
    postImg: "https://i.ibb.co/9nWdYbV/Yash.jpg",
    content: "Koi nhi hai takkar me !",
    likes: {
      likeCount: 19,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Pro Video",
          lastName: "Editor",
          username: "videoeditor@gmail.com",
          profile_photo:
            "https://i.ibb.co/gjjXBRd/istockphoto-944137558-170667a.jpg",
          userHandler: "VideoEditor",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "I can edit and fix your futures, trust me",
        },
      ],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "bahubali@gmail.com",
        text: "Eggjactly",
      },
      {
        _id: uuid(),
        username: "videoeditor@gmail.com",
        text: "Nice look",
      },
    ],
    createdAt: new Date(2022, 2, 1, 11, 10),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "ajitTesting@gmail.com",
    content: "Why bollywood industry does not invest money on script writers ?",
    likes: {
      likeCount: 30,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Ironman",
          lastName: "Ultra Pro",
          username: "ironman@gmail.com",
          profile_photo: "https://i.ibb.co/ypSXznn/Iron-man.jpg",
          userHandler: "IronMan",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "Tin Master | High Speed | Arabpati",
        },
        {
          _id: uuid(),
          firstName: "Thanos",
          lastName: "Destroyer",
          username: "thanos@gmail.com",
          profile_photo: "https://i.ibb.co/ZHP4VpF/Infinity-War.jpg",
          userHandler: "ThanosDestroyer",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "The Destruction Master | I Hate Ironman",
        },
        {
          _id: uuid(),
          firstName: "Rocky",
          lastName: "Bhai",
          username: "rockybhai@gmail.com",
          profile_photo: "https://i.ibb.co/7SBy3k6/download.jpg",
          userHandler: "RockyBhai",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "Bombay Shooter | Gold Lover | Rocking Man",
        },
      ],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "bahubali@gmail.com",
        text: "haha😃, they fool people 😃",
      },
      {
        _id: uuid(),
        username: "ironman@gmail.com",
        text: "There are some good movies as well like GADAR 2. But few numbers.",
      },
    ],
    createdAt: new Date(2021, 8, 11, 17, 30),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "bahubali@gmail.com",
    postImg: "",
    content:
      "Caring for nature involves adopting sustainable practices that preserve and protect the environment. Reduce your carbon footprint by conserving energy, using public transport, and recycling. Support local and organic products to minimize ecological impact. Participate in community cleanups and tree planting initiatives. Educate others about the importance of biodiversity and ecological balance. Advocate for eco-friendly policies and practices. By making conscious choices and encouraging others to do the same, you contribute to a healthier planet for present and future generations.",
    likes: {
      likeCount: 79,
      likedBy: [
       
      ],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "ajitTesting@gmail.com",
        text: "Amazing post, love it !",
      },
    ],
    createdAt: new Date(2021, 6, 21, 11, 13),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "thanos@gmail.com",
    content:
      "If I could say it in words there would be no reason to survival for humans.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rocky",
          lastName: "Bhai",
          username: "rockybhai@gmail.com",
          profile_photo: "https://i.ibb.co/7SBy3k6/download.jpg",
          userHandler: "RockyBhai",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: "",
          bio: "Bombay Shooter | Gold Lover | Rocking Man",
        },
      ],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "bahubali@gmail.com",
        text: "Agree ✔",
      },
      {
        _id: uuid(),
        username: "ajitTesting@gmail.com",
        text: "True 💯",
      },
    ],
    createdAt: new Date(2021, 3, 19, 19, 10),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    username: "cyberbranch@gmail.com",
    postImg:
      "https://i.ibb.co/kXbMgp1/Fingerprint-Computer-Technology-Cyber-Security.jpg",
    
    content: "We break cyber crimes, not hearts.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "starkindustry@gmail.com",
        text: "Impressive !",
      },
      {
        _id: uuid(),
        username: "bahubali@gmail.com",
        text: "Bravo !",
      },
    ],
    createdAt: new Date(2021, 1, 31, 22, 24),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postImg:
      "https://i.ibb.co/h7WRyzM/Stylish-business-clothing-for-businessman-Men-s-clothing-on-a-wooden-background.jpg",
    username: "ajitTesting@gmail.com",
    content: "Great collection.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [
      {
        _id: uuid(),
        username: "ajitTesting@gmail.com",
        text: "Will bought more such formal clothes.",
      },
      {
        _id: uuid(),
        username: "ironman@gmail.com",
        text: "Lookes nice but does't fit on me. You know I need tin coated clothes.",
      },
    ],
    createdAt: new Date(2020, 12, 31, 17, 25),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    postImg: "https://i.ibb.co/QD4Byq5/Ironman.jpg",
    username: "thanos@gmail.com",
    content: "Watch him, carefully !",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },

    comments: [],
    createdAt: new Date(2020, 8, 10, 24, 20),
    updatedAt: formatDate(),
  },
];
