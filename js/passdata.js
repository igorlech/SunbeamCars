const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const INOUTPUT = document.getElementById("output-aside");
INOUTPUT.innerHTML = "Car: " + URLDATA.get('name') + "<br><br>Pick up date: " + URLDATA.get('pdate') + "<br>Return date: " + URLDATA.get('rdate') + "<br>Rental days: " + URLDATA.get('rdays') + "<br><br>Car rental cost: " + URLDATA.get('cost') + " kr<br>incl. VAT";

const next = document.getElementById("form-a");

//pass data to customer information page
next.addEventListener("submit", function (){
    const COST = URLDATA.get('cost');
    const NAME = URLDATA.get('name');
    const PDATE = URLDATA.get('pdate');
    const RDATE = URLDATA.get('rdate');
    const RDAYS = URLDATA.get('rdays');

    sessionStorage.setItem("ccost", COST);
    sessionStorage.setItem("cname", NAME);
    sessionStorage.setItem("cpdate", PDATE);
    sessionStorage.setItem("crdate", RDATE);
    sessionStorage.setItem("crdays", RDAYS);

    document.location.href = "customerinfo.html";
    console.log(TEST)
})