TO DO: 

- Using form inputs, collect: 
employee first name => ID is: employeeFN
last name => ID is: employeeLN
ID number => ID is: employeeID
job title => ID is: jobTitle
annual salary => ID is: annualSalary

//all items exist and share the class: inputField 

- submit button to collect form information. 

//exists and has class: btn and ID: submitBtn

- store the information to calculate monthly costs

- append information to the DOM
- calculate monthly costs & append to DOM
- if total monthly costs exceeds $20k, red background on the cost
    - maybe cost should be a span or separate cell?
    - add a class to the span that turns it red?

- add a delete button to remove an employee from the DOM
 // - it does not need to remove the salary from the total


!! STRETCH GOALS !!
- add styling or extra functionality that fits the theme
// oh hell yeah

- Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. 

_HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total.


THINGS TO REMEMBER: 
!! Commit all the time
!! Don't forget to use: 
    .attr() - can target HtML attributes and add them, including IDs and classes
    use of $(this).text / $(this).data()