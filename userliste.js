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

//Filtrering js
const eyeDropdown = document.querySelector(".eyeFilter");
const hairDropdown = document.querySelector(".hairFilter");
const heightDropdown = document.querySelector(".heightFilter");

function applyFilters() {
  if (!allData || !allData.users) return;

  const eyeValue = eyeDropdown.value;
  const hairValue = hairDropdown.value;
  const heightValue = heightDropdown.value;

  // return viser filter udfra alle værdier, så hvis fx. brun + brun + højde
  const filtreret = allData.users.filter((user) => {
    const eyeMatch = eyeValue === "alle" || user.eyeColor === eyeValue;
    const hairMatch = hairValue === "alle" || user.hair.color === hairValue;

    let heightMatch = true;
    if (heightValue === "lav") heightMatch = user.height >= 160 && user.height <= 170;
    else if (heightValue === "mellem") heightMatch = user.height >= 170 && user.height <= 180;
    else if (heightValue === "hoej") heightMatch = user.height > 180;

    return eyeMatch && hairMatch && heightMatch;
  });

  showUsers({ users: filtreret });
}

eyeDropdown.addEventListener("change", applyFilters);
hairDropdown.addEventListener("change", applyFilters);
heightDropdown.addEventListener("change", applyFilters);

const resetButton = document.querySelector(".nustil_filters");

resetButton.addEventListener("click", () => {
  eyeDropdown.value = "alle";
  hairDropdown.value = "alle";
  heightDropdown.value = "alle";
  showUsers(allData);
});

function showUsers(usersObj) {
  console.log("showUsers: ", usersObj);
  donorGrid.innerHTML = "";

  usersObj.users.forEach((user) => {
    console.log(user.lastName);

    donorGrid.innerHTML += `<article class="donor-card">
    <a href="/donorprofil.html?id=${user.id}">
                <img src=${user.image}" alt="Donor billede" />
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
