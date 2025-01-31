//const playList1 = document.getElementById("playList1");
const URL = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

//inizializzazione contatore durata
let duration = 0;

//inizializzazione funzione on load
window.addEventListener("DOMContentLoaded", () => {
  const listTitle = document.getElementById("playListTitle");
  const listTitleSmall = document.getElementById("playListTitleSmall");
  //Titolo dinamico
  const playListTitle = localStorage.getItem("playListTitle");
  listTitle.innerText = playListTitle;
  listTitleSmall.innerText = playListTitle;

  const personalList = localStorage.getItem("content");
  listTitle.innerText = personalList;
  listTitleSmall.innerText = personalList;

  //Variabile per math random
  let artistFotoIndex;
  //Creazione funzione per foto dinamica dell'album
  const playListFoto = document.getElementById("playListFoto");
  const playListFotoSmall = document.getElementById("playListFotoSmall");
  for (let i = 0; i < 4; i++) {
    artistFotoIndex = Math.floor(Math.random() * 200);
    console.log(artistFotoIndex);

    fetch(URL + artistFotoIndex)
      .then((response) => {
        console.log(response);

        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Fetch non andato a buon fine");
        }
      })
      .then((artista) => {
        console.log(artista);

        const imgContainer = document.createElement("img");
        imgContainer.classList.add("img-fluid", "px-0");
        imgContainer.src = artista.picture;
        playListFoto.appendChild(imgContainer);

        const imgContainer1 = document.createElement("img");
        imgContainer1.classList.add("img-fluid", "px-0");
        imgContainer1.src = artista.picture;
        playListFotoSmall.appendChild(imgContainer1);
      })
      .catch((error) => {
        console.error("errore nel caricamento della list", error);
      });
  }

  //Variabile per l'indice randomizzato
  let artistID;
  //Funzione per creare random playlist
  const divRow = document.getElementById("trackList");
  const divRow1 = document.getElementById("trackList1");
  for (let i = 0; i < 10; i++) {
    artistID = Math.floor(Math.random() * 200);
    console.log(artistID);

    fetch(URL + artistID)
      .then((response) => {
        console.log(response);

        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Fetch non andato a buon fine");
        }
      })
      .then((artistList) => {
        console.log(artistList);

        const artistContainer = document.createElement("div");
        artistContainer.classList.add("row", "ms-4");

        const artistContainer1 = document.createElement("div");
        artistContainer1.classList.add("row", "ms-4");

        const anchorTrack = document.createElement("a");

        const anchorTrack1 = document.createElement("a");

        const divNum = document.createElement("div");
        divNum.classList.add("col-1", "d-flex", "align-items-center");
        artistContainer.appendChild(divNum);

        const divNum1 = document.createElement("div");
        divNum1.classList.add("col-1", "d-flex", "align-items-center");
        artistContainer1.appendChild(divNum1);

        const pNum = document.createElement("p");
        divNum.appendChild(pNum);

        const pNum1 = document.createElement("p");
        divNum1.appendChild(pNum1);

        const divTitle = document.createElement("div");
        divTitle.classList.add("col-3");
        artistContainer.appendChild(divTitle);
        divTitle.appendChild(anchorTrack);

        const divTitle1 = document.createElement("div");
        divTitle1.classList.add("col-3");
        artistContainer1.appendChild(divTitle1);
        divTitle1.appendChild(anchorTrack1);

        //fetch informazioni canzoni dell'artista
        fetch(artistList.tracklist)
          .then((response) => {
            console.log(response);

            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Fetch non andato a buon fine");
            }
          })
          .then((songList) => {
            console.log(songList.data);
            //songList.data.forEach((track, index) => {
            //  console.log(track);
            //});

            //costruzione brani
            const titleTrack = document.createElement("p");
            titleTrack.textContent = songList.data[0].title_short ? songList.data[0].title_short : songList.data[0].title;
            titleTrack.classList.add("mb-0");
            anchorTrack.appendChild(titleTrack);

            const titleTrack1 = document.createElement("p");
            titleTrack1.textContent = songList.data[0].title_short ? songList.data[0].title_short : songList.data[0].title;
            titleTrack1.classList.add("mb-0");
            anchorTrack1.appendChild(titleTrack1);

            const imageCover = document.createElement("img");
            imageCover.classList.add("mb-3", "ms-2", "img-fluid");
            imageCover.style.maxWidth = "30px";
            imageCover.src = songList.data[0].album.cover;
            divNum.appendChild(imageCover);

            const imageCover1 = document.createElement("img");
            imageCover1.classList.add("mb-3", "ms-2", "img-fluid");
            imageCover1.style.maxWidth = "30px";
            imageCover1.src = songList.data[0].album.cover;
            divNum1.appendChild(imageCover1);

            const artist = document.createElement("p");
            artist.classList.add("text-secondary");
            artist.textContent = artistList.name;
            let artistName = artistList.name;
            console.log(artistName);
            anchorTrack.appendChild(artist);

            const artist1 = document.createElement("p");
            artist1.classList.add("text-secondary");
            artist1.textContent = artistList.name;
            let artistName1 = artistList.name;
            console.log(artistName1);
            anchorTrack1.appendChild(artist1);

            const divRipr = document.createElement("div");
            divRipr.classList.add("col-3", "offset-2");
            artistContainer.appendChild(divRipr);

            const divRipr1 = document.createElement("div");
            divRipr1.classList.add("col-3", "offset-2");
            artistContainer1.appendChild(divRipr1);

            const pRipr = document.createElement("p");
            pRipr.classList.add("text-secondary");
            pRipr.textContent = songList.data[0].rank;
            divRipr.appendChild(pRipr);

            const pRipr1 = document.createElement("p");
            pRipr1.classList.add("text-secondary");
            pRipr1.textContent = songList.data[0].rank;
            divRipr1.appendChild(pRipr1);

            const divMin = document.createElement("div");
            divMin.classList.add("col-3", "d-flex", "justify-content-center");
            artistContainer.appendChild(divMin);

            const divMin1 = document.createElement("div");
            divMin1.classList.add("col-3", "d-flex", "justify-content-center");
            artistContainer1.appendChild(divMin1);

            const pMin = document.createElement("p");
            pMin.classList.add("text-secondary");
            pMin.textContent = durationConvert(songList.data[0].duration);
            divMin.appendChild(pMin);

            const pMin1 = document.createElement("p");
            pMin1.classList.add("text-secondary");
            pMin1.textContent = durationConvert(songList.data[0].duration);
            divMin1.appendChild(pMin1);

            divRow.appendChild(artistContainer);
            divRow1.appendChild(artistContainer1);

            pNum.innerHTML = divRow.children.length;
            pNum1.innerHTML = divRow1.children.length;

            //Titolo, numero canzoni, durata dinamici
            const totSongNum = document.getElementById("totSongNum");
            const totSongNumSmall = document.getElementById("totSongNumSmall");

            totSongNum.innerHTML = divRow.children.length + " songs" + " • ";
            totSongNumSmall.innerHTML = divRow.children.length + " songs" + " • ";

            duration += songList.data[0].duration;

            const totDuration = document.getElementById("totDuration");
            totDuration.innerHTML = "about " + durationConvert(duration) + " minutes";

            const totDurationSmall = document.getElementById("totDurationSmall");
            totDurationSmall.innerHTML = "about " + durationConvert(duration) + " minutes";

            /**Funzione per passare alla pagina dell'artista
            artist.addEventListener("click", () => {
              localStorage.setItem("bandName", artistName);
              window.location.assign(`./artistProva.html?id=${artistList.id}`);
            });**/

            artist.addEventListener("click", () => {
              console.log(artistName);
              window.location.href = `./artist.html?autoreId=${artistName}`;
            });

            //Funzione per il player
            artistContainer.addEventListener("click", (e) => {
              // const riproduction = document.getElementById("riproduction");
              const audioPlayer = document.getElementById("audioPlayer");
              const nomeAuthor = document.getElementById("nameAuthor");
              const nomeBrano = document.getElementById("nameBrano");
              const nomeBrano1 = document.getElementById("nameBrano1");
              const imageAuthor = document.getElementById("imageAuthor");
              const trackSong = songList.data[0].preview;

              nomeAuthor.textContent = artistList.name;
              nomeBrano.textContent = songList.data[0].title_short;
              nomeBrano1.textContent = songList.data[0].title_short;
              imageAuthor.src = songList.data[0].album.cover;

              if (trackSong) {
                audioPlayer.src = trackSong;
                audioPlayer.play();
              } else {
                console.log("No preview available for this track.");
              }
            });

            //Funzione per il player
            artistContainer1.addEventListener("click", (e) => {
              // const riproduction = document.getElementById("riproduction");
              const audioPlayer = document.getElementById("audioPlayer");
              const nomeAuthor = document.getElementById("nameAuthor");
              const nomeBrano = document.getElementById("nameBrano");
              const nomeBrano1 = document.getElementById("nameBrano1");
              const imageAuthor = document.getElementById("imageAuthor");
              const trackSong = songList.data[0].preview;

              nomeAuthor.textContent = artistList.name;
              nomeBrano.textContent = songList.data[0].title_short;
              nomeBrano1.textContent = songList.data[0].title_short;
              imageAuthor.src = songList.data[0].album.cover;

              if (trackSong) {
                audioPlayer.src = trackSong;
                audioPlayer.play();
              } else {
                console.log("No preview available for this track.");
              }
            });
          })
          .catch((error) => {
            console.error("errore nel caricamento della list", error);
          });
      })

      .catch((error) => {
        console.error("errore nel caricamento della list", error);
      });
  }
});

const playButton = document.getElementById("playButton");
playButton.addEventListener("click", (track) => {
  playPause(track);
});

const playButton1 = document.getElementById("playButton1");
playButton1.addEventListener("click", (track) => {
  playPause(track);
});

function playPause(track) {
  if (track !== null) {
    audioPlayer.pause();
  } else {
    audioPlayer.play();
  }
}

//Funzione per convertire la durata
function durationConvert(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

//F
const personalList = document.getElementById("personalList");
personalList.addEventListener("click", (event) => {
  let content = event.target.textContent;
  localStorage.setItem("content", content);
  window.location.href = "playList.html";
});
