const params = new URLSearchParams(window.location.search);
const autoreId = params.get("autoreId");

if (autoreId) {
  console.log("Autore:", autoreId);
} else {
  console.error("Parametro 'autoreId' non trovato nell'URL.");
}

// aside open e close
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

const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + autoreId;

fetch(URL)
  .then((response) => {
    console.log(response);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("caricamento della pagina");
    }
  })
  .then((album) => {
    console.log(album);

    const sectionAlbum = document.getElementById("sectionAlbum");
    const nameArtist = document.getElementById("nameArtist");

    nameArtist.textContent = autoreId;
    const ascoltatoriMensili = document.getElementById("ascoltatoriMensili");
    ascoltatoriMensili.textContent = `3985760 ascoltatori mensili`;

    album.data.forEach((listAlbum) => {
      // console.log(listAlbum.album.cover);
      const divAlbum = document.createElement("div");
      const divPAlbum = document.createElement("div");
      const divPAsc = document.createElement("div");
      const divPTime = document.createElement("div");
      const divImage = document.createElement("div");
      const pAlbum = document.createElement("p");
      const pAsc = document.createElement("p");
      const pTime = document.createElement("p");
      const albumImage = document.createElement("img");

      divPAlbum.classList.add("col-3");
      divPAsc.classList.add("col-3");
      divPTime.classList.add("col-3");
      divImage.classList.add("col-1");

      pAlbum.classList.add("text-light");
      pTime.classList.add("text-light");
      pAsc.classList.add("text-light");
      divAlbum.classList.add("row");
      albumImage.classList.add("mx-2");
      albumImage.style = "width:40px";

      pAlbum.textContent = listAlbum.album.title;
      pAsc.textContent = listAlbum.rank;
      pTime.textContent = listAlbum.duration;
      albumImage.src = listAlbum.album.cover;

      divImage.appendChild(albumImage);
      divPAlbum.appendChild(pAlbum);
      divPAsc.appendChild(pAsc);
      divPTime.appendChild(pTime);
      divAlbum.append(divImage, divPAlbum, divPAsc, divPTime);
      sectionAlbum.appendChild(divAlbum);

      divAlbum.addEventListener("click", () => {
        const idArtist = listAlbum.artist.id;
        window.location.href = `AlbumPage.html?artistId=${idArtist}`;
      });
    });
    // list.data.forEach(album => {
    //   console.log(album.album.title)
    //   const divAlbum=document.createElement("div");
    //   const pAlbum=document.createElement("p");
    //   const pAsc=document.createElement("p");
    //   const pTime=document.createElement("p");

    //   // pAlbum.textContent=

    // });

    //  <div class="d-flex justify-content-between">
    //   <p>1 <img src="./assets/imgs/main/image-1.jpg" alt="img" width="50px" /> titolo</p>
    //   <p>ascolti</p>
    //   <p>time</p>
    // </div>

    // list.data.forEach((track, index) => {
    //   const albumCover = document.getElementById("albumCover");
    //   albumCover.style.backgroundColor = track.album.md5_image;

    /*    
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
 */
    // collegare il bottone al preview, rendere dinamico il botton con play e pausa , controllare artist
    /*   }); */
    // });
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
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

// button following :

const followButton = document.getElementById("buttonFollow");

followButton.addEventListener("click", () => {
  const artistName = document.getElementById("nameArtist").textContent;
  const artistImage = document.querySelector("#sectionAlbum img").src; // Prende l'immagine

  let savedArtists = JSON.parse(localStorage.getItem("savedArtists")) || [];

  if (!savedArtists.some((artist) => artist.name === artistName)) {
    savedArtists.push({ name: artistName, image: artistImage });
    localStorage.setItem("savedArtists", JSON.stringify(savedArtists));
  }
  followButton.textContent = "Aggiunto a preferiti";
});
