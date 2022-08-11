function myPrint() {
    var printdata = document.getElementById("form-c");
    newwin = window.open("");
    newwin.document.write(printdata.outerHTML);
    newwin.print();
    newwin.close();
}