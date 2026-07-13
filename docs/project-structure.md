# Project Structure

## Overview

The Art Gallery application follows a simple front-end architecture. All project files are located in the root directory, making the application easy to understand and maintain.

## Directory Structure

```text
art-gallery/
│
├── index.html
├── style.css
└── script.js
```

## File Responsibilities

### index.html

**Purpose**

The main entry point of the application.

**Responsibilities**

- Defines the page structure.
- Displays gallery content.
- Links the stylesheet.
- Loads the JavaScript file.
- Provides semantic HTML elements.

---

### style.css

**Purpose**

Controls the visual appearance of the application.

**Responsibilities**

- Page layout
- Typography
- Colors
- Spacing
- Responsive design
- Animations and transitions
- Hover effects

---

### script.js

**Purpose**

Adds interactive behavior to the application.

**Responsibilities**

- Handles user interactions
- Updates the UI dynamically
- Manages gallery functionality
- Responds to click events
- Controls application behavior

---

## File Relationships

The three project files work together as follows:

1. `index.html` provides the application structure.
2. `style.css` applies the visual design.
3. `script.js` adds interactivity and dynamic functionality.

Together, these files create a complete client-side web application.

## Maintenance Notes

- Keep HTML focused on structure.
- Keep CSS focused on presentation.
- Keep JavaScript focused on behavior.
- Avoid mixing responsibilities between files.