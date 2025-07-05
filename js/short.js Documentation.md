# short.js by SS RITESH

A comprehensive, concise JavaScript utility library designed by **SS RITESH** for modern web development. `short.js` simplifies common DOM manipulations, event handling, data operations, and more, enabling developers to write **less code for common tasks** while maintaining readability and efficiency.

---

## Features

`short.js` exposes all its functionalities under a single global object named `shortjs`. It is written in pure JavaScript, ensuring no external dependencies. The library is organized into logical categories for easy navigation and use.

### I. DOM Selection & Manipulation

- **`shortjs.qs(selector, context)`**: Selects the first element matching the `selector` within the given `context` (defaults to `document`).
- **`shortjs.qsa(selector, context)`**: Selects all elements matching the `selector` within the given `context` (defaults to `document`). Returns a NodeList.
- **`shortjs.id(id)`**: Gets an element by its ID.
- **`shortjs.create(tagName, attributes, children)`**: Creates a new HTML element with optional attributes and children.
- **`shortjs.append(parent, child)`**: Appends a child element or text node to a parent.
- **`shortjs.prepend(parent, child)`**: Prepends a child element or text node to a parent.
- **`shortjs.before(element, newNode)`**: Inserts a new node before a reference element.
- **`shortjs.after(element, newNode)`**: Inserts a new node after a reference element.
- **`shortjs.replace(oldNode, newNode)`**: Replaces an old node with a new one.
- **`shortjs.remove(element)`**: Removes an element from the DOM.
- **`shortjs.html(element, content)`**: Gets or sets the inner HTML of an element.
- **`shortjs.text(element, content)`**: Gets or sets the text content of an element.
- **`shortjs.attr(element, name, value)`**: Gets or sets an attribute's value for an element.
- **`shortjs.removeAttr(element, name)`**: Removes an attribute from an element.
- **`shortjs.css(element, property, value)`**: Gets or sets CSS properties for an element. Can take an object for multiple properties.
- **`shortjs.addClass(element, className)`**: Adds one or more classes to an element.
- **`shortjs.removeClass(element, className)`**: Removes one or more classes from an element.
- **`shortjs.toggleClass(element, className, force)`**: Toggles a class on an element, with optional `force` boolean.
- **`shortjs.hasClass(element, className)`**: Checks if an element has a specific class.
- **`shortjs.parent(element)`**: Gets the parent node of an element.
- **`shortjs.children(element)`**: Gets all direct children elements of an element as an array.
- **`shortjs.siblings(element)`**: Gets all sibling elements of an element.
- **`shortjs.data(element, key, value)`**: Gets or sets `dataset` attributes on an element.
- **`shortjs.offset(element)`**: Gets the current coordinates of the element relative to the document.
- **`shortjs.position(element)`**: Gets the current coordinates of the element relative to its offset parent.
- **`shortjs.width(element, includePadding, includeBorder, includeMargin)`**: Gets the calculated width of an element.
- **`shortjs.height(element, includePadding, includeBorder, includeMargin)`**: Gets the calculated height of an element.
- **`shortjs.containsEl(parent, child)`**: Checks if a parent element contains a child element.

### II. Event Handling

- **`shortjs.on(element, event, handler, options)`**: Attaches an event listener to an element.
- **`shortjs.off(element, event, handler, options)`**: Removes an event listener from an element.
- **`shortjs.ready(handler)`**: Executes a function when the DOM is fully loaded.
- **`shortjs.trigger(element, event, detail)`**: Triggers a custom event on an element.
- **`shortjs.delegate(parent, event, selector, handler)`**: Delegates an event listener to a parent element for descendant elements matching a selector.
- **`shortjs.once(element, event, handler, options)`**: Attaches an event listener that fires only once.

### III. Array Utilities

- **`shortjs.each(arrayLike, callback)`**: Iterates over an array-like object.
- **`shortjs.map(arrayLike, callback)`**: Maps an array-like object to a new array.
- **`shortjs.filter(arrayLike, callback)`**: Filters an array-like object.
- **`shortjs.reduce(arrayLike, callback, initialValue)`**: Reduces an array-like object to a single value.
- **`shortjs.unique(array)`**: Returns a new array with unique values.
- **`shortjs.flatten(array)`**: Flattens a nested array recursively.
- **`shortjs.contains(array, value)`**: Checks if an array contains a specific value.
- **`shortjs.first(array)`**: Gets the first element of an array.
- **`shortjs.last(array)`**: Gets the last element of an array.
- **`shortjs.removeAtIndex(array, index)`**: Removes an element from an array at a specific index.
- **`shortjs.removeValue(array, value)`**: Removes all occurrences of a specific value from an array.
- **`shortjs.chunk(array, size)`**: Divides an array into smaller chunks.
- **`shortjs.shuffle(array)`**: Shuffles an array in place.

### IV. Object Utilities

