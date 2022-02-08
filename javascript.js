const output = document.getElementById("output");
const start = document.getElementById("date-start");
const end = document.getElementById("date-end");
const error = document.getElementById("error");

let template = "";

function validTimes (startdate, enddate) {
    const start = new Date(startdate);
    const end = new Date(enddate);
    if (start > end) {
        return false;
    } else {
        return true;
    }
}

function calcRentalDays(startdate, enddate) {
    const start = new Date(startdate);
    const end = new Date(enddate);
    const timediff = end.getTime() - start.getTime();
    const diffindays = timediff / (1000 * 3600 * 24) + 1;
    return diffindays;
}

function calcRentalCost (days, priceperday) {
    const totalprice = (495 + (priceperday * days)) * 1.25;
    return totalprice;
}


    const form = document.getElementById("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        output.innerHTML = "";
        error.innerHTML = "";
        const datesValid = validTimes(start.value, end.value);

        if (datesValid) {
            for (const car of carlist) {
                
                const pnumber = parseFloat(document.getElementById("number1").value);
                const snumber = parseFloat(document.getElementById("suitcases").value);
                const days = calcRentalDays(start.value, end.value);
                const price = calcRentalCost(days, car.priceperday).toFixed(2);

                if (car.personnumber >= pnumber && car.suitcasenumber >= snumber) {

                    template = `
                <div class="single-item">
                    <div class="car-img-cont">
                        <img src="${car.image}" alt="Car picture" class="car-img">
                    </div>
                    <div class="car-name-cont">
                        <h2 class="car-name" id="carname1">${car.name}</h2>
                    </div>
                    <div class="car-desc-cont">
                        <p class="car-description" id="category1">Category: ${car.category}</p>
                        <p class="car-description" id="persons1">Persons: ${car.personnumber}</p>
                        <p class="car-description" id="suitcases1">Suitcases: ${car.suitcasenumber}</p>
                    </div>
                    <div class="costnbook-cont">
                        <div class="cost-cont">
                            <p class="cost">kr. ${price}</p>
                        </div>
                        <div class="book-cont">
                            <button type="button" class="booknow">Book Now</button>
                        </div>
                    </div>
                </div>`

                    output.insertAdjacentHTML("beforeend", template);
                }
            }
        } else {
            error.innerHTML = "The end date cannot be chosen before the start date";
        }
    })
