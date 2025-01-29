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
/* collegamento con la card */
// const mark1 = document.getElementById("mark1");
// const autore = mark1.textContent;
// console.log(autore);

/* collegamento con  la pagina */
// const card = document.getElementById("card");
// card.addEventListener("click", () => {
//   window.location.assign("./artist.html?autoreId=" + autore);
// });

// fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${autore}`)
//   .then((response) => {
//     console.log(response);

//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("caricamento della pagina");
//     }
//   })
//   .then((list) => {
//     console.log(list);
//   })
//   .catch((error) => {
//     console.error("errore nel caricamento della list", error);
//   });

// {
  /* <div class="col">
<div class="card border-0">
  <div>
    <img
      src="assets/imgs/search/image-49.jpg"
      class="card-img-top img-fluid img-thumbnail border border-5 border-dark rounded-4 mx-auto"
      style="object-fit: cover"
      alt="album"
    />
  </div>
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">RapCaviar</h5>
    <p class="text-muted">Didascalia dell'album</p>
  </div>
</div>
</div> */
// }
