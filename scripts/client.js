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
let deleteButton = $(`<button type="button" class="btn btn-outline-primary">DELETE</button>`)
console.log(employeeFN, employeeLN, employeeID, jobTitle, annualSalary);

$('#tableRows').append(`<tr id="${employeeFN}">
<td>${employeeFN}</td>
<td>${employeeLN}</td>
<td>${employeeID}</td>
<td>${jobTitle}</td>
<td>${annualSalary}</td>
<td>${deleteButton}</td>
</tr>`);

render();

}

function submitHandler() {
//needs to take inputs and append them to the DOM
//DOM location will be the <td></td>

}

function render() {
    $('#employeeFN').val('');
    $('#employeeLN').val('');
    $('#employeeID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

// function deleteHandler() {

// }