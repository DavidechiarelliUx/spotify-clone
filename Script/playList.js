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

  //Variabile per math random
  let artistFotoIndex;
  //Creazione funzione per foto dinamica dell'album
  const playListFoto = document.getElementById("playListFoto");
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
      })
      .catch((error) => {
        console.error("errore nel caricamento della list", error);
      });
  }

  //Variabile per l'indice randomizzato
  let artistID;
  //Funzione per creare random playlist
  const divRow = document.getElementById("trackList");
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

        const anchorTrack = document.createElement("a");

        const divNum = document.createElement("div");
        divNum.classList.add("col-1", "d-flex", "align-items-center");
        artistContainer.appendChild(divNum);

        const pNum = document.createElement("p");
        divNum.appendChild(pNum);

        const divTitle = document.createElement("div");
        divTitle.classList.add("col-3");
        artistContainer.appendChild(divTitle);
        divTitle.appendChild(anchorTrack);

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

            const imageCover = document.createElement("img");
            imageCover.classList.add("mb-3", "ms-2", "img-fluid");
            imageCover.style.maxWidth = "30px";
            imageCover.src = songList.data[0].album.cover;
            divNum.appendChild(imageCover);

            const artist = document.createElement("p");
            artist.classList.add("text-secondary");
            artist.textContent = artistList.name;
            let artistName = artistList.name;
            console.log(artistName);
            anchorTrack.appendChild(artist);

            const divRipr = document.createElement("div");
            divRipr.classList.add("col-3", "offset-2");
            artistContainer.appendChild(divRipr);

            const pRipr = document.createElement("p");
            pRipr.classList.add("text-secondary");
            pRipr.textContent = songList.data[0].rank;
            divRipr.appendChild(pRipr);

            const divMin = document.createElement("div");
            divMin.classList.add("col-3", "d-flex", "justify-content-center");
            artistContainer.appendChild(divMin);

            const pMin = document.createElement("p");
            pMin.classList.add("text-secondary");
            pMin.textContent = durationConvert(songList.data[0].duration);
            divMin.appendChild(pMin);

            divRow.appendChild(artistContainer);

            pNum.innerHTML = divRow.children.length;

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

            //Funzione per passare alla pagina dell'artista
            artist.addEventListener("click", () => {
              localStorage.setItem("bandName", artistName);
              window.location.assign(`./artistProva.html?id=${artistList.id}`);
            });

            //Funzione per il player
            anchorTrack.addEventListener("click", (e) => {
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
