const images = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let current = 0;

images.forEach((img, index) => {
img.addEventListener("click", () => {
lightbox.style.display = "flex";
lightboxImg.src = img.src;
current = index;
});
});

document.querySelector(".close").onclick = () => {
lightbox.style.display = "none";
};

document.querySelector(".next").onclick = () => {
current++;
if(current >= images.length) current = 0;
lightboxImg.src = images[current].src;
};

document.querySelector(".prev").onclick = () => {
current--;
if(current < 0) current = images.length - 1;
lightboxImg.src = images[current].src;
};

function filterImages(category){

images.forEach(img => {

if(category === "all"){
img.style.display="block";
}
else if(img.classList.contains(category)){
img.style.display="block";
}
else{
img.style.display="none";
}

});

}