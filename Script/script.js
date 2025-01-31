//Bottone attività amici
const closeBtn = document.getElementById("close-btn");
const aside2 = document.getElementById("aside2");
closeBtn.addEventListener("click", (e) => {
  aside2.style = "display:none";
});

const openAside = document.getElementById("openAside");

openAside.addEventListener("click", (e) => {
  aside2.style = "display:block";
});

//Bottone visualizza tutto

const visualizzabtn = document.getElementById("visualizza-btn");
const visualizzaTutto = document.getElementById("visualizzaTutto");

visualizzabtn.addEventListener("click", () => {
  if (visualizzaTutto.style.display === "none" || visualizzaTutto.style.display === "") {
    visualizzaTutto.style.display = "block";
  } else {
    visualizzaTutto.style.display = "none";
  }
});
//OASIS
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
    const album = list.data[1].album;
    const index = list.data[0].artist.id;
    console.log(index);

    const artistGrid = document.getElementById("artistGrid");

    const col = document.createElement("div");
    const artistcard = document.createElement("div");

    const divImg = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    col.classList.add("col");
    artistcard.classList.add("card", "border-0");
    divImg.classList.add("m-2");
    cardImg.classList.add("card-img-top", "img-fluid", "img-thumbnail", "border-0", "rounded-3", "mx-auto", "p-0");
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("text-muted");

    artistcard.style.backgroundColor = "#171717";
    cardImg.src = artist.picture;
    cardTitle.textContent = artist.name;
    cardImg.style.objectFit = "cover";

    artistGrid.appendChild(col);
    col.appendChild(artistcard);
    artistcard.append(divImg, cardBody);
    divImg.appendChild(cardImg);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    const cardAlbum = document.getElementById("cardAlbum1");

    const row = document.createElement("div");
    const col3 = document.createElement("div");
    const albumImg = document.createElement("img");
    const col6 = document.createElement("div");
    const albumBody = document.createElement("div");
    const albumTitle = document.createElement("h1");
    const albumAutore = document.createElement("p");
    const albumText = document.createElement("p");
    const btnGroup = document.createElement("div");
    const playBtn = document.createElement("button");
    const saveBtn = document.createElement("button");
    const dotBtn = document.createElement("button");

    row.classList.add("row", "g-0");
    col3.classList.add("col-3", "p-4", "align-content-center");
    albumImg.classList.add("img-fluid");

    col6.classList.add("col-9", "align-content-center");
    albumBody.classList.add("card-body");
    albumTitle.classList.add("card-title", "display-5", "fw-bold");
    albumAutore.classList.add("card-text");
    albumText.classList.add("card-text");
    btnGroup.classList.add("btn-group");
    playBtn.classList.add("badge", "rounded-pill", "border", "border-0", "text-black", "py-3", "px-4", "me-2");
    saveBtn.classList.add("badge", "rounded-pill", "border", "border-1", "border-light", "py-3", "px-4", "mx-2", "bg-black");
    dotBtn.classList.add("border-0", "bg-transparent", "text-light");

    albumImg.src = album.cover;
    albumTitle.textContent = album.title;
    albumAutore.textContent = artist.name;
    albumText.innerHTML = `Ascolta l'album di ${artist.name}`;
    playBtn.innerText = "PLAY";
    saveBtn.innerText = "SAVE";
    dotBtn.innerHTML = `<i class="bi bi-three-dots fs-3 text-secondary"></i>`;

    //Style
    albumImg.style.objectFit = "cover";
    playBtn.style.backgroundColor = "#1bd760";
    playBtn.style.width = "6rem";
    playBtn.style.fontSize = "1rem";
    saveBtn.style.width = "6rem";
    saveBtn.style.fontSize = "1rem";

    cardAlbum.appendChild(row);
    row.appendChild(col3);
    col3.appendChild(albumImg);
    row.appendChild(col6);
    col6.appendChild(albumBody);
    albumBody.append(albumTitle, albumAutore, albumText, btnGroup);
    btnGroup.append(playBtn, saveBtn, dotBtn);

    artistcard.addEventListener("click", () => {
      window.location.href = `artist.html?autoreId=${artist.name}`;
    });

    playBtn.addEventListener("click", () => {
      //console.log("mi hai cliccato!");
      window.location.assign(`AlbumPage.html?artistId=${index}`);
    });
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });
//CARIBOU
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
    const artist = list.data[0].artist;
    const album = list.data[1].album;
    const index = list.data[1].artist.id;

    const artistGrid = document.getElementById("artistGrid");

    const col = document.createElement("div");
    const artistcard = document.createElement("div");
    const divImg = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    col.classList.add("col");
    artistcard.classList.add("card", "border-0");
    divImg.classList.add("m-2");
    cardImg.classList.add("card-img-top", "img-fluid", "img-thumbnail", "border-0", "rounded-3", "mx-auto", "p-0");
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("text-muted");

    artistcard.style.backgroundColor = "#171717";
    cardImg.src = artist.picture;
    cardTitle.textContent = artist.name;
    cardImg.style.objectFit = "cover";

    artistGrid.appendChild(col);
    col.appendChild(artistcard);
    artistcard.append(divImg, cardBody);
    divImg.appendChild(cardImg);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    const cardAlbum = document.getElementById("cardAlbum2");

    const row = document.createElement("div");
    const col3 = document.createElement("div");
    const albumImg = document.createElement("img");
    const col6 = document.createElement("div");
    const albumBody = document.createElement("div");
    const albumTitle = document.createElement("h1");
    const albumAutore = document.createElement("p");
    const albumText = document.createElement("p");
    const btnGroup = document.createElement("div");
    const playBtn = document.createElement("button");
    const saveBtn = document.createElement("button");
    const dotBtn = document.createElement("button");

    row.classList.add("row", "g-0");
    col3.classList.add("col-3", "p-4", "align-content-center");
    albumImg.classList.add("img-fluid");

    col6.classList.add("col-9", "align-content-center");
    albumBody.classList.add("card-body");
    albumTitle.classList.add("card-title", "display-5", "fw-bold");
    albumAutore.classList.add("card-text");
    albumText.classList.add("card-text");
    btnGroup.classList.add("btn-group");
    playBtn.classList.add("badge", "rounded-pill", "border", "border-0", "text-black", "py-3", "px-4", "me-2");
    saveBtn.classList.add("badge", "rounded-pill", "border", "border-1", "border-light", "py-3", "px-4", "mx-2", "bg-black");
    dotBtn.classList.add("border-0", "bg-transparent", "text-light");

    albumImg.src = album.cover;
    albumTitle.textContent = album.title;
    albumAutore.textContent = artist.name;
    albumText.innerHTML = `Ascolta l'album di ${artist.name}`;
    playBtn.innerText = "PLAY";
    saveBtn.innerText = "SAVE";
    dotBtn.innerHTML = `<i class="bi bi-three-dots fs-3 text-secondary"></i>`;

    //Style
    albumImg.style.objectFit = "cover";
    playBtn.style.backgroundColor = "#1bd760";
    playBtn.style.width = "6rem";
    playBtn.style.fontSize = "1rem";
    saveBtn.style.width = "6rem";
    saveBtn.style.fontSize = "1rem";

    cardAlbum.appendChild(row);
    row.appendChild(col3);
    col3.appendChild(albumImg);
    row.appendChild(col6);
    col6.appendChild(albumBody);
    albumBody.append(albumTitle, albumAutore, albumText, btnGroup);
    btnGroup.append(playBtn, saveBtn, dotBtn);

    artistcard.addEventListener("click", () => {
      window.location.href = `artist.html?autoreId=${artist.name}`;
    });

    playBtn.addEventListener("click", () => {
      window.location.assign(`AlbumPage.html?artistId=${index}`);
    });
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });
//M83
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
    const album = list.data[1].album;
    const index = list.data[1].artist.id;

    //Card artisti

    const artistGrid = document.getElementById("artistGrid");

    const col = document.createElement("div");
    const artistcard = document.createElement("div");
    const divImg = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    col.classList.add("col");
    artistcard.classList.add("card", "border-0");
    divImg.classList.add("m-2");
    cardImg.classList.add("card-img-top", "img-fluid", "img-thumbnail", "border-0", "rounded-3", "mx-auto", "p-0");
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("text-muted");

    artistcard.style.backgroundColor = "#171717";
    cardImg.src = artist.picture;
    cardTitle.textContent = artist.name;
    cardImg.style.objectFit = "cover";

    artistGrid.appendChild(col);
    col.appendChild(artistcard);
    artistcard.append(divImg, cardBody);
    divImg.appendChild(cardImg);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    const cardAlbum = document.getElementById("cardAlbum3");

    const row = document.createElement("div");
    const col3 = document.createElement("div");
    const albumImg = document.createElement("img");
    const col6 = document.createElement("div");
    const albumBody = document.createElement("div");
    const albumTitle = document.createElement("h1");
    const albumAutore = document.createElement("p");
    const albumText = document.createElement("p");
    const btnGroup = document.createElement("div");
    const playBtn = document.createElement("button");
    const saveBtn = document.createElement("button");
    const dotBtn = document.createElement("button");

    row.classList.add("row", "g-0");
    col3.classList.add("col-3", "p-4", "align-content-center");
    albumImg.classList.add("img-fluid");

    col6.classList.add("col-9", "align-content-center");
    albumBody.classList.add("card-body");
    albumTitle.classList.add("card-title", "display-5", "fw-bold");
    albumAutore.classList.add("card-text");
    albumText.classList.add("card-text");
    btnGroup.classList.add("btn-group");
    playBtn.classList.add("badge", "rounded-pill", "border", "border-0", "text-black", "py-3", "px-4", "me-2");
    saveBtn.classList.add("badge", "rounded-pill", "border", "border-1", "border-light", "py-3", "px-4", "mx-2", "bg-black");
    dotBtn.classList.add("border-0", "bg-transparent", "text-light");

    albumImg.src = album.cover;
    albumTitle.textContent = album.title;
    albumAutore.textContent = artist.name;
    albumText.innerHTML = `Ascolta l'album di ${artist.name}`;
    playBtn.innerText = "PLAY";
    saveBtn.innerText = "SAVE";
    dotBtn.innerHTML = `<i class="bi bi-three-dots fs-3 text-secondary"></i>`;

    //Style
    albumImg.style.objectFit = "cover";
    playBtn.style.backgroundColor = "#1bd760";
    playBtn.style.width = "6rem";
    playBtn.style.fontSize = "1rem";
    saveBtn.style.width = "6rem";
    saveBtn.style.fontSize = "1rem";

    cardAlbum.appendChild(row);
    row.appendChild(col3);
    col3.appendChild(albumImg);
    row.appendChild(col6);
    col6.appendChild(albumBody);
    albumBody.append(albumTitle, albumAutore, albumText, btnGroup);
    btnGroup.append(playBtn, saveBtn, dotBtn);

    artistcard.addEventListener("click", () => {
      window.location.href = `artist.html?autoreId=${artist.name}`;
    });

    playBtn.addEventListener("click", () => {
      window.location.assign(`AlbumPage.html?artistId=${index}`);
    });
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });
//MYTHANDROID
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
    const album = list.data[1].album;
    const index = list.data[1].artist.id;

    const artistGrid = document.getElementById("artistGrid");

    const col = document.createElement("div");
    const artistcard = document.createElement("div");
    const divImg = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    col.classList.add("col");
    artistcard.classList.add("card", "border-0");
    divImg.classList.add("m-2");
    cardImg.classList.add("card-img-top", "img-fluid", "img-thumbnail", "border-0", "rounded-3", "mx-auto", "p-0");
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("text-muted");

    artistcard.style.backgroundColor = "#171717";
    cardImg.src = artist.picture;
    cardTitle.textContent = artist.name;
    cardImg.style.objectFit = "cover";

    artistGrid.appendChild(col);
    col.appendChild(artistcard);
    artistcard.append(divImg, cardBody);
    divImg.appendChild(cardImg);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    const cardAlbum = document.getElementById("cardAlbum4");

    const row = document.createElement("div");
    const col3 = document.createElement("div");
    const albumImg = document.createElement("img");
    const col6 = document.createElement("div");
    const albumBody = document.createElement("div");
    const albumTitle = document.createElement("h1");
    const albumAutore = document.createElement("p");
    const albumText = document.createElement("p");
    const btnGroup = document.createElement("div");
    const playBtn = document.createElement("button");
    const saveBtn = document.createElement("button");
    const dotBtn = document.createElement("button");

    row.classList.add("row", "g-0");
    col3.classList.add("col-3", "p-4", "align-content-center");
    albumImg.classList.add("img-fluid");

    col6.classList.add("col-9", "align-content-center");
    albumBody.classList.add("card-body");
    albumTitle.classList.add("card-title", "display-5", "fw-bold");
    albumAutore.classList.add("card-text");
    albumText.classList.add("card-text");
    btnGroup.classList.add("btn-group");
    playBtn.classList.add("badge", "rounded-pill", "border", "border-0", "text-black", "py-3", "px-4", "me-2");
    saveBtn.classList.add("badge", "rounded-pill", "border", "border-1", "border-light", "py-3", "px-4", "mx-2", "bg-black");
    dotBtn.classList.add("border-0", "bg-transparent", "text-light");

    albumImg.src = album.cover;
    albumTitle.textContent = album.title;
    albumAutore.textContent = artist.name;
    albumText.innerHTML = `Ascolta l'album di ${artist.name}`;
    playBtn.innerText = "PLAY";
    saveBtn.innerText = "SAVE";
    dotBtn.innerHTML = `<i class="bi bi-three-dots fs-3 text-secondary"></i>`;

    //Style
    albumImg.style.objectFit = "cover";
    playBtn.style.backgroundColor = "#1bd760";
    playBtn.style.width = "6rem";
    playBtn.style.fontSize = "1rem";
    saveBtn.style.width = "6rem";
    saveBtn.style.fontSize = "1rem";

    cardAlbum.appendChild(row);
    row.appendChild(col3);
    col3.appendChild(albumImg);
    row.appendChild(col6);
    col6.appendChild(albumBody);
    albumBody.append(albumTitle, albumAutore, albumText, btnGroup);
    btnGroup.append(playBtn, saveBtn, dotBtn);

    artistcard.addEventListener("click", () => {
      window.location.href = `artist.html?autoreId=${artist.name}`;
    });

    playBtn.addEventListener("click", () => {
      window.location.assign(`AlbumPage.html?artistId=${index}`);
    });
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });
//QUEEN
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
    const album = list.data[2].album;

    const artistGrid = document.getElementById("artistGrid");

    const col = document.createElement("div");
    const artistcard = document.createElement("div");
    const divImg = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    col.classList.add("col");
    artistcard.classList.add("card", "border-0");
    divImg.classList.add("m-2");
    cardImg.classList.add("card-img-top", "img-fluid", "img-thumbnail", "border-0", "rounded-3", "mx-auto", "p-0");
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    cardTitle.classList.add("card-title");
    cardText.classList.add("text-muted");

    artistcard.style.backgroundColor = "#171717";
    cardImg.src = artist.picture;
    cardTitle.textContent = artist.name;
    cardImg.style.objectFit = "cover";

    artistGrid.appendChild(col);
    col.appendChild(artistcard);
    artistcard.append(divImg, cardBody);
    divImg.appendChild(cardImg);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    const cardAlbum = document.getElementById("cardAlbum5");

    const row = document.createElement("div");
    const col3 = document.createElement("div");
    const albumImg = document.createElement("img");
    const col6 = document.createElement("div");
    const albumBody = document.createElement("div");
    const albumTitle = document.createElement("h1");
    const albumAutore = document.createElement("p");
    const albumText = document.createElement("p");
    const btnGroup = document.createElement("div");
    const playBtn = document.createElement("button");
    const saveBtn = document.createElement("button");
    const dotBtn = document.createElement("button");

    row.classList.add("row", "g-0");
    col3.classList.add("col-3", "p-4", "align-content-center");
    albumImg.classList.add("img-fluid");

    col6.classList.add("col-9", "align-content-center");
    albumBody.classList.add("card-body");
    albumTitle.classList.add("card-title", "display-5", "fw-bold");
    albumAutore.classList.add("card-text");
    albumText.classList.add("card-text");
    btnGroup.classList.add("btn-group");
    playBtn.classList.add("badge", "rounded-pill", "border", "border-0", "text-black", "py-3", "px-4", "me-2");
    saveBtn.classList.add("badge", "rounded-pill", "border", "border-1", "border-light", "py-3", "px-4", "mx-2", "bg-black");
    dotBtn.classList.add("border-0", "bg-transparent", "text-light");

    albumImg.src = album.cover;
    albumTitle.textContent = album.title;
    albumAutore.textContent = artist.name;
    albumText.innerHTML = `Ascolta l'album di ${artist.name}`;
    playBtn.innerText = "PLAY";
    saveBtn.innerText = "SAVE";
    dotBtn.innerHTML = `<i class="bi bi-three-dots fs-3 text-secondary"></i>`;

    //Style
    albumImg.style.objectFit = "cover";
    playBtn.style.backgroundColor = "#1bd760";
    playBtn.style.width = "6rem";
    playBtn.style.fontSize = "1rem";
    saveBtn.style.width = "6rem";
    saveBtn.style.fontSize = "1rem";

    cardAlbum.appendChild(row);
    row.appendChild(col3);
    col3.appendChild(albumImg);
    row.appendChild(col6);
    col6.appendChild(albumBody);
    albumBody.append(albumTitle, albumAutore, albumText, btnGroup);
    btnGroup.append(playBtn, saveBtn, dotBtn);

    artistcard.addEventListener("click", () => {
      window.location.href = `artist.html?autoreId=${artist.name}`;
    });

    playBtn.addEventListener("click", () => {
      window.location.assign(`AlbumPage.html?artistId=${index}`);
    });
  })
  .catch((error) => {
    console.error("errore nel caricamento della list", error);
  });

