$(readyNow);

// let totalSalary = []; //OBSOLETE - removed array from calculations

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

// totalSalary.push(Number($('#annualSalary').val())); //OBSOLETE - no more array for collection

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
// let monthlyCosts = totalSalary.reduce((a,b) => a + b); // OBSOLETE: no more array reduction for total

//monthlyCosts will equal the sum of all items with the .salary class (created when inputs are collected)
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
    //checks the input and adjusts styles to correspond.  
    //tried .toggleClass but it does not work with the code in its current iteration
    if (numToCheck > 20000) {
        $('#monthlyCosts').addClass("border border-danger");
        $('#totalCosts').addClass("text-danger");
        alert('This item is over budget');
    } else {
        $('#monthlyCosts').removeClass("border border-danger");
        $('#totalCosts').removeClass("text-danger");
    }
}