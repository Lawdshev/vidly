const movieDatabase = [
    {
       id: 1,
       title: "Naruto",
       genre: "Anime",
       overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima iure fugiat similique sit amet rerum, velit aperiam nemo? Laborum aspernatur sunt voluptate veniam nesciunt in tempora autem magni, corrupti eum dolores blanditiis ad. Ex ab tenetur temporibus est animi esse natus quisquam quod quam, praesentium, nobis maiores corrupti accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere temporibus harum vel laudantium. Blanditiis consectetur expedita repudiandae. Facere facilis blanditiis placeat amet nostrum praesentium iste nesciunt sint optio repellat consequatur quis aliquid impedit animi aspernatur nam sunt magnam, adipisci nobis, suscipit, earum doloribus! Ab, neque deserunt. Fuga eveniet beatae quas tempore, facilis vero, ipsa ipsum aut assumenda earum accusamus! Consectetur cumque laboriosam ad et rerum omnis dignissimos quidem quam nihil explicabo id cupiditate inventore aspernatur sit error eaque cum, veniam deserunt suscipit expedita consequatur voluptatem tenetur? Voluptate officiis suscipit asperiores, sunt excepturi cum libero voluptatum blanditiis necessitatibus, officia perferendis?"
    },
    {
       id: 2,
       title: "Avatar",
       genre: "Cartoon",
       overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima iure fugiat similique sit amet rerum, velit aperiam nemo? Laborum aspernatur sunt voluptate veniam nesciunt in tempora autem magni, corrupti eum dolores blanditiis ad. Ex ab tenetur temporibus est animi esse natus quisquam quod quam, praesentium, nobis maiores corrupti accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere temporibus harum vel laudantium. Blanditiis consectetur expedita repudiandae. Facere facilis blanditiis placeat amet nostrum praesentium iste nesciunt sint optio repellat consequatur quis aliquid impedit animi aspernatur nam sunt magnam, adipisci nobis, suscipit, earum doloribus! Ab, neque deserunt. Fuga eveniet beatae quas tempore, facilis vero, ipsa ipsum aut assumenda earum accusamus! Consectetur cumque laboriosam ad et rerum omnis dignissimos quidem quam nihil explicabo id cupiditate inventore aspernatur sit error eaque cum, veniam deserunt suscipit expedita consequatur voluptatem tenetur? Voluptate officiis suscipit asperiores, sunt excepturi cum libero voluptatum blanditiis necessitatibus, officia perferendis?"
    },
    {
       id: 3,
       title: "Tom and Jerry",
       genre: "kids show",
       overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima iure fugiat similique sit amet rerum, velit aperiam nemo? Laborum aspernatur sunt voluptate veniam nesciunt in tempora autem magni, corrupti eum dolores blanditiis ad. Ex ab tenetur temporibus est animi esse natus quisquam quod quam, praesentium, nobis maiores corrupti accusantium?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere temporibus harum vel laudantium. Blanditiis consectetur expedita repudiandae. Facere facilis blanditiis placeat amet nostrum praesentium iste nesciunt sint optio repellat consequatur quis aliquid impedit animi aspernatur nam sunt magnam, adipisci nobis, suscipit, earum doloribus! Ab, neque deserunt. Fuga eveniet beatae quas tempore, facilis vero, ipsa ipsum aut assumenda earum accusamus! Consectetur cumque laboriosam ad et rerum omnis dignissimos quidem quam nihil explicabo id cupiditate inventore aspernatur sit error eaque cum, veniam deserunt suscipit expedita consequatur voluptatem tenetur? Voluptate officiis suscipit asperiores, sunt excepturi cum libero voluptatum blanditiis necessitatibus, officia perferendis?"
    },
]