- **`shortjs.keys(object)`**: Returns an array of an object's own enumerable property names.
- **`shortjs.values(object)`**: Returns an array of an object's own enumerable property values.
- **`shortjs.entries(object)`**: Returns an array of an object's own enumerable `[key, value]` pairs.
- **`shortjs.extend(...objects)`**: Merges properties from source objects into a new object (shallow copy).
- **`shortjs.deepMerge(target, ...sources)`**: Deeply merges properties from source objects into a target object.
- **`shortjs.isEmpty(value)`**: Checks if a value (object, array, string) is empty.
- **`shortjs.hasOwn(object, property)`**: Checks if an object has its own property.
- **`shortjs.clone(object)`**: Deep clones an object or array.

### V. String Utilities

- **`shortjs.trim(string)`**: Removes whitespace from both ends of a string.
- **`shortjs.capitalize(string)`**: Capitalizes the first letter of a string.
- **`shortjs.lower(string)`**: Converts a string to lowercase.
- **`shortjs.upper(string)`**: Converts a string to uppercase.
- **`shortjs.containsStr(string, substring)`**: Checks if a string contains a substring.
- **`shortjs.slugify(string)`**: Converts a string into a URL-friendly slug.
- **`shortjs.startsWith(string, prefix)`**: Checks if a string starts with a specified prefix.
- **`shortjs.endsWith(string, suffix)`**: Checks if a string ends with a specified suffix.
- **`shortjs.truncate(string, length, ellipsis)`**: Truncates a string to a specified length, adding an ellipsis.
- **`shortjs.camelCase(string)`**: Converts a kebab-case or snake-case string to camelCase.
- **`shortjs.kebabCase(string)`**: Converts a camelCase or snake-case string to kebab-case.

### VI. Number & Math Utilities

- **`shortjs.rand(min, max)`**: Generates a random integer within a specified range (inclusive).
- **`shortjs.clamp(number, min, max)`**: Clamps a number within a specified range.
- **`shortjs.isNum(value)`**: Checks if a value is a finite number.
- **`shortjs.isEven(number)`**: Checks if a number is even.
- **`shortjs.isOdd(number)`**: Checks if a number is odd.
- **`shortjs.round(number, decimals)`**: Rounds a number to a specified number of decimal places.
- **`shortjs.sum(array)`**: Calculates the sum of numbers in an array.
- **`shortjs.average(array)`**: Calculates the average of numbers in an array.

### VII. Date & Time Utilities

- **`shortjs.now()`**: Returns the current timestamp in milliseconds.
- **`shortjs.formatDate(date, options)`**: Formats a date object into a localized date string.
- **`shortjs.formatTime(date, options)`**: Formats a date object into a localized time string.
- **`shortjs.addDays(date, days)`**: Adds a number of days to a given date.
- **`shortjs.diffDays(date1, date2)`**: Calculates the difference in days between two dates.

### VIII. Local Storage & Session Storage

- **`shortjs.lsSet(key, value)`**: Stores data in `localStorage` (automatically stringifies).
- **`shortjs.lsGet(key)`**: Retrieves data from `localStorage` (automatically parses).
- **`shortjs.lsRemove(key)`**: Removes an item from `localStorage`.
- **`shortjs.lsClear()`**: Clears all items from `localStorage`.
- **`shortjs.ssSet(key, value)`**: Stores data in `sessionStorage` (automatically stringifies).
- **`shortjs.ssGet(key)`**: Retrieves data from `sessionStorage` (automatically parses).
- **`shortjs.ssRemove(key)`**: Removes an item from `sessionStorage`.
- **`shortjs.ssClear()`**: Clears all items from `sessionStorage`.

### IX. Network & Async Operations

- **`shortjs.ajax(url, options)`**: Performs a fetch request.
- **`shortjs.getJson(url, options)`**: Fetches and parses JSON data from a URL.
- **`shortjs.postJson(url, data, options)`**: Posts JSON data to a URL and parses the JSON response.
- **`shortjs.delay(ms)`**: Returns a Promise that resolves after a specified delay.
- **`shortjs.toPromise(fn, context)`**: Converts a Node.js-style callback function into a Promise-returning function.
- **`shortjs.get(url, options)`**: Performs a generic GET fetch request and returns response text.
- **`shortjs.post(url, data, options)`**: Performs a generic POST fetch request and returns response text.

### X. URL & Browser Utilities

- **`shortjs.getParam(name, url)`**: Extracts a URL query parameter by name.
- **`shortjs.redirect(url, newTab)`**: Redirects the browser to a new URL, optionally in a new tab.
- **`shortjs.cookieSet(name, value, days)`**: Sets a cookie with a given name, value, and expiration days.
- **`shortjs.cookieGet(name)`**: Gets the value of a cookie by name.
- **`shortjs.cookieRemove(name)`**: Removes a cookie by name.
- **`shortjs.clipboardCopy(text)`**: Copies text to the clipboard.
- **`shortjs.isOnline()`**: Checks if the browser is online.
- **`shortjs.userAgent()`**: Returns the browser's user agent string.
- **`shortjs.isMobile()`**: Checks if the current device is likely a mobile device.
- **`shortjs.getHash()`**: Gets the URL hash without the '#'.
- **`shortjs.setHash(hash)`**: Sets the URL hash.

