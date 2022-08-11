const FORM = document.getElementById("form");

FORM.addEventListener("button", function (e){
    e.preventDefault();
    const DATEST = document.getElementById("date-start").value;
    const DATEEND = document.getElementById("date-end").value;
    const PERNUM = document.getElementById("number1").value;
    const SUITNUM = document.getElementById("suitcases").value;

    sessionStorage.setItem("date-start", DATEST);
    sessionStorage.setItem("date-end", DATEEND);
    sessionStorage.setItem("number1", PERNUM);
    sessionStorage.setItem("suitcases", SUITNUM);
    document.location.href = "accessory.html";
})

const CARNAME = document.getElementById("carname1");

sessionStorage.setItem("carname1", CARNAME);
//document.location.href = "accessory.html";