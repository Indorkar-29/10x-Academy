let price = 0;
function myShoppingCart() {
    if (document.getElementById("item-name").value == "" || document.getElementById("item-price").value == "") {
        return alert("Please enter value");
    }
    var table = document.getElementById("details");
    var row = table.insertRow(0);
    var tdForItem = row.insertCell(0);
    var tdForPrice = row.insertCell(1);
    tdForItem.innerHTML = document.getElementById("item-name").value;
    tdForPrice.innerHTML = document.getElementById("item-price").value;
    price += parseInt(document.getElementById("item-price").value);
    document.getElementById("total").innerHTML = price;
    document.getElementById("item-name").value = "";
    document.getElementById("item-price").value = "";
}
