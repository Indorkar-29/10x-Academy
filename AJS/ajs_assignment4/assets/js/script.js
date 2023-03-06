const itemName = document.querySelector("#name");
const itemPrice = document.querySelector("#price");
let total = parseInt(document.querySelector("#total").innerText);
document.querySelector("#add-item").addEventListener("click", addItem);
const tbody = document.querySelector("table tbody");

function addItem() {
    if (itemName.value != "" && itemPrice.value != "" && itemPrice.value > 0) {
        const row = document.createElement("tr");
        const itemNameTD = document.createElement("td");
        const itemPriceTD = document.createElement("td");
        itemPriceTD.classList.add("item-price");
        itemNameTD.innerText = itemName.value;
        itemPriceTD.innerText = itemPrice.value;

        row.appendChild(itemNameTD);
        row.appendChild(itemPriceTD);
        tbody.appendChild(row);
        itemName.value = "";
        itemPrice.value = "";

        const allPrice = document.querySelectorAll(".item-price");
        for (let itemPrice of allPrice) {
            total += parseInt(itemPrice.innerText);
        }
        document.querySelector("#total").innerText = total;
        total = 0;
    }
}