/** script delle card buonasera **/
const playList1 = document.getElementById("playList1");
playList1.addEventListener("click", () => {
  localStorage.setItem("playListTitle", "early stage emily");
  window.location.assign("./playList.html");
  //const playListTitle = document.getElementById("playListTitle");
  //playListTitle.innerText = "early stage emily";
});
const playList2 = document.getElementById("playList2");
playList2.addEventListener("click", () => {
  localStorage.setItem("playListTitle", "Be The Young");
  window.location.assign("./playList.html");
});
const playList3 = document.getElementById("playList3");
playList3.addEventListener("click", () => {
  localStorage.setItem("playListTitle", "saggio vibes 💃🩰");
  window.location.assign("./playList.html");
});
const playList4 = document.getElementById("playList4");
playList4.addEventListener("click", () => {
  localStorage.setItem("playListTitle", "Brani che ti piacciono");
  window.location.assign("./playList.html");
});
const playList5 = document.getElementById("playList5");
playList5.addEventListener("click", () => {
  localStorage.setItem("playListTitle", "2021 lol");
  window.location.assign("./playList.html");
});
const playList6 = document.getElementById("playList6");
playList6.addEventListener("click", () => {
  localStorage.setItem("playListTitle", "Deep Dive with Ali Abdaal");
  window.location.assign("./playList.html");
});

