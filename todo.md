TO DO: 

- Using form inputs, collect: 
employee first name
last name 
ID number 
job title 
annual salary

- submit button to collect form information. 
- store the information to calculate monthly costs
- append information to the DOM
- calculate monthly costs & append to DOM
- if total monthly costs exceeds $20k, red background on the cost
    - maybe cost should be a span or separate cell?

- add a delete button to remove an employee from the DOM
 // - it does not need to remove the salary from the total


!! STRETCH GOALS !!
- add styling or extra functionality that fits the theme
- Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. 

_HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total.

    -will probably require use of $(this).text / $(this).data()
