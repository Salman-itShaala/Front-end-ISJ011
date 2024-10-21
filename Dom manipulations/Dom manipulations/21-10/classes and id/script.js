const container = document.getElementById("container");

// to get the classes
console.log(container.classList);

// to add another class
container.classList.add("box-1");

// to remove the class
container.classList.remove("box-1");

// to check if class is present or not
container.classList.contains("active");

function showOptions() {
  // to toggle between classes
  container.classList.toggle("active");
}