// i tuoi preferiti
window.addEventListener("DOMContentLoaded", () => {
  const favoritesContainer = document.getElementById("favoritesList");

  const savedArtists = JSON.parse(localStorage.getItem("savedArtists")) || [];

  savedArtists.forEach((artist) => {
    const col = document.createElement("div");
    const card = document.createElement("div");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const cardBody = document.createElement("div");
    const name = document.createElement("h5");
    const caption = document.createElement("p");

    col.classList.add("col");
    card.classList.add("card", "border-0");
    div.classList.add("m-2");
    img.classList.add("card-img-top", "img-fluid", "img-thumbnail", "border-0", "rounded-3", "mx-auto", "p-0");
    cardBody.classList.add("card-body", "d-flex", "flex-column");
    name.classList.add("card-title");
    caption.classList.add("text-muted");

    card.style.backgroundColor = "#171717";
    img.src = artist.image;
    img.style.objectFit = "cover";

    name.textContent = artist.name;
    caption.textContent = "";

    favoritesContainer.appendChild(col);
    col.appendChild(card);
    card.appendChild(div);
    div.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(name);
    cardBody.appendChild(caption);

    card.addEventListener("click", () => {
      window.location.href = `artist.html?autoreId=${artist.name}`;
    });
  });
});

const personalList = document.getElementById("personalList");
personalList.addEventListener("click", (event) => {
  let content = event.target.textContent;
  localStorage.setItem("content", content);
  window.location.href = "playList.html";
});
