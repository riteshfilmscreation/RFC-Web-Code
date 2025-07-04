/**
 * short.js - A concise JavaScript utility library for DOM manipulation and common tasks.
 * Designed for easy integration via CDN (e.g., jsDelivr).
 *
 * This script provides shorthand functions to simplify common JavaScript operations,
 * making your code more readable and efficient.
 *
 * Usage:
 * Include this script in your HTML:
 * <script src="https://cdn.jsdelivr.net/gh/riteshfilmscreation/RFC-Web-Code/js/short.js"></script>
 *
 * Then, use the functions via the global `short` object:
 * short.qs('.my-element');
 * short.on(button, 'click', handleClick);
 * short.log('Hello', 'World');
 */

(function() {
    "use strict";

    // Define a global object to expose our utility functions
    const short = {};

    /**
     * ======================================
     * 1. DOM Selection Utilities
     * ======================================
     */

    /**
     * Selects the first element that matches the specified CSS selector.
     * @param {string} selector - The CSS selector string.
     * @param {Element|Document} [context=document] - The element or document to search within.
     * @returns {Element|null} The first matching element, or null if none found.
     */
    short.qs = function(selector, context = document) {
        return context.querySelector(selector);
    };

    /**
     * Selects all elements that match the specified CSS selector.
     * @param {string} selector - The CSS selector string.
     * @param {Element|Document} [context=document] - The element or document to search within.
     * @returns {NodeListOf<Element>} A static NodeList containing all matching elements.
     */
    short.qsa = function(selector, context = document) {
        return context.querySelectorAll(selector);
    };

    /**
     * Selects an element by its ID.
     * @param {string} id - The ID of the element to select.
     * @returns {Element|null} The element with the specified ID, or null if not found.
     */
    short.id = function(id) {
        return document.getElementById(id);
    };

    /**
     * ======================================
     * 2. DOM Manipulation Utilities
     * ======================================
     */

    /**
     * Creates a new HTML element with optional attributes and children.
     * @param {string} tagName - The tag name of the element to create (e.g., 'div', 'p', 'span').
     * @param {Object} [attributes={}] - An object where keys are attribute names and values are attribute values.
     * @param {Array<Node|string>} [children=[]] - An array of child nodes or strings (which will be converted to text nodes).
     * @returns {Element} The newly created element.
     */
    short.create = function(tagName, attributes = {}, children = []) {
        const el = document.createElement(tagName);
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                el.setAttribute(key, attributes[key]);
            }
        }
        children.forEach(child => {
            if (typeof child === 'string') {
                el.appendChild(document.createTextNode(child));
            } else if (child instanceof Node) {
                el.appendChild(child);
            }
        });
        return el;
    };

    /**
     * Appends a child element to a parent element.
     * @param {Element} parent - The parent element.
     * @param {Element|string} child - The child element or a string to be appended as text.
     */
    short.append = function(parent, child) {
        if (parent && child) {
            if (typeof child === 'string') {
                parent.appendChild(document.createTextNode(child));
            } else {
                parent.appendChild(child);
            }
        }
    };

    /**
     * Removes an element from the DOM.
     * @param {Element} element - The element to remove.
     */
    short.remove = function(element) {
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    };

    /**
     * Adds one or more class names to an element.
     * @param {Element} element - The target element.
     * @param {string|string[]} classNames - A single class name string or an array of class names.
     */
    short.addClass = function(element, classNames) {
        if (element) {
            if (Array.isArray(classNames)) {
                element.classList.add(...classNames);
            } else {
                element.classList.add(classNames);
            }
        }
    };

    /**
     * Removes one or more class names from an element.
     * @param {Element} element - The target element.
     * @param {string|string[]} classNames - A single class name string or an array of class names.
     */
    short.removeClass = function(element, classNames) {
        if (element) {
            if (Array.isArray(classNames)) {
                element.classList.remove(...classNames);
            } else {
                element.classList.remove(classNames);
            }
        }
    };

    /**
     * Toggles a class name on an element.
     * @param {Element} element - The target element.
     * @param {string} className - The class name to toggle.
     * @param {boolean} [force] - If true, adds the class; if false, removes it.
     * @returns {boolean} True if the class is now present, false otherwise.
     */
    short.toggleClass = function(element, className, force) {
        if (element) {
            return element.classList.toggle(className, force);
        }
        return false;
    };

    /**
     * Sets or gets the innerHTML of an element.
     * @param {Element} element - The target element.
     * @param {string} [content] - The HTML string to set. If omitted, returns the current innerHTML.
     * @returns {string|void} The innerHTML if getting, or void if setting.
     */
    short.html = function(element, content) {
        if (!element) return '';
        if (content === undefined) {
            return element.innerHTML;
        } else {
            element.innerHTML = content;
        }
    };

    /**
     * Sets or gets the textContent of an element.
     * @param {Element} element - The target element.
     * @param {string} [content] - The text string to set. If omitted, returns the current textContent.
     * @returns {string|void} The textContent if getting, or void if setting.
     */
    short.text = function(element, content) {
        if (!element) return '';
        if (content === undefined) {
            return element.textContent;
        } else {
            element.textContent = content;
        }
    };

    /**
     * Sets or gets an attribute of an element.
     * @param {Element} element - The target element.
     * @param {string} name - The name of the attribute.
     * @param {string} [value] - The value to set the attribute to. If omitted, returns the current attribute value.
     * @returns {string|null|void} The attribute value if getting, or void if setting.
     */
    short.attr = function(element, name, value) {
        if (!element) return null;
        if (value === undefined) {
            return element.getAttribute(name);
        } else {
            element.setAttribute(name, value);
        }
    };

    /**
     * ======================================
     * 3. Event Handling Utilities
     * ======================================
     */

    /**
     * Adds an event listener to an element.
     * @param {EventTarget} element - The element to attach the listener to.
     * @param {string} eventName - The name of the event (e.g., 'click', 'mouseover').
     * @param {Function} handler - The event handler function.
     * @param {boolean|AddEventListenerOptions} [options={}] - Options for addEventListener.
     */
    short.on = function(element, eventName, handler, options = {}) {
        if (element) {
            element.addEventListener(eventName, handler, options);
        }
    };

    /**
     * Removes an event listener from an element.
     * @param {EventTarget} element - The element to remove the listener from.
     * @param {string} eventName - The name of the event.
     * @param {Function} handler - The event handler function to remove.
     * @param {boolean|EventListenerOptions} [options={}] - Options for removeEventListener.
     */
    short.off = function(element, eventName, handler, options = {}) {
        if (element) {
            element.removeEventListener(eventName, handler, options);
        }
    };

    /**
     * Executes a function when the DOM is fully loaded.
     * @param {Function} handler - The function to execute.
     */
    short.ready = function(handler) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', handler);
        } else {
            handler();
        }
    };

    /**
     * ======================================
     * 4. Utility Functions
     * ======================================
     */

    /**
     * A shorthand for console.log().
     * @param {...any} args - Arguments to log to the console.
     */
    short.log = function(...args) {
        console.log(...args);
    };

    /**
     * Iterates over an array-like object (e.g., Array, NodeList) and calls a callback function for each item.
     * @param {ArrayLike<any>} arrayLike - The array-like object to iterate over.
     * @param {Function} callback - The function to call for each item (item, index, array).
     */
    short.each = function(arrayLike, callback) {
        if (arrayLike && typeof callback === 'function') {
            Array.prototype.forEach.call(arrayLike, callback);
        }
    };

    /**
     * A basic wrapper for the Fetch API.
     * @param {string} url - The URL to fetch.
     * @param {Object} [options={}] - Fetch API options (method, headers, body, etc.).
     * @returns {Promise<Response>} A Promise that resolves to the Response object.
     */
    short.ajax = function(url, options = {}) {
        return fetch(url, options);
    };

    /**
     * Returns a function that, when invoked, will only be triggered at most once during a given window of time.
     * @param {Function} func - The function to debounce.
     * @param {number} delay - The delay in milliseconds.
     * @returns {Function} The debounced function.
     */
    short.debounce = function(func, delay) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    };

    /**
     * Returns a function that, when invoked, will only be triggered at most once during a given window of time.
     * @param {Function} func - The function to throttle.
     * @param {number} delay - The delay in milliseconds.
     * @returns {Function} The throttled function.
     */
    short.throttle = function(func, delay) {
        let inThrottle, lastFn, lastTime;
        return function() {
            const context = this,
                args = arguments;
            if (!inThrottle) {
                func.apply(context, args);
                lastTime = Date.now();
                inThrottle = true;
            } else {
                clearTimeout(lastFn);
                lastFn = setTimeout(function() {
                    if (Date.now() - lastTime >= delay) {
                        func.apply(context, args);
                        lastTime = Date.now();
                    }
                }, Math.max(delay - (Date.now() - lastTime), 0));
            }
        };
    };

    // Expose the 'short' object globally
    if (typeof window !== 'undefined') {
        window.short = short;
    }
})();
