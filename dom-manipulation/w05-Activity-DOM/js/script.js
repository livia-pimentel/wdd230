const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
  let myFavChap = input.value;
  input.value = '';

  if (myFavChap != "") {
    const listFavChap = document.createElement("li");
    const listText = document.createElement("span");
    let listBtn = document.createElement("button");

    listFavChap.appendChild(listText);
    listText.innerHTML = myFavChap;
    listFavChap.appendChild(listBtn);
    listBtn.innerHTML = "❌";
    list.appendChild(listFavChap);

    listBtn.onclick = function () {
      list.removeChild(listFavChap);
    };
  } else {
    alert("Please type your favorite chapter!");
  }
  input.focus();
});
