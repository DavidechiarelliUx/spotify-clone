const closeBtn = document.getElementById("close-btn");
const aside2 = document.getElementById("aside2");
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  aside2.style = "display:none";
});

const openAside = document.getElementById("openAside");

openAside.addEventListener("click", (e) => {
  e.preventDefault();

  aside2.style = "display:block";
});

console.log("ciao");

const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

fetch(URL)
  .then((response) => {
    console.log(response);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("caricamento della pagina");
    }
  })
  .then((list) => {
    console.log(list);

    const divRow = document.getElementById("track-list");
    list.data.forEach((track, index) => {
      console.log(track);

      const albumCover = document.getElementById("albumCover");
      albumCover.style.backgroundColor = track.album.md5_image;

      const anchorTrack = document.createElement("a");
      const divNum = document.createElement("div");
      const pNum = document.createElement("p");
      const divTitle = document.createElement("div");
      const titleTrack = document.createElement("p");
      const artist = document.createElement("p");
      const divRipr = document.createElement("div");
      const pRipr = document.createElement("p");
      const divMin = document.createElement("div");
      const pMin = document.createElement("p");

      divNum.classList.add("col-1");
      divTitle.classList.add("col-3");
      artist.classList.add("text-secondary");
      divRipr.classList.add("col-3", "offset-2");
      pRipr.classList.add("text-secondary");
      divMin.classList.add("col-3", "d-flex", "justify-content-end");
      pMin.classList.add("text-secondary");

      pNum.textContent = index + 1;
      titleTrack.textContent = track.title;
      artist.textContent = track.artist.name;
      pRipr.textContent = track.rank;
      pMin.textContent = track.duration % 60;

      divTitle.appendChild(anchorTrack);
      anchorTrack.appendChild(titleTrack, artist);
      divRow.append(divNum, divTitle, divRipr, divMin);
      divNum.appendChild(pNum);
      // divTitle.append(titleTrack, artist);
      divRipr.appendChild(pRipr);
      divMin.appendChild(pMin);

      anchorTrack.addEventListener("click", (e) => {
        console.log("ciao");
        const riproduction = document.getElementById("riproduction");

        const nomeAuthor = document.getElementById("nameAuthor");
        const nomeBrano = document.getElementById("nameBrano");
        const imageAuthor = document.getElementById("imageAuthor");

        nomeAuthor.textContent = track.artist.name;
        nomeBrano.textContent = track.title;
        imageAuthor.src = track.album.cover;

        // collegare il bottone al preview, rendere dinamico il botton con play e pausa , controllare artist
      });
    });
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });
// <div class="col-1">
//                     <p>1</p>
//                 </div>
//                 <div class="col-1">
//                   <h5>titolo</h5>
//                   <p class="text-secondary">Artista</p>
//                 </div>
//                 <div class="col-3 offset-4">
//                     <p class="text-secondary">48384</p>
//                 </div>
//                  <div class="col-3 d-flex justify-content-end">
//                     <p class="text-secondary">minuti</p>
//                 </div>
