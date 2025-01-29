//const playList1 = document.getElementById("playList1");
const URL = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

window.addEventListener("DOMContentLoaded", () => {
  let artistID;
  const divRow = document.getElementById("track-list");
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
        artistContainer.classList.add("row");

        const anchorTrack = document.createElement("a");

        const divNum = document.createElement("div");
        divNum.classList.add("col-1");
        artistContainer.appendChild(divNum);

        const pNum = document.createElement("p");
        divNum.appendChild(pNum);

        const divTitle = document.createElement("div");
        divTitle.classList.add("col-3");
        artistContainer.appendChild(divTitle);
        divTitle.appendChild(anchorTrack);

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

            const titleTrack = document.createElement("p");
            titleTrack.textContent = songList.data[0].title_short;
            titleTrack.classList.add("mb-0");
            anchorTrack.appendChild(titleTrack);

            const artist = document.createElement("p");
            artist.classList.add("text-secondary");
            artist.textContent = artistList.name;
            anchorTrack.appendChild(artist);

            const divRipr = document.createElement("div");
            divRipr.classList.add("col-3", "offset-2");
            artistContainer.appendChild(divRipr);

            const pRipr = document.createElement("p");
            pRipr.classList.add("text-secondary");
            pRipr.textContent = songList.data[0].rank;
            divRipr.appendChild(pRipr);

            const divMin = document.createElement("div");
            divMin.classList.add("col-3", "d-flex", "justify-content-end");
            artistContainer.appendChild(divMin);

            const pMin = document.createElement("p");
            pMin.classList.add("text-secondary");
            pMin.textContent = durationConvert(songList.data[0].duration);
            divMin.appendChild(pMin);

            function durationConvert(seconds) {
              const minutes = Math.floor(seconds / 60);
              const remainingSeconds = seconds % 60;
              return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
            }

            divRow.appendChild(artistContainer);

            pNum.innerHTML = divRow.children.length;

            anchorTrack.addEventListener("click", (e) => {
              const riproduction = document.getElementById("riproduction");

              const nomeAuthor = document.getElementById("nameAuthor");
              const nomeBrano = document.getElementById("nameBrano");
              const imageAuthor = document.getElementById("imageAuthor");

              nomeAuthor.textContent = artistList.name;
              nomeBrano.textContent = songList.data[0].title_short;
              imageAuthor.src = songList.data[0].album.cover;
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
