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
/* const mark1 = document.getElementById("mark1");
const autore = mark1.textContent;
console.log(autore); */

/* collegamento con  la pagina */
/* const card = document.getElementById("card");
card.addEventListener("click", () => {
  window.location.assign("./artist.html?autoreId=" + autore);
});

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${autore}`)
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
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });

{ */
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
/*  }  */

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=oasis")
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

    const artist = list.data[0].artist;

    const artistGrid = document.getElementById("artistGrid");

    const col = document.createElement("div");
    const artistcard = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    col.classList.add("col");
    artistcard.classList.add("card", "border-0");
    cardImg.classList.add(
      "card-img-top",
      "img-fluid",
      "img-thumbnail",
      "border",
      "border-5",
      "border-dark",
      "rounded-4",
      "mx-auto"
    );
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("text-muted");

    cardImg.src = artist.picture;
    cardTitle.textContent = artist.name;

    artistGrid.appendChild(col);
    col.appendChild(artistcard);
    artistcard.append(cardImg, cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=caribou")
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

    const artist = list.data[0].artist;

    const artistGrid = document.getElementById("artistGrid");

    const col = document.createElement("div");
    const artistcard = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    col.classList.add("col");
    artistcard.classList.add("card", "border-0");
    cardImg.classList.add(
      "card-img-top",
      "img-fluid",
      "img-thumbnail",
      "border",
      "border-5",
      "border-dark",
      "rounded-4",
      "mx-auto"
    );
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("text-muted");

    cardImg.src = artist.picture;
    cardTitle.textContent = artist.name;

    artistGrid.appendChild(col);
    col.appendChild(artistcard);
    artistcard.append(cardImg, cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=m83")
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

    const artist = list.data[0].artist;

    const artistGrid = document.getElementById("artistGrid");

    const col = document.createElement("div");
    const artistcard = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    col.classList.add("col");
    artistcard.classList.add("card", "border-0");
    cardImg.classList.add(
      "card-img-top",
      "img-fluid",
      "img-thumbnail",
      "border",
      "border-5",
      "border-dark",
      "rounded-4",
      "mx-auto"
    );
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("text-muted");

    cardImg.src = artist.picture;
    cardTitle.textContent = artist.name;

    artistGrid.appendChild(col);
    col.appendChild(artistcard);
    artistcard.append(cardImg, cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=mythandroid")
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

    const artist = list.data[0].artist;

    const artistGrid = document.getElementById("artistGrid");

    const col = document.createElement("div");
    const artistcard = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    col.classList.add("col");
    artistcard.classList.add("card", "border-0");
    cardImg.classList.add(
      "card-img-top",
      "img-fluid",
      "img-thumbnail",
      "border",
      "border-5",
      "border-dark",
      "rounded-4",
      "mx-auto"
    );
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("text-muted");

    cardImg.src = artist.picture;
    cardTitle.textContent = artist.name;

    artistGrid.appendChild(col);
    col.appendChild(artistcard);
    artistcard.append(cardImg, cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
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

    const artist = list.data[0].artist;

    const artistGrid = document.getElementById("artistGrid");

    const col = document.createElement("div");
    const artistcard = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    col.classList.add("col");
    artistcard.classList.add("card", "border-0");
    cardImg.classList.add(
      "card-img-top",
      "img-fluid",
      "img-thumbnail",
      "border",
      "border-5",
      "border-dark",
      "rounded-4",
      "mx-auto"
    );
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("text-muted");

    cardImg.src = artist.picture;
    cardTitle.textContent = artist.name;

    artistGrid.appendChild(col);
    col.appendChild(artistcard);
    artistcard.append(cardImg, cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });
