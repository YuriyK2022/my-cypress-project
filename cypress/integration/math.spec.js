describe('Math Test', function () {
  it('performs the math test', function () {
    cy.visit('http://suninjuly.github.io/math.html'); // Open the webpage

    // Read the value of variable x
    cy.get('#input_value').then(($x) => {
      const x = parseInt($x.text(), 10);

      // Calculate the math function ln(abs(12*sin(x)))
      const result = Math.log(Math.abs(12 * Math.sin(x))).toFixed(2);

      // Enter the result in the text field
      cy.get('#answer').type(result);

      // Choose the checkbox "I'm the robot"
      cy.get('[for="robotCheckbox"]').click();

      // Choose the radiobutton "Robots rule!"
      cy.get('[for="robotsRule"]').click();

      // Press the Submit button
      cy.get('button[type="submit"]').click();
    });
  });
});

