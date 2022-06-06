import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import youtubeApi from "../../apis/youtubeApi";
import { StyledButton } from "../../components/button/StyledButton";
import { StyledInput } from "../../components/input/StyledInput";
import PlaylistCreationNavbar from "../../components/playlistCreationNavbar/PlaylistCreationNavbar";
import VideoGrid from "../../components/videoGrid/VideoGrid";
import VideoItem from "../../components/videoItem/VideoItem";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import { useFirebase } from "../../context/FirebaseContext";
import { Colors } from "../../utils/colors";
import { addDocument } from "../../utils/firebaseUtils";
import { StyledPlaylistContainer } from "./StyledPlaylistContainer";

const CreatePlaylist = ({ location, history }) => {
    const [videos, setVideos] = useState([
        {
            kind: "youtube#searchResult",
            etag: "PitfnaEzxzOeYqoOmwl7senexbQ",
            id: {
                kind: "youtube#video",
                videoId: "vkKCVCZe474",
            },
            snippet: {
                publishedAt: "2010-04-02T10:46:55Z",
                channelId: "UCNAjjkbNbaVeH4o617fTC4g",
                title: "8 Min Abs Workout how to have six pack",
                description:
                    "Watch our Best of videos playlist http://bit.ly/2QiCD6z Subscribe to our channel http://bit.ly/2Nx4u01 8 Min Abs Workout how to ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/vkKCVCZe474/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/vkKCVCZe474/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/vkKCVCZe474/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Passion4Profession",
                liveBroadcastContent: "none",
                publishTime: "2010-04-02T10:46:55Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "0aulKjiTT-MfS5ZaesK-_0pkIy8",
            id: {
                kind: "youtube#video",
                videoId: "AnYl6Nk9GOA",
            },
            snippet: {
                publishedAt: "2019-10-20T07:00:00Z",
                channelId: "UChVRfsT_ASBZk10o0An7Ucg",
                title: "10 MIN AB WORKOUT // No Equipment | Pamela Reif",
                description:
                    'inspired by my most popular "Sixpack Workout" - the NEW VERSION! // Werbung Whenever I meet people who workout with my ...',
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/AnYl6Nk9GOA/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/AnYl6Nk9GOA/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/AnYl6Nk9GOA/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Pamela Reif",
                liveBroadcastContent: "none",
                publishTime: "2019-10-20T07:00:00Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "6BscW4MtKrBbtIeghQJJSucECx8",
            id: {
                kind: "youtube#video",
                videoId: "8PwoytUU06g",
            },
            snippet: {
                publishedAt: "2021-10-14T18:00:02Z",
                channelId: "UCaBqRxHEMomgFU-AkSfodCw",
                title: "COMPLETE 20 MIN ABS WORKOUT (From Home)",
                description:
                    "Follow along with Chris Heria as he does a Complete 20 Min Abs Workout. Watch as he shows you how to get a super-effective ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/8PwoytUU06g/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/8PwoytUU06g/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/8PwoytUU06g/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "CHRIS HERIA",
                liveBroadcastContent: "none",
                publishTime: "2021-10-14T18:00:02Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "cOkPj5W2zcnoJEj9cEp7or1O3Z8",
            id: {
                kind: "youtube#video",
                videoId: "2pLT-olgUJs",
            },
            snippet: {
                publishedAt: "2019-08-12T11:45:00Z",
                channelId: "UCCgLoMYIyP0U56dEhEL1wXQ",
                title: "Get Abs in 2 WEEKS | Abs Workout Challenge",
                description:
                    "Abs Abs Abs! Everyone seems to be asking for a QUICK and short schedule, so I put together a 2 weeks schedule to help you get ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/2pLT-olgUJs/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/2pLT-olgUJs/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/2pLT-olgUJs/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Chloe Ting",
                liveBroadcastContent: "none",
                publishTime: "2019-08-12T11:45:00Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "LbZKjOjPAtcUxJla7N-6IXhyt6w",
            id: {
                kind: "youtube#video",
                videoId: "P1mInEK7BEU",
            },
            snippet: {
                publishedAt: "2021-04-19T00:00:04Z",
                channelId: "UCqjwF8rxRsotnojGl4gM0Zw",
                title: "Complete 30 Min ABS Workout | Follow Along",
                description:
                    "Follow along with Chris Heria as he does a Complete 30 Min Abs Workout. Watch as he shows you how to get a super-effective ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/P1mInEK7BEU/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/P1mInEK7BEU/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/P1mInEK7BEU/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "THENX",
                liveBroadcastContent: "none",
                publishTime: "2021-04-19T00:00:04Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "fLeXYRdx-O5yTqnC8AgUYcClIYg",
            id: {
                kind: "youtube#video",
                videoId: "1f8yoFFdkcY",
            },
            snippet: {
                publishedAt: "2020-02-16T08:00:00Z",
                channelId: "UChVRfsT_ASBZk10o0An7Ucg",
                title: "10 MIN BEGINNER AB WORKOUT // No Equipment | Pamela Reif",
                description:
                    'Ohhhh yes - a BEGINNER ab workout! ♥︎ / Werbung If you have a hard time keeping up with my super intense "10min Ab ...',
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/1f8yoFFdkcY/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/1f8yoFFdkcY/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/1f8yoFFdkcY/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Pamela Reif",
                liveBroadcastContent: "none",
                publishTime: "2020-02-16T08:00:00Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "GDUIXIV6RHq_hkaKJrcbXH7bok4",
            id: {
                kind: "youtube#video",
                videoId: "Cnmy08JgakM",
            },
            snippet: {
                publishedAt: "2021-09-15T17:08:35Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "15 MIN TOTAL CORE/AB WORKOUT (No Equipment, No Repeats)",
                description:
                    "15 min INTENSE ab workout you can do anywhere & is equipment free! Work on toning your core at home with this killer abs ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/Cnmy08JgakM/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/Cnmy08JgakM/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/Cnmy08JgakM/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2021-09-15T17:08:35Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "n9EI0qm3DJfEM4tAeXIToFFylWQ",
            id: {
                kind: "youtube#video",
                videoId: "rptV4dEJUx4",
            },
            snippet: {
                publishedAt: "2018-12-04T18:01:40Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "10 min LOWER ABS Workout | LOSE LOWER BELLY FAT",
                description:
                    "A 10 min intense lower abs AT HOME NO EQUIPMENT workout to target your lower belly. How to lose lower belly fat! ⭐️ GRAB ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/rptV4dEJUx4/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/rptV4dEJUx4/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/rptV4dEJUx4/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2018-12-04T18:01:40Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "mz2fPriaVMOkbX9S0ZHE83hwPnY",
            id: {
                kind: "youtube#video",
                videoId: "44mgUselcDU",
            },
            snippet: {
                publishedAt: "2010-04-23T20:04:25Z",
                channelId: "UCNAjjkbNbaVeH4o617fTC4g",
                title: "Abs workout how to have six pack - Level 2",
                description:
                    "Watch our Best of videos playlist http://bit.ly/2QiCD6z Subscribe to our channel http://bit.ly/2Nx4u01 Abs workout how to have ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/44mgUselcDU/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/44mgUselcDU/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/44mgUselcDU/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Passion4Profession",
                liveBroadcastContent: "none",
                publishTime: "2010-04-23T20:04:25Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "eyi8sdDOLxTQfjq9i3-byXbKJb8",
            id: {
                kind: "youtube#video",
                videoId: "vOiP3kfFlrE",
            },
            snippet: {
                publishedAt: "2021-06-23T03:00:13Z",
                channelId: "UChVRfsT_ASBZk10o0An7Ucg",
                title: "10 MIN KILLER SIXPACK - super hard ab workout / No Equipment I Pamela Reif",
                description:
                    "a HARDCORE routine, this video is NO JOKE! ♥︎ Do we kill our sixpack or get a killer sixpack with this one? Tell me after those ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/vOiP3kfFlrE/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/vOiP3kfFlrE/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/vOiP3kfFlrE/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Pamela Reif",
                liveBroadcastContent: "none",
                publishTime: "2021-06-23T03:00:13Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "tu-ucN88Gt61IuTcPIu5jQe2wKY",
            id: {
                kind: "youtube#video",
                videoId: "rK_tmffSghQ",
            },
            snippet: {
                publishedAt: "2021-04-12T14:11:47Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "15 MIN AB WORKOUT - No Equipment (Sixpack Abs)",
                description:
                    "Do this 15 min intense abs workout #WithMe ! No equipment needed and you can do this anywhere. This is a total core workout ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/rK_tmffSghQ/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/rK_tmffSghQ/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/rK_tmffSghQ/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2021-04-12T14:11:47Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "poGcx39zvW7PqDjArDrPsOF5WuQ",
            id: {
                kind: "youtube#video",
                videoId: "54x6yjnzLms",
            },
            snippet: {
                publishedAt: "2020-12-15T05:00:00Z",
                channelId: "UChVRfsT_ASBZk10o0An7Ucg",
                title: "10 MIN LOWER AB WORKOUT / No Equipment I Pamela Reif",
                description:
                    "train that stubborn lower part of your belly ♥︎ / Werbung One of the most requested videos ever! I never wanted to do it because ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/54x6yjnzLms/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/54x6yjnzLms/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/54x6yjnzLms/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Pamela Reif",
                liveBroadcastContent: "none",
                publishTime: "2020-12-15T05:00:00Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "jt-U149j7fBdXPR8E_OeAp4Ff-E",
            id: {
                kind: "youtube#video",
                videoId: "yEllr_kIV4I",
            },
            snippet: {
                publishedAt: "2020-02-05T18:00:09Z",
                channelId: "UCdOdchV00nejfJtbXf6BPxg",
                title: "10 Minute Ab Workout // No Equipment | Sami Clarke",
                description:
                    "Outfit: Saski Collection - https://saskicollection.com/collections/all-shorts/products/neon-pink-shorts Yoga Mat: ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/yEllr_kIV4I/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/yEllr_kIV4I/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/yEllr_kIV4I/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Sami Clarke",
                liveBroadcastContent: "none",
                publishTime: "2020-02-05T18:00:09Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "2TcYz9W6_jjxUyMuqY24kMT8EVY",
            id: {
                kind: "youtube#video",
                videoId: "9p7-YC91Q74",
            },
            snippet: {
                publishedAt: "2019-12-20T15:30:00Z",
                channelId: "UCyiNCEHLyKbSUrrncVr9KvQ",
                title: "10 MIN PERFECT ABS WORKOUT (NO EQUIPMENT BODYWEIGHT WORKOUT!)",
                description:
                    "To develop a truly impressive Sixpack, you will want to train from abs a whole range of perspectives. You see, the core is ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/9p7-YC91Q74/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/9p7-YC91Q74/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/9p7-YC91Q74/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Fraser Wilson",
                liveBroadcastContent: "none",
                publishTime: "2019-12-20T15:30:00Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "OPTEpnH1hHZHmZ6NKbbqSykfrrw",
            id: {
                kind: "youtube#video",
                videoId: "r7gKGvjfyHg",
            },
            snippet: {
                publishedAt: "2020-12-01T18:49:32Z",
                channelId: "UCpis3RcTw6t47XO0R_KY4WQ",
                title: "10 MIN AB COMPLEX | Total Abs Workout - NO EQUIPMENT",
                description:
                    "This 10 min abs workout is a perfect finisher to any workout or great for active rest days along side cardio! Please remember... ab ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/r7gKGvjfyHg/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/r7gKGvjfyHg/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/r7gKGvjfyHg/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Caroline Girvan",
                liveBroadcastContent: "none",
                publishTime: "2020-12-01T18:49:32Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "7deNF5WcSamM28-h_bor6uxIaLI",
            id: {
                kind: "youtube#video",
                videoId: "3zl1_XGgDVk",
            },
            snippet: {
                publishedAt: "2018-07-15T12:08:10Z",
                channelId: "UChVRfsT_ASBZk10o0An7Ucg",
                title: "2 in 1 - FLAT BELLY &amp; ROUND BOOTY WORKOUT  // No Equipment | Pamela Reif",
                description:
                    "Werbung // This is the workout that I did on stage at the FIBO Convention this year. The people there loved it so much that I ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/3zl1_XGgDVk/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/3zl1_XGgDVk/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/3zl1_XGgDVk/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Pamela Reif",
                liveBroadcastContent: "none",
                publishTime: "2018-07-15T12:08:10Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "H9HFlTd5kbuSAGIqoS5UdkX7vVE",
            id: {
                kind: "youtube#video",
                videoId: "IRHcJ8W9S6Y",
            },
            snippet: {
                publishedAt: "2019-06-06T20:03:50Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "10 Min INTENSE LOWER ABS Workout | Total Core",
                description:
                    "A 10 min intense lower abs AT HOME NO EQUIPMENT workout to target your lower belly. THE MAT I USE: ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/IRHcJ8W9S6Y/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/IRHcJ8W9S6Y/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/IRHcJ8W9S6Y/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2019-06-06T20:03:50Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "_8utsQGZ15brdl7XBIX9ZZca3Nk",
            id: {
                kind: "youtube#video",
                videoId: "zzD80vCLq0Y",
            },
            snippet: {
                publishedAt: "2021-01-24T17:52:35Z",
                channelId: "UCe0TLA0EsQbE-MjuHXevj2A",
                title: "Best Home Ab Workout | 10 Minutes (GUARANTEED!)",
                description:
                    "This is the best home ab workout you will find if you are looking for one you can do without any equipment and whether you are a ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/zzD80vCLq0Y/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/zzD80vCLq0Y/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/zzD80vCLq0Y/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "ATHLEAN-X™",
                liveBroadcastContent: "none",
                publishTime: "2021-01-24T17:52:35Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "EGn4FKAe9uj-aH-orlDr8LFVQDs",
            id: {
                kind: "youtube#video",
                videoId: "uCKgK6qDdrU",
            },
            snippet: {
                publishedAt: "2022-02-28T20:17:03Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "THE BEST LOWER ABS WORKOUT (10 min Lower Belly Burn)",
                description:
                    "This 10 min lower abs workout is one of my new favourites! You can do this workout AT HOME with NO EQUIPMENT. Get ready to ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/uCKgK6qDdrU/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/uCKgK6qDdrU/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/uCKgK6qDdrU/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2022-02-28T20:17:03Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "OjXUXZ0zU9Gfo8bf50pQ04rS_mo",
            id: {
                kind: "youtube#video",
                videoId: "cbCt69XAUKA",
            },
            snippet: {
                publishedAt: "2018-01-25T19:41:00Z",
                channelId: "UCSoKaD27LRI9nBPJ2KB1lnQ",
                title: "10 MINUTE AB WORKOUT | ALEXIS REN",
                description:
                    "Sign up for Wearewarriors.co for more videos like this one! :) It's my private fitness & lifestyle community! it was late when i filmed ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/cbCt69XAUKA/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/cbCt69XAUKA/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/cbCt69XAUKA/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Alexis Ren",
                liveBroadcastContent: "none",
                publishTime: "2018-01-25T19:41:00Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "1J3flp7fGBDwHw0SnFx70pSK_M4",
            id: {
                kind: "youtube#video",
                videoId: "PvUdEKEJBnU",
            },
            snippet: {
                publishedAt: "2022-04-05T01:30:04Z",
                channelId: "UChVRfsT_ASBZk10o0An7Ucg",
                title: "10 MIN R.I.P. ABS - for a ripped sixpack, killer ab workout with Willi Whey",
                description:
                    "Wanna lay down next to Willi? Today is your day :D But first of all… do we say R.I.P. abs or hello r.i.p.ped abs? ♥︎ Tell me ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/PvUdEKEJBnU/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/PvUdEKEJBnU/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/PvUdEKEJBnU/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Pamela Reif",
                liveBroadcastContent: "none",
                publishTime: "2022-04-05T01:30:04Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "xFrpdkL3md7UgnekB7oTjVNW824",
            id: {
                kind: "youtube#video",
                videoId: "NFr-3aAb2Gg",
            },
            snippet: {
                publishedAt: "2022-02-23T02:00:10Z",
                channelId: "UCsLF0qPTpkYKq81HsjgzhwQ",
                title: "25 MIN INTENSE ABS + CORE WORKOUT - No Equipment - Abs of Steel - No Repeat Home Workout",
                description:
                    "Team, are you ready to feel your Abs BURN? This INTENSE 25 MIN ABS + CORE Workout will do just that! No repeat ab ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/NFr-3aAb2Gg/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/NFr-3aAb2Gg/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/NFr-3aAb2Gg/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "growingannanas",
                liveBroadcastContent: "none",
                publishTime: "2022-02-23T02:00:10Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "bsk6NorBcbXBFRogXHcquwjUXVc",
            id: {
                kind: "youtube#video",
                videoId: "KFcUwNl7eXo",
            },
            snippet: {
                publishedAt: "2021-07-06T13:19:50Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "20 MIN TOTAL CORE/AB WORKOUT (At Home No Equipment)",
                description:
                    "20 min INTENSE ab workout you can do anywhere & is equipment free! Work on toning your core at home with this killer abs ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/KFcUwNl7eXo/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/KFcUwNl7eXo/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/KFcUwNl7eXo/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2021-07-06T13:19:50Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "JZJDrKGUOzqHiM2eyfXVSALOrSY",
            id: {
                kind: "youtube#video",
                videoId: "R8oZk2wnpY0",
            },
            snippet: {
                publishedAt: "2021-04-07T15:20:36Z",
                channelId: "UC_nfjMmJlJXrhl2xbP9wgRA",
                title: "Hardest ABS Workout EVER | 6 PACK BURN",
                description:
                    "Hardest ABS Workout EVER #workout #abs #challenge ABS challenge: https://www.youtube.com/watch?v=AErtEV69HT8 Full ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/R8oZk2wnpY0/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/R8oZk2wnpY0/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/R8oZk2wnpY0/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "NEXT Workout",
                liveBroadcastContent: "none",
                publishTime: "2021-04-07T15:20:36Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "6GAenUP5pqYHzks0g95_Skgm19Y",
            id: {
                kind: "youtube#video",
                videoId: "uUKAYkQZXko",
            },
            snippet: {
                publishedAt: "2018-12-27T19:00:07Z",
                channelId: "UCyiNCEHLyKbSUrrncVr9KvQ",
                title: "10 Minute Home Ab Workout (6 PACK GUARANTEED!)",
                description:
                    "Get ready for one of the best Home Ab Workouts of your LIFE! Let's do this! A full body workout that you can do whenever and ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/uUKAYkQZXko/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/uUKAYkQZXko/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/uUKAYkQZXko/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Fraser Wilson",
                liveBroadcastContent: "none",
                publishTime: "2018-12-27T19:00:07Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "VaTNVyHs7KRzxVHan7JNHKEm9_M",
            id: {
                kind: "youtube#video",
                videoId: "xZaSVMB2yy0",
            },
            snippet: {
                publishedAt: "2022-03-22T16:55:41Z",
                channelId: "UCi-gw2zFTtLD5evzz_ed-VQ",
                title: "10 MIN INTENSE AB WORKOUT",
                description:
                    "we hit 100k!!!   thank you for being my training buddy!!❤️❤️ ps LISTEN TO THE SONGS GUYS! what do we think?? I'M SO ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/xZaSVMB2yy0/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/xZaSVMB2yy0/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/xZaSVMB2yy0/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "TRAIN WITH GAINSBYBRAINS",
                liveBroadcastContent: "none",
                publishTime: "2022-03-22T16:55:41Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "zvB89xyDVIGdyVx38miGhnGNTKQ",
            id: {
                kind: "youtube#video",
                videoId: "31O70ckvY3c",
            },
            snippet: {
                publishedAt: "2021-09-07T15:35:40Z",
                channelId: "UCOpsZxrmeDARilha1uq4slA",
                title: "10 Minute ABS Workout",
                description:
                    "This quick 10 minute Abs workout is perfect to add on to your daily workout or if you are short on time you can bust out this quick ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/31O70ckvY3c/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/31O70ckvY3c/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/31O70ckvY3c/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Heather Robertson",
                liveBroadcastContent: "none",
                publishTime: "2021-09-07T15:35:40Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "DfNZCTmrZD7u6dViwH3udZbQrAw",
            id: {
                kind: "youtube#video",
                videoId: "zXITzjuRXYo",
            },
            snippet: {
                publishedAt: "2020-11-13T15:44:53Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "5 MIN FLAT ABS WORKOUT (At Home No Equipment)",
                description:
                    "Here is a quick, yet INTENSE ab burning workout you can do at home, in only 5 minutes! 5 minutes, 5 exercises, no equipment, no ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/zXITzjuRXYo/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/zXITzjuRXYo/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/zXITzjuRXYo/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2020-11-13T15:44:53Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "dxDK18M-0zA0YZ182opoSkjKLqI",
            id: {
                kind: "youtube#video",
                videoId: "cO7iMCci904",
            },
            snippet: {
                publishedAt: "2020-04-23T15:00:15Z",
                channelId: "UCIJwWYOfsCfz6PjxbONYXSg",
                title: "Extreme Abs Workout | 25 Min At Home Upper Abs, Lower Abs, Obliques &amp; Total Core Pilates Routine",
                description:
                    "You guys!! I can't believe we hit 5 million!!! 10 years ago, I was uploading YouTube videos to just 40 of my students.",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/cO7iMCci904/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/cO7iMCci904/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/cO7iMCci904/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "blogilates",
                liveBroadcastContent: "none",
                publishTime: "2020-04-23T15:00:15Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "DARtvrbMWL-8kPTEWKlmEDF0qqU",
            id: {
                kind: "youtube#video",
                videoId: "YHx_mah4Xhs",
            },
            snippet: {
                publishedAt: "2022-04-02T01:00:30Z",
                channelId: "UCsLF0qPTpkYKq81HsjgzhwQ",
                title: "15 MIN ABS BURNER Workout - Lower and Upper Abs, No Equipment Core, Home Workout",
                description:
                    "15 MIN ABS BURNER WORKOUT Try this quick and intense ab workout to strengthen your upper abs and lower abs! Want to ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/YHx_mah4Xhs/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/YHx_mah4Xhs/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/YHx_mah4Xhs/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "growingannanas",
                liveBroadcastContent: "none",
                publishTime: "2022-04-02T01:00:30Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "ygdl_ZwuaWaodTqCDEtvLhWnMVc",
            id: {
                kind: "youtube#video",
                videoId: "EfJ4aB_enVE",
            },
            snippet: {
                publishedAt: "2020-06-12T05:30:00Z",
                channelId: "UChVRfsT_ASBZk10o0An7Ucg",
                title: "15 MIN SIXPACK WORKOUT - intense ab workout / No Equipment I Pamela Reif",
                description:
                    "A new KILLER sixpack workout! Feel (and enjoy.. or hate me for) the buuuuuurn ♥︎ / Werbung This routine starts with a ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/EfJ4aB_enVE/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/EfJ4aB_enVE/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/EfJ4aB_enVE/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Pamela Reif",
                liveBroadcastContent: "none",
                publishTime: "2020-06-12T05:30:00Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "U1m29LZ0ZlVownYeZZW1aNMPLbg",
            id: {
                kind: "youtube#video",
                videoId: "_rp6OqtbVR0",
            },
            snippet: {
                publishedAt: "2022-03-30T13:19:44Z",
                channelId: "UCvGEK5_U-kLgO6-AMDPeTUQ",
                title: "20 min STANDING ABS Workout for Ab Lines, Small Waist &amp; Flat Belly ~ Emi",
                description:
                    "this video is in collaboration with https://www.soyjoy.hk/ try the Japanese SOYJOY low GI nutrition bars to enhance performance, ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/_rp6OqtbVR0/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/_rp6OqtbVR0/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/_rp6OqtbVR0/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "emi wong",
                liveBroadcastContent: "none",
                publishTime: "2022-03-30T13:19:44Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "6mak2tWZ3goeJ3l7d_gRDGYFl-4",
            id: {
                kind: "youtube#video",
                videoId: "XgI_p8bKg78",
            },
            snippet: {
                publishedAt: "2021-02-22T01:00:03Z",
                channelId: "UCqjwF8rxRsotnojGl4gM0Zw",
                title: "Complete 20 Min ABS Workout | Follow Along",
                description:
                    "Follow along with Chris Heria as he does a Complete 20 Min Abs Workout. Watch as he shows you how to get a super-effective ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/XgI_p8bKg78/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/XgI_p8bKg78/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/XgI_p8bKg78/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "THENX",
                liveBroadcastContent: "none",
                publishTime: "2021-02-22T01:00:03Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "3RvajJ8zwtUp8mxVCwZUkiQ4PDE",
            id: {
                kind: "youtube#video",
                videoId: "QKCkO9fy9O4",
            },
            snippet: {
                publishedAt: "2020-08-09T11:37:57Z",
                channelId: "UCvGEK5_U-kLgO6-AMDPeTUQ",
                title: "10 MIN STANDING ABS WORKOUT | Get Ab Lines &amp; Slim Waist ~ Emi",
                description:
                    "SUBSCRIBE & TURN ON NOTIFICATIONS FOR NEW VIDEOS! thank you for your support (: MY WEBSITE: ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/QKCkO9fy9O4/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/QKCkO9fy9O4/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/QKCkO9fy9O4/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "emi wong",
                liveBroadcastContent: "none",
                publishTime: "2020-08-09T11:37:57Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "OrD6knMiqRz1KqnTFy9uEJu67vU",
            id: {
                kind: "youtube#video",
                videoId: "urBJkOFnKVc",
            },
            snippet: {
                publishedAt: "2022-04-25T11:00:17Z",
                channelId: "UCXtE168z7GAxYKAIHFOgm8w",
                title: "10 Minute Abs Workouts | No Equipment, No Repeats | TIFF x DAN",
                description:
                    "This past week I've been out of town but that didn't stop me from getting in some great at home workouts. These are the workout ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/urBJkOFnKVc/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/urBJkOFnKVc/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/urBJkOFnKVc/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "TIFF x DAN",
                liveBroadcastContent: "none",
                publishTime: "2022-04-25T11:00:17Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "KHenAr-8RMpcZg4gv3vs26yn138",
            id: {
                kind: "youtube#video",
                videoId: "YSqdzrmJAlw",
            },
            snippet: {
                publishedAt: "2021-08-26T04:30:04Z",
                channelId: "UCpis3RcTw6t47XO0R_KY4WQ",
                title: "10 MIN CLASSIC AB WORKOUT - Bodyweight Only | Caroline Girvan",
                description:
                    "This is a quick and effective 10 minute ab workout to help strengthen the abdominal muscles. Combining some of my favourites in ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/YSqdzrmJAlw/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/YSqdzrmJAlw/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/YSqdzrmJAlw/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Caroline Girvan",
                liveBroadcastContent: "none",
                publishTime: "2021-08-26T04:30:04Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "sFGADtdWtYtWS5YplokOVnkoHr8",
            id: {
                kind: "youtube#video",
                videoId: "QfMlHzgzBwQ",
            },
            snippet: {
                publishedAt: "2022-01-27T20:28:08Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "10 MIN INTENSE ABS - No Equipment",
                description:
                    "Try this KILLER 10 min sixpack abs workout! This is a quick and efficient workout that targets the ENTIRE core. Trust me, you will ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/QfMlHzgzBwQ/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/QfMlHzgzBwQ/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/QfMlHzgzBwQ/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2022-01-27T20:28:08Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "WyB8jm9gRoVMdHx4a7ulLCbm7fA",
            id: {
                kind: "youtube#video",
                videoId: "aWJo_Fe20aE",
            },
            snippet: {
                publishedAt: "2020-10-11T07:59:48Z",
                channelId: "UCAxW1XT0iEJo0TYlRfn6rYQ",
                title: "10 Minute Abs Workout | The Body Coach",
                description:
                    "This is a great little Abs session you can do on it's own or you can add it on to the end of a workout as a finisher.",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/aWJo_Fe20aE/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/aWJo_Fe20aE/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/aWJo_Fe20aE/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "The Body Coach TV",
                liveBroadcastContent: "none",
                publishTime: "2020-10-11T07:59:48Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "e-roMIjiUN8YHktdgNvQYv9thSY",
            id: {
                kind: "youtube#video",
                videoId: "ohgLmY19jNg",
            },
            snippet: {
                publishedAt: "2020-05-08T16:30:12Z",
                channelId: "UCTsM1dSAiXqiV5oZjuNw_Bg",
                title: "LOSE FAT in 7 days (belly, waist &amp; abs) | 5 minute Home Workout",
                description:
                    "Lose belly, waist and abs fat in 7 days with this belly fat loss 5 minute home workout. These abs and waist exercises will target ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/ohgLmY19jNg/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/ohgLmY19jNg/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/ohgLmY19jNg/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Lilly Sabri",
                liveBroadcastContent: "none",
                publishTime: "2020-05-08T16:30:12Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "ErrPS6GLuCusgyh7NNm8g0SB4ro",
            id: {
                kind: "youtube#video",
                videoId: "hxjKZcOT17E",
            },
            snippet: {
                publishedAt: "2013-05-01T20:01:05Z",
                channelId: "UCM1Nde-9eorUhq-teaWlgUA",
                title: "10 Minute Ab Workout: How to Get a Six Pack",
                description:
                    "Sign up for our newsletter: http://goo.gl/UwnMd Subscribe: http://goo.gl/qR0gi On today's episode of XHIT, fitness trainer ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/hxjKZcOT17E/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/hxjKZcOT17E/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/hxjKZcOT17E/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "XHIT Daily",
                liveBroadcastContent: "none",
                publishTime: "2013-05-01T20:01:05Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "QPYDWiaJCYDohpg272zTd9Zsiaw",
            id: {
                kind: "youtube#video",
                videoId: "glxrwC9zsHY",
            },
            snippet: {
                publishedAt: "2018-12-15T19:18:25Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "15 MIN TOTAL CORE/AB WORKOUT (At Home No Equipment)",
                description:
                    "15 Min Abs Routine that you can do anywhere! At home & equipment free. SUBSCRIBE TO MY MAIN CHANNEL (what i eat, ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/glxrwC9zsHY/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/glxrwC9zsHY/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/glxrwC9zsHY/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2018-12-15T19:18:25Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "lFVsgWedgfsiOOofa5l_SScaoWw",
            id: {
                kind: "youtube#video",
                videoId: "JEEG0hBNk3E",
            },
            snippet: {
                publishedAt: "2020-05-20T12:32:18Z",
                channelId: "UCCgLoMYIyP0U56dEhEL1wXQ",
                title: "Intense Lower Abs Workout 🔥 Burn Lower Belly Fat  🤔",
                description:
                    "Hot new lower abs workout for you! Here's a new favourite routine of mine with back to back abs exercise that's going to help you ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/JEEG0hBNk3E/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/JEEG0hBNk3E/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/JEEG0hBNk3E/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Chloe Ting",
                liveBroadcastContent: "none",
                publishTime: "2020-05-20T12:32:18Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "Mh9lPT7tcONS1vFXDdEuu9RO2cM",
            id: {
                kind: "youtube#video",
                videoId: "5i8y-_cbwgw",
            },
            snippet: {
                publishedAt: "2020-08-19T08:00:00Z",
                channelId: "UCpis3RcTw6t47XO0R_KY4WQ",
                title: "30 Min DEFINED ABS WORKOUT at Home | No Equipment | No Repeat",
                description:
                    "This is a no repeat 30 minute ab workout and core workout you can do anywhere, focusing on the rectus abdominus muscles, the ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/5i8y-_cbwgw/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/5i8y-_cbwgw/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/5i8y-_cbwgw/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Caroline Girvan",
                liveBroadcastContent: "none",
                publishTime: "2020-08-19T08:00:00Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "mgzOTbC0eEojr1cJyUfC34DWqTE",
            id: {
                kind: "youtube#video",
                videoId: "Goo0g_zmFBY",
            },
            snippet: {
                publishedAt: "2020-03-29T08:00:02Z",
                channelId: "UChVRfsT_ASBZk10o0An7Ucg",
                title: "12 MIN AB WORKOUT - Medium Level / No Equipment I Pamela Reif",
                description:
                    "I know I'm popular for my super duper intense Sixpack Workouts .. and I also have Beginner ones. But what about something IN ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/Goo0g_zmFBY/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/Goo0g_zmFBY/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/Goo0g_zmFBY/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Pamela Reif",
                liveBroadcastContent: "none",
                publishTime: "2020-03-29T08:00:02Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "n4o6mEN-4AsaK94C9YJ1EbtuD0o",
            id: {
                kind: "youtube#video",
                videoId: "8AAmaSOSyIA",
            },
            snippet: {
                publishedAt: "2020-03-27T13:30:00Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "20 MIN TOTAL CORE/AB WORKOUT (At Home No Equipment)",
                description:
                    "20 min INTENSE ab workout you can do anywhere & is equipment free! Work on toning your core at home with this killer abs ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/8AAmaSOSyIA/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/8AAmaSOSyIA/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/8AAmaSOSyIA/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2020-03-27T13:30:00Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "wCp8ABW-oNw2loW2-92GYPosPZA",
            id: {
                kind: "youtube#video",
                videoId: "53B40Aw0k3g",
            },
            snippet: {
                publishedAt: "2022-04-25T15:27:28Z",
                channelId: "UCpQ34afVgk8cRQBjSJ1xuJQ",
                title: "20 MIN TOTAL CORE/AB WORKOUT (At Home No Equipment)",
                description:
                    "20 min INTENSE ab workout you can do anywhere & is equipment free! Work on toning your core at home with this killer abs ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/53B40Aw0k3g/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/53B40Aw0k3g/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/53B40Aw0k3g/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MadFit",
                liveBroadcastContent: "none",
                publishTime: "2022-04-25T15:27:28Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "2X2lxNh_j8EKwB31hfIfqaMKO_s",
            id: {
                kind: "youtube#channel",
                channelId: "UChVRfsT_ASBZk10o0An7Ucg",
            },
            snippet: {
                publishedAt: "2013-09-16T11:01:19Z",
                channelId: "UChVRfsT_ASBZk10o0An7Ucg",
                title: "Pamela Reif",
                description:
                    "Super happy to be your online training buddy! ♡ free fitness videos in real time ♡ free workout schedules every Sunday on my ...",
                thumbnails: {
                    default: {
                        url: "https://yt3.ggpht.com/ytc/AKedOLTsCneHwIagjydz7P9plmZ3vum7qOLOfjJPn_xB5g=s88-c-k-c0xffffffff-no-rj-mo",
                    },
                    medium: {
                        url: "https://yt3.ggpht.com/ytc/AKedOLTsCneHwIagjydz7P9plmZ3vum7qOLOfjJPn_xB5g=s240-c-k-c0xffffffff-no-rj-mo",
                    },
                    high: {
                        url: "https://yt3.ggpht.com/ytc/AKedOLTsCneHwIagjydz7P9plmZ3vum7qOLOfjJPn_xB5g=s800-c-k-c0xffffffff-no-rj-mo",
                    },
                },
                channelTitle: "Pamela Reif",
                liveBroadcastContent: "none",
                publishTime: "2013-09-16T11:01:19Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "vY6-lTrtj4zcYIaGKzd2Vmu65CM",
            id: {
                kind: "youtube#video",
                videoId: "qfWx1EPdhwE",
            },
            snippet: {
                publishedAt: "2020-08-25T16:36:45Z",
                channelId: "UCi_J6WNj99ro-9cPZOUrf8Q",
                title: "NO JUMPING!! STANDING ONLY ABS WORKOUT | Get Ripped ABS",
                description:
                    "Get ripped abs and a smaller waist by combining the Standing Abs Workout with our cardio workouts and a well-managed diet.",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/qfWx1EPdhwE/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/qfWx1EPdhwE/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/qfWx1EPdhwE/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MrandMrsMuscle",
                liveBroadcastContent: "none",
                publishTime: "2020-08-25T16:36:45Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "-he8IUM1uMAyAY04VEGZQHBrghg",
            id: {
                kind: "youtube#video",
                videoId: "g1E2Tasqog4",
            },
            snippet: {
                publishedAt: "2020-04-19T16:00:10Z",
                channelId: "UCBINFWq52ShSgUFEoynfSwg",
                title: "30-Minute No-Equipment Arms and Abs Workout",
                description:
                    "Your arms and abs will be feeling tight and toned after fitness and dance expert Nicole Steen works them in this 30-minute routine!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/g1E2Tasqog4/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/g1E2Tasqog4/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/g1E2Tasqog4/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "POPSUGAR Fitness",
                liveBroadcastContent: "none",
                publishTime: "2020-04-19T16:00:10Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "a16vbleJqmeiA6fnZpbUKMjSmU8",
            id: {
                kind: "youtube#video",
                videoId: "XTH5saFBDqA",
            },
            snippet: {
                publishedAt: "2014-06-24T11:30:02Z",
                channelId: "UCD0nBMLdq_KbIK9u-mzpNkA",
                title: "10 Minute Cardio Dance Abs Workout: Burn to the Beat- Keaira LaShae",
                description:
                    "10 Minute Cardio Dance Abs Workout: Burn to the Beat with Keaira LaShae is a high energy fat-burning dancer's abdominal ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/XTH5saFBDqA/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/XTH5saFBDqA/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/XTH5saFBDqA/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "BeFiT",
                liveBroadcastContent: "none",
                publishTime: "2014-06-24T11:30:02Z",
            },
        },
    ]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [term, setTerm] = useState("");
    const [playlistVideos, setPlaylistVideos] = useState([]);
    const { db, currentUser } = useFirebase();
    const [playlistName, setPlaylistName] = useState(location.item);

    const onInputChange = ({ target: { value } }) => setTerm(value);

    const onBtnClick = async () => {
        const response = await youtubeApi.get("/search", {
            params: {
                q: term,
            },
        });
        setVideos(response.data.items);
        setNextPageToken(response.data.nextPageToken);
    };

    const onAddItemToPlaylist = (item) =>
        setPlaylistVideos((prevPlaylistVideos) => [
            ...prevPlaylistVideos,
            item,
        ]);

    const displayPlaylistVideos = () => {
        return playlistVideos.map((video) => {
            return <VideoItem key={video.id.videoId} video={video}></VideoItem>;
        });
    };

    const onSavePlaylistClick = () => {
        addDocument(db, "playlist", {
            owner: currentUser.uid,
            title: playlistName,
            videos: playlistVideos.map((video) => ({
                id: video.id.videoId,
                imageUrl: video.snippet.thumbnails.medium.url,
                title: video.snippet.title,
            })),
        });
        history.goBack();
    };

    const onPlaylistNameChange = ({ target: { value } }) => {
        setPlaylistName(value);
    };

    return (
        <>
            <PlaylistCreationNavbar
                onSavePlaylistClick={onSavePlaylistClick}
                onPlaylistNameChange={onPlaylistNameChange}
                playlistName={playlistName}
            ></PlaylistCreationNavbar>
            <StyledFlexWrapper>
                <StyledInput
                    color={Colors.greyInput}
                    placeholder="search videos..."
                    onChange={onInputChange}
                    value={term}
                ></StyledInput>
                <StyledButton onClick={onBtnClick}>Search</StyledButton>
            </StyledFlexWrapper>

            <StyledFlexWrapper flexDirection="row" justifyContent="flex-end">
                <StyledPlaylistContainer>
                    {displayPlaylistVideos()}
                </StyledPlaylistContainer>
                <StyledFlexWrapper
                    flexDirection="column"
                    width="75%"
                    height="80vh"
                >
                    <VideoGrid
                        videos={videos}
                        onAddItemToPlaylist={onAddItemToPlaylist}
                    ></VideoGrid>
                </StyledFlexWrapper>
            </StyledFlexWrapper>
        </>
    );
};

export default CreatePlaylist;
