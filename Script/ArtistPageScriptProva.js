const params = new URLSearchParams(window.location.search);
const autoreId = params.get("id");
console.log(autoreId);
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzc3MTE4NjcsImV4cCI6MTczODkyMTQ2N30.OwPnHMmsZmgoEr48ZzpNHEt6n2qkKnAU1MpqhlcpRNY";

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

const URL = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + autoreId + "/albums";

const artistName = localStorage.getItem("bandName");
console.log(artistName);

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

    nameArtist.innerHTML = artistName;
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

      divPAlbum.classList.add("col-5");
      divPAsc.classList.add("col-3");
      divPTime.classList.add("col-3");
      divImage.classList.add("col-1");

      pAlbum.classList.add("text-light");
      pTime.classList.add("text-light");
      pAsc.classList.add("text-light");
      divAlbum.classList.add("row", "p-2");
      albumImage.classList.add("mx-2");
      albumImage.style = "width:40px";

      pAlbum.textContent = listAlbum.title;
      pAsc.textContent = listAlbum.fans;
      pTime.textContent = listAlbum.release_date;
      albumImage.src = listAlbum.cover;

      divImage.appendChild(albumImage);
      divPAlbum.appendChild(pAlbum);
      divPAsc.appendChild(pAsc);
      divPTime.appendChild(pTime);
      divAlbum.append(divImage, divPAlbum, divPAsc, divPTime);
      sectionAlbum.appendChild(divAlbum);

      divAlbum.addEventListener("click", () => {
        const trackListUrl = listAlbum.album.tracklist;
        const albumId = listAlbum.album.id;
        console.log(albumId);
        window.location.href = `../AlbumPageProva.html?tracklist=${trackListUrl}&albumId=${albumId}`;
      });
    });
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });

const homePage = document.getElementById("homePage");
homePage.addEventListener("click", () => {
  window.location.href = "../index.html";
});
