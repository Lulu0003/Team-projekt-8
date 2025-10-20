console.log("userliste loading...");

const donorGrid = document.querySelector(".donor-grid");
let allData;
let myUrl = `https://dummyjson.com/users/filter?key=gender&value=male`;

function getData(userUrl) {
  console.log("get data...");

  fetch(userUrl).then((res) =>
    res.json().then((data) => {
      allData = data;
      showUsers(data);
    })
  );
}

getData(myUrl);

function showUsers(usersObj) {
  console.log("showUsers: ", usersObj);
  usersObj.users.forEach((user) => {
    console.log(user.lastName);

    donorGrid.innerHTML += `<article class="donor-card">
<a href="/donorprofil.html?id=${user.id}">
                <img src=${user.image} alt="Donor billede" />
                <h3> ${user.firstName} ${user.lastName}</h3>

                <div>
                <p> Øjenfarve: ${user.eyeColor}</p>
                <p> Hårfarve: ${user.hair.color}</p>
                <p> Højde: ${user.height}</p>
                <p> Blodtype: ${user.bloodGroup}</p>
                </div>
                </a>
            </article>`;
  });
}
