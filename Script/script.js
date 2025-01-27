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
