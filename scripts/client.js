$(readyNow);

let totalSalary = [];

function readyNow() {

//Click Listeners:
$('#submitBtn').on('click', grabInfo);
$('#submitBtn').on('click', addToTotal);

$('#tableRows').on('click', '.deleteBtn', deleteFromTotal);
}

function grabInfo() {
//grabs info from the form
let employeeFN = $('#employeeFN').val()
let employeeLN = $('#employeeLN').val()
let employeeID = $('#employeeID').val()
let jobTitle = $('#jobTitle').val()
let annualSalary = $('#annualSalary').val()
console.log('adding employee:', employeeFN, employeeLN, employeeID, jobTitle, annualSalary);

totalSalary.push(Number($('#annualSalary').val()));

$('#tableRows').append(`<tr id="${employeeFN}">
<td>${employeeFN}</td>
<td>${employeeLN}</td>
<td>${employeeID}</td>
<td>${jobTitle}</td>
<td>${annualSalary}</td>
<td><button type="button" class="deleteBtn btn btn-outline-secondary">Delete</button></td>
</tr>`);

renderInfo();

}

function addToTotal() {
// console.log('checking total salary: ', totalSalary);
let monthlyCosts = totalSalary.reduce((a,b) => a + b);
$('#totalCosts').text(monthlyCosts);

if (monthlyCosts > 20000) {
    $('#monthlyCosts').addClass("border border-danger");
    $('#totalCosts').addClass("text-danger");
}
}

function renderInfo() {
    $('#employeeFN').val('');
    $('#employeeLN').val('');
    $('#employeeID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function deleteFromTotal() {
// console.log('DELETE THIS');
$(this).closest("tr").remove();
}