const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userProfissao = document.getElementById("user-profissao");

const button = document.getElementById("button");

const div = document.getElementById("minha-div");

const maleSexo = document.getElementById("male");
const femaleSexo = document.getElementById("female");

button.addEventListener("click", () => {
  const novaTag = document.createElement("div");
  novaTag.classList.add("flip-card");

  const image = maleSexo.checked
    ? "img/maleimg.jpg"
    : femaleSexo.checked
    ? "img/femaleimage.jpg"
    : null;

  if (image) {
    novaTag.innerHTML = `

      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="${image}" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h1>${userName.value}</h1>
          <p>${userProfissao.value}</p>
          <p>${userEmail.value}</p>
        </div>
      </div>
`;
    div.appendChild(novaTag);
  } else {
    alert("Tu é mano??");
  }

  userName.value = "";
  userEmail.value = "";
  userProfissao.value = "";

  maleSexo.checked = false;
  femaleSexo.checked = false;
});
