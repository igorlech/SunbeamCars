const outputc1 = document.getElementById("check-output-list");
const output2 = document.getElementById("check-output-total");
const output3 = document.getElementById("check-output-aconly");
const output4 = document.getElementById("check-output-carlist");

const shoplist = JSON.parse(sessionStorage.getItem("goods"));

for (const item of shoplist) {
    outputc1.insertAdjacentHTML("beforeend", `<br><span>${item}</span><br>`)
}

output4.insertAdjacentHTML("beforeend", `${sessionStorage.getItem("cname")}<br>Pickup date: ${sessionStorage.getItem("cpdate")}<br>Return date: ${sessionStorage.getItem("crdate")}<br>Rental days: ${sessionStorage.getItem("crdays")}<br><br>Total car rental cost: ${sessionStorage.getItem("ccost")} kr.<br>incl. VAT`)

output2.insertAdjacentHTML("beforeend", `<br>Total ${sessionStorage.getItem("total")}`);

output3.insertAdjacentHTML("beforeend", `Accessories cost in total: ${sessionStorage.getItem("goodcost")} kr.<br>incl. VAT`)