### XI. Animation & Visual Utilities

- **`shortjs.fadeIn(element, duration)`**: Fades in an element.
- **`shortjs.fadeOut(element, duration)`**: Fades out an element.
- **`shortjs.scrollTo(target, duration, offset)`**: Smoothly scrolls the window to a target element or position.
- **`shortjs.show(element, display)`**: Sets an element's display style to `block` or a specified value.
- **`shortjs.hide(element)`**: Sets an element's display style to `none`.

### XII. Debounce & Throttle

- **`shortjs.debounce(func, delay)`**: Creates a debounced version of a function, delaying its execution until after a certain period of inactivity.
- **`shortjs.throttle(func, delay)`**: Creates a throttled version of a function, limiting how often it can be called over a period of time.

### XIII. Type Checking

- **`shortjs.isString(value)`**: Checks if a value is a string.
- **`shortjs.isObject(value)`**: Checks if a value is a plain object (not null and not an array).
- **`shortjs.isArray(value)`**: Checks if a value is an array.
- **`shortjs.isFunction(value)`**: Checks if a value is a function.
- **`shortjs.isBoolean(value)`**: Checks if a value is a boolean.
- **`shortjs.isUndefined(value)`**: Checks if a value is undefined.
- **`shortjs.isNull(value)`**: Checks if a value is null.
- **`shortjs.isDefined(value)`**: Checks if a value is neither undefined nor null.

### XIV. Utility/Helper Functions

- **`shortjs.noop()`**: A function that does nothing. Useful as a default callback.
- **`shortjs.pipe(...functions)`**: Creates a function that passes its arguments through a series of functions from left to right.
- **`shortjs.compose(...functions)`**: Creates a function that passes its arguments through a series of functions from right to left.
- **`shortjs.toArray(collection)`**: Converts an array-like object (e.g., NodeList, HTMLCollection) into a true JavaScript Array.
- **`shortjs.isEmptyObject(obj)`**: Checks if an object is an empty plain object `{}`.

---

## Usage

To use `short.js`, include it in your HTML file via the jsDelivr CDN. It's recommended to place the script tag just before the closing `</body>` tag for optimal performance.

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SS RITESH</title>
  </head>
  <body>
    <div id="app">
      <h1 class="title">Welcome</h1>
      <button id="myButton">Click Me</button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>

    <script src="[https://cdn.jsdelivr.net/gh/riteshfilmscreation/RFC-Web-Code/js/short.js](https://cdn.jsdelivr.net/gh/riteshfilmscreation/RFC-Web-Code/js/short.js)"></script>

    <script>
      // Use shortjs functionalities once the library is loaded

      // DOM Selection
      const appDiv = shortjs.id("app");
      const titleElement = shortjs.qs(".title");
      const listItems = shortjs.qsa("li");
      const myButton = shortjs.id("myButton");

      // DOM Manipulation
      shortjs.text(titleElement, "Hello from short.js!");
      shortjs.addClass(appDiv, "container");
      shortjs.css(appDiv, {
        backgroundColor: "#f0f0f0",
        padding: "20px",
      });

      // Event Handling
      shortjs.on(myButton, "click", () => {
        shortjs.html(appDiv, "<h2>Button Clicked!</h2>");
        shortjs.fadeOut(myButton, 600);
      });

      // Array Utilities
      shortjs.each(listItems, (item, index) => {
        shortjs.text(item, `List Item ${index + 1} (modified)`);
      });

      // Local Storage
      shortjs.lsSet("userSettings", { theme: "dark", notifications: true });
      const settings = shortjs.lsGet("userSettings");
      // console.log(settings.theme); // In a real app, this would be uncommented.
      // short.js itself avoids console output.

      // Async Operations
      // shortjs.getJson('[https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)')
      //     .then(data => {
      //         // console.log('Fetched Todo:', data); // In a real app, this would be uncommented.
      //     })
      //     .catch(error => {
      //         // console.error('Error fetching data:', error); // In a real app, this would be uncommented.
      //     });

      // More examples...
      shortjs.ready(() => {
        // This code runs once the DOM is fully loaded
        // console.log('DOM is ready!'); // In a real app, this would be uncommented.
      });

      const myDebouncedFunction = shortjs.debounce(() => {
        // console.log('Debounced function executed!'); // In a real app, this would be uncommented.
      }, 300);
      // window.addEventListener('resize', myDebouncedFunction); // In a real app, this would be uncommented.
    </script>
  </body>
</html>
````
