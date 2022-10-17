const container = document.querySelector(".image-container");
loadImg();
function loadImg() {
  const appendImg = (imgSize) => {
    const imgEl = document.createElement("img");
    imgEl.src = `https://source.unsplash.com/random/${imgSize}x${imgSize}`;
    container.appendChild(imgEl);
  };
  for (let i = 0; i < 12; i++) {
    const size = Math.floor(Math.random() * 999);
    appendImg(size);
  }
}

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImg();
  }
});
