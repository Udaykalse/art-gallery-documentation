# Troubleshooting Guide

## Overview

This guide provides solutions to common issues that users and developers may encounter while running or modifying the Art Gallery web application.

---

## Application Does Not Load

### Problem

The application displays a blank page or fails to open.

### Possible Causes

- `index.html` is missing.
- Files were moved to another directory.
- Browser failed to load the page.

### Solution

- Verify that `index.html` exists in the project root.
- Open the project using a modern web browser.
- If using Visual Studio Code, launch the project with the Live Server extension.

---

## Styles Are Not Applied

### Problem

The page appears unstyled.

### Possible Causes

- `style.css` cannot be found.
- Incorrect stylesheet path.

### Solution

Verify that the following line exists inside `index.html`:

```html
<link rel="stylesheet" href="style.css">
```

---

## JavaScript Features Are Not Working

### Problem

Interactive features such as:

- Mobile navigation
- Animated counters
- Smooth scrolling
- Gallery animations
- Back-to-top button

do not work.

### Possible Causes

- `script.js` is missing.
- Incorrect script path.
- JavaScript is disabled.

### Solution

Verify that the following script is included before the closing `</body>` tag:

```html
<script src="script.js"></script>
```

Open the browser's Developer Tools and check the Console tab for JavaScript errors.

---

## Images Do Not Display

### Problem

Artwork images fail to load.

### Possible Causes

- Internet connection is unavailable.
- External image source is temporarily unavailable.

### Solution

- Check your internet connection.
- Refresh the page.
- Replace unavailable image URLs if necessary.

---

## Mobile Menu Does Not Open

### Problem

The hamburger menu does not respond on smaller screens.

### Solution

- Verify that JavaScript is enabled.
- Confirm that `script.js` loads successfully.
- Refresh the browser.

---

## Contact Form Does Not Send Messages

### Explanation

The contact form is a front-end demonstration.

Currently:

- Messages are not stored.
- Emails are not sent.
- No backend service is connected.

This behavior is expected.

---

## Newsletter Subscription Does Not Save Email Addresses

### Explanation

The newsletter form demonstrates client-side interaction only.

Submitted email addresses are not stored permanently.

---

## Animations Do Not Play

### Possible Causes

- JavaScript failed to load.
- Browser compatibility issues.
- CSS file not loaded.

### Solution

Refresh the page and verify that both `style.css` and `script.js` are loading correctly.

---

## Browser Compatibility

For the best experience, use one of the following browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Getting Additional Help

If the problem persists:

1. Inspect the browser console.
2. Verify the project structure.
3. Confirm that all required files are present.
4. Compare your changes with the latest version in the GitHub repository.