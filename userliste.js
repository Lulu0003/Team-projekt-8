console.log("userliste loading...");

const usercontainer = document.querySelector(".user_list_container");
let allData;
let myUrl = `https://dummyjson.com/users/filter?key=gender&value=male`;

getData(myUrl);

function getData(userUrl) {
  console.log("get data...");
  fetch(userUrl).then((res) =>
    res.json().then((data) => {
      allData = data;
      showUsers(data);
    })
  );
}

function showUsers(users) {
  console.log("showUsers: ", users);
  usercontainer.innerHTML = "";
  users.forEach((user) => {
    console.log("users loading...", users);
    productcontainer.innerHTML += `<article class="card"
     <h2>${user.firstName}</h2>;
     <a href="produkt.html?id=${user.id}"> 
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          
          </div>
          <h3>${product.brandname} | ${product.subcategory}</h3>
          <p class="info" >
          <span>${product.price}</span>,-
          </p>
           <p>Læs mere:</p>
        </a>
      </article>`;
  });
}
