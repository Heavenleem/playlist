let songs =  [
  {
    name: "Daynamite",
    artist: "BTS",
    length:0,
    image:  "https://www.gannett-cdn.com/presto/2020/09/02/USAT/230e4ee9-0e0d-4f8e-b32a-85fbe0d3550e-BTS.jpg?width=1320&height=880&fit=crop&format=pjpg&auto=webp",
  },
  {
    name: "ON",
    artist: "BTS",
    length:1,
    image:"https://www.gannett-cdn.com/presto/2020/09/02/USAT/230e4ee9-0e0d-4f8e-b32a-85fbe0d3550e-BTS.jpg?width=1320&height=880&fit=crop&format=pjpg&auto=webp",
  },
  {
    name: "Lovesickgirl",
    artist: "Blackpink",
    length:2,
    image:  "https://fashionista.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTc2OTM1MjU0MjE5NTY0ODM1/blackpink-k-pop-fashion-style.jpg",
  },
  {
    name: "savage",
    artist: "Blackpink",
    length:3,
    image:  "https://fashionista.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTc2OTM1MjU0MjE5NTY0ODM1/blackpink-k-pop-fashion-style.jpg",
  }
];
for (let song of songs) {
  console.log(song);
  $(".kpop").append(` <div >${song["name"]}</div>`);
  $(".kpopArtist").append(` <div >${song["artist"]}</div>`);
  $(".kpoplength").append(` <div >${song["length"]}</div>`);
  $(".kpopimage").append(`<img src="${song["image"]}">`);
  
};





/*
let kpopSongs = ["Daynamite", "ON", "Lovesickgirl", "savage"];
for (let name of kpopSongs) {
  $(".kpop").append(` <div >${name}</div>
`);
}

//artist, song length, image, and link
let KpopArtist = ["BTS", "BTS", "BlackPink", "BlackPink"];
for (let name of KpopArtist) {
  $(".kpopArtist").append(`<div>${name}</div>`);
}
let Kpoplength = ["0", "1", "2", "3"];
for (let name of Kpoplength) {
  $(".kpoplength").append(`<div>${name}}</div>`);
}
let Kpopimage = [
  "https://www.gannett-cdn.com/presto/2020/09/02/USAT/230e4ee9-0e0d-4f8e-b32a-85fbe0d3550e-BTS.jpg?width=1320&height=880&fit=crop&format=pjpg&auto=webp",
  "https://www.gannett-cdn.com/presto/2020/09/02/USAT/230e4ee9-0e0d-4f8e-b32a-85fbe0d3550e-BTS.jpg?width=1320&height=880&fit=crop&format=pjpg&auto=webp",
  "https://fashionista.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTc2OTM1MjU0MjE5NTY0ODM1/blackpink-k-pop-fashion-style.jpg",
  "https://fashionista.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTc2OTM1MjU0MjE5NTY0ODM1/blackpink-k-pop-fashion-style.jpg"
];
for (let name of Kpopimage) {
  $(".kpopimage").append(`<img src="${name}">`);
}
$(".addButton").click(function() {
  let Song = $(".KpopSongsInput").val();
  // kpopSongs = ["Daynamite", "ON", "Lovesickgirl", "savage"];
  kpopSongs.push(Song);
  // kpopSongs = ["Daynamite", "ON", "Lovesickgirl", "savage", "Boy Over Flowers"];
  console.log(kpopSongs);
  $(".kpop").append(` <div >${Song}</div>
`);
  
  let Artist = $(".KpopArtistInput").val();
  KpopArtist.push(Artist);
  $(".kpopArtist").append(`<div >${Artist}</div>`);

  let Length = $(".KpopLengthInput").val();
  Kpoplength.push(Length);
  $(".kpoplength").append(`<div >${Length}</div>`);



});
*/





