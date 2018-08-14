var name = "";
var price = 0;

var receipt = [];

function addItem(item) {
    var items = ["Bacon", "Ham", "Steak", "Jerky", "Porkchop", "Roast Beef"];
    var prices = [1.56, 2.34, 6.78, 5.43, 3.42, 7.54]

    receipt.push(items[item]);
    price = price + prices[item];
    document.getElementById("receipt").innerText = "Total: " + price;

    var list = document.getElementById("items");
    var row = list.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = items[item];
    cell2.innerHTML = prices[item];
}