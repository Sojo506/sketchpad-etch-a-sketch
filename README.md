# Etch‑a‑Sketch Project

## Description

This is a browser-based Etch‑a‑Sketch / sketchpad toy built as part of [The Odin Project - Foundations](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).

It allows you to create a customizable grid of squares that change color when hovered over, mimicking a digital sketchpad. The goal of this project is to practice:

- DOM manipulation  
- Event handling  
- Dynamic styling with CSS  
- User interaction via prompts and buttons  

## Features

- **Dynamic Grid Creation**: Generate an N×N grid of square divs programmatically with JavaScript.  
- **Hover Effect**: Squares change color when hovered to create a "drawing" effect.  
- **Adjustable Grid Size**: A button lets the user input a new grid size (number of squares per side). The old grid is cleared and a new one is created.  
- **Grid Size Limits**: Prevents extreme grid sizes (e.g., max 100×100) to maintain performance.  

### Optional / Extra Features

- **Random Colors**: Each square can change to a random color when hovered.  
- **Progressive Darkening**: Squares can gradually darken with each hover until fully colored or black.  

## Installation / Usage

1. **Clone the repository**  
```bash
git clone <your-repo-url>
```

2. **Open in Browser**

- Open index.html in your preferred browser.
- Or serve via a local server (optional).

3. **Use the App**

- Hover over the squares to draw.
- Click the button to change the grid size.

## Project Structure
/etch-a-sketch/
├── index.html     # Main HTML file
├── styles.css     # Styles for grid, squares, and hover effects
└── script.js      # Logic for generating grid, handling events, and user prompts

## Credits

- Project created by Sojo506
- Original project instructions by The Odin Project