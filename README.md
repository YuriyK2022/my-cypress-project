# Test Html page by Cypress:
Using framework Cypress implement a java script to automate offensive actions and create next action:
- open page http://suninjuly.github.io/math.html
- read the value of variable x
- calculate math function ln(abs(12*sin(x)))
- enter result in the text field
- choose checkbox "I'm the robot"
- choose radiobutton "Robots rule!"
- press Submit button
# Installation
1. Create new directory my-cypress-project:

![image](https://github.com/YuriyK2022/my-cypress-project/assets/118524489/4b6d26f5-c402-490a-b7dd-e9271a9c24ce)

![image](https://github.com/YuriyK2022/my-cypress-project/assets/118524489/11c0642e-6220-4a5c-8f7c-b9a641b6c921)


2. Initialize project with npm by running the following command:

![image](https://github.com/YuriyK2022/my-cypress-project/assets/118524489/de1e3143-6586-484f-9a0b-0f6fc8c8b5f7)

This will create a package.json file for your project.


3. Install Cypress (I use Cypress 8.3.0) as a development dependency:

![image](https://github.com/YuriyK2022/my-cypress-project/assets/118524489/b709ea95-fa27-4940-8c52-51634f85169d)

# Open Cypress Test Runner and create test file
4. Open the Cypress Test Runner by the following command:

![image](https://github.com/YuriyK2022/my-cypress-project/assets/118524489/32e6acf3-9a15-4cfa-92d0-5e69b4d473a7)

5. Cypress Test Runner will open, allowing you to manage your tests and run them interactively:

![image](https://github.com/YuriyK2022/my-cypress-project/assets/118524489/260a4905-6bfa-436a-b30c-5070b2d304e8)

6. In the "Integration" folder (path ...\my-cypress-project\cypress\integration) create test file math.spec.js:

```js
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
```

# Run Cypress Test
7. Go back into the Cypress Runner and click on the file math.spec.js:

![image](https://github.com/YuriyK2022/my-cypress-project/assets/118524489/8e0f2cc4-6ea3-43f0-8426-7e163c2ff703)

Note: my default browser is Firefox

8. The Firefox is open and test will execute, automating the actions on the webpage:

![image](https://github.com/YuriyK2022/my-cypress-project/assets/118524489/6229243f-3704-4bdb-9508-e1cd77c6e5fd)

# Results
9. All tests is passing!

![image](https://github.com/YuriyK2022/my-cypress-project/assets/118524489/63bb2d6f-eb7e-4006-886c-277c3c9ccc37)
