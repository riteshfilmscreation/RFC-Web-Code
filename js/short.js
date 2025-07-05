/**
 * short.js - A comprehensive, concise JavaScript utility library for web development.
 * Designed by SS RITESH for easy integration via CDN (e.g., jsDelivr).
 *
 * This script provides shorthand functions to simplify common JavaScript operations,
 * making your code more readable and efficient.
 *
 * Usage:
 * Include this script in your HTML (replace with your actual CDN link):
 * <script src="https://cdn.jsdelivr.net/gh/riteshfilmscreation/RFC-Web-Code/js/short.js"></script>
 *
 * Then, use the functions via the global `shortjs` object:
 * shortjs.qs('.my-element');
 * shortjs.on(button, 'click', handleClick);
 * shortjs.lsSet('user', { name: 'Alice' });
 */
(function() {
    "use strict";
    const shortjs = {};

    // I. DOM Selection & Manipulation
    shortjs.qs = (s, c = document) => c.querySelector(s);
    shortjs.qsa = (s, c = document) => c.querySelectorAll(s);
    shortjs.id = (i) => document.getElementById(i);
    shortjs.create = (t, a = {}, ch = []) => {
        const el = document.createElement(t);
        for (const k in a) el.setAttribute(k, a[k]);
        ch.forEach(c => el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c));
        return el;
    };
    shortjs.append = (p, c) => p && c && p.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    shortjs.prepend = (p, c) => p && c && p.prepend(typeof c === 'string' ? document.createTextNode(c) : c);
    shortjs.before = (el, c) => el && c && el.parentNode && el.parentNode.insertBefore(typeof c === 'string' ? document.createTextNode(c) : c, el);
    shortjs.after = (el, c) => el && c && el.parentNode && el.parentNode.insertBefore(typeof c === 'string' ? document.createTextNode(c) : c, el.nextSibling);
    shortjs.replace = (o, n) => o && n && o.parentNode && o.parentNode.replaceChild(typeof n === 'string' ? document.createTextNode(n) : n, o);
    shortjs.remove = (el) => el && el.parentNode && el.parentNode.removeChild(el);
    shortjs.html = (el, c) => c === undefined ? (el ? el.innerHTML : '') : (el && (el.innerHTML = c));
    shortjs.text = (el, c) => c === undefined ? (el ? el.textContent : '') : (el && (el.textContent = c));
    shortjs.attr = (el, n, v) => v === undefined ? (el ? el.getAttribute(n) : null) : (el && el.setAttribute(n, v));
    shortjs.removeAttr = (el, n) => el && el.removeAttribute(n);
    shortjs.css = (el, p, v) => {
        if (!el) return;
        if (typeof p === 'object') { for (const k in p) el.style[k] = p[k]; } else if (v === undefined) return el.style[p] || getComputedStyle(el)[p];
        else el.style[p] = v;
    };
    shortjs.addClass = (el, c) => el && el.classList.add(...(Array.isArray(c) ? c : [c]));
    shortjs.removeClass = (el, c) => el && el.classList.remove(...(Array.isArray(c) ? c : [c]));
    shortjs.toggleClass = (el, c, f) => el ? el.classList.toggle(c, f) : false;
    shortjs.hasClass = (el, c) => el ? el.classList.contains(c) : false;
    shortjs.parent = (el) => el ? el.parentNode : null;
    shortjs.children = (el) => el ? Array.from(el.children) : [];
    shortjs.siblings = (el) => el ? Array.from(el.parentNode.children).filter(child => child !== el) : [];
    shortjs.data = (el, k, v) => v === undefined ? (el ? el.dataset[k] : null) : (el && (el.dataset[k] = v));
    shortjs.offset = (el) => el ? { top: el.getBoundingClientRect().top + window.pageYOffset, left: el.getBoundingClientRect().left + window.pageXOffset } : { top: 0, left: 0 };
    shortjs.position = (el) => el ? { top: el.offsetTop, left: el.offsetLeft } : { top: 0, left: 0 };
    shortjs.width = (el, includePadding = false, includeBorder = false, includeMargin = false) => {
        if (!el) return 0;
        let width = el.offsetWidth;
        if (includePadding) width += parseFloat(shortjs.css(el, 'paddingLeft')) + parseFloat(shortjs.css(el, 'paddingRight'));
        if (includeBorder) width += parseFloat(shortjs.css(el, 'borderLeftWidth')) + parseFloat(shortjs.css(el, 'borderRightWidth'));
        if (includeMargin) width += parseFloat(shortjs.css(el, 'marginLeft')) + parseFloat(shortjs.css(el, 'marginRight'));
        return width;
    };
    shortjs.height = (el, includePadding = false, includeBorder = false, includeMargin = false) => {
        if (!el) return 0;
        let height = el.offsetHeight;
        if (includePadding) height += parseFloat(shortjs.css(el, 'paddingTop')) + parseFloat(shortjs.css(el, 'paddingBottom'));
        if (includeBorder) height += parseFloat(shortjs.css(el, 'borderTopWidth')) + parseFloat(shortjs.css(el, 'borderBottomWidth'));
        if (includeMargin) height += parseFloat(shortjs.css(el, 'marginTop')) + parseFloat(shortjs.css(el, 'marginBottom'));
        return height;
    };
    shortjs.containsEl = (parent, child) => parent && child && parent.contains(child);

    // II. Event Handling
    shortjs.on = (el, e, h, o = {}) => el && el.addEventListener(e, h, o);
    shortjs.off = (el, e, h, o = {}) => el && el.removeEventListener(e, h, o);
    shortjs.ready = (h) => document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', h) : h();
    shortjs.trigger = (el, e, d = {}) => el && el.dispatchEvent(new CustomEvent(e, { detail: d, bubbles: true, cancelable: true }));
    shortjs.delegate = (p, e, s, h) => p && p.addEventListener(e, function(evt) { if (evt.target.matches(s)) h.call(evt.target, evt); });
    shortjs.once = (el, e, h, o = {}) => { // Attaches an event listener that fires only once
        const handler = (evt) => { h.call(el, evt); shortjs.off(el, e, handler, o); };
        shortjs.on(el, e, handler, o);
    };

    // III. Array Utilities
    shortjs.each = (arr, cb) => arr && typeof cb === 'function' && Array.prototype.forEach.call(arr, cb);
    shortjs.map = (arr, cb) => arr && typeof cb === 'function' ? Array.prototype.map.call(arr, cb) : [];
    shortjs.filter = (arr, cb) => arr && typeof cb === 'function' ? Array.prototype.filter.call(arr, cb) : [];
    shortjs.reduce = (arr, cb, init) => arr && typeof cb === 'function' ? Array.prototype.reduce.call(arr, cb, init) : undefined;
    shortjs.unique = (arr) => arr ? [...new Set(arr)] : [];
    shortjs.flatten = (arr) => arr ? arr.flat(Infinity) : [];
    shortjs.contains = (arr, val) => arr ? arr.includes(val) : false;
    shortjs.first = (arr) => arr && arr.length > 0 ? arr[0] : undefined;
    shortjs.last = (arr) => arr && arr.length > 0 ? arr[arr.length - 1] : undefined;
    shortjs.removeAtIndex = (arr, index) => arr && Array.isArray(arr) ? arr.splice(index, 1) : arr;
    shortjs.removeValue = (arr, val) => arr && Array.isArray(arr) ? arr.filter(item => item !== val) : arr;
    shortjs.chunk = (arr, size) => { // Divides an array into smaller chunks
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) chunkedArr.push(arr.slice(i, i + size));
        return chunkedArr;
    };
    shortjs.shuffle = (arr) => { // Shuffles an array in place
        let currentIndex = arr.length,
            randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }
        return arr;
    };

    // IV. Object Utilities
    shortjs.keys = (obj) => obj ? Object.keys(obj) : [];
    shortjs.values = (obj) => obj ? Object.values(obj) : [];
    shortjs.entries = (obj) => obj ? Object.entries(obj) : [];
    shortjs.extend = (...objs) => Object.assign({}, ...objs);
    shortjs.deepMerge = (target, ...sources) => {
        if (typeof target !== 'object' || target === null) return target;
        for (const source of sources) {
            if (typeof source === 'object' && source !== null) {
                for (const key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
                            if (!target[key] || typeof target[key] !== 'object') target[key] = {};
                            shortjs.deepMerge(target[key], source[key]);
                        } else {
                            target[key] = source[key];
                        }
                    }
                }
            }
        }
        return target;
    };
    shortjs.isEmpty = (obj) => {
        if (obj === null || obj === undefined) return true;
        if (Array.isArray(obj) || typeof obj === 'string') return obj.length === 0;
        if (typeof obj === 'object') return Object.keys(obj).length === 0;
        return false;
    };
    shortjs.hasOwn = (obj, prop) => obj ? Object.prototype.hasOwnProperty.call(obj, prop) : false;
    shortjs.clone = (obj) => { // Deep clones an object or array
        if (obj === null || typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.map(item => shortjs.clone(item));
        const cloned = {};
        for (const key in obj) {
            if (shortjs.hasOwn(obj, key)) {
                cloned[key] = shortjs.clone(obj[key]);
            }
        }
        return cloned;
    };

    // V. String Utilities
    shortjs.trim = (s) => s ? s.trim() : '';
    shortjs.capitalize = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
    shortjs.lower = (s) => s ? s.toLowerCase() : '';
    shortjs.upper = (s) => s ? s.toUpperCase() : '';
    shortjs.containsStr = (s, sub) => s ? s.includes(sub) : false;
    shortjs.slugify = (s) => s ? s.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-') : '';
    shortjs.startsWith = (s, sub) => s ? s.startsWith(sub) : false;
    shortjs.endsWith = (s, sub) => s ? s.endsWith(sub) : false;
    shortjs.truncate = (s, length, ellipsis = '...') => { // Truncates a string
        if (!s || s.length <= length) return s;
        return s.slice(0, length) + ellipsis;
    };
    shortjs.camelCase = (s) => s ? s.replace(/-(\w)/g, (_, c) => c.toUpperCase()) : '';
    shortjs.kebabCase = (s) => s ? s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase() : '';

    // VI. Number & Math Utilities
    shortjs.rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    shortjs.clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    shortjs.isNum = (v) => typeof v === 'number' && isFinite(v);
    shortjs.isEven = (n) => shortjs.isNum(n) && n % 2 === 0;
    shortjs.isOdd = (n) => shortjs.isNum(n) && n % 2 !== 0;
    shortjs.round = (num, decimals = 0) => { // Rounds a number to a specified number of decimal places
        const factor = 10 ** decimals;
        return Math.round(num * factor) / factor;
    };
    shortjs.sum = (arr) => arr && Array.isArray(arr) ? arr.reduce((acc, val) => acc + (shortjs.isNum(val) ? val : 0), 0) : 0;
    shortjs.average = (arr) => arr && Array.isArray(arr) && arr.length > 0 ? shortjs.sum(arr) / arr.length : 0;

    // VII. Date & Time Utilities
    shortjs.now = () => Date.now();
    shortjs.formatDate = (d, opt = {}) => {
        try { return new Date(d).toLocaleDateString(opt.locale || undefined, opt.options); } catch (e) { return ''; }
    };
    shortjs.formatTime = (d, opt = {}) => {
        try { return new Date(d).toLocaleTimeString(opt.locale || undefined, opt.options); } catch (e) { return ''; }
    };
    shortjs.addDays = (date, days) => { // Adds days to a date
        const d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
    };
    shortjs.diffDays = (date1, date2) => { // Calculates the difference in days between two dates
        const diffTime = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    // VIII. Local Storage & Session Storage
    shortjs.lsSet = (k, v) => {
        try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* silent error */ }
    };
    shortjs.lsGet = (k) => {
        try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; }
    };
    shortjs.lsRemove = (k) => localStorage.removeItem(k);
    shortjs.lsClear = () => localStorage.clear();
    shortjs.ssSet = (k, v) => {
        try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* silent error */ }
    };
    shortjs.ssGet = (k) => {
        try { return JSON.parse(sessionStorage.getItem(k)); } catch (e) { return null; }
    };
    shortjs.ssRemove = (k) => sessionStorage.removeItem(k);
    shortjs.ssClear = () => sessionStorage.clear();

    // IX. Network & Async Operations
    shortjs.ajax = (url, options = {}) => fetch(url, options);
    shortjs.getJson = async (url, options = {}) => {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
    };
    shortjs.postJson = async (url, data, options = {}) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', ...options.headers },
            body: JSON.stringify(data),
            ...options
        });
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
    };
    shortjs.delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    shortjs.toPromise = (fn, context) => (...args) => new Promise((resolve, reject) => {
        fn.apply(context, [...args, (err, result) => err ? reject(err) : resolve(result)]);
    });
    shortjs.get = async (url, options = {}) => { // Generic GET request
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.text();
    };
    shortjs.post = async (url, data, options = {}) => { // Generic POST request
        const res = await fetch(url, {
            method: 'POST',
            body: data,
            ...options
        });
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.text();
    };

    // X. URL & Browser Utilities
    shortjs.getParam = (name, url = window.location.href) => {
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        const results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };
    shortjs.redirect = (url, newTab = false) => newTab ? window.open(url, '_blank') : (window.location.href = url);
    shortjs.cookieSet = (name, value, days) => {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    };
    shortjs.cookieGet = (name) => {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
    shortjs.cookieRemove = (name) => shortjs.cookieSet(name, '', -1);
    shortjs.clipboardCopy = (text) => {
        // Uses modern Clipboard API if available, falls back to textarea method
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).catch(() => { /* silent error */ });
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try { document.execCommand('copy'); } catch (err) { /* silent error */ }
            document.body.removeChild(textArea);
        }
    };
    shortjs.isOnline = () => navigator.onLine;
    shortjs.userAgent = () => navigator.userAgent;
    shortjs.isMobile = () => /Mobi|Android/i.test(navigator.userAgent);
    shortjs.getHash = () => window.location.hash.substring(1);
    shortjs.setHash = (hash) => window.location.hash = hash;

    // XI. Animation & Visual Utilities
    shortjs.fadeIn = (el, duration = 400) => {
        if (!el) return;
        el.style.opacity = 0;
        el.style.display = 'block';
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            el.style.opacity = Math.min(progress / duration, 1);
            if (progress < duration) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    };
    shortjs.fadeOut = (el, duration = 400) => {
        if (!el) return;
        el.style.opacity = 1;
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            el.style.opacity = Math.max(1 - (progress / duration), 0);
            if (progress < duration) requestAnimationFrame(animate);
            else el.style.display = 'none';
        };
        requestAnimationFrame(animate);
    };
    shortjs.scrollTo = (target, duration = 500, offset = 0) => {
        const el = typeof target === 'string' ? shortjs.qs(target) : target;
        if (!el) return;
        const startPos = window.pageYOffset;
        const endPos = el.getBoundingClientRect().top + window.pageYOffset - offset;
        const distance = endPos - startPos;
        let startTime = null;
        const animateScroll = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPos, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animateScroll);
        };
        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        requestAnimationFrame(animateScroll);
    };
    shortjs.show = (el, display = 'block') => el && (el.style.display = display); // Sets element display to block or specified
    shortjs.hide = (el) => el && (el.style.display = 'none'); // Hides an element

    // XII. Debounce & Throttle
    shortjs.debounce = (func, delay) => { // Delays function execution
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    };
    shortjs.throttle = (func, delay) => { // Limits function execution rate
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

    // XIII. Type Checking
    shortjs.isString = (v) => typeof v === 'string' || v instanceof String;
    shortjs.isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
    shortjs.isArray = (v) => Array.isArray(v);
    shortjs.isFunction = (v) => typeof v === 'function';
    shortjs.isBoolean = (v) => typeof v === 'boolean';
    shortjs.isUndefined = (v) => typeof v === 'undefined';
    shortjs.isNull = (v) => v === null;
    shortjs.isDefined = (v) => typeof v !== 'undefined' && v !== null;

    // XIV. Utility/Helper Functions
    shortjs.noop = () => {}; // A no-operation function
    shortjs.pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x); // Pipes a value through multiple functions
    shortjs.compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x); // Composes functions from right to left
    shortjs.toArray = (collection) => Array.from(collection); // Converts HTMLCollection/NodeList to Array
    shortjs.isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

    // Expose the 'shortjs' object globally
    if (typeof window !== 'undefined') window.shortjs = shortjs;
})();
