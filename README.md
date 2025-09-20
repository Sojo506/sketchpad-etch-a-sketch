# Sketchpad - Etch-a-Sketch

> Practice project for JavaScript and Flexbox from **The Odin Project**  
> Created by **Sojo506**

---

## Description

This is an **interactive Sketchpad** that allows you to draw on a grid of squares using your mouse.  
It focuses on:

- Dynamically creating a grid using JavaScript.
- Using **Flexbox** to organize the squares in rows and columns.
- Changing the color of squares on mouse hover.
- Adjusting the grid size based on user input.
- Implementing both a **black color mode** and a **random RGB mode** with progressive darkening.

> ⚠️ This is a project from **The Odin Project**, used to practice JavaScript and Flexbox fundamentals.

---

## Demo

![Project Demo](demo.gif)  
*(Optional: add a screenshot or GIF of your project)*

---

## Features

- Default 16x16 grid.
- **Clear Grid** button: resets the grid to 16x16.
- **Set Grid** button: allows you to enter a number of squares per side (max 100).
- **Toggle Mode** button: switches between:
  - **Black Mode**: draws in black.
  - **RGB Mode**: draws random colors and progressively darkens each square.
- Colored squares remain intact when switching modes.

---

## Technologies Used

- HTML5
- CSS3 (Flexbox)
- JavaScript (Vanilla JS)
- Git & GitHub for version control

---

## Installation

1. **Clone the repository**  
```bash
git clone <your-repo-url>
```

2. **Open in Browser**

- Open index.html in your preferred browser.
- Or serve via a local server (optional).

3. **Use the App**
   
- Open the page in a browser.
- Hover over the squares to draw.
- Change color mode using the Toggle Mode button.
- Change the grid size using Set Grid (max 100).
- Clear the grid using Clear Grid.

## Project Structure

```
/etch-a-sketch/
├── index.html     # Main HTML file
├── styles.css     # Styles for grid, squares, and hover effects
└── script.js      # Logic for generating grid, handling events, and user prompts
```

## Credits

- Project created by Sojo506
- Original project instructions by The Odin Project
