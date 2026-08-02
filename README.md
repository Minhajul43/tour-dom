# 📘 Tour DOM

**A short, practical guide to the JavaScript DOM — from selection to events.**

![JavaScript](https://img.shields.io/badge/JavaScript-DOM-yellow?style=flat-square)
![Level](https://img.shields.io/badge/Level-Beginner--Friendly-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [DOM Basics](#dom-basics)
3. [DOM Selection](#dom-selection)
4. [DOM Manipulation](#dom-manipulation)
5. [Styling the DOM](#styling-the-dom)
6. [Attributes](#attributes)
7. [classList](#classlist)
8. [DOM Collections](#dom-collections)
9. [DOM Traversing](#dom-traversing)
10. [Creating Elements](#creating-elements)
11. [Events](#events)
12. [Event Object](#event-object)
13. [Bubbling, Capturing & Delegation](#bubbling-capturing--delegation)
14. [DOMContentLoaded](#domcontentloaded)
15. [Cheat Sheet](#cheat-sheet)
16. [Resources](#resources)

---

## Introduction
**📖** The **DOM (Document Object Model)** turns static HTML into a live tree of objects that JavaScript can read and change.
**📝** ব্রাউজার HTML-কে একটা **গাছের মতো (tree)** কাঠামোতে রূপান্তর করে — এটাই DOM। JavaScript দিয়ে আমরা এই গাছ পরিবর্তন করতে পারি।

## DOM Basics
**📖** The document is a tree of **nodes**: element, text, attribute, and comment. `document` is the root; elements have parents, children, and siblings.
```
document → html → body → div → h1, p
```
**📝** প্রতিটা ট্যাগ, লেখা, এমনকি কমেন্টও একটা "নোড"। এদের মধ্যে parent-child-sibling সম্পর্ক থাকে।

## DOM Selection
```js
document.getElementById("id");
document.getElementsByClassName("cls");   // live HTMLCollection
document.getElementsByTagName("tag");     // live HTMLCollection
document.querySelector(".cls");           // first match
document.querySelectorAll(".cls");        // static NodeList, all matches
```
**📝** `querySelector`/`querySelectorAll` যেকোনো CSS selector নেয়, তাই বেশি flexible। `getElementById` সবচেয়ে দ্রুত।

## DOM Manipulation
```js
el.innerText;    // visible text only (CSS-aware)
el.textContent;  // all text, ignores CSS, fastest & safest
el.innerHTML;    // parses HTML — avoid with untrusted input (XSS risk)
```
**📝** সাধারণ লেখার জন্য `textContent` ব্যবহার করো — এটা নিরাপদ এবং দ্রুত।

## Styling the DOM
```js
el.style.backgroundColor = "black"; // hyphenated CSS → camelCase in JS
```
**📝** CSS-এর `background-color` জাভাস্ক্রিপ্টে হয় `backgroundColor`। বড় স্টাইল পরিবর্তনের জন্য class ব্যবহার করাই ভালো।

## Attributes
```js
el.getAttribute("src");
el.setAttribute("src", "new.jpg");
el.removeAttribute("alt");
el.hasAttribute("alt");     // true/false
el.dataset.userId;          // reads data-user-id
```

## classList
```js
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");
el.classList.contains("active");
el.classList.replace("old", "new");
```
**📝** `className = "..."` পুরো class স্ট্রিং মুছে দেয় — তাই সবসময় `classList` ব্যবহার করো।

## DOM Collections
| | NodeList | HTMLCollection |
|---|---|---|
| Live? | Usually static | Always live |
| `forEach()`? | Yes | No (convert with `Array.from()`) |
| Node types | Any | Elements only |

## DOM Traversing
```js
el.parentElement;
el.children;                    // elements only
el.firstElementChild / el.lastElementChild;
el.nextElementSibling / el.previousElementSibling;
el.closest(".card");            // nearest matching ancestor (or self)
el.matches(".card");            // does el itself match?
```

## Creating Elements
```js
const li = document.createElement("li");
li.textContent = "New item";
list.appendChild(li);      // or append(), prepend(), before(), after()
li.cloneNode(true);         // deep clone (no event listeners copied)
li.remove();                // delete from DOM
```

## Events
```js
btn.addEventListener("click", handlerFn);
btn.removeEventListener("click", handlerFn);
```
**📝** `addEventListener` একই event-এ একাধিক listener রাখতে দেয়, `onclick=fn` দেয় না।

## Event Object
```js
el.addEventListener("click", (e) => {
  e.target;            // element actually clicked
  e.currentTarget;      // element the listener is on
  e.preventDefault();   // cancel default action (e.g. form submit)
  e.stopPropagation();  // stop event from traveling further
});
```

## Bubbling, Capturing & Delegation
**📖** Events **bubble** upward (child → parent) by default, and can **capture** downward (parent → child) if the listener's third argument is `true`. **Event delegation** uses bubbling: attach one listener to a parent, then use `e.target.closest(...)` to identify which child fired it — efficient, and works for elements added later.
```js
list.addEventListener("click", (e) => {
  const item = e.target.closest("li");
  if (item) console.log(item.textContent);
});
```
**📝** Delegation মানে প্রতিটা child-এ আলাদা listener না দিয়ে parent-এ একটাই listener বসানো।

## DOMContentLoaded
```js
document.addEventListener("DOMContentLoaded", () => {
  // HTML parsed, safe to select elements (doesn't wait for images/CSS)
});
window.addEventListener("load", () => {
  // fires only after everything, including images, has loaded
});
```

## Cheat Sheet
```
Select:   getElementById, querySelector(All), getElementsBy...
Read:     textContent, innerText, innerHTML
Style:    el.style.prop (camelCase)
Attrs:    getAttribute, setAttribute, removeAttribute, dataset
Classes:  classList.add/remove/toggle/contains/replace
Traverse: parentElement, children, closest, nextElementSibling
Create:   createElement, append, prepend, cloneNode, remove
Events:   addEventListener, target, preventDefault, stopPropagation
Load:     DOMContentLoaded vs window.onload
```

## Resources
- [MDN — DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [JavaScript.info — Document](https://javascript.info/document)
- [W3Schools — HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)

---

**Author:** Minhajul Islam · [@Minhajul43](https://github.com/Minhajul43) · MIT License