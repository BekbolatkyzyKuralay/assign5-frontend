# Assignment 5 — JavaScript Basics


## 1. Introduction

This assignment introduces the basics of JavaScript, DOM manipulation, and event handling.

The main goal is to learn how JavaScript can interact with HTML elements, change content and styles, and respond to user actions.

The assignment includes:

- JavaScript basics
- Variables and operators
- DOM manipulation
- Mouse and keyboard events
- Calculator
- Interactive To-Do List

## 2. Technologies Used

- **HTML5** — webpage structure
- **CSS3** — styling and layout
- **JavaScript** — interaction and DOM manipulation
- **GitHub** — project repository
- **GitHub Pages** — website publishing

No database or local storage is used.

## 3. Project Structure

```text
Assignment5/
│
├── index.html
├── style.css
├── script.js
├── task1.html
├── task1.js
├── task2.html
├── task2.js
├── task3.html
├── task3.js
├── task4.html
├── task4.js
├── task5.html
├── task5.js
├── task6.html
├── task6.js
├── task7.html
├── task7.js
├── task8.html
├── task8.js
└── README.md
```

## 4. Tasks

### Task 0 — First Script

This task demonstrates the basic connection between HTML and JavaScript.

It uses `console.log()` to display the student's name and group and `alert()` to show:

```text
Hello, JavaScript World!
```

Main concepts:

- `console.log()`
- `alert()`
- `getElementById()`
- `addEventListener()`

### Task 1 — Variables & Operators

Different JavaScript data types are used:

- `string`
- `number`
- `boolean`

The task also demonstrates addition, subtraction, multiplication, division, and string concatenation.

### Task 2 — Changing Content

A paragraph and a button are created.

When the button is clicked, JavaScript changes the paragraph text using:

```javascript
textContent
```

### Task 3 — Changing Styles

A `<div>` block contains text and two buttons.

JavaScript changes:

- background color
- font size

This is done using the `style` property.

### Task 4 — Creating & Removing Elements

This task demonstrates dynamic list manipulation.

- **Add Item** creates a new `<li>` element.
- **Remove Item** removes the last list item.

Methods such as `createElement()`, `appendChild()`, and `remove()` are used.

### Task 5 — Mouse Events

A box changes its background color when the mouse moves over it.

The events used are:

- `mouseover`
- `mouseout`

### Task 6 — Keyboard Events

The user enters text into an input field.

Using the `keyup` event, the current input value is displayed on the page in real time.

### Task 7 — Calculator

A basic calculator performs:

- addition
- subtraction
- multiplication
- division

The program uses `Number()` and a `switch` statement to process the selected operation. Division by zero is also checked.

### Task 8 — Interactive To-Do List

The mini project allows the user to:

- Add tasks
- Mark tasks as completed
- Delete tasks

Tasks are temporarily stored in a JavaScript array.

Completed tasks receive a `line-through` style.

## 5. DOM Manipulation

DOM stands for **Document Object Model**.

JavaScript uses the DOM to find and modify HTML elements.

Examples used in this assignment:

```javascript
document.getElementById("elementId");
```

```javascript
element.textContent = "New text";
```

```javascript
document.createElement("li");
```

```javascript
element.remove();
```

## 6. Event Handling

The project uses JavaScript events to respond to user actions.

| Event | Purpose |
|---|---|
| `click` | Button clicks |
| `mouseover` | Mouse enters an element |
| `mouseout` | Mouse leaves an element |
| `keyup` | Keyboard input |
| `submit` | Form submission |

The main method for handling events is:

```javascript
addEventListener()
```

## 7. Navigation

Every page contains a navigation bar that connects Tasks 0–8.

This allows the user to easily move between different parts of the assignment.

## 8. How to Run

1. Download the project.
2. Open the `Assignment5` folder.
3. Open `index.html` in a browser.
4. Use the navigation bar to open Tasks 0–8.
5. For Task 0 and Task 1, open **Developer Tools → Console** to see the JavaScript output.

## 9. Testing

Each task was tested separately:

- Task 0 — alert and console output
- Task 1 — variables and arithmetic operations
- Task 2 — paragraph text changes
- Task 3 — styles change
- Task 4 — items are added and removed
- Task 5 — mouse events work
- Task 6 — input is displayed in real time
- Task 7 — calculator performs four operations
- Task 8 — tasks can be added, completed, and deleted

## 10. Conclusion

This assignment helped me practice JavaScript basics, DOM manipulation, and event handling.

I learned how to change HTML content and CSS styles with JavaScript, handle user events, create dynamic elements, build a calculator, and create an interactive To-Do List.

The project contains separate pages for Tasks 0–8 and a navigation bar connecting all parts of the assignment.

## Author

**Student:** Bekbolatkyzy Kuralay  
**Group:** SE-2527