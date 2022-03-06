$(readyNow);

// let totalSalary = [];

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

// totalSalary.push(Number($('#annualSalary').val()));

$('#tableRows').append(`<tr id="${employeeFN}">
<td>${employeeFN}</td>
<td>${employeeLN}</td>
<td>${employeeID}</td>
<td>${jobTitle}</td>
<td class="salary">${annualSalary}</td>
<td><button type="button" class="deleteBtn btn btn-outline-secondary">Delete</button></td>
</tr>`);

renderInfo();

}

function addToTotal() { 
// console.log('checking total salary: ', totalSalary); // OBSOLETE: array totalSalary no longer exists
// let monthlyCosts = totalSalary.reduce((a,b) => a + b);

//monthlyCosts will equal the total of all items with the .salary class
let monthlyCosts = 0;

$(".salary").each(function(){
currentRowSalary = Number($(this).text());
        monthlyCosts += currentRowSalary
      });
//shows total costs on the DOM:
$('#totalCosts').text(monthlyCosts);

checkTotal(monthlyCosts);
}

function renderInfo() {
    //clears all values from the inputs:
    $('#employeeFN').val('');
    $('#employeeLN').val('');
    $('#employeeID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function deleteFromTotal() {
// console.log('DELETE THIS');
// removes the closest table row element to whatever button was clicked to call the function:
$(this).closest("tr").remove();

//runs addToTotal function to get a NEW total after removal of the table row:
addToTotal()
}

function checkTotal(numToCheck) {
    if (numToCheck > 20000) {
        $('#monthlyCosts').addClass("border border-danger");
        $('#totalCosts').addClass("text-danger");
    } else {
        $('#monthlyCosts').removeClass("border border-danger");
        $('#totalCosts').removeClass("text-danger");
    }
}