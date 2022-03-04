$(readyNow);

function readyNow() {

$('#submitBtn').on('click', grabInfo);

// Click Listeners go here: 
// one for submit
// one for delete (maybe if I get to stretch)

}

function grabInfo() {
//grabs info from the form
let employeeFN = $('#employeeFN').val()
let employeeLN = $('#employeeLN').val()
let employeeID = $('#employeeID').val()
let jobTitle = $('#jobTitle').val()
let annualSalary = $('#annualSalary').val()
// console.log(employeeFN, employeeLN, employeeID, jobTitle, annualSalary);


}

function submitHandler() {
//needs to take inputs and append them to the DOM
//DOM location will be the <td></td>

}

function render() {

}

// function deleteHandler() {

// }