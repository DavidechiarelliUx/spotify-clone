const params = new URLSearchParams(window.location.search);
const id = params.get("artistId");

const URLtracklist = `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`;


let currentAudio = null;
let currentTrackRow = null;

fetch(URLtracklist)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore nel recupero della tracklist");
    }
  })
  .then((songList) => {

    const divRow = document.getElementById("trackList");
    const nameAlbum = document.getElementById("nameAlbum");
    const nameAlbum2 = document.getElementById("nameAlbum2");
    const nameArtist=document.getElementById("nameArtist");
    const nameArtist2=document.getElementById("nameArtist2");
    const rankAlbum = document.getElementById("rankAlbum");
    const imageCoverAlbum= document.getElementById("imageCoverAlbum");
    const imageCoverAlbum2= document.getElementById("imageCoverAlbum2");

    
    nameAlbum.textContent=songList.data[0].album.title;
    nameAlbum2.textContent=songList.data[0].album.title;
    nameArtist.textContent = songList.data[0].artist.name;
    nameArtist2.textContent = songList.data[0].artist.name;
    imageCoverAlbum.src = songList.data[0].album.cover;
    imageCoverAlbum2.src = songList.data[0].album.cover;
    rankAlbum.textContent = `rank album : ${songList.data[0].rank}`;

    


    console.log(songList);
    songList.data.forEach((track, index) => {
      console.log(track);
      const divTrackRow = document.createElement("div");
      divTrackRow.classList.add("row", "track-row");
      divTrackRow.setAttribute("data-index", index);

      const divNum = document.createElement("div");
      const pNum = document.createElement("p");
      const divTitle = document.createElement("div");
      const anchor = document.createElement("a");
      const pTitle = document.createElement("p");
      const pArtist = document.createElement("p");
      const divRipr = document.createElement("div");
      const pRipr = document.createElement("p");
      const divMin = document.createElement("div");
      const pMin = document.createElement("p");
      const imageCover = document.createElement("img");

      divNum.classList.add("col-1", "d-flex", "align-items-center");
      divTitle.classList.add("col-3");
      pTitle.classList.add("mb-0");
      pArtist.classList.add("text-secondary");
      divRipr.classList.add("col-3", "offset-1");
      pRipr.classList.add("text-secondary");
      divMin.classList.add("col-3", "d-flex", "justify-content-end");
      pMin.classList.add("text-secondary");
      imageCover.classList.add("mb-3", "ms-2", "img-fluid");
      imageCover.style.maxWidth = "30px";

      pNum.textContent = index + 1;
      pTitle.textContent = track.title;
      pArtist.textContent = track.artist.name;
      pRipr.textContent = track.rank;
      pMin.textContent = formatDuration(track.duration);
      imageCover.src = track.album.cover;

      divNum.appendChild(pNum);
      divNum.appendChild(imageCover);
      anchor.appendChild(pTitle);
      anchor.appendChild(pArtist);
      divTitle.appendChild(anchor);
      divRipr.appendChild(pRipr);
      divMin.appendChild(pMin);
      divTrackRow.appendChild(divNum);
      divTrackRow.appendChild(divTitle);
      divTrackRow.appendChild(divRipr);
      divTrackRow.appendChild(divMin);

      divRow.appendChild(divTrackRow);
    });

    document.getElementById("trackList").addEventListener("click", (event) => {
      let trackRow = event.target.closest(".track-row");
      if (!trackRow) return;

      let trackIndex = trackRow.getAttribute("data-index");
      let track = songList.data[trackIndex];

      playTrack(track, trackRow);
    });
  })
  .catch((error) => {
    console.error("Errore nel caricamento della tracklist:", error);
  });

function playTrack(track, trackRow) {
  if (currentAudio !== null) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (currentAudio !== null && currentAudio.src === track.preview && !currentAudio.paused) {
    currentAudio.pause();
    return;
  }

  currentAudio = new Audio(track.preview);
  currentAudio.play();

  if (currentTrackRow !== null) {
    currentTrackRow.classList.remove("playing");
  }

  currentTrackRow = trackRow;
  currentTrackRow.classList.add("playing");
}

pause.addEventListener("click", () => {
  if (currentAudio !== null) {
    if (!currentAudio.paused) {
      currentAudio.pause();
    } else {
      currentAudio.play();
    }
  }
});

function formatDuration(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

// const divRow = document.getElementById("track-list");
// list.data.forEach((track, index) => {
//   console.log(track);

//   const albumCover = document.getElementById("albumCover");
//   albumCover.style.backgroundColor = track.album.md5_image;

//   const anchorTrack = document.createElement("a");
//   const divNum = document.createElement("div");
//   const pNum = document.createElement("p");
//   const divTitle = document.createElement("div");
//   const titleTrack = document.createElement("p");
//   const artist = document.createElement("p");
//   const divRipr = document.createElement("div");
//   const pRipr = document.createElement("p");
//   const divMin = document.createElement("div");
//   const pMin = document.createElement("p");

//   divNum.classList.add("col-1");
//   divTitle.classList.add("col-3");
//   artist.classList.add("text-secondary");
//   divRipr.classList.add("col-3", "offset-2");
//   pRipr.classList.add("text-secondary");
//   divMin.classList.add("col-3", "d-flex", "justify-content-end");
//   pMin.classList.add("text-secondary");

//   pNum.textContent = index + 1;
//   titleTrack.textContent = track.title;
//   artist.textContent = track.artist.name;
//   pRipr.textContent = track.rank;
//   pMin.textContent = track.duration % 60;

//   divTitle.appendChild(anchorTrack);
//   anchorTrack.appendChild(titleTrack, artist);
//   divRow.append(divNum, divTitle, divRipr, divMin);
//   divNum.appendChild(pNum);
//   // divTitle.append(titleTrack, artist);
//   divRipr.appendChild(pRipr);
//   divMin.appendChild(pMin);

//   anchorTrack.addEventListener("click", (e) => {
//     console.log("ciao");
//     const riproduction = document.getElementById("riproduction");

//     const nomeAuthor = document.getElementById("nameAuthor");
//     const nomeBrano = document.getElementById("nameBrano");
//     const imageAuthor = document.getElementById("imageAuthor");

//     nomeAuthor.textContent = track.artist.name;
//     nomeBrano.textContent = track.title;
//     imageAuthor.src = track.album.cover;

// collegare il bottone al preview, rendere dinamico il botton con play e pausa , controllare artist
// });
// });
// })
// .catch((error) => {
//   console.error("errore nel caricamento della list", error);
// });
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

const buttonSearch = document.getElementById("buttonSearch");

const search = document.getElementById("inputSearch");

function cercaArtista() {
  const artistName = search.value;
  if (artistName) {
    window.location.href = `./artist.html?autoreId=${artistName}`;
  } else {
    console.log("non è stato inserito un nome");
  }
}

buttonSearch.addEventListener("click", () => {
  cercaArtista();
});



