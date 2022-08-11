let total = parseFloat(URLDATA.get('cost'));
showTotal();

//this is for passing only cost of accessories
let acprice = 0.00;

function calculateTotal(checkbox, itemprice) {
    if (checkbox.checked === true) {
        total = Math.abs(acprice + parseFloat(itemprice));
    } else {
        total = Math.abs(acprice - parseFloat(itemprice));
    }
    showTotalMin();
}

function showTotalMin() {
    const output = document.getElementById("totaloutput");
    output.innerHTML = `Total ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}`
}
// this is the end of only cost of accessories
function calculateTotal(checkbox, itemprice) {
    if (checkbox.checked === true) {
        total = Math.abs(total + parseFloat(itemprice));
    } else {
        total = Math.abs(total - parseFloat(itemprice));
    }
    showTotal();
}

function showTotal() {
    const output = document.getElementById("totaloutput");
    output.innerHTML = `Total ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}`
}

const form = document.getElementById("form-a");
form.reset();

const checkboxes = document.getElementsByClassName("checkitem");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let shoplist = [];
    let goodcost = 0;
    for (const checkbox of checkboxes) {
        if (checkbox.checked === true) {
            shoplist.push(checkbox.dataset.item)
            goodcost = goodcost + parseFloat(checkbox.value);
        }
    }

    sessionStorage.setItem("goods", JSON.stringify(shoplist));
    sessionStorage.setItem("total", total.toLocaleString("da-DK", {style: "currency", currency: "DKK"}));
    sessionStorage.setItem("goodcost", goodcost);

    location.href="customerinfo.html";
}) 

//this is also not for this example

//const totaloutput2 = document.getElementById("output");

/* const shoppinglist = JSON.parse(sessionStorage.getItem("goods"));

/* for (const item of shoppinglist) {
    totaloutput.insertAdjacentHTML("beforeend", `${item}<br>`);
} */

/* totaloutput.insertAdjacentHTML("beforeend", `<br>Total ${sessionStorage.getItem("total")}`); */