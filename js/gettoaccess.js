const INPUTOUTPUT = document.getElementById("output-aside");
const start = sessionStorage.getItem("date-start");
const end = sessionStorage.getItem("date-end");

function calcRentalDays(startdate, enddate) {
    const start = new Date(startdate);
    const end = new Date(enddate);
    const timediff = end.getTime() - start.getTime();
    const diffindays = timediff / (1000 * 3600 * 24) + 1;
    return diffindays;
}

const rentdays = calcRentalDays(start.value, end.value);

function calcRentalCost (days, priceperday) {
    const totalprice = (495 + (priceperday * days)) * 1.25;
    return totalprice;
}

if (sessionStorage.getItem("date-start") === null) {
    INPUTOUTPUT.innerHTML = "<p>You didn't choose any car</p>";
} else {
    INPUTOUTPUT.innerHTML = "<p>" + sessionStorage.getItem("carname1") + "<br>Pick up date: " + sessionStorage.getItem("date-start") + "<br>Return date: " + sessionStorage.getItem("date-end") + "<br>Rental days: " + rentdays + "<br><br>Car rental cost: " 
}