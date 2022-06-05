import React, { useState } from "react";
import youtubeApi from "../../apis/youtubeApi";
import AddPlaylistModal from "../../components/addPlaylistModal/AddPlaylistModal";
import { StyledAddBtn } from "./StyledAddBtn";

const Playlists = () => {
    const [videos, setVideos] = useState([
        {
            kind: "youtube#searchResult",
            etag: "oQ6kZp47DpydkOBj8jdBcelC2Qs",
            id: {
                kind: "youtube#video",
                videoId: "y8xm6sfDMVw",
            },
            snippet: {
                publishedAt: "2022-06-03T22:00:13Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "DO THIS FOR 7 DAYS AND LOOK IN THE MIRROR | 500 Calories Workout | Zumba Class",
                description:
                    "DO THIS FOR 7 DAYS AND LOOK IN THE MIRROR | 500 Calories Workout | Zumba Class #MiraPham #AerobicWorkout ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/y8xm6sfDMVw/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/y8xm6sfDMVw/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/y8xm6sfDMVw/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2022-06-03T22:00:13Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "AvyuPrqHQDATvJd1sOvGJAUp06c",
            id: {
                kind: "youtube#video",
                videoId: "tmpV2u1HD0I",
            },
            snippet: {
                publishedAt: "2019-12-19T09:45:00Z",
                channelId: "UCnrXvqbfwAEpIyPLQQNr8nA",
                title: "22 Mins Aerobic reduction of belly fat quickly l Aerobic dance workout full video l Zumba Class",
                description:
                    "22 Mins Aerobic reduction of belly fat quickly l Aerobic dance workout full video for beginners l Zumba Class Thank For Watching ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/tmpV2u1HD0I/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/tmpV2u1HD0I/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/tmpV2u1HD0I/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2019-12-19T09:45:00Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "SNKquABCgxur_WoBh9MQH7-VH18",
            id: {
                kind: "youtube#video",
                videoId: "FP0wgVhUC9w",
            },
            snippet: {
                publishedAt: "2019-03-25T22:13:57Z",
                channelId: "UCOjZigyo_fg2V7JdGwePSwg",
                title: "ZUMBA KIDS - Electronic Song - Minions / Instagram: @dovydaszumba",
                description:
                    "Choreography by Dovydas Veiverys. Dancing with my Zumba kids group in Gargždai. For me these kids are amazing.",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/FP0wgVhUC9w/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/FP0wgVhUC9w/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/FP0wgVhUC9w/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba with Dovydas",
                liveBroadcastContent: "none",
                publishTime: "2019-03-25T22:13:57Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "VEYdl8vO0vubxOXvutLeDXXSJcw",
            id: {
                kind: "youtube#video",
                videoId: "8DZktowZo_k",
            },
            snippet: {
                publishedAt: "2019-04-03T16:00:32Z",
                channelId: "UCBINFWq52ShSgUFEoynfSwg",
                title: "30-Minute Cardio Latin Dance Workout",
                description:
                    "Cardio is more than just running on a treadmill! This Latin dance workout proves you can get your heart rate up while shaking your ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/8DZktowZo_k/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/8DZktowZo_k/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/8DZktowZo_k/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "POPSUGAR Fitness",
                liveBroadcastContent: "none",
                publishTime: "2019-04-03T16:00:32Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "W0hOS1BlhcEEDImJb-aqR9Olnhg",
            id: {
                kind: "youtube#video",
                videoId: "vG_Bs0QLc3I",
            },
            snippet: {
                publishedAt: "2020-04-23T14:00:24Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "Exercise To Lose Weight FAST || Zumba Class",
                description:
                    "ღ Like, Share and Subscribe: subscribe : http://bit.ly/2kAsbdr LIKE Fanpage Facebook ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/vG_Bs0QLc3I/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/vG_Bs0QLc3I/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/vG_Bs0QLc3I/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2020-04-23T14:00:24Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "eCmYVhmVW1IDcSldGxtq1O6Xhtg",
            id: {
                kind: "youtube#video",
                videoId: "mZeFvX3ALKY",
            },
            snippet: {
                publishedAt: "2022-05-14T03:01:57Z",
                channelId: "UCM49GyZHNJOtv4ZSswMzy8A",
                title: "Zumba® 30-Minute Beginners Latin Dance Mini-Workout",
                description:
                    "Give Zumba® a try with this 30-minute beginners latin dance mini-workout. Then visit zumba.com to join a class near you to shake ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/mZeFvX3ALKY/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/mZeFvX3ALKY/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/mZeFvX3ALKY/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba",
                liveBroadcastContent: "none",
                publishTime: "2022-05-14T03:01:57Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "0X1dQrY0yzMz9PfjBBbmdqz_DLs",
            id: {
                kind: "youtube#video",
                videoId: "8HpG0l9cLos",
            },
            snippet: {
                publishedAt: "2012-12-21T08:00:36Z",
                channelId: "UCnGjxxnmYTUxRl85hrjtEBg",
                title: "Don Omar - Zumba Campaign Video",
                description:
                    "Best of Don Omar / Lo mejor de Don Omar: https://goo.gl/J5mJHa Subscribe here: https://goo.gl/aHzXZf Music video by Don Omar ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/8HpG0l9cLos/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/8HpG0l9cLos/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/8HpG0l9cLos/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "DonOmarVEVO",
                liveBroadcastContent: "none",
                publishTime: "2012-12-21T08:00:36Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "tdDTtaolDhzox_nnOlPlM_mN53w",
            id: {
                kind: "youtube#video",
                videoId: "N1zTPfkM7f8",
            },
            snippet: {
                publishedAt: "2017-10-28T11:49:51Z",
                channelId: "UCL4Ir1d81qCuA3MliHoMmcA",
                title: "Katarzyna Cyunczyk Zumba - Warm Up",
                description:
                    "I don't have rights to this songs. No copyright infringement intended.",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/N1zTPfkM7f8/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/N1zTPfkM7f8/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/N1zTPfkM7f8/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Katarzyna Pilecka ZUMBA",
                liveBroadcastContent: "none",
                publishTime: "2017-10-28T11:49:51Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "Hc9psjDj34IKolan13Il8UBsLtU",
            id: {
                kind: "youtube#video",
                videoId: "ymigWt5TOV8",
            },
            snippet: {
                publishedAt: "2018-10-25T20:11:02Z",
                channelId: "UCOjZigyo_fg2V7JdGwePSwg",
                title: "Zumba Kids (easy dance) - I like to move it",
                description:
                    "You can support me : https://www.patreon.com/user?u=18764540 This is my first ever Zumba kids group in Gargždai city and they ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/ymigWt5TOV8/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/ymigWt5TOV8/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/ymigWt5TOV8/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba with Dovydas",
                liveBroadcastContent: "none",
                publishTime: "2018-10-25T20:11:02Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "nrJZhtmXTS0_MGrw-PgRqSQQWPU",
            id: {
                kind: "youtube#channel",
                channelId: "UCM49GyZHNJOtv4ZSswMzy8A",
            },
            snippet: {
                publishedAt: "2006-06-01T15:42:09Z",
                channelId: "UCM49GyZHNJOtv4ZSswMzy8A",
                title: "Zumba",
                description:
                    "The Zumba® program is a fitness-party with a contagious blend of Latin and international rhythms that provides a fun and effective ...",
                thumbnails: {
                    default: {
                        url: "https://yt3.ggpht.com/Te3L-NVqXTffcOzPp6MRybCGL7AuneXZHoBCYlD6oVJgw7mpSEH0smOekQuxncCSd6bKfFqiTkQ=s88-c-k-c0xffffffff-no-rj-mo",
                    },
                    medium: {
                        url: "https://yt3.ggpht.com/Te3L-NVqXTffcOzPp6MRybCGL7AuneXZHoBCYlD6oVJgw7mpSEH0smOekQuxncCSd6bKfFqiTkQ=s240-c-k-c0xffffffff-no-rj-mo",
                    },
                    high: {
                        url: "https://yt3.ggpht.com/Te3L-NVqXTffcOzPp6MRybCGL7AuneXZHoBCYlD6oVJgw7mpSEH0smOekQuxncCSd6bKfFqiTkQ=s800-c-k-c0xffffffff-no-rj-mo",
                    },
                },
                channelTitle: "Zumba",
                liveBroadcastContent: "none",
                publishTime: "2006-06-01T15:42:09Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "QazWAjGtmEZZn8pyjYa9wgaHun8",
            id: {
                kind: "youtube#video",
                videoId: "fz0AossTXaM",
            },
            snippet: {
                publishedAt: "2020-04-21T16:39:08Z",
                channelId: "UCHBZy7vNRtFd3WARV_6ynZw",
                title: "HOME WORKOUT //20 MIN  ZUMBA CLASS // TANJU",
                description:
                    "RELOADING from the channel @FITSEVENELEVEN Dance and don't get sick! (^-^)",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/fz0AossTXaM/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/fz0AossTXaM/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/fz0AossTXaM/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "el_vee",
                liveBroadcastContent: "none",
                publishTime: "2020-04-21T16:39:08Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "k4LqP1ccA-L8lr3G0bnYBr9Qetk",
            id: {
                kind: "youtube#video",
                videoId: "gCROJglfRxo",
            },
            snippet: {
                publishedAt: "2021-02-05T22:00:14Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "7 DAY CHALLENGE: Lose Belly &amp; Arms Fat | Zumba Class",
                description:
                    "7 DAY CHALLENGE: Lose Belly & Arms Fat | Zumba Class #MiraPham #AerobicDance ღ LIKE & SUBSCRIBE: ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/gCROJglfRxo/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/gCROJglfRxo/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/gCROJglfRxo/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2021-02-05T22:00:14Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "9z9clgLpjVNmwLeWdnCckKJnJmw",
            id: {
                kind: "youtube#video",
                videoId: "HhR9jUIPtnY",
            },
            snippet: {
                publishedAt: "2020-08-01T18:22:25Z",
                channelId: "UC9Ki56XoYx2zD8UGs9MvRmw",
                title: "20 Minute ZUMBA Fitness | Dance Fitness | Home Workout | Full Body/No Equipment Vol. 2",
                description:
                    "CHECK MY OFFICIAL WEBSITE: www.a-sulu.com #20 minute zumba #zumba class #zumba home workout #20 minute home ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/HhR9jUIPtnY/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/HhR9jUIPtnY/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/HhR9jUIPtnY/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Sulu",
                liveBroadcastContent: "none",
                publishTime: "2020-08-01T18:22:25Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "4v31k6ZzAXXJAUNwv3IwjMR2c-k",
            id: {
                kind: "youtube#video",
                videoId: "r7_yeUbPnvo",
            },
            snippet: {
                publishedAt: "2022-05-20T22:00:13Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "10 DAY CHALLENGE: Lose Belly &amp; Arms Fat | Zumba Class",
                description:
                    "10 DAY CHALLENGE: Lose Belly & Arms Fat | Zumba Class #MiraPham #AerobicWorkout ღ LIKE & SUBSCRIBE: ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/r7_yeUbPnvo/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/r7_yeUbPnvo/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/r7_yeUbPnvo/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2022-05-20T22:00:13Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "IEciOrspBTJapxW2nVL_vdZpo2M",
            id: {
                kind: "youtube#video",
                videoId: "ZNpCqF9XRqQ",
            },
            snippet: {
                publishedAt: "2020-07-10T22:00:10Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "The Best 20 Minute Beginner Workout | Aerobic Reduction of Belly Fat Quickly | Zumba Class",
                description:
                    "The Best 20 Minute Beginner Workout | Aerobic Reduction of Belly Fat Quickly | Zumba Class ღ Like, Share and Subscribe: ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/ZNpCqF9XRqQ/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/ZNpCqF9XRqQ/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/ZNpCqF9XRqQ/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2020-07-10T22:00:10Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "6sxggiQfRghnDGYQ1-idfhQa8gY",
            id: {
                kind: "youtube#video",
                videoId: "ousdlLjX9E8",
            },
            snippet: {
                publishedAt: "2017-07-13T06:41:34Z",
                channelId: "UCDndWkmCZ5J7HLCNQYPB3AA",
                title: "Firehouse Daddy Yankee  Ft Play N Skillz Zumba Fitness Arantxa Moreno",
                description:
                    "Holaaaa!¡Aquí os dejo el vídeo de hoy! Firehouse de Daddy Yankee Ft Play N Skillz :D Coreografía oficial : Beto Perez La ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/ousdlLjX9E8/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/ousdlLjX9E8/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/ousdlLjX9E8/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Arantxa Moreno",
                liveBroadcastContent: "none",
                publishTime: "2017-07-13T06:41:34Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "FQq942ouN4KhaDwPB5wjGr-gK20",
            id: {
                kind: "youtube#video",
                videoId: "zDPsJ3ECaTI",
            },
            snippet: {
                publishedAt: "2014-01-27T15:19:09Z",
                channelId: "UC9gSf8tfJf72Q2DCY0kRjlQ",
                title: "Zumba - Fiesta Buena by Patrick",
                description:
                    "NEW ROUTINE✖︎✖︎✖︎ Music: DJ Mam´s - Fiesta Buena ft. Luis Guisao & Soldat Jahman Thanks to my students for ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/zDPsJ3ECaTI/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/zDPsJ3ECaTI/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/zDPsJ3ECaTI/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Patrick SweatnDance",
                liveBroadcastContent: "none",
                publishTime: "2014-01-27T15:19:09Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "gleZsMJ6MjA3ushcdVEraRXrbsk",
            id: {
                kind: "youtube#video",
                videoId: "QRZcZgSgSHI",
            },
            snippet: {
                publishedAt: "2020-01-05T17:00:13Z",
                channelId: "UCBINFWq52ShSgUFEoynfSwg",
                title: "30-Minute STRONG by Zumba® Cardio and Full-Body Toning Workout",
                description:
                    "Get ready for a high-intensity workout that will tone your whole body! Led by STRONG by Zumba® Master Trainer Aurelio Figari, ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/QRZcZgSgSHI/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/QRZcZgSgSHI/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/QRZcZgSgSHI/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "POPSUGAR Fitness",
                liveBroadcastContent: "none",
                publishTime: "2020-01-05T17:00:13Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "QDeleHy5xsYRiJ515_tTsIF-6ng",
            id: {
                kind: "youtube#video",
                videoId: "4h62OzPwrms",
            },
            snippet: {
                publishedAt: "2020-07-31T22:00:10Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "🔥 HOT 🔥 Reduction Of Belly Fat Quickly | 27 Mins Aerobic Dance Workout | Zumba Class",
                description:
                    "HOT Reduction Of Belly Fat Quickly | 27 Mins Aerobic Dance Workout ღ Like, Share and Subscribe: subscribe ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/4h62OzPwrms/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/4h62OzPwrms/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/4h62OzPwrms/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2020-07-31T22:00:10Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "1mXEFS8fEEKsegUeVyzVYiZ68QQ",
            id: {
                kind: "youtube#video",
                videoId: "QO1911K8-Z8",
            },
            snippet: {
                publishedAt: "2021-09-30T08:57:47Z",
                channelId: "UCfUKnh87Wabzc84h5vls7Iw",
                title: "30-MINUTE NON-STOP ZUMBA DANCE WORKOUT | CARDIO WORKOUT | DANCE WORKOUT FOR BEGINNERS | STEPS | CDO",
                description: "",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/QO1911K8-Z8/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/QO1911K8-Z8/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/QO1911K8-Z8/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Work Out Like A Dancer",
                liveBroadcastContent: "none",
                publishTime: "2021-09-30T08:57:47Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "N0t5ddVLmm08znJiZ1q_7py9VvQ",
            id: {
                kind: "youtube#video",
                videoId: "60PB-QguwiM",
            },
            snippet: {
                publishedAt: "2018-03-09T18:38:36Z",
                channelId: "UCZzKYlnGr9I8om5t2_sBrBA",
                title: "Dura - Daddy Yankee - Mao Zumba - Coreography",
                description:
                    "Hope you guys enjoy, it was made with a lot of love! World peace, keep Dancing, Living the Dream.",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/60PB-QguwiM/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/60PB-QguwiM/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/60PB-QguwiM/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Mao Aceves",
                liveBroadcastContent: "none",
                publishTime: "2018-03-09T18:38:36Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "yznTXy7hrXVmCY6r2_fMGGv88ck",
            id: {
                kind: "youtube#video",
                videoId: "1G1AkJ-97ng",
            },
            snippet: {
                publishedAt: "2010-11-15T04:58:39Z",
                channelId: "UCRW3XRXMaq0qgFHNdEtTVWQ",
                title: "ZUMBA - CAIPIRINHA - FITNESS FIESTA",
                description:
                    "I'm extremely happy and excited to announce YogaFit Ibiza. The only resort based retreat in Ibiza. Click here for more information ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/1G1AkJ-97ng/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/1G1AkJ-97ng/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/1G1AkJ-97ng/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Lindsay Jay",
                liveBroadcastContent: "none",
                publishTime: "2010-11-15T04:58:39Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "W6ZWg8qGl57X1Z8fkc8pZIdQEs0",
            id: {
                kind: "youtube#video",
                videoId: "zhlPTu-a1jo",
            },
            snippet: {
                publishedAt: "2017-04-02T11:42:27Z",
                channelId: "UC365S9KwYTZYvWuTjNJXimg",
                title: "Zumba dasar",
                description: "Zeki tuahattu.",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/zhlPTu-a1jo/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/zhlPTu-a1jo/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/zhlPTu-a1jo/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zeki Tuahattu",
                liveBroadcastContent: "none",
                publishTime: "2017-04-02T11:42:27Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "td7qEufXzXnGnvWeyl_eoua4pRU",
            id: {
                kind: "youtube#video",
                videoId: "O96NJ2ZlzUs",
            },
            snippet: {
                publishedAt: "2020-11-20T22:00:15Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "Burn 500 Calories: Intense 50 Mins Full Body FAT BURNING Workout | Zumba Class",
                description:
                    "Burn 500 Calories: Intense 50 Mins Full Body FAT BURNING Workout | Zumba Class Add this workout to your playlist NOW!",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/O96NJ2ZlzUs/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/O96NJ2ZlzUs/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/O96NJ2ZlzUs/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2020-11-20T22:00:15Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "Y-uLy5dFLJS3YAfp2eYYGNAAV6g",
            id: {
                kind: "youtube#video",
                videoId: "sf7BrE75st8",
            },
            snippet: {
                publishedAt: "2016-02-18T11:42:26Z",
                channelId: "UCNZX1mR9y-N0dAQaAZI7t7w",
                title: "Zumba® Fitness Dance Choreography I POLICEMAN I Eva Simons feat. Konshens I *ZIN Svenja*",
                description:
                    "ZIN Svenja and a few of her lovely dancers performing a Zumba® Fitness Dance Choreography to Eva Simons Policeman.",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/sf7BrE75st8/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/sf7BrE75st8/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/sf7BrE75st8/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Svenja Zucre Dancecrew",
                liveBroadcastContent: "none",
                publishTime: "2016-02-18T11:42:26Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "bIUEQq-i1oegK6gqbA587a98yw4",
            id: {
                kind: "youtube#video",
                videoId: "9r1GT-IpCAs",
            },
            snippet: {
                publishedAt: "2021-09-17T22:00:13Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "Do These Thing EVERY Morning - Lose 4 Kg In 7 Days | Zumba Class",
                description:
                    "Do These Thing EVERY Morning - Lose 4 Kg In 7 Days | Zumba Class #MiraPham #AerobicWorkout ღ LIKE ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/9r1GT-IpCAs/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/9r1GT-IpCAs/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/9r1GT-IpCAs/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2021-09-17T22:00:13Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "y6M9GG16RyLgRM43tNPZ7kFjHP4",
            id: {
                kind: "youtube#video",
                videoId: "bIYDcT7VMSg",
            },
            snippet: {
                publishedAt: "2022-05-18T14:17:52Z",
                channelId: "UCfUKnh87Wabzc84h5vls7Iw",
                title: "NON-STOP ZUMBA DANCE WORKOUT | 30-MINUTE DANCE WORKOUT | 30 MINUTE CARDIO WORKOUT | 2022 | CDO DUO",
                description: "",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/bIYDcT7VMSg/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/bIYDcT7VMSg/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/bIYDcT7VMSg/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Work Out Like A Dancer",
                liveBroadcastContent: "none",
                publishTime: "2022-05-18T14:17:52Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "OgCS8u8QdoHpPEjNEjp_16L5yqc",
            id: {
                kind: "youtube#video",
                videoId: "CRF8rl4WARs",
            },
            snippet: {
                publishedAt: "2022-06-01T22:00:05Z",
                channelId: "UCZuPSKk0XGKLugFRIiStfiA",
                title: "BUM BUM ( Dj Jurlan Remix ) - Reggaeton | Dance Trends | Dance Fitness | Zumba",
                description:
                    "I DON'T OWN THE SONG! No copyright infringements intended! This video is being shown for dance fitness / zumba purposes ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/CRF8rl4WARs/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/CRF8rl4WARs/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/CRF8rl4WARs/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Argel Dela Torre - The South Force -",
                liveBroadcastContent: "none",
                publishTime: "2022-06-01T22:00:05Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "fzfQSZ1p4wlmN9-9qsESfY-ae0g",
            id: {
                kind: "youtube#video",
                videoId: "2316Ux_Fks0",
            },
            snippet: {
                publishedAt: "2020-03-27T22:30:10Z",
                channelId: "UCnrXvqbfwAEpIyPLQQNr8nA",
                title: "15 Mins Best Aerobic dance workout for weight loss l Aerobic For Beginners Step By Step l ZumbaClass",
                description:
                    "15 Mins Best Aerobic dance workout for weight loss l Aerobic For Beginners Step By Step l Zumba Class Thank For Watching My ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/2316Ux_Fks0/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/2316Ux_Fks0/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/2316Ux_Fks0/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2020-03-27T22:30:10Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "Akvsjo7IqYzh7xvypkySkpC17IQ",
            id: {
                kind: "youtube#video",
                videoId: "TpcnhNvi3sU",
            },
            snippet: {
                publishedAt: "2022-05-27T22:00:14Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "30 Min Aerobic Dance Workout To Reduce Belly Fat And Get A Flat Stomach | Zumba Class",
                description:
                    "30 Min Aerobic Dance Workout To Reduce Belly Fat And Get A Flat Stomach | Zumba Class #MiraPham #AerobicWorkout ღ ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/TpcnhNvi3sU/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/TpcnhNvi3sU/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/TpcnhNvi3sU/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2022-05-27T22:00:14Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "4jtaQqQcOvN9QGrGGzq2Bmi11Z4",
            id: {
                kind: "youtube#video",
                videoId: "qNByp5yiKOI",
            },
            snippet: {
                publishedAt: "2021-06-18T22:00:14Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "7 DAY CHALLENGE / 12 MINUTE WORKOUT TO LOSE BELLY FAT / SPECIAL WORKOUT | Zumba Class",
                description:
                    "7 DAY CHALLENGE / 12 MINUTE WORKOUT TO LOSE BELLY FAT / SPECIAL WORKOUT | Zumba Class #MiraPham ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/qNByp5yiKOI/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/qNByp5yiKOI/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/qNByp5yiKOI/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2021-06-18T22:00:14Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "6frBfrj9GyzMGsxfX4G-8TKIVjo",
            id: {
                kind: "youtube#video",
                videoId: "rfKaRZJo5EE",
            },
            snippet: {
                publishedAt: "2020-11-26T01:30:50Z",
                channelId: "UCfUKnh87Wabzc84h5vls7Iw",
                title: "30-MINUTE DANCE WORKOUT | ZUMBA DANCE WORKOUT FOR BELLY FAT | 30 MINUTE CARDIO WORKOUT | CDO DUO",
                description:
                    "Here's a 30-minute dance workout for you! This includes a warm-up and a pre-cool down. Don't forget to do your cool down and ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/rfKaRZJo5EE/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/rfKaRZJo5EE/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/rfKaRZJo5EE/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Work Out Like A Dancer",
                liveBroadcastContent: "none",
                publishTime: "2020-11-26T01:30:50Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "652UQXrXDry94IEOxHlO6zVpax4",
            id: {
                kind: "youtube#video",
                videoId: "MF0gYU8hoc0",
            },
            snippet: {
                publishedAt: "2022-01-30T02:21:23Z",
                channelId: "UCj_MnfqXHwP8rZrBtWXF1Xw",
                title: "40 MINUTES CHA-CHA MEDLEY | DANCE WORKOUT | ZUMBA",
                description:
                    "Thank you for watching. Don't forget to hit like, share and subscribe! Follow and like us on Facebook: MA Dance Fitness Thank ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/MF0gYU8hoc0/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/MF0gYU8hoc0/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/MF0gYU8hoc0/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "MA Dance Fitness",
                liveBroadcastContent: "none",
                publishTime: "2022-01-30T02:21:23Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "eRBOv8PJDt3ViYzxmP5fpA_tbL0",
            id: {
                kind: "youtube#video",
                videoId: "Cs8SynPLEZ0",
            },
            snippet: {
                publishedAt: "2022-06-03T22:00:05Z",
                channelId: "UCZuPSKk0XGKLugFRIiStfiA",
                title: "TAKE ME TO YOUR HEART ( Dj Justin Remix ) - Michael Learns To Rock | Dance Fitness | Zumba",
                description:
                    "I DON'T OWN THE SONG! No copyright infringements intended! This video is being shown for dance fitness / zumba purposes ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/Cs8SynPLEZ0/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/Cs8SynPLEZ0/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/Cs8SynPLEZ0/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Argel Dela Torre - The South Force -",
                liveBroadcastContent: "none",
                publishTime: "2022-06-03T22:00:05Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "GHgUZRErZQcdOHxzTd-KI3K6dTA",
            id: {
                kind: "youtube#video",
                videoId: "uKMTPnGWLhU",
            },
            snippet: {
                publishedAt: "2022-05-05T04:58:41Z",
                channelId: "UCmzRlnYu2x5l-kmjpF08Hnw",
                title: "ZOOM by Jessie | Zumba | Dance Workout | TML Crew Raja Leoncito",
                description:
                    "Choreographed by TML Crew Raja Leoncito Danced by TML Crew Vietnam.",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/uKMTPnGWLhU/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/uKMTPnGWLhU/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/uKMTPnGWLhU/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Mark Kramer Pastrana",
                liveBroadcastContent: "none",
                publishTime: "2022-05-05T04:58:41Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "CJiCzLG9ANRzNZK3Wpp3GbKgqe8",
            id: {
                kind: "youtube#video",
                videoId: "5a9JBk7Q_ko",
            },
            snippet: {
                publishedAt: "2019-07-04T21:06:31Z",
                channelId: "UCVKZZn5fcJbsKEkm8dc5cxg",
                title: "Senorita by Shawn Mendes x Camila Cabello | Live Love Party™ | Zumba® | Dance Fitness",
                description:
                    "If you liked this video, don't forget to give it a THUMBS UP, LEAVE A COMMENT and SUBSCRIBE to our channel: ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/5a9JBk7Q_ko/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/5a9JBk7Q_ko/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/5a9JBk7Q_ko/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "LIVELOVEPARTY.TV",
                liveBroadcastContent: "none",
                publishTime: "2019-07-04T21:06:31Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "SWjt96RxYWjKZfS8JBE9v1ocAEs",
            id: {
                kind: "youtube#video",
                videoId: "m8Y5W19yWCM",
            },
            snippet: {
                publishedAt: "2020-09-18T22:00:11Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "Best Tummy &amp; Back Fat Exercises - Reduce Back, Abdominal Fat | Zumba Class",
                description:
                    "Best Tummy & Back Fat Exercises - Reduce Back, Abdominal Fat . #MiraPham, #AbdominalFat, #ReduceBack Today's workout is ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/m8Y5W19yWCM/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/m8Y5W19yWCM/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/m8Y5W19yWCM/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2020-09-18T22:00:11Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "wHiWJZM-v0rXdOgGpduCqRbFYtA",
            id: {
                kind: "youtube#video",
                videoId: "6dz0RqbcVNc",
            },
            snippet: {
                publishedAt: "2018-02-15T12:09:39Z",
                channelId: "UCZU6ERAe06T7fbP7I5N8VmQ",
                title: "&quot;AZUKITA&quot; / Zumba® choreo with Alix &amp; Ronny (Aoki, D.Yankee, Play-N-Skillz &amp; E.Crespo)",
                description:
                    '"AZUKITA" / Zumba® choreo with Alix & Ronny (Aoki, D.Yankee, Play-N-Skillz & E.Crespo). ALIX Facebook ...',
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/6dz0RqbcVNc/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/6dz0RqbcVNc/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/6dz0RqbcVNc/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba® France by Alix",
                liveBroadcastContent: "none",
                publishTime: "2018-02-15T12:09:39Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "N8IGqOvLlX1qy1wKi-7AXUWf5wg",
            id: {
                kind: "youtube#video",
                videoId: "bm4WZyH5p2I",
            },
            snippet: {
                publishedAt: "2018-01-14T17:22:57Z",
                channelId: "UCBINFWq52ShSgUFEoynfSwg",
                title: "20-Minute STRONG by Zumba® Cardio and Full-Body Toning Workout",
                description:
                    "Get ready for a total-body tone with STRONG by Zumba® — no, this isn't a dance class! It's a high-intensity workout experience ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/bm4WZyH5p2I/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/bm4WZyH5p2I/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/bm4WZyH5p2I/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "POPSUGAR Fitness",
                liveBroadcastContent: "none",
                publishTime: "2018-01-14T17:22:57Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "NWzF2wLCzaRuvKGeza4FZMguNJM",
            id: {
                kind: "youtube#video",
                videoId: "un9inxYgTTA",
            },
            snippet: {
                publishedAt: "2022-05-14T03:05:50Z",
                channelId: "UCM49GyZHNJOtv4ZSswMzy8A",
                title: "Mini rutina de 30 minutos de latin dance de Zumba® para principiantes",
                description:
                    "Prueba Zumba® con esta mini rutina de 30 minutos de Latin Dance para principiantes. ¡Luego apúntate en zumba.com a una ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/un9inxYgTTA/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/un9inxYgTTA/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/un9inxYgTTA/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba",
                liveBroadcastContent: "none",
                publishTime: "2022-05-14T03:05:50Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "37M7RuWJJgeiC8q8vFTevqmlRD0",
            id: {
                kind: "youtube#video",
                videoId: "zUBNPRZO6Yw",
            },
            snippet: {
                publishedAt: "2016-12-27T18:53:08Z",
                channelId: "UCkg6ACZjGXkrZBx1iEHyKvw",
                title: "ZUMBA dancing to &quot;FIREHOUSE&quot; w/Daddy Yankee",
                description:
                    "We produced this song and wrote it with Daddy Yankee for ZUMBA. Checkout their worldwide tour and subscribe to our youtube ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/zUBNPRZO6Yw/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/zUBNPRZO6Yw/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/zUBNPRZO6Yw/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "PlayNSkillzMusic",
                liveBroadcastContent: "none",
                publishTime: "2016-12-27T18:53:08Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "6FHyGxvALE3SXX-eUPL-q1WbOdA",
            id: {
                kind: "youtube#video",
                videoId: "4qox-ym6eW4",
            },
            snippet: {
                publishedAt: "2019-05-09T06:04:48Z",
                channelId: "UCj8lgMe9-WQ6aKDeR_p0r3A",
                title: "80&#39;s MEDLEY |  ZUMBA FITNESS",
                description:
                    "80's Medley - Zumba Fitness I do not own the songs in the video. All the rights belong to its rightful owner/owners. No copyright ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/4qox-ym6eW4/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/4qox-ym6eW4/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/4qox-ym6eW4/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Buging Dance Fitness",
                liveBroadcastContent: "none",
                publishTime: "2019-05-09T06:04:48Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "hxxamakwLpzuKYLQ1zP-ygYzP4s",
            id: {
                kind: "youtube#video",
                videoId: "OGCX_WU6vRc",
            },
            snippet: {
                publishedAt: "2016-09-20T02:56:27Z",
                channelId: "UCMjNOq1eQTt6MYjb3SjqMZg",
                title: "Kamelia - Amor (Zumba Choreography by Claudiu Gutu)",
                description:
                    "Subscribe to my channel: https://goo.gl/oCpvfU CONCERTE / BOOKING Kamelia : kameliaofficial@gmail.com Follow Kamelia ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/OGCX_WU6vRc/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/OGCX_WU6vRc/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/OGCX_WU6vRc/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "KAMELIA",
                liveBroadcastContent: "none",
                publishTime: "2016-09-20T02:56:27Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "xsZUapsxtHStSJyFYy5J_Hrdfdw",
            id: {
                kind: "youtube#video",
                videoId: "3Vp5HoDbLt0",
            },
            snippet: {
                publishedAt: "2020-10-09T22:00:11Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "Lose Belly Fat Super Fast Exercise - Reduction Of Belly Fat Quickly | Zumba Class",
                description:
                    "Lose Belly Fat Super Fast Exercise - Reduction Of Belly Fat Quickly | Zumba Class ღ Like, Share and Subscribe: ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/3Vp5HoDbLt0/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/3Vp5HoDbLt0/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/3Vp5HoDbLt0/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2020-10-09T22:00:11Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "kAzdihWvhvRh05aW3UaH8mNMnbU",
            id: {
                kind: "youtube#video",
                videoId: "94N00JpWzDI",
            },
            snippet: {
                publishedAt: "2020-09-21T14:09:37Z",
                channelId: "UC9Ki56XoYx2zD8UGs9MvRmw",
                title: "25 Minute Home Workout  | ZUMBA Fitness | Dance Workout | Full Body | No Equipment",
                description:
                    "Buy Me A Coffee: https://paypal.me/asulu?locale.x=de_DE 25 Minute Home Workout with ZUMBA Fitness / Dance Workout. it is a ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/94N00JpWzDI/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/94N00JpWzDI/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/94N00JpWzDI/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Sulu",
                liveBroadcastContent: "none",
                publishTime: "2020-09-21T14:09:37Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "mZCfGH2iSBWFWyfcqeGH63Axz94",
            id: {
                kind: "youtube#video",
                videoId: "6XB1W76ObV4",
            },
            snippet: {
                publishedAt: "2022-02-06T18:20:54Z",
                channelId: "UCmzRlnYu2x5l-kmjpF08Hnw",
                title: "EASY ON ME (Tiktok Viral) by Will Gittens | Zumba | Dance Workout | TML Crew Kramer Pastrana",
                description:
                    "Choreographed by TML Crew Kramer Pastrana Danced by TML Crew.",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/6XB1W76ObV4/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/6XB1W76ObV4/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/6XB1W76ObV4/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Mark Kramer Pastrana",
                liveBroadcastContent: "none",
                publishTime: "2022-02-06T18:20:54Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "CXNvs9ZWHEqH-0xV91wtA-4uR_o",
            id: {
                kind: "youtube#video",
                videoId: "1N-n1KEivbo",
            },
            snippet: {
                publishedAt: "2013-06-25T08:19:08Z",
                channelId: "UCGexSARr1S9mRfn2G72xPLQ",
                title: "Fitness Master Class - Zumba avec Jessica Mellet",
                description:
                    "Lucile accueille Jessica Mellet, LA prof de Zumba Fitness, pour une séance de Zumba ultra-dynamique ! Au programme ? De la ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/1N-n1KEivbo/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/1N-n1KEivbo/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/1N-n1KEivbo/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Doctissimo",
                liveBroadcastContent: "none",
                publishTime: "2013-06-25T08:19:08Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "wx1wmFrFzgL0VUTJ_VQ0qhkYMbs",
            id: {
                kind: "youtube#video",
                videoId: "hcNhFTHh17s",
            },
            snippet: {
                publishedAt: "2018-06-21T13:34:33Z",
                channelId: "UC5Zmq455O8FUEgFtm6OwYPQ",
                title: "zumba warm up Zumba Korea TV 일산줌바 홈트레이닝",
                description:
                    "일산 주엽동 줌바코리아 스튜디오 신나게 수업하자 뱃살타파 하실분들은 모두 모이세요. 문의전화 010-5230-3933 가요가 중간에 ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/hcNhFTHh17s/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/hcNhFTHh17s/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/hcNhFTHh17s/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Korea TV",
                liveBroadcastContent: "none",
                publishTime: "2018-06-21T13:34:33Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "lVdbr7_KphtohWKgledTOsErm5o",
            id: {
                kind: "youtube#video",
                videoId: "v7zTVdJn-gc",
            },
            snippet: {
                publishedAt: "2016-09-16T03:29:14Z",
                channelId: "UCVKZZn5fcJbsKEkm8dc5cxg",
                title: "Girl in the Mirror | Zumba® | Dance Fitness | Live Love Party",
                description:
                    "Do you want to become a Zumba Fitness instructor? We have great news for you!!! You can get 15% discount when you use the ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/v7zTVdJn-gc/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/v7zTVdJn-gc/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/v7zTVdJn-gc/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "LIVELOVEPARTY.TV",
                liveBroadcastContent: "none",
                publishTime: "2016-09-16T03:29:14Z",
            },
        },
        {
            kind: "youtube#searchResult",
            etag: "XRuHPHmghviovDIEMahzfun6M6A",
            id: {
                kind: "youtube#video",
                videoId: "y0nkoag-4_M",
            },
            snippet: {
                publishedAt: "2021-05-14T22:00:17Z",
                channelId: "UCOD8lPSrcmelzjAsRbE4fzg",
                title: "7 DAY CHALLENGE: Lose Arms + Shoulder + Back Fat + Belly Fat | Zumba Class",
                description:
                    "7 DAY CHALLENGE: Lose Arms + Shoulder + Back Fat + Belly Fat | Zumba Class #MiraPham #AerobicWorkout #LoseArms ...",
                thumbnails: {
                    default: {
                        url: "https://i.ytimg.com/vi/y0nkoag-4_M/default.jpg",
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: "https://i.ytimg.com/vi/y0nkoag-4_M/mqdefault.jpg",
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: "https://i.ytimg.com/vi/y0nkoag-4_M/hqdefault.jpg",
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: "Zumba Class",
                liveBroadcastContent: "none",
                publishTime: "2021-05-14T22:00:17Z",
            },
        },
    ]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [term, setTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onInputChange = ({ target: { value } }) => setTerm(value);

    const onBtnClick = async () => {
        const response = await youtubeApi.get("/search", {
            params: {
                q: term,
            },
        });
        console.log(response);
        setVideos(response.data.items);
        setNextPageToken(response.data.nextPageToken);
    };

    const onAddBtnClicked = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    const onCreatePlaylistClicked = () => {};

    return (
        <>
            <AddPlaylistModal
                isShown={isModalOpen}
                onCreatePlaylistClicked={onCreatePlaylistClicked}
            ></AddPlaylistModal>
            <div>
                <StyledAddBtn
                    className="fa-solid fa-circle-plus fa-3x"
                    onClick={onAddBtnClicked}
                ></StyledAddBtn>
            </div>
        </>
    );
};

export default Playlists;
