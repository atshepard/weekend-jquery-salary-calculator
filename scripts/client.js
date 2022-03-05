$(readyNow);

let totalSalary = [];

function readyNow() {

$('#submitBtn').on('click', grabInfo);
$('#submitBtn').on('click', addToTotal);

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
console.log(employeeFN, employeeLN, employeeID, jobTitle, annualSalary);

totalSalary.push(Number($('#annualSalary').val()));

$('#tableRows').append(`<tr id="${employeeFN}">
<td>${employeeFN}</td>
<td>${employeeLN}</td>
<td>${employeeID}</td>
<td>${jobTitle}</td>
<td>${annualSalary}</td>
<td><button type="button" class="btn btn-outline-secondary btn-small" id="${employeeFN}Btn" >DELETE</button></td>
</tr>`);

renderInfo();

}

function addToTotal() {
console.log(totalSalary);
let monthlyCosts = totalSalary.reduce((a,b) => a + b);
$('#totalCosts').text(monthlyCosts);
}

function renderInfo() {
    $('#employeeFN').val('');
    $('#employeeLN').val('');
    $('#employeeID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

// function deleteHandler() {

// }