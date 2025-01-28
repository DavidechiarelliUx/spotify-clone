const closeBtn=document.getElementById("close-btn");
const aside2 = document.getElementById("aside2");
closeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    aside2.style="display:none";

})

const openAside=document.getElementById("openAside");

openAside.addEventListener("click", (e)=>{
    e.preventDefault();

    aside2.style="display:block";
})

const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";
const token = "";

fetch(URL)
.then(response =>{

    console.log(response);

    if(response.ok){
        return response.json();
    }else{
        throw new Error ("errore nel caricamento della pagina");
    }
})
.then(album=> {
    console.log(album);

    const music = document.getElementById("row");

    album.data.forEach(element => {

        console.log(element.title);
        const nameMusic = document.createElement("p");
        nameMusic.textContent=element.title;
        music.appendChild(nameMusic)


        
    });
})
.catch(error => {
    console.error("errore nella chiamata" , error);
})