const moviesDatabase =
    [
       {
           "adult": false,
           "backdrop_path": "/cyV2syN5zRQwU6BmWMyMFyjRLow.jpg",
           "genre_ids": [
               28,
               80,
               53
           ],
           "id": 843633,
           "original_language": "en",
           "original_title": "White Elephant",
           "overview": "An ex-marine enforcer must battle his conscience and code of honor when he is forced to do things for the mob.",
           "popularity": 1522.228,
           "poster_path": "/lG56H40Y1BuHSPoWtEgDJsSgDBZ.jpg",
           "release_date": "2022-06-03",
           "title": "White Elephant",
           "video": false,
           "vote_average": 6.6,
           "vote_count": 67
       },
       {
           "adult": false,
           "backdrop_path": "/yaze6df9AMIA9oeDEbIZ4zOTRCJ.jpg",
           "genre_ids": [
               14,
               28,
               12
           ],
           "id": 960700,
           "original_language": "ja",
           "original_title": "鋼の錬金術師 完結編 復讐者スカー",
           "overview": "The Elric brothers meet their toughest opponent yet — a lone serial killer with a large scar on his forehead.",
           "popularity": 1454.607,
           "poster_path": "/c5OwwBNyJkwyroIOIJL9IiRjydR.jpg",
           "release_date": "2022-05-20",
           "title": "Fullmetal Alchemist: The Revenge of Scar",
           "video": false,
           "vote_average": 7,
           "vote_count": 124
       },
       {
           "adult": false,
           "backdrop_path": "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
           "genre_ids": [
               28,
               18
           ],
           "id": 361743,
           "original_language": "en",
           "original_title": "Top Gun: Maverick",
           "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
           "popularity": 1580.086,
           "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
           "release_date": "2022-05-24",
           "title": "Top Gun: Maverick",
           "video": false,
           "vote_average": 8.4,
           "vote_count": 4100
       },
       {
           "adult": false,
           "backdrop_path": "/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
           "genre_ids": [
               27,
               53
           ],
           "id": 756999,
           "original_language": "en",
           "original_title": "The Black Phone",
           "overview": "Finney Blake, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
           "popularity": 1561.743,
           "poster_path": "/lr11mCT85T1JanlgjMuhs9nMht4.jpg",
           "release_date": "2021-06-24",
           "title": "The Black Phone",
           "video": false,
           "vote_average": 7.9,
           "vote_count": 2706
       },
       {
           "adult": false,
           "backdrop_path": "/rHzoz94bRfyfNLjiIB26Wt5KDHE.jpg",
           "genre_ids": [
               28,
               80,
               35,
               12
           ],
           "id": 773867,
           "original_language": "ko",
           "original_title": "서울대작전",
           "overview": "Chasing speed, dreams and money, a team of drivers get involved in the slush fund investigation of a powerful figure during the 1988 Seoul Olympics.",
           "popularity": 1247.247,
           "poster_path": "/txaOvJ6HURmqFbpVtJezWNWqaR4.jpg",
           "release_date": "2022-08-26",
           "title": "Seoul Vibe",
           "video": false,
           "vote_average": 6.9,
           "vote_count": 86
       },
       {
           "adult": false,
           "backdrop_path": "/7NCRlXDQlHhFZFk3y1HJyJgGVHB.jpg",
           "genre_ids": [
               28,
               12,
               10751,
               35
           ],
           "id": 675353,
           "original_language": "en",
           "original_title": "Sonic the Hedgehog 2",
           "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
           "popularity": 1170.63,
           "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
           "release_date": "2022-03-30",
           "title": "Sonic the Hedgehog 2",
           "video": false,
           "vote_average": 7.7,
           "vote_count": 3079
       },
       {
           "adult": false,
           "backdrop_path": "/rgZ3hdzgMgYgzvBfwNEVW01bpK1.jpg",
           "genre_ids": [
               28,
               53
           ],
           "id": 429473,
           "original_language": "en",
           "original_title": "Lou",
           "overview": "A young girl is kidnapped during a powerful storm. Her mother joins forces with her mysterious neighbour to set off in pursuit of the kidnapper. Their journey will test their limits and expose the dark secrets of their past.",
           "popularity": 1500.96,
           "poster_path": "/djM2s4wSaATn4jVB33cV05PEbV7.jpg",
           "release_date": "2022-09-23",
           "title": "Lou",
           "video": false,
           "vote_average": 6.5,
           "vote_count": 160
       },
       {
           "adult": false,
           "backdrop_path": "/5luJmy21N3bYCkjzRHsoZfvLtPP.jpg",
           "genre_ids": [
               53,
               18,
               80
           ],
           "id": 773975,
           "original_language": "en",
           "original_title": "End of the Road",
           "overview": "Recently widowed mom Brenda fights to protect her family during a harrowing road trip when a murder and a missing bag of cash plunge them into danger.",
           "popularity": 1176.941,
           "poster_path": "/tLFIMuPWJHlTJ6TN8HCOiSD6SdA.jpg",
           "release_date": "2022-09-09",
           "title": "End of the Road",
           "video": false,
           "vote_average": 6.5,
           "vote_count": 163
       },
       {
           "adult": false,
           "backdrop_path": "/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
           "genre_ids": [
               878,
               28,
               12
           ],
           "id": 76600,
           "original_language": "en",
           "original_title": "Avatar: The Way of Water",
           "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
           "popularity": 1162.159,
           "poster_path": "/1yppMeTNQwDrzaUH4dRCx4mr8We.jpg",
           "release_date": "2022-12-14",
           "title": "Avatar: The Way of Water",
           "video": false,
           "vote_average": 0,
           "vote_count": 0
       },
       {
           "adult": false,
           "backdrop_path": "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
           "genre_ids": [
               28,
               12,
               878
           ],
           "id": 634649,
           "original_language": "en",
           "original_title": "Spider-Man: No Way Home",
           "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
           "popularity": 1143.422,
           "poster_path": "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
           "release_date": "2021-12-15",
           "title": "Spider-Man: No Way Home",
           "video": false,
           "vote_average": 8,
           "vote_count": 15287
       },
       {
           "adult": false,
           "backdrop_path": "/3p3amyz5nXK9AW4VARqkPaMAG5J.jpg",
           "genre_ids": [
               16,
               12,
               35,
               14
           ],
           "id": 585511,
           "original_language": "en",
           "original_title": "Luck",
           "overview": "Suddenly finding herself in the never-before-seen Land of Luck, the unluckiest person in the world must unite with the magical creatures there to turn her luck around.",
           "popularity": 1006.376,
           "poster_path": "/1HOYvwGFioUFL58UVvDRG6beEDm.jpg",
           "release_date": "2022-08-05",
           "title": "Luck",
           "video": false,
           "vote_average": 8,
           "vote_count": 768
       },
       {
           "adult": false,
           "backdrop_path": "/qJQSB0UDYW3XdKSTcclI1kdp3hZ.jpg",
           "genre_ids": [
               53
           ],
           "id": 952374,
           "original_language": "en",
           "original_title": "The Aviary",
           "overview": "A twisted journey of two women’s desperate flee to escape the clutches of Skylight, an insidious cult. Lured in by the promise of “freedom” in the isolated desert campus called The Aviary, Jillian and Blair join forces to escape in hopes of real freedom. Consumed by fear and paranoia, they can’t shake the feeling that they are being followed by the cult’s leader, Seth, a man as seductive as he is controlling. The more distance the pair gains from the cult, the more Seth holds control of their minds. With supplies dwindling and their senses failing, Jillian and Blair are faced with a horrifying question: how do you run from an enemy who lives inside your head?",
           "popularity": 1042.845,
           "poster_path": "/u6HUQcOQsgkFFO8xCITfxQz6ivc.jpg",
           "release_date": "2022-04-29",
           "title": "The Aviary",
           "video": false,
           "vote_average": 5.9,
           "vote_count": 17
       },
       {
           "adult": false,
           "backdrop_path": "/A2XhlMUimRDViZDuJPeDtaJoHmT.jpg",
           "genre_ids": [
               16,
               35
           ],
           "id": 1015602,
           "original_language": "en",
           "original_title": "Welcome to the Club",
           "overview": "Heart set on becoming a princess, Lisa Simpson is surprised to learn being bad might be more fun.",
           "popularity": 964.352,
           "poster_path": "/kxB9E6fo0ycHzd13oOTHmGa5Njd.jpg",
           "release_date": "2022-09-08",
           "title": "Welcome to the Club",
           "video": false,
           "vote_average": 6.7,
           "vote_count": 85
       },
       {
           "adult": false,
           "backdrop_path": "/gUNRlH66yNDH3NQblYMIwgZXJ2u.jpg",
           "genre_ids": [
               14,
               28,
               12
           ],
           "id": 453395,
           "original_language": "en",
           "original_title": "Doctor Strange in the Multiverse of Madness",
           "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
           "popularity": 1062.248,
           "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
           "release_date": "2022-05-04",
           "title": "Doctor Strange in the Multiverse of Madness",
           "video": false,
           "vote_average": 7.5,
           "vote_count": 5914
       },
       {
           "adult": false,
           "backdrop_path": "/9mprVUhXPjdpSaiSon44uG9Dnv2.jpg",
           "genre_ids": [
               35,
               28
           ],
           "id": 838197,
           "original_language": "it",
           "original_title": "Altrimenti ci arrabbiamo",
           "overview": "Carezza and Sorriso, brothers very different from each other and in quarrel since childhood, will have to put aside their controversies to recover the legendary Dune Buggy, once belonged to their beloved father and now stolen from him by Torsillo, an unscrupulous building speculator, and his son Raniero. In doing so, they will forge an unusual alliance with a circus community, headed by the beautiful and dangerous Miriam and threatened by Torsillo's dirty business. Between daring chases, memorable fights and delicate meals based on beer and sausages, will the two brothers be able to find their beloved car?",
           "popularity": 1132.642,
           "poster_path": "/qlrRi05x5hjoM29hz6TDLGTUSop.jpg",
           "release_date": "2022-03-23",
           "title": "Watch Out, We're Mad",
           "video": false,
           "vote_average": 5.2,
           "vote_count": 74
       },
       {
           "adult": false,
           "backdrop_path": "/lGq3XvgVjJUqXs3REwNa2H9HMi6.jpg",
           "genre_ids": [
               10770,
               9648
           ],
           "id": 936897,
           "original_language": "en",
           "original_title": "Curious Caterer: Dying for Chocolate",
           "overview": "Goldy is a spirited single mom who’s thrust into the role of town sleuth to help solve a friend’s mysterious death. With the clock ticking to find the culprit, Goldy strikes up an unlikely partnership with Detective Tom Schultz, who leans into Goldy’s local knowledge. As their relationship shows signs of becoming something more, the suspect list rises. Will Goldy narrow in on the killer before the killer narrows in on her?",
           "popularity": 929.654,
           "poster_path": "/7quPRcCVUmMBxKO58QwPuIADtYG.jpg",
           "release_date": "2022-04-10",
           "title": "Curious Caterer: Dying for Chocolate",
           "video": false,
           "vote_average": 5.9,
           "vote_count": 10
       },
       {
           "adult": false,
           "backdrop_path": "/hTR85UGsCY0LmSZrUx9RC0eD5WJ.jpg",
           "genre_ids": [
               35,
               14
           ],
           "id": 804413,
           "original_language": "en",
           "original_title": "The Munsters",
           "overview": "Lily is a typical 150-year-old lovelorn vampire who's looking for the man of her nightmares -- until she lays her eyes on Herman, a 7-foot-tall green experiment with a heart of gold. It's love at first shock as these two ghouls fall fangs over feet for each other in a Transylvanian romance. Unfortunately, it's not all smooth sailing in the cemetery as Lily's father has other plans for his beloved daughter's future, and they don't involve her new bumbling beau.",
           "popularity": 1013.794,
           "poster_path": "/kJaEVFhDouD72GKANMkYqzQky9n.jpg",
           "release_date": "2022-09-27",
           "title": "The Munsters",
           "video": false,
           "vote_average": 6.4,
           "vote_count": 88
       },
       {
           "adult": false,
           "backdrop_path": "/xVbppM1xgbskOKgOuV8fbWBWHtt.jpg",
           "genre_ids": [
               27,
               9648,
               878,
               53
           ],
           "id": 762504,
           "original_language": "en",
           "original_title": "Nope",
           "overview": "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
           "popularity": 1035.668,
           "poster_path": "/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
           "release_date": "2022-07-20",
           "title": "Nope",
           "video": false,
           "vote_average": 7,
           "vote_count": 1644
       },
       {
           "adult": false,
           "backdrop_path": "/jazlkwXfw4KdF6fVTRsolOvRCmu.jpg",
           "genre_ids": [
               53,
               12,
               9648,
               28,
               80
           ],
           "id": 924482,
           "original_language": "en",
           "original_title": "The Ledge",
           "overview": "A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.",
           "popularity": 941.823,
           "poster_path": "/dHKfsdNcEPw7YIWFPIhqiuWrSAb.jpg",
           "release_date": "2022-02-18",
           "title": "The Ledge",
           "video": false,
           "vote_average": 6.3,
           "vote_count": 110
       },
       {
           "adult": false,
           "backdrop_path": "/nYla7faWqM3nLCY9arQH1DwXC84.jpg",
           "genre_ids": [
               16,
               12,
               10751
           ],
           "id": 576925,
           "original_language": "ru",
           "original_title": "Бука. Моё любимое чудище",
           "overview": "A scandal in the royal family: the wayward princess Barbara escaped from the palace and went through the forest in search of a handsome prince. However, instead of the cherished meeting with her beloved, she is captured by Buka, the most dangerous robber of the kingdom. But it quickly becomes clear that the brisk princess is ready to turn Buka's life into a nightmare, just to reach her goal. So the restless Varvara begins to establish her own order in the forest.",
           "popularity": 880.536,
           "poster_path": "/xIbEHAqwK5N7PJJYmbwmxuvC7fL.jpg",
           "release_date": "2022-01-27",
           "title": "My Sweet Monster",
           "video": false,
           "vote_average": 6.2,
           "vote_count": 13
       }
]

module.exports = moviesDatabase;