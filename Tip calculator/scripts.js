// setting variables by calling ids from input forms

function tipCalc() {
    let billTotal = Number(document.getElementById("bTotal").value);
    let tipPercen = 0
   if ($("#percentage15").prop("checked")) {
       tipPercen = .15
   }
   if ($("#percentage18").prop("checked")) {
       tipPercen = .18
   }
   if ($("#percentage20").prop("checked")) {
       tipPercen = .20
   }
  
    
    let guestNum = document.getElementById("peopleT").value;
    let tipTotal = billTotal * tipPercen;
    let finalTotal = (tipTotal + billTotal) / guestNum;
    console.log(billTotal)
    console.log(tipPercen)
    console.log(guestNum)
    console.log(tipTotal)
    $("#display").val(finalTotal)
    $("#display2").val(tipTotal)
}
//  boiler plate
$(document).ready(function () {
    // when someone clicks on calculate button tipCalc function will run 
    $("#calculate").on('click', tipCalc)
})