const buttonSearch = document.getElementById("buttonSearch");

const search=document.getElementById("inputSearch");

function cercaArtista (){
    const artistName=search.value;
    if(artistName){
        window.location.href = `./artist.html?autoreId=${artistName}`;
    }else{
        console.log("non è stato inserito un nome");
    }
}

buttonSearch.addEventListener("click", () => {

    cercaArtista();
})