function addBooking() {
    var from = document.getElementById("pickup").value;
    var to = document.getElementById("drop").value;
    var date = document.getElementById("date").value;
    var cartype = document.getElementById("cartype").value;
   
    var table = document.getElementById("orderTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    row.insertCell(0).innerHTML = from;
    row.insertCell(1).innerHTML = to;
    row.insertCell(2).innerHTML = date;
    row.insertCell(3).innerHTML=cartype;
    document.getElementById("pickup").value = "";
    document.getElementById("drop").value = "";
    document.getElementById("date").value = "";
    document.getElementById("cartype").value = "";
}
