# Income Tax Calculator

This is a simple web application that allows users to calculate their income tax based on their gross annual income, extra income, age group, and applicable deductions.

## Features

- User-friendly interface with input fields for income, deductions, and age group selection
- Real-time input validation with error icons and tooltips
- Tax calculation based on the provided income and age group
- Modal dialog to display the overall income after tax deductions

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.

## How to Use

1. Enter your gross annual income in the first input field.
2. Enter any extra income from other sources in the second input field.
3. Select your age group from the dropdown menu.
4. Enter the total applicable deductions in the fourth input field.
5. Click the "Calculate Tax" button.
6. The calculated tax amount and your overall income after tax deductions will be displayed in a modal dialog.

# Test Cases
### UI with Tooltip
![image](https://github.com/SwastikKasera/Fyle_Assignment/assets/133042995/d7cd315f-17b2-4868-ad1f-8a2eb1f93f4e)

### When all input are 0 and age group is not selected.
![image](https://github.com/SwastikKasera/Fyle_Assignment/assets/133042995/573a221e-5cb7-4c7b-8b10-b14ac749b8bb)

### When all input is 0 and age group is selected.
![image](https://github.com/SwastikKasera/Fyle_Assignment/assets/133042995/86c48042-a441-4c73-908e-901ef1e0cec2)

### When any input is not number
![image](https://github.com/SwastikKasera/Fyle_Assignment/assets/133042995/f84fedba-d857-4ce7-8006-1cccb66548a8)

### Tax free case
![image](https://github.com/SwastikKasera/Fyle_Assignment/assets/133042995/835b8527-8b5b-496c-9b6c-b0993e88e3a0)

### When each input is valid but age group is not selected
![image](https://github.com/SwastikKasera/Fyle_Assignment/assets/133042995/fa4cacb8-84b3-46b9-895c-b734cc537542)

### Tax for <=40
![image](https://github.com/SwastikKasera/Fyle_Assignment/assets/133042995/621962d2-b6c2-474d-86f9-0f6fa6144438)

### Tax for >=40 and <60
![image](https://github.com/SwastikKasera/Fyle_Assignment/assets/133042995/1c738001-7bb5-4b53-865e-cb6862c68c4a)

### Tax for >=60
![image](https://github.com/SwastikKasera/Fyle_Assignment/assets/133042995/eb8fe74e-9388-4814-8b6f-369b8810319c)





## Tax Calculation Rules

- If your overall income (gross annual income + extra income - deductions) is less than or equal to 8 lakhs, no tax is applicable.
- If your overall income exceeds 8 lakhs, the amount over 8 lakhs is taxed at the following rates based on your age group:
  - Below 40: 30%
  - 40 to 59: 40%
  - 60 and above: 10%

## File Structure

- `index.html`: The main HTML file containing the structure of the web page.
- `styles.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file containing the logic for input validation, tax calculation, and modal display.
