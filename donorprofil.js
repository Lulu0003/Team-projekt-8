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
  userContainer.innerHTML = `<div class=".billede_user">
  <img src="${data.image}" alt="id billede">
  </div>
  <div class="user_info">
                <h2 class="fuldenavn">${data.firstName} ${data.lastName}</h2>
                <br>
                <br>
                <p><strong> Øjenfarve: </strong>${data.eyeColor}</p>
                <br>
                <p class="info_produkt"><strong> Hårfarve: </strong>${data.hair.color}</p>
                <br>
                <p class="info_produkt"><strong> Højde: </strong>${data.height}</p>
                <br>
                <p class="info_produkt"><strong> Blodtype: </strong>${data.bloodGroup}</p>

                <button class="book_knap">Book tid</button>
                <button class="like_knap">Synes godt om</button>
                </div>  `;
}
