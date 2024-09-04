import React from 'react';

// artistsData.js

const artistsData = [
  {
    id: 1,
    name: "RODRO",
    role: "DJ",
    bio: "Dj and Music Producer from Rancagua, Chile. He started as a music producer in the early 2020's producing Techno. Then he took a DJ course at South Waves Studios in the same city in 2020, finishing the course he entered as a resident of the collective Rancagua Rave. During this journey he has been able to find the sound and style he is most passionate about, Hard Techno, with its distorted, hard, fast and industrial sounds. In his sets we can find musical styles like neorave, acid, industrial, hardgroove and hard techno, adding screamo and gutturals to give a darker and under touch, his mixes generally turn between 140 to 155bpm.",
    releases: [
      { title: "Release 1", catalog: "Catalog 1" },
      { title: "Release 2", catalog: "Catalog 2" }
    ],
    socialMedia: [
      { name: "Twitter", link: "https://twitter.com/rodro" },
      { name: "Instagram", link: "https://instagram.com/rodro" }
    ],
    image: "/img/rodro.jpg"
  },
  {
    id: 2,
    name: "Sweet_Hate",
    role: "DJ",
    bio: "Biografía de Sweet Hate...",
    releases: [
      { title: "Release 1", catalog: "Catalog 1" }
    ],
    socialMedia: [
      { name: "Twitter", link: "https://twitter.com/sweet_hate" },
      { name: "Instagram", link: "https://instagram.com/sweet_hate" }
    ],
    image: "/img/sweet_hate.jpg"
  },
  // Agrega más artistas según sea necesario
];

export default artistsData;
