const output = document.getElementById("r-output");

output.insertAdjacentHTML("beforeend", `First name: ${sessionStorage.getItem("rfname")}<br>Last name: ${sessionStorage.getItem("rlname")}<br>Address: ${sessionStorage.getItem("rsname")} ${sessionStorage.getItem("rnfname")}<br>Postal code and city: ${sessionStorage.getItem("rpcname")}`)