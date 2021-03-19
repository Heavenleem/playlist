let songs = [
  {
    name: "Daynamite",
    artist: "BTS",
    length: 0,
    image:
      "https://www.gannett-cdn.com/presto/2020/09/02/USAT/230e4ee9-0e0d-4f8e-b32a-85fbe0d3550e-BTS.jpg?width=1320&height=880&fit=crop&format=pjpg&auto=webp"
  },
  {
    name: "ON",
    artist: "BTS",
    length: 1,
    image:
      "https://www.gannett-cdn.com/presto/2020/09/02/USAT/230e4ee9-0e0d-4f8e-b32a-85fbe0d3550e-BTS.jpg?width=1320&height=880&fit=crop&format=pjpg&auto=webp"
  },
  {
    name: "Lovesickgirl",
    artist: "Blackpink",
    length: 2,
    image:
      "https://fashionista.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTc2OTM1MjU0MjE5NTY0ODM1/blackpink-k-pop-fashion-style.jpg"
  },
  {
    name: "savage",
    artist: "Blackpink",
    length: 3,
    image:
      "https://fashionista.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTc2OTM1MjU0MjE5NTY0ODM1/blackpink-k-pop-fashion-style.jpg"
  }
];
for (let song of songs) {
  console.log(song);
  showSong(song);
}

$(".addButton").click(function() {
  let songName = $(".KpopSongsInput").val();
  let ArtistName = $(".KpopArtistInput").val();
  let LengthName = $(".KpopLengthInput").val();
  let imageName = $(".imageInput").val();
  
  let song = {
    name: songName,
    artist: ArtistName,
    length: LengthName,
    image: imageName,
  };
  
  showSong(song);
  songs.push(song);
  console.log(songName);
});

function showSong(song){
  $(".kpop").append(` <div >${song["name"]}</div>`);
  $(".kpopArtist").append(` <div >${song["artist"]}</div>`);
  $(".kpoplength").append(` <div >${song["length"]}</div>`);
  $(".kpopimage").append(`<img src="${song["image"]}">`);
}
