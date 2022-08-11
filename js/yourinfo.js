const form = document.getElementById("form-c");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const firstname = document.getElementById("fname").value;
    const lastname = document.getElementById("lname").value;
    const streetname = document.getElementById("sname").value;
    const numberfloor = document.getElementById("nfname").value;
    const postandcity = document.getElementById("pcname").value;

    sessionStorage.setItem("rfname", firstname);
    sessionStorage.setItem("rlname", lastname);
    sessionStorage.setItem("rsname", streetname);
    sessionStorage.setItem("rnfname", numberfloor);
    sessionStorage.setItem("rpcname", postandcity);

    location.href="receipt.html"
})