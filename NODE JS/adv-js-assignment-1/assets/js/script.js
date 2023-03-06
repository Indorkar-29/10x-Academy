const imgContainer = document.querySelector("#img-container");
const mainContainer = document.querySelector("#main-container");
const msgContainer = document.querySelector("#message-container");
const para = document.querySelector("#para");
const resetBtn = document.querySelector("#reset");
const verifyBtn = document.querySelector("#verify");

window.addEventListener("load", displayImg);

function displayImg() {
  function shuffle(arr) {
    let currIdx = arr.length,
      randomIndex;

    while (currIdx != 0) {
      randomIndex = Math.floor(Math.random() * currIdx);
      currIdx--;

      [arr[currIdx], arr[randomIndex]] = [arr[randomIndex], arr[currIdx],];
    }

    return arr;
  }
  const imgList = [1, 2, 3, 4, 5, Math.floor(Math.random() * 5) + 1];
  shuffle(imgList);
  let id = 1;
  for (let i of imgList) {
    const img = document.createElement("img");
    img.src = `./images/img${i}.jpg`;
    imgContainer.appendChild(img);
    img.dataset.nsTest = `./images/img${i}`;
    img.style.cursor = "pointer";
    img.addEventListener("click", selectTile);
    img.id = id++;
  }
}

const imgEle = document.querySelectorAll("img");

const tileList = [];
function selectTile() {
  if (tileList.length < 2) {
    this.style.border = "3px solid red";
    if (tileList[0] === undefined) tileList.push(this);
    else {
      if (tileList[0].id !== this.id) {
        tileList.push(this);
      }
    }
    if (tileList.length === 1) {
      resetBtn.style.display = "inline-block";
      resetBtn.addEventListener("click", (event) => {
        para.innerText = "";
        for (tile of tileList) {
          tile.style.border = "none";
        }
        resetBtn.style.display = "none";
        verifyBtn.style.display = "none";
        tileList.length = 0;
      });
    }
    if (tileList.length === 2) {
      verifyBtn.style.display = "inline-block";
      verifyBtn.addEventListener("click", () => {
        if (tileList[0].dataset.nsTest === tileList[1].dataset.nsTest) {
          verifyBtn.style.display = "none";
          para.innerText = "You are a human. Congratulations!.";
        } else {
          verifyBtn.style.display = "none";
          para.innerText =
            "We can't verify you as a human. You selected the non-identical tiles.";
        }
      });
    }
  }
}
