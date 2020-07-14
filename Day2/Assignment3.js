var today = new Date();
var day = today.getDate();
var mon = today.getMonth()+1; //As getMonth() gives output ranges between 0 - 11 and not 1 - 12
var year = today.getFullYear();

day = day < 10 ? "0"+day : day;
mon = mon < 10 ? "0"+mon : mon;

document.write("mm-dd-yyyy : " + mon + "-" + day + "-" + year + "</br>");
document.write("mm/dd/yyyy : " + mon + "/" + day + "/" + year + "</br>");
document.write("dd-mm-yyyy : " + day + "-" + mon + "-" + year + "</br>");
document.write("dd/mm/yyyy : " + day + "/" + mon + "/" + year);