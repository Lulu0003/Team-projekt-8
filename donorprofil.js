console.log("scriptet er loaded...");

const id = new URLSearchParams(window.location.search).get("id");
// const id = 2;
console.log("id", id);

const userUrl = `https://dummyjson.com/users/${id}`;
const userContainer = document.querySelector(".usercontainer");

console.log("user:", userUrl);

getData();

function getData() {
  fetch(userUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("shows data er", data);
  userContainer.innerHTML = `<div class=".billede_produkt">
  <img src="${data.image}" alt="produkt billede">
  </div> `;
}
