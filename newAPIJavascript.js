function trackGetRequest(url) {
  $.getJSON(url, function(response) {
    console.log(response.results);

    for (let i = 0; i < response.results.length; i++) {
      console.log(i);
      document.getElementById("render").innerHTML += `<div class="card">
    <img id="artwork${i}" />
    <div>
      <p id="trackName${i}"></p>
      <p id="artistName${i}"></p>
      <p id="releaseDate${i}"></p>
      <p id="genre${i}"></p>
    </div>
  </div>`;
      document.getElementById(
        `trackName${i}`
      ).innerHTML = `${response.results[i].trackName}`;
      document.getElementById(
        `artistName${i}`
      ).innerHTML = `${response.results[i].artistName}`;
      document.getElementById(
        `releaseDate${i}`
      ).innerHTML = `${response.results[i].releaseDate}`.slice(0, 10);
      document.getElementById(
        `genre${i}`
      ).innerHTML = `${response.results[i].primaryGenreName}`;
      document.getElementById(
        `artwork${i}`
      ).src = `${response.results[i].artworkUrl100}`;
    }
  });
}
function createUrl() {
  let userInput = document.getElementById("artistSearch").value;
  let url = "https://itunes.apple.com/search?term=";
  let album = "&entity=album&limit=5";
  let limit = "&entity=musicTrack&limit=25";
  if (userInput.includes(" ")) {
    userInput = userInput.split(" ").join("+");
  }
  let getUrl = url + userInput + limit;
  let getAlbum = url + userInput + album;
  document.getElementById("render").innerHTML = "";
  document.getElementById("render-album").innerHTML = "";

  trackGetRequest(getUrl);
  albumGetRequest(getAlbum);
}
function albumGetRequest(url) {
  $.getJSON(url, function(response) {
    console.log(url);

    for (let i = 0; i < response.results.length; i++) {
      document.getElementById("render-album").innerHTML += `<div class="card">
    <img id="artwork-album${i}" />
    <div>
      <p id="collectionName${i}"></p>
      <p id="artistName-album${i}"></p>
      <p class="foass">Release Date:</p>
      <p id="releaseDate-album${i}" class="releaseDate"></p>
    </div>
  </div>`;
      document.getElementById(
        `collectionName${i}`
      ).innerHTML = `${response.results[i].collectionName}`;
      document.getElementById(
        `artistName-album${i}`
      ).innerHTML = `${response.results[i].artistName}`;
      document.getElementById(
        `releaseDate-album${i}`
      ).innerHTML = `${response.results[i].releaseDate}`.slice(0, 10);
      document.getElementById(
        `artwork-album${i}`
      ).src = `${response.results[i].artworkUrl100}`;
    }
  });
}
//(https://itunes.apple.com/lookup?id=909253&entity=album&limit=5)"

//https://itunes.apple.com/search?term=jack+johnson&limit=25'
//for (let i = 0; i < response.results.length; i++) {
//   document.getElementById(
//     "trackName"
//   ).innerHTML = `${response.results[i].trackName}`;
//   document.getElementById(
//     "artistName"
//   ).innerHTML = `${response.results[i].artistName}`;
//   document.getElementById(
//     "releaseDate"
//   ).innerHTML = `${response.results[i].releaseDate}`.slice(0, 10);
//   document.getElementById(
//     "genre"
//   ).innerHTML = `${response.results[i].primaryGenreName}`;
//   document.getElementById(
//     "artwork"
//   ).src = `${response.results[i].artworkUrl100}`;
//}
/* <div class="card">
        <img id="artwork" />
        <div>
          <p id="trackName"></p>
          <p id="artistName"></p>
          <p id="releaseDate"></p>
          <p id="genre"></p>
        </div>
      </div> */
// for (let i = 2; i < 6; i++) {
//   document.getElementById(
//     "trackName" + i
//   ).innerHTML = `${response.results[n].trackName}`;
//   document.getElementById(
//     "artistName" + i
//   ).innerHTML = `${response.results[n].artistName}`;
//   document.getElementById(
//     "releaseDate" + i
//   ).innerHTML = `${response.results[n].releaseDate}`.slice(0, 10);
//   document.getElementById(
//     "genre" + i
//   ).innerHTML = `${response.results[n].primaryGenreName}`;
//   document.getElementById(
//     "artwork" + i
//   ).src = `${response.results[n].artworkUrl100}`;
// }
