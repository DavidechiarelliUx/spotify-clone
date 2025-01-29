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

