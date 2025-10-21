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
  userContainer.innerHTML = ` <section class="donor_card">
  <div class="billede_user">
  <img src="${data.image}" alt="id billede">
  </div>
  <div class="donor_info">
                <h2 class="fuldenavn">${data.firstName} ${data.lastName}</h2>
                <br>
                <br>
                <p><span class="label">Øjenfarve:</span><span class="value">${data.eyeColor}</span></p>
                <br>
                <p><span class="label">Hårfarve:</span><span class="value">${data.hair.color}</span></p>
                <br>
                <p><span class="label">Højde:</span><span class="value">${data.height}</span></p>
                <br>
                <p><span class="label">Blodtype:</span><span class="value">${data.bloodGroup}</span></p>

                
                <div class="knap_række">
                <button class="book_knap">Book tid</button>
                <div class="like_knap">♡</div>
                </div>
                </div>
                </section>  
                
                <p class="obs"> OBS: Billederne af donorer er AI-genererede replikationer og viser et vejledende udseende baseret på donorens træk. <br>
                De er lavet for at give en idé om donorens gener og udseende, samtidig med at anonymitet og privatliv beskyttes.
                </p>`;
}

const likeknap = document.getElementsByClassName("like_knap");

likeknap.onclick = () => likeknap.classList.toggle("active");
