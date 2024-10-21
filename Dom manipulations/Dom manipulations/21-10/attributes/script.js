const image = document.getElementById("img");

const images = [
  "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
  "https://photographylife.com/wp-content/uploads/2023/05/Nikon-Z8-Official-Samples-00002.jpg",
  "https://cdn.pixabay.com/photo/2024/05/27/07/46/bee-8790316_640.jpg",
];

function changeImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  image.setAttribute("src", images[randomIndex]);
}
