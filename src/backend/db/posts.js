import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),

    content:
      "There is a huge demand for people skilled in every area of e-commerce, especially web development.",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Max",
        lastName: "Shadow",
        username: "maxshasow@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        userHandler: "CyberNinja",
        password: "100",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Tech geek | Gaming enthusiast | Future coder"
      },],
      dislikedBy: [],
    },
    username: "ajitTesting@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "crystalwaters@gmail.com",
        text: "Correct✔",
      },
      {
        _id: uuid(),
        username: "lunashade@gmail.com",
        text: "Agree👍🏻",
      }
    ],
    createdAt: new Date(2020, 5, 25, 11, 27),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Nature never goes out of style.",
    likes: {
      likeCount: 2,
      likedBy: [{
        _id: uuid(),
        firstName: "Stella",
        lastName: "Celeste",
        username: "stellaceleste@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXN0cm9ub215fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        userHandler: "StarGazer",
        password: "100",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Astronomy lover | Star seeker | Science nerd"
      },
      {
        _id: uuid(),
        firstName: "Crystal",
        lastName: "Waters",
        username: "crystalwaters@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1607301614848-2341363f5f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "SapphireScribe",
        password: "100",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Writer | Poet | Lover of words"
      },],
      dislikedBy: [],
    },
    username: "scarlettrivers@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "lunashade@gmail.com",
        text: "Nice👌🏻",
      }
    ],
    createdAt: new Date(2021, 5, 23, 18, 4),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "The goal of life is living in agreement with nature.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Stella",
          lastName: "Celeste",
          username: "stellaceleste@gmail.com",
          profile_photo: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXN0cm9ub215fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
          userHandler: "StarGazer",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: " ",
          bio: "Astronomy lover | Star seeker | Science nerd"
        }
      ],
      dislikedBy: []
    },
    username: "ajitTesting@gmail.com",
    postImg: "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=600",
    comments: [
      {
        _id: uuid(),
        username: "lunashade@gmail.com",
        text: "Awesome🤩"
      },
      {
        _id: uuid(),
        username: "stellaceleste@gmail.com",
        text: "😍😍"
      }
    ],
    createdAt: new Date(2023, 5, 23, 6, 49),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Nature is the source of all true knowledge.",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Blaze",
        lastName: "Summers",
        username: "blazesummers@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1547469447-4afec158715b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "Wildfire",
        password: "abc123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Adventure seeker | Fire dancer | Free spirit"
      }],
      dislikedBy: []
    },
    username: "scarlettrivers@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "blazesummers@gmail.com",
        text: "Great post!"
      },
      {
        _id: uuid(),
        username: "maxshasow@gmail.com",
        text: "I love it!"
      }
    ],
    createdAt: new Date(2023, 5, 18, 15, 1),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Creativity takes courage.",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Blaze",
        lastName: "Summers",
        username: "blazesummers@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1547469447-4afec158715b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "Wildfire",
        password: "abc123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: "https://blazesummers.netlify.app/",
        bio: "Adventure seeker | Fire dancer | Free spirit"
      }],
      dislikedBy: []
    },
    username: "lunashade@gmail.com",
    postImg: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=600",
    comments: [
      {
        _id: uuid(),
        username: "crystalwaters@gmail.com",
        text: "Amazing!"
      }
    ],
    createdAt: new Date(2023, 1, 11, 9, 12),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Though my soul may set in darkness, it will rise in perfect light; I have loved the stars too fondly to be fearful of the night",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Luna",
        lastName: "Shade",
        username: "lunashade@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZWFtZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "LunaDremer",
        password: "100",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Dreamer | Moonchild | Artist"
      },],
      dislikedBy: []
    },
    username: "stellaceleste@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "phoenixwright@gmail.com",
        text: "Impressive!"
      },
      {
        _id: uuid(),
        username: "blazesummers@gmail.com",
        text: "Bravo!"
      }
    ],
    createdAt: new Date(2022, 12, 31, 7, 19),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "If I have seen farther than others, it is because I have stood on the shoulders of giants.",
    likes: {
      likeCount: 2,
      likedBy: [{
        _id: uuid(),
        firstName: "Crystal",
        lastName: "Waters",
        username: "crystalwaters@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1607301614848-2341363f5f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "SapphireScribe",
        password: "100",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Writer | Poet | Lover of words"
      }, {
        _id: uuid(),
        firstName: "Blaze",
        lastName: "Summers",
        username: "blazesummers@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1547469447-4afec158715b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "Wildfire",
        password: "abc123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: "https://blazesummers.netlify.app/",
        bio: "Adventure seeker | Fire dancer | Free spirit"
      }],
      dislikedBy: []
    },
    username: "phoenixwright@gmail.com",
    comments: [],
    createdAt: new Date(2022, 6, 11, 5, 28),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Gaming brings people together.",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Crystal",
        lastName: "Waters",
        username: "crystalwaters@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1607301614848-2341363f5f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "SapphireScribe",
        password: "100",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Writer | Poet | Lover of words"
      },],
      dislikedBy: []
    },
    username: "maxshasow@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "crystalwaters@gmail.com",
        text: "May be"
      }
    ],
    createdAt: new Date(2022, 5, 11, 3, 11),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "The way to get started is to quit talking and begin doing. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "blazesummers@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "lunashade@gmail.com",
        text: "Absolutely!"
      },
      {
        _id: uuid(),
        username: "phoenixwright@gmail.com",
        text: "💯"
      }
    ],
    createdAt: new Date(2022, 3, 25, 25, 20),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "A good writer possesses not only his own spirit but also the spirit of his friends.",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Blaze",
        lastName: "Summers",
        username: "blazesummers@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1547469447-4afec158715b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "Wildfire",
        password: "abc123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: "https://blazesummers.netlify.app/",
        bio: "Adventure seeker | Fire dancer | Free spirit"
      }],
      dislikedBy: []
    },
    username: "crystalwaters@gmail.com",
    comments: [

      {
        _id: uuid(),
        username: "scarlettrivers@gmail.com",
        text: "💯"
      }
    ],
    createdAt: new Date(2022, 2, 1, 11, 10),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    likes: {
      likeCount: 2,
      likedBy: [

        {
          _id: uuid(),
          firstName: "Scarlett",
          lastName: "Rivers",
          username: "scarlettrivers@gmail.com",
          profile_photo: "https://images.unsplash.com/photo-1560759226-14da22a643ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGFyayUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          userHandler: "CrimsonTide",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: " ",
          bio: "Nature enthusiast | Coffee addict | Wanderer"
        },
        {
          _id: uuid(),
          firstName: "Luna",
          lastName: "Shade",
          username: "lunashade@gmail.com",
          profile_photo: "https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZWFtZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
          userHandler: "LunaDremer",
          password: "100",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bookmarks: [],
          followers: [],
          following: [],
          link: " ",
          bio: "Dreamer | Moonchild | Artist"
        },
      ],
      dislikedBy: []
    },
    username: "ajitTesting@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "scarlettrivers@gmail.com",
        text: "haha😃😃"
      },
    ],
    createdAt: new Date(2021, 8, 11, 17, 30),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "One touch of nature makes the whole world kin.",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Blaze",
        lastName: "Summers",
        username: "blazesummers@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1547469447-4afec158715b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "Wildfire",
        password: "abc123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Adventure seeker | Fire dancer | Free spirit"
      }],
      dislikedBy: []
    },
    username: "scarlettrivers@gmail.com",
    postImg: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    comments: [
      {
        _id: uuid(),
        username: "ajitTesting@gmail.com",
        text: "Amazing post!"
      },
      {
        _id: uuid(),
        username: "lunashade@gmail.com",
        text: "Nice😍"
      }
    ],
    createdAt: new Date(2021, 6, 21, 11, 13),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "If I could say it in words there would be no reason to paint.",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Blaze",
        lastName: "Summers",
        username: "blazesummers@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1547469447-4afec158715b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "Wildfire",
        password: "abc123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Adventure seeker | Fire dancer | Free spirit"
      }],
      dislikedBy: []
    },
    username: "lunashade@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "scarlettrivers@gmail.com",
        text: "Agree✔"
      },
      {
        _id: uuid(),
        username: "blazesummers@gmail.com",
        text: "True💯"
      }
    ],
    createdAt: new Date(2021, 3, 19, 19, 10),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Gaming in general is a male thing.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    postImg: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "maxshasow@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "lunashade@gmail.com",
        text: "Impressive!"
      },
      {
        _id: uuid(),
        username: "scarlettrivers@gmail.com",
        text: "Bravo!"
      }
    ],
    createdAt: new Date(2021, 1, 31, 22, 24),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Rocks are space, and space is illusion.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    postImg: "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "stellaceleste@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "maxshasow@gmail.com",
        text: "Well done!"
      },
      {
        _id: uuid(),
        username: "ajitTesting@gmail.com",
        text: "I'm impressed!"
      }
    ],
    createdAt: new Date(2020, 12, 31, 17, 25),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "As a writer, you should not judge, you should understand.",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Phoenix",
        lastName: "Wright",
        username: "phoenixwright@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1604684116250-e79276b241fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3Rvcnl0ZWxsZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "MysticScribe",
        password: "pass123",
        createdAt: new Date(2020, 11, 30, 1, 1),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Seeker of ancient knowledge | Storyteller | Occult enthusiast"
      }],
      dislikedBy: []
    },
    postImg: "https://images.pexels.com/photos/1576302/pexels-photo-1576302.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "crystalwaters@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "stellaceleste@gmail.com",
        text: "True!"
      },
      {
        _id: uuid(),
        username: "maxshasow@gmail.com",
        text: "Love it!"
      }
    ],
    createdAt: new Date(2020, 8, 10, 24, 20),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Life is either a daring adventure or nothing at all.",
    likes: {
      likeCount: 2,
      likedBy: [{
        _id: uuid(),
        firstName: "Stella",
        lastName: "Celeste",
        username: "stellaceleste@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXN0cm9ub215fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        userHandler: "StarGazer",
        password: "100",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Astronomy lover | Star seeker | Science nerd"
      },
      {
        _id: uuid(),
        firstName: "Crystal",
        lastName: "Waters",
        username: "crystalwaters@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1607301614848-2341363f5f48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "SapphireScribe",
        password: "100",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Writer | Poet | Lover of words"
      },],
      dislikedBy: []
    },
    postImg: "https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "blazesummers@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "crystalwaters@gmail.com",
        text: "Absolutely!"
      },
      {
        _id: uuid(),
        username: "stellaceleste@gmail.com",
        text: "True💯!"
      }
    ],
    createdAt: new Date(2020, 6, 10, 15, 25),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Knowledge is the eye of desire and can become the pilot of the soul.",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Phoenix",
        lastName: "Wright",
        username: "phoenixwright@gmail.com",
        profile_photo: "https://images.unsplash.com/photo-1604684116250-e79276b241fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3Rvcnl0ZWxsZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        userHandler: "MysticScribe",
        password: "pass123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: " ",
        bio: "Seeker of ancient knowledge | Storyteller | Occult enthusiast"
      }],
      dislikedBy: []
    },
    postImg: "https://images.pexels.com/photos/9572690/pexels-photo-9572690.jpeg?auto=compress&cs=tinysrgb&w=600",
    username: "phoenixwright@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "blazesummers@gmail.com",
        text: "Nice"
      },
      {
        _id: uuid(),
        username: "crystalwaters@gmail.com",
        text: "Agree💯"
      }
    ],
    createdAt: new Date(2022, 3, 24, 15, 31),
    updatedAt: formatDate()
  }

];