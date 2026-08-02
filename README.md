<div align="center">

<div align="center">

---

## 📌 About This Repository

**Tour DOM** is a complete, self-contained learning resource for the **JavaScript Document Object Model (DOM)**. It starts from the most basic question — *"What actually is the DOM?"* — and walks all the way to advanced traversal, event handling, event delegation, and full mini-projects.

Every single topic in this repository is explained **twice**:

1. 📖 A professional **English explanation** (for interviews, documentation-reading, and formal understanding)
2. 📝 A simple **বাংলা ব্যাখ্যা** (so that the concept clicks immediately, in your own language)

This is not a translated document — every Bangla section is written naturally, the way a teacher would explain it in a classroom.

> 💡 **Tip:** Keep a browser console open (`F12` → Console tab) while reading. Type every example yourself. DOM is a *hands-on* topic — reading alone is not enough.

---

## 📚 Table of Contents

1. [Introduction](#-introduction)
2. [DOM Basics](#-dom-basics)
3. [DOM Selection](#-dom-selection)
4. [DOM Manipulation](#-dom-manipulation)
5. [Styling the DOM](#-styling-the-dom)
6. [Attributes](#-attributes)
7. [classList](#-classlist)
8. [DOM Collections](#-dom-collections)
9. [DOM Traversing](#-dom-traversing)
10. [Creating Elements](#-creating-elements)
11. [Events](#-events)
12. [Event Object](#-event-object)
13. [Event Bubbling](#-event-bubbling)
14. [Event Capturing](#-event-capturing)
15. [Event Delegation](#-event-delegation)
16. [DOMContentLoaded](#-domcontentloaded)
17. [Mini Projects](#-mini-projects)
18. [Best Practices](#-best-practices-20)
19. [Common Mistakes](#-common-mistakes-25)
20. [Interview Questions (100+)](#-interview-questions-100)
21. [Practice Exercises](#-practice-exercises)
22. [DOM Cheat Sheet](#-dom-cheat-sheet)
23. [Method Comparison Table](#-method-comparison-table)
24. [Resources](#-resources)
25. [Folder Structure](#-folder-structure)
26. [Contributing](#-contributing)
27. [License](#-license)
28. [Author](#-author)

---

## 🌱 Introduction

### 📖 What is the DOM?

The **DOM (Document Object Model)** is a programming interface for web documents. When a browser loads an HTML page, it does **not** treat that page as plain text — it converts it into a **tree of objects** that JavaScript can read, change, add to, or delete from. This tree is the DOM.

In short: **DOM is the bridge between your HTML and your JavaScript.** Without the DOM, JavaScript would have no way to "see" or "touch" the webpage.

### 📝 বাংলা ব্যাখ্যা

তুমি যখন একটা HTML ফাইল ব্রাউজারে খোল, ব্রাউজার সেই HTML কে শুধু লেখা (text) হিসেবে না রেখে একটা **গাছের (Tree) মতো স্ট্রাকচারে** রূপান্তর করে। এই গাছটাকেই বলে **DOM**। JavaScript দিয়ে আমরা এই গাছের যেকোনো অংশ (element) ধরতে পারি, পরিবর্তন করতে পারি, নতুন কিছু যোগ করতে পারি, বা মুছে ফেলতে পারি। সহজ কথায় — **DOM হলো HTML আর JavaScript এর মধ্যে যোগাযোগের সেতু (bridge)।**

### Why do we need the DOM?

- HTML alone is **static** — it cannot react to clicks, typing, or time.
- JavaScript alone cannot "see" the page — it needs an interface.
- The DOM gives JavaScript **read + write access** to every element, attribute, and piece of text on the page.
- Without DOM, there would be no dynamic websites — no dropdowns, no live search, no dark mode toggle, no to-do apps.

### How the Browser Works (Step by Step)

```
1. Browser requests the HTML file from the server
2. Browser receives raw HTML (plain text)
3. Browser PARSES the HTML → builds the DOM Tree
4. Browser PARSES the CSS  → builds the CSSOM Tree
5. DOM + CSSOM combine     → Render Tree
6. Browser calculates Layout (position, size of each element)
7. Browser Paints pixels on the screen
8. JavaScript runs and can modify the DOM at any time,
   which triggers Re-render Tree → Re-layout → Re-paint
```

### HTML vs DOM — What's the Difference?

| Aspect                    | HTML                          | DOM                                           |
| ------------------------- | ----------------------------- | --------------------------------------------- |
| What it is                | Plain text source code        | Live, in-memory object tree                   |
| Where it lives            | `.html` file on server/disk | Browser memory (RAM)                          |
| Can JavaScript change it? | No (it's just a file)         | Yes, fully                                    |
| Updates live?             | No, static                    | Yes, dynamic, reflects every change instantly |
| View in browser           | "View Page Source" (Ctrl+U)   | "Inspect Element" (F12)                       |

> ⚠️ **Important:** "View Page Source" shows the *original* HTML sent by the server. "Inspect Element" shows the *current* DOM, which may look completely different after JavaScript has modified it. Beginners often confuse these two.

### Browser Rendering Process (Visual)

```
        HTML File                CSS File
            |                        |
            v                        v
        HTML Parser              CSS Parser
            |                        |
            v                        v
        DOM Tree      +      CSSOM Tree
                    \        /
                     v      v
                  Render Tree
                       |
                       v
                    Layout
                       |
                       v
                    Painting
                       |
                       v
                  Pixels on Screen
```

---

## 🌳 DOM Basics

### 📖 What is the DOM (Recap + Deeper Detail)

The DOM represents an HTML document as a **hierarchical tree of nodes**. Every tag, every piece of text, every comment, and every attribute becomes a **node** in this tree.

### 📝 বাংলা ব্যাখ্যা

DOM এ সবকিছুই একটা **নোড (Node)**। একটা ট্যাগ নোড, একটা টেক্সট নোড, এমনকি একটা কমেন্টও নোড। এই সব নোড মিলে একটা গাছ (tree) তৈরি করে, যেখানে একটা নোডের ভেতরে আরেকটা নোড থাকতে পারে (parent-child সম্পর্ক)।

### The DOM Tree (ASCII Diagram)

```
document
   └── html
        ├── head
        │     ├── title
        │     └── meta
        └── body
              ├── h1  ("Hello World")
              ├── p    ("This is a paragraph")
              └── div
                    ├── button
                    └── span
```

### Types of Nodes

| Node Type                | Description                | Example                        |
| ------------------------ | -------------------------- | ------------------------------ |
| **Element Node**   | An HTML tag                | `<div>`, `<p>`, `<h1>`   |
| **Text Node**      | The text inside an element | `"Hello World"`              |
| **Attribute Node** | An attribute of an element | `id="main"`, `class="box"` |
| **Comment Node**   | An HTML comment            | `<!-- this is a comment -->` |
| **Document Node**  | The root of the whole tree | `document`                   |

### Example

```html
<p id="greet">Hello <b>World</b></p>
```

Breakdown:

- `<p id="greet">` → **Element Node**, with an **Attribute Node** `id="greet"`
- `"Hello "` → **Text Node**
- `<b>` → **Element Node** (child of `<p>`)
- `"World"` → **Text Node** (child of `<b>`)

### Parent, Child, and Sibling Relationships

```
        <div>                     <-- Parent
       /      \
   <h1>       <p>                <-- Children of <div>, Siblings of each other
```

- **Parent**: The node that directly contains another node.
- **Child**: A node directly contained inside another node.
- **Sibling**: Nodes that share the same parent.

### 📝 বাংলা ব্যাখ্যা (Parent/Child/Sibling)

- **Parent (বাবা/মা নোড):** যে নোডের ভেতরে অন্য নোড আছে।
- **Child (সন্তান নোড):** যে নোড অন্য নোডের ভেতরে আছে।
- **Sibling (ভাইবোন নোড):** একই parent-এর অধীনে থাকা নোডগুলো একে অপরের sibling।

### Important Notes

- The `document` object is the **entry point** to the entire DOM tree.
- Every HTML tag becomes exactly one Element Node.
- Whitespace (spaces, newlines) between tags can create **Text Nodes** too — this surprises many beginners when they use `childNodes`.
- The DOM is **language-independent** — although we use it with JavaScript here, DOM itself is a W3C standard usable from other languages too.

### Best Practices

- Always think of your page as a **tree**, not a flat list, when selecting elements.
- Use browser DevTools → Elements tab to visually inspect the live DOM tree.

### Common Mistakes

- Confusing "View Source" HTML with the live DOM.
- Forgetting that whitespace can become text nodes (this breaks `childNodes` counting for beginners).

### Use Cases

- Understanding DOM tree structure is the foundation for **every** DOM selection, traversal, and manipulation task that follows.

### Interview Questions

**Q1: What is the DOM?**
A: The DOM is a programming interface that represents an HTML document as a tree of objects, allowing JavaScript to read and manipulate the page.

**Q2: Is the DOM part of JavaScript?**
A: No. The DOM is a separate Web API provided by the browser. JavaScript is a language that can *use* the DOM API.

**Q3: What are the different node types in the DOM?**
A: Element nodes, text nodes, attribute nodes, comment nodes, and the document node.

### Summary

The DOM turns static HTML into a **live, tree-shaped, JavaScript-accessible structure**. Every tag is a node; every node has relationships (parent, child, sibling). Understanding this tree is the single most important foundation for everything else in this repository.

---

## 🎯 DOM Selection

### 📖 Definition

DOM Selection means picking one or more elements from the DOM tree so that JavaScript can work with them. Before you can change anything, you must first **select** it.

### 📝 বাংলা ব্যাখ্যা

কোনো কিছু পরিবর্তন করার আগে সেটাকে **সিলেক্ট (নির্বাচন)** করতে হয়। DOM Selection মানে হলো, HTML পেজের কোন element নিয়ে কাজ করব, সেটা JavaScript দিয়ে খুঁজে বের করা।

### The 5 Main Selection Methods

#### 1. `getElementById()`

```js
const heading = document.getElementById("main-title");
```

Selects **one** element by its unique `id`. Returns `null` if not found.

#### 2. `getElementsByClassName()`

```js
const boxes = document.getElementsByClassName("box");
```

Selects **all** elements with a given class name. Returns a **live HTMLCollection**.

#### 3. `getElementsByTagName()`

```js
const paragraphs = document.getElementsByTagName("p");
```

Selects **all** elements with a given tag name. Returns a **live HTMLCollection**.

#### 4. `querySelector()`

```js
const firstBox = document.querySelector(".box");
```

Selects the **first** element matching any CSS selector. Returns `null` if not found.

#### 5. `querySelectorAll()`

```js
const allBoxes = document.querySelectorAll(".box");
```

Selects **all** elements matching a CSS selector. Returns a **static NodeList**.

### Example (HTML + JS)

```html
<ul id="fruits">
  <li class="fruit">Apple</li>
  <li class="fruit">Banana</li>
  <li class="fruit">Mango</li>
</ul>
```

```js
console.log(document.getElementById("fruits"));           // <ul> element
console.log(document.getElementsByClassName("fruit"));    // HTMLCollection(3)
console.log(document.getElementsByTagName("li"));         // HTMLCollection(3)
console.log(document.querySelector(".fruit"));            // first <li> Apple
console.log(document.querySelectorAll(".fruit"));         // NodeList(3)
```

### Output & Explanation

- `getElementById` gives back exactly **one node**, matched to the id `fruits` — the `<ul>` itself.
- `getElementsByClassName("fruit")` and `getElementsByTagName("li")` both give back **collections of 3 items** (Apple, Banana, Mango).
- `querySelector(".fruit")` stops at the **first match** — Apple only.
- `querySelectorAll(".fruit")` gives all 3, just like the "ElementsBy" versions, but as a **NodeList**, not an HTMLCollection.

### Difference Table

| Method                       | Returns                   | Selector Type    | Live or Static | Multiple?        |
| ---------------------------- | ------------------------- | ---------------- | -------------- | ---------------- |
| `getElementById()`         | Single Element or`null` | ID only          | N/A            | No               |
| `getElementsByClassName()` | HTMLCollection            | Class name only  | Live           | Yes              |
| `getElementsByTagName()`   | HTMLCollection            | Tag name only    | Live           | Yes              |
| `querySelector()`          | Single Element or`null` | Any CSS selector | N/A            | No (first match) |
| `querySelectorAll()`       | NodeList                  | Any CSS selector | Static         | Yes              |

### Performance

- `getElementById()` is the **fastest** selection method because IDs are indexed by the browser.
- `querySelector`/`querySelectorAll` are more flexible but slightly slower because the browser has to parse a full CSS selector string.
- For simple, single-target lookups, prefer `getElementById`. For complex/combined selectors (`"div.card > p.title"`), use `querySelector`/`querySelectorAll`.

### Best Practices

- Prefer `querySelector`/`querySelectorAll` for consistency and CSS-selector flexibility in modern code.
- Cache your selection in a variable instead of re-selecting the same element repeatedly.
- Use meaningful, unique `id`s for elements you'll select often.

### Common Mistakes

- Forgetting that `getElementsByClassName` returns a **live** collection, which can cause unexpected bugs when the DOM changes during a loop.
- Trying to call array methods like `.forEach()` directly on an `HTMLCollection` (it doesn't have `forEach` — only `NodeList` does, and only in modern browsers).
- Using `querySelector` when `getElementById` would be simpler and faster.

### Interview Questions

**Q: What is the difference between `querySelector` and `getElementById`?**
A: `getElementById` only matches by ID and returns a single element; `querySelector` accepts any CSS selector and also returns only the first match.

**Q: Is `NodeList` the same as an array?**
A: No, but it is array-like. Modern `NodeList`s support `forEach`, but not all array methods like `.map()` unless converted with `Array.from()`.

**Q: What does `getElementsByClassName` return when live updates happen?**
A: It automatically reflects any DOM changes because it's a **live** collection.

### Summary

DOM Selection is the very first step of any DOM task. `getElementById`, `getElementsByClassName`, and `getElementsByTagName` are the older, faster, tag/class/id-specific methods, while `querySelector`/`querySelectorAll` are the modern, flexible, CSS-selector-based methods.

---

## ✍️ DOM Manipulation

### 📖 Definition

DOM Manipulation means **changing** the content, structure, or attributes of elements that are already selected — such as changing text, HTML content, or values.

### 📝 বাংলা ব্যাখ্যা

Selection করার পর element এর ভেতরের লেখা বা কনটেন্ট **পরিবর্তন** করাকে DOM Manipulation বলে। যেমন — একটা বাটনে ক্লিক করলে টেক্সট বদলে যাওয়া।

### innerText vs textContent vs innerHTML

```js
const box = document.querySelector(".box");

box.innerText = "Hello";        // Sets visible text (respects CSS visibility)
box.textContent = "Hello";      // Sets raw text (ignores CSS, faster)
box.innerHTML = "<b>Hello</b>"; // Sets/parses HTML markup
```

### Difference Table

| Property        | Reads/Writes HTML tags? | Respects CSS (`display:none`)? | Performance              | Security Risk   |
| --------------- | ----------------------- | -------------------------------- | ------------------------ | --------------- |
| `innerText`   | No — plain text only   | Yes                              | Slower (triggers reflow) | Low             |
| `textContent` | No — plain text only   | No                               | Fast                     | Low             |
| `innerHTML`   | Yes — parses tags      | N/A                              | Slower (parses HTML)     | High (XSS risk) |

### Example

```html
<div id="msg" style="display:none">Hidden Text</div>
<div id="msg2">Visible <span>Text</span></div>
```

```js
console.log(document.getElementById("msg").innerText);    // "" (empty, because it's hidden)
console.log(document.getElementById("msg").textContent);  // "Hidden Text" (ignores CSS)
console.log(document.getElementById("msg2").innerText);   // "Visible Text"
console.log(document.getElementById("msg2").innerHTML);   // "Visible <span>Text</span>"
```

### Explanation

- `innerText` is **CSS-aware** — it will not return text from hidden elements.
- `textContent` is **CSS-blind** — it returns all text regardless of visibility, and is generally faster because it doesn't trigger layout calculations.
- `innerHTML` gives you the actual HTML markup as a string, including tags.

### Important Notes

- Never insert **untrusted user input** directly with `innerHTML` — this opens the door to **XSS (Cross-Site Scripting)** attacks.
- Use `textContent` when you only need plain text — it is both safer and faster.
- Use `innerHTML` only when you genuinely need to insert HTML markup, and sanitize any user-provided content first.

### Best Practices

- Prefer `textContent` for plain text insertion.
- Sanitize any dynamic content before using `innerHTML`.
- Avoid repeatedly writing to `innerHTML` inside loops (it's expensive) — build a string first, then assign once.

### Common Mistakes

- Using `innerHTML` to insert plain text (unnecessary parsing overhead and XSS risk).
- Assuming `innerText` and `textContent` always give identical results (they differ for hidden elements).
- Setting `innerHTML += ...` inside a loop, which destroys and rebuilds the entire subtree on every iteration.

### Use Cases

- Updating a counter's number → `textContent`
- Rendering a list of items with formatting (bold, links) → `innerHTML` (after sanitizing)
- Reading visible text exactly as the user sees it → `innerText`

### Interview Questions

**Q: Why is `innerHTML` considered risky?**
A: Because it parses and executes any HTML/script-like content inserted into it, which can lead to XSS attacks if the content comes from an untrusted source.

**Q: Which is faster, `textContent` or `innerText`?**
A: `textContent` is generally faster because it doesn't force the browser to recalculate layout/style, unlike `innerText`.

### Summary

`innerText`, `textContent`, and `innerHTML` all let you read/write content, but they differ in whether they respect CSS, whether they parse HTML tags, and their performance/security trade-offs. Use the least powerful tool that gets the job done — `textContent` for plain text, `innerHTML` only when markup is truly needed.

---

## 🎨 Styling the DOM

### 📖 Definition

The `style` property allows JavaScript to directly read or change the **inline CSS styles** of an element.

### 📝 বাংলা ব্যাখ্যা

`style` প্রপার্টি দিয়ে আমরা সরাসরি JavaScript থেকে কোনো element-এর CSS পরিবর্তন করতে পারি — যেমন রং, সাইজ, বর্ডার ইত্যাদি।

### Why do we use it?

Static CSS files can't react to user actions. If you want a button to change color **when clicked**, or a box to resize **when a condition is true**, you need JavaScript to modify styles dynamically.

### Syntax

```js
element.style.property = "value";
```

> ⚠️ **Note:** CSS properties with hyphens (`background-color`) become **camelCase** in JavaScript (`backgroundColor`).

### Example

```html
<div id="card">Hello</div>
```

```js
const card = document.getElementById("card");

card.style.color = "white";
card.style.backgroundColor = "#2c3e50";   // background-color → backgroundColor
card.style.fontSize = "20px";             // font-size → fontSize
card.style.width = "200px";
card.style.height = "100px";
card.style.display = "flex";
card.style.visibility = "visible";
card.style.border = "2px solid black";
card.style.padding = "10px";
card.style.margin = "20px";
```

### Output

The `<div>` becomes a 200×100px dark blue card with white centered-ready text, a black border, and spacing — all applied instantly via JavaScript.

### camelCase Reference Table

| CSS Property         | JavaScript Property |
| -------------------- | ------------------- |
| `background-color` | `backgroundColor` |
| `font-size`        | `fontSize`        |
| `border-radius`    | `borderRadius`    |
| `text-align`       | `textAlign`       |
| `margin-top`       | `marginTop`       |
| `z-index`          | `zIndex`          |

### Important Notes

- `element.style` only accesses **inline styles** (styles set directly on the element), not styles from an external CSS file. To read the *computed* style (final rendered style), use `getComputedStyle(element)`.
- Setting many styles one-by-one is less efficient than toggling a CSS **class** with `classList`.

### Best Practices

- For anything beyond 2–3 style changes, define a CSS class in your stylesheet and toggle it with `classList.add()`/`toggle()` instead of setting many `.style.x` lines.
- Use `getComputedStyle()` when you need the *actual rendered* value, not just what was set inline.

### Common Mistakes

- Writing `element.style.background-color` (invalid JS syntax — hyphens aren't allowed in property access without brackets).
- Forgetting units: `element.style.width = 200` does nothing; it must be `"200px"`.
- Overusing inline styles instead of toggling CSS classes, making code harder to maintain.

### Use Cases

- Dark mode toggle
- Highlighting an invalid form field in red
- Animating a progress bar's width

### Interview Questions

**Q: Why does `element.style.backgroundColor` use camelCase instead of a hyphen?**
A: Because hyphens are invalid in JavaScript property names; camelCase is the DOM's naming convention for multi-word CSS properties.

**Q: Does `element.style.color` return styles from an external CSS file?**
A: No — it only reflects inline styles set via the `style` attribute or JavaScript, not styles from stylesheets. Use `getComputedStyle()` for the final applied style.

### Summary

The `style` property gives direct, camelCase-based access to an element's inline CSS. It's great for quick dynamic changes but should be used sparingly compared to toggling CSS classes for larger style changes.

---

## 🏷️ Attributes

### 📖 Definition

Attributes are extra information attached to HTML tags (like `id`, `class`, `src`, `href`, `data-*`). The DOM provides methods to read, set, remove, and check these attributes.

### 📝 বাংলা ব্যাখ্যা

Attribute হলো HTML ট্যাগের ভেতরে দেওয়া অতিরিক্ত তথ্য, যেমন `id`, `class`, `src`। JavaScript দিয়ে আমরা এগুলো পড়তে, বসাতে, মুছতে বা চেক করতে পারি।

### The 4 Core Methods

```js
element.getAttribute("id");            // Read an attribute's value
element.setAttribute("id", "newId");   // Set/change an attribute
element.removeAttribute("id");         // Remove an attribute entirely
element.hasAttribute("id");            // Check if attribute exists (true/false)
```

### Example

```html
<img id="pic" src="cat.jpg" alt="A cat">
```

```js
const img = document.getElementById("pic");

console.log(img.getAttribute("src"));      // "cat.jpg"
img.setAttribute("src", "dog.jpg");        // image now points to dog.jpg
img.setAttribute("alt", "A dog");
console.log(img.hasAttribute("alt"));      // true
img.removeAttribute("alt");
console.log(img.hasAttribute("alt"));      // false
```

### Important Notes

- Many common attributes (`id`, `src`, `href`, `value`, `className`) can also be accessed as **direct properties** (`img.src`, `img.id`) — but `data-*` custom attributes should use `getAttribute`/`dataset`.
- `dataset` is a convenient shortcut for `data-*` attributes: `<div data-user-id="5">` → `element.dataset.userId` → `"5"`.

### Best Practices

- Use `dataset` for custom `data-*` attributes instead of manual `getAttribute("data-...")` calls.
- Prefer direct properties (`element.id`, `element.src`) for standard attributes when possible — they're slightly faster and more readable.

### Common Mistakes

- Confusing **properties** and **attributes** — they usually stay in sync, but not always (e.g., `input.value` vs `input.getAttribute("value")` can diverge after user typing).
- Forgetting that `hasAttribute` returns a boolean, not the value itself.

### Use Cases

- Toggling `disabled` on a form button
- Changing an image's `src` for a gallery
- Storing custom metadata with `data-*` attributes

### Interview Questions

**Q: What's the difference between a DOM property and an HTML attribute?**
A: Attributes are defined in the HTML markup and represent the *initial* value; properties are live JavaScript object fields that can change as the user interacts with the page (e.g., typing in an input updates the `value` property but not necessarily the `value` attribute).

**Q: How do you read a `data-*` attribute?**
A: Either `element.getAttribute("data-name")` or the shortcut `element.dataset.name`.

### Summary

`getAttribute`, `setAttribute`, `removeAttribute`, and `hasAttribute` are the four fundamental tools for working with HTML attributes directly through the DOM, complementing direct property access and the `dataset` API for custom data.

---

## 🧩 classList

### 📖 Definition

`classList` is a property that gives you a convenient set of methods to add, remove, toggle, and check CSS classes on an element — without manually editing the whole `class` string.

### 📝 বাংলা ব্যাখ্যা

`classList` দিয়ে সহজে কোনো element-এ CSS class যোগ, বাদ, টগল বা চেক করা যায় — পুরো class string ম্যানুয়ালি এডিট না করেই।

### The 5 Core Methods

```js
element.classList.add("active");        // Add a class
element.classList.remove("active");     // Remove a class
element.classList.toggle("active");     // Add if missing, remove if present
element.classList.contains("active");   // true/false check
element.classList.replace("old", "new"); // Replace one class with another
```

### Example

```html
<button id="btn" class="btn">Click Me</button>
```

```js
const btn = document.getElementById("btn");

btn.classList.add("btn-primary");
console.log(btn.classList.contains("btn-primary")); // true

btn.classList.toggle("active");   // adds "active" (wasn't there)
btn.classList.toggle("active");   // removes "active" (was there)

btn.classList.replace("btn-primary", "btn-secondary");
```

### Output & Explanation

- After `add`, the button's class becomes `"btn btn-primary"`.
- `toggle` flips the class on/off — perfect for things like accordion open/close states or dark mode switches.
- `replace` swaps `"btn-primary"` for `"btn-secondary"` in one call, instead of doing `remove` + `add` separately.

### Important Notes

- `classList.toggle("active", true)` — passing a second boolean argument **forces** add (`true`) or remove (`false`), instead of flipping.
- `classList` is much safer and cleaner than manually manipulating `element.className` as a raw string.

### Best Practices

- Always prefer `classList` methods over directly setting `element.className = "..."` (which risks overwriting all existing classes).
- Use `toggle()` for any on/off UI state (dark mode, active tab, open/closed menu).

### Common Mistakes

- Overwriting all classes accidentally with `element.className = "new-class"` instead of using `classList.add`.
- Forgetting that `toggle()` without a second argument **flips** state — using it when you actually meant to force-add.

### Use Cases

- Dark mode toggle button
- Highlighting the active tab/nav link
- Showing/hiding modal via a `.hidden` class

### Interview Questions

**Q: How is `classList.toggle()` different from `classList.add()`?**
A: `add()` always adds the class (no effect if already present); `toggle()` flips it — adds if missing, removes if present, unless a second boolean forces one direction.

**Q: Why avoid setting `element.className` directly?**
A: Because it replaces the *entire* class attribute string, which can accidentally remove other classes that were already on the element.

### Summary

`classList` (`add`, `remove`, `toggle`, `contains`, `replace`) is the modern, safe way to manage CSS classes dynamically, and is strongly preferred over manually editing `className` strings.

---

## 📦 DOM Collections

### 📖 Definition

When you select multiple elements, the browser returns them in a **collection** — either a `NodeList` or an `HTMLCollection`. These look like arrays but behave differently.

### 📝 বাংলা ব্যাখ্যা

একাধিক element সিলেক্ট করলে সেগুলো একটা **collection** আকারে ফেরত আসে — হয় `NodeList`, নাহলে `HTMLCollection`। দেখতে array-এর মতো হলেও এগুলো ঠিক array না।

### NodeList vs HTMLCollection

| Feature                         | NodeList                               | HTMLCollection                                                         |
| ------------------------------- | -------------------------------------- | ---------------------------------------------------------------------- |
| Returned by                     | `querySelectorAll()`, `childNodes` | `getElementsByClassName()`, `getElementsByTagName()`, `children` |
| Live or Static                  | Usually static (`querySelectorAll`)  | Always live                                                            |
| Has`forEach()`?               | Yes (modern browsers)                  | No                                                                     |
| Can contain text/comment nodes? | Yes (`childNodes`)                   | No — elements only                                                    |
| Convert to array                | `Array.from(nodeList)`               | `Array.from(htmlCollection)`                                         |

### Live vs Static

```js
const liveList = document.getElementsByClassName("item");  // LIVE
const staticList = document.querySelectorAll(".item");     // STATIC

document.body.insertAdjacentHTML("beforeend", '<div class="item">New</div>');

console.log(liveList.length);   // increases automatically
console.log(staticList.length); // stays the same (snapshot taken at query time)
```

### forEach() and Looping

```js
const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  console.log(index, item.textContent);
});

// HTMLCollection has NO forEach — convert first:
const collection = document.getElementsByClassName("item");
Array.from(collection).forEach(el => console.log(el));

// Or use a plain for loop (always works on both types):
for (let i = 0; i < collection.length; i++) {
  console.log(collection[i]);
}
```

### Important Notes

- A **live** collection automatically updates when the DOM changes; a **static** collection is a frozen snapshot.
- `childNodes` includes **text nodes** (including whitespace); `children` includes **only element nodes**.

### Best Practices

- Convert collections to real arrays with `Array.from()` or the spread operator `[...collection]` when you need array methods like `.map()`, `.filter()`, `.reduce()`.
- Be cautious looping over a **live** collection while adding/removing elements — the length changes mid-loop and can skip items.

### Common Mistakes

- Calling `.forEach()` on an `HTMLCollection` directly (it doesn't exist there).
- Looping over a live `HTMLCollection` with a `for` loop while removing elements, causing skipped iterations because indices shift.
- Confusing `children` (elements only) with `childNodes` (elements + text + comments).

### Interview Questions

**Q: What is the key difference between NodeList and HTMLCollection?**
A: NodeList can contain any node type and is usually static; HTMLCollection contains only elements and is always live.

**Q: Why might a `for` loop over a live collection skip elements?**
A: Because removing elements shrinks the live collection's length in real time, shifting indices while the loop is still iterating.

### Summary

Collections (`NodeList`, `HTMLCollection`) hold multiple selected nodes. Knowing whether a collection is live or static — and converting to a real array when needed — prevents subtle, hard-to-debug looping errors.

---

## 🧭 DOM Traversing

### 📖 Definition

DOM Traversing means **moving around the tree** from an already-selected element — going to its parent, children, or siblings — without re-querying the whole document.

### 📝 বাংলা ব্যাখ্যা

একটা element থেকে তার parent, child, বা sibling-এ যাওয়াকে DOM Traversing বলে — নতুন করে পুরো document আবার সার্চ না করেই।

### The Traversal Map (ASCII)

```
                 parentElement
                       |
     previousElementSibling — [ THIS ELEMENT ] — nextElementSibling
                       |
         firstElementChild ... lastElementChild
```

### All Traversal Properties

```js
element.parentNode;              // Parent (any node type)
element.parentElement;           // Parent (element only, or null)

element.childNodes;              // All child nodes (incl. text/comments)
element.children;                // Only child elements

element.firstChild;              // First child node (may be text)
element.lastChild;                // Last child node (may be text)
element.firstElementChild;        // First child ELEMENT
element.lastElementChild;         // Last child ELEMENT

element.nextSibling;              // Next node (may be text)
element.previousSibling;          // Previous node (may be text)
element.nextElementSibling;       // Next sibling ELEMENT
element.previousElementSibling;   // Previous sibling ELEMENT

element.closest(".card");         // Nearest ancestor (or self) matching selector
element.matches(".card");         // true/false — does THIS element match selector?
```

### Example

```html
<ul id="list">
  <li>Apple</li>
  <li id="banana">Banana</li>
  <li>Mango</li>
</ul>
```

```js
const banana = document.getElementById("banana");

console.log(banana.parentElement.id);              // "list"
console.log(banana.previousElementSibling.textContent); // "Apple"
console.log(banana.nextElementSibling.textContent);      // "Mango"
console.log(banana.closest("ul").id);               // "list"
console.log(banana.matches("li"));                  // true
```

### Explanation

- `parentElement` walks **up** one level to `<ul>`.
- `previousElementSibling`/`nextElementSibling` walk **sideways** to neighboring `<li>` tags, skipping any whitespace text nodes automatically.
- `closest("ul")` searches **upward** through ancestors (including itself) until it finds a match — extremely useful in event delegation.
- `matches("li")` just checks if the current element itself matches a selector, without moving anywhere.

### Important Notes

- Always prefer the **"Element"** variants (`nextElementSibling`, `firstElementChild`, etc.) over the plain versions (`nextSibling`, `firstChild`) to avoid accidentally landing on whitespace text nodes.
- `closest()` is one of the most powerful traversal methods — it's the backbone of event delegation patterns.

### Best Practices

- Use `closest()` inside event delegation handlers to find the actual target element, even if the click happened on a nested child (like an icon inside a button).
- Prefer `children`/`firstElementChild` family over `childNodes`/`firstChild` unless you specifically need text/comment nodes.

### Common Mistakes

- Using `firstChild` and getting an unexpected empty text node instead of the first real element.
- Forgetting `closest()` also matches the element itself, not just ancestors.

### Use Cases

- Finding the parent `<li>` of a clicked delete icon inside a to-do list
- Validating "is this click inside the modal or outside it?" using `closest()`
- Building accordion/tab components by walking between siblings

### Interview Questions

**Q: What's the difference between `children` and `childNodes`?**
A: `children` returns only element nodes; `childNodes` returns all node types, including text and comment nodes.

**Q: What does `closest()` do differently from `parentElement`?**
A: `closest()` searches upward through multiple ancestor levels (and includes the element itself) until a matching selector is found, while `parentElement` only goes up exactly one level.

### Summary

Traversal properties let you move through the DOM tree relative to an already-selected element — up to parents, down to children, sideways to siblings — with `closest()` and `matches()` providing selector-aware, ancestor-searching power.

---

## 🏗️ Creating Elements

### 📖 Definition

Rather than writing raw HTML strings, JavaScript can **build new DOM nodes programmatically** and insert them exactly where needed.

### 📝 বাংলা ব্যাখ্যা

শুধু HTML স্ট্রিং না লিখে, JavaScript দিয়ে সরাসরি নতুন DOM element তৈরি করে সঠিক জায়গায় বসানো যায়।

### Syntax & All Methods

```js
const div = document.createElement("div");        // Create an element node
const text = document.createTextNode("Hello");     // Create a text node

parent.appendChild(div);        // Add as last child (older API)
parent.append(div, "text");      // Add multiple nodes/strings as last child (modern)
parent.prepend(div);              // Add as FIRST child

referenceNode.before(div);        // Insert BEFORE reference node (as sibling)
referenceNode.after(div);         // Insert AFTER reference node (as sibling)
referenceNode.replaceWith(div);   // Replace reference node entirely

const clone = div.cloneNode(true);  // Deep clone (true = include children)

div.remove();                      // Remove element from DOM
parent.removeChild(div);           // Remove a specific child (older API)
```

### Example

```html
<ul id="list">
  <li>Apple</li>
</ul>
```

```js
const list = document.getElementById("list");

// 1. Create new element
const newItem = document.createElement("li");
newItem.textContent = "Banana";

// 2. Append it
list.appendChild(newItem);

// 3. Prepend another
const first = document.createElement("li");
first.textContent = "Mango (first!)";
list.prepend(first);

// 4. Clone an existing item
const clonedApple = list.firstElementChild.nextElementSibling.cloneNode(true);
list.append(clonedApple);

// 5. Remove an item
newItem.remove();
```

### Output

```
Mango (first!)
Apple
Apple        <-- cloned
```

(`Banana` was removed in the last step.)

### Explanation

- `createElement` + `textContent` builds a new `<li>` with text, entirely in memory (not yet on the page).
- `appendChild`/`append` attach it to the real page — nothing shows up until this step.
- `prepend` inserts at the very beginning instead of the end.
- `cloneNode(true)` copies an element **and all its children**; `cloneNode(false)` copies only the element itself, no children.
- `remove()` is the modern, simplest way to delete an element — no need to reference its parent.

### Important Notes

- `append()` can take multiple arguments, including plain strings, unlike the older `appendChild()` which only accepts a single Node.
- `replaceWith()` swaps an old node out for a new one in a single call — no need to grab the parent manually.
- Cloning does **not** copy event listeners attached via `addEventListener` — only the DOM structure and attributes.

### Best Practices

- Build elements off-DOM first (create + set text/attributes), then insert once — this minimizes reflows/repaints.
- Use `DocumentFragment` when inserting many elements at once, to avoid multiple separate reflows:

```js
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}
list.appendChild(fragment); // Only ONE reflow for all 100 items
```

### Common Mistakes

- Repeatedly calling `appendChild` inside a big loop directly on the live DOM (100 reflows instead of 1) instead of using a `DocumentFragment`.
- Forgetting that `cloneNode()` doesn't clone attached event listeners.
- Using the old `removeChild(parent, child)` pattern when the modern `element.remove()` is simpler.

### Use Cases

- Dynamically rendering a to-do list from an array of data
- Building product cards from an API response
- Cloning a template row for a table

### Interview Questions

**Q: What is the difference between `appendChild()` and `append()`?**
A: `append()` can accept multiple nodes and plain strings and has no return value; `appendChild()` accepts only a single Node argument and returns the appended node.

**Q: Does `cloneNode(true)` clone event listeners?**
A: No — it only clones the DOM structure, attributes, and content, not JavaScript event listeners attached via `addEventListener`.

**Q: Why use a `DocumentFragment`?**
A: To batch multiple DOM insertions into a single reflow/repaint, improving performance when adding many elements at once.

### Summary

Creating elements programmatically (`createElement`, `append`/`appendChild`, `prepend`, `before`/`after`, `replaceWith`, `cloneNode`, `remove`) gives full control over building and modifying the DOM tree, and using `DocumentFragment` for batch insertions is a key performance best practice.

---

## ⚡ Events

### 📖 Definition

An **event** is an action that happens in the browser — a click, a key press, a page load, a form submission. An **event listener** is a function that "listens" for that action and runs code in response.

### 📝 বাংলা ব্যাখ্যা

**Event** মানে ব্রাউজারে ঘটে যাওয়া কোনো কাজ — ক্লিক করা, কীবোর্ডে চাপ দেওয়া, পেজ লোড হওয়া ইত্যাদি। **Event Listener** হলো এমন একটা ফাংশন যেটা এই ঘটনাটার জন্য "অপেক্ষা করে" এবং ঘটলে কোড রান করে।

### Syntax

```js
element.addEventListener("eventType", handlerFunction);
element.removeEventListener("eventType", handlerFunction);
```

### Example

```html
<button id="btn">Click Me</button>
```

```js
const btn = document.getElementById("btn");

function handleClick() {
  console.log("Button was clicked!");
}

btn.addEventListener("click", handleClick);
```

### Common Event Categories

| Category                   | Example Events                                                                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| **Mouse Events**     | `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove` |
| **Keyboard Events**  | `keydown`, `keyup`, `keypress` (deprecated)                                               |
| **Form Events**      | `submit`, `input`, `change`, `focus`, `blur`                                          |
| **Window Events**    | `load`, `resize`, `scroll`, `DOMContentLoaded`                                          |
| **Clipboard Events** | `copy`, `cut`, `paste`                                                                    |

### Important Notes

- `addEventListener` allows **multiple** listeners on the same element/event, unlike the old `onclick = fn` style which overwrites previous handlers.
- Always keep a reference to your handler function if you plan to `removeEventListener` it later — anonymous inline functions can't be removed.

### Best Practices

- Prefer `addEventListener` over inline `onclick="..."` HTML attributes — it separates structure (HTML) from behavior (JS).
- Remove listeners you no longer need (especially in single-page apps) to prevent memory leaks.

### Common Mistakes

- Passing `handleClick()` instead of `handleClick` (calling it immediately instead of passing the function reference).
- Forgetting `removeEventListener` needs the exact same function reference used in `addEventListener`.

### Interview Questions

**Q: What's the difference between `onclick = fn` and `addEventListener("click", fn)`?**
A: `onclick` allows only one handler (it overwrites previous ones); `addEventListener` allows multiple handlers on the same event without conflict.

### Summary

Events let JavaScript react to user actions. `addEventListener` is the modern standard for attaching handlers, supporting multiple listeners per event and clean removal.

---

## 🎯 Event Object

### 📖 Definition

Every time an event fires, the browser automatically passes an **Event object** to the handler function, containing detailed information about what happened.

### 📝 বাংলা ব্যাখ্যা

কোনো event ঘটলেই ব্রাউজার নিজে থেকেই handler function-এ একটা **Event object** পাঠায়, যেখানে ঘটনাটার যাবতীয় বিস্তারিত তথ্য থাকে।

### Syntax & Key Properties

```js
element.addEventListener("click", function(event) {
  console.log(event.target);          // The actual element that triggered the event
  console.log(event.currentTarget);   // The element the listener is attached to
  console.log(event.type);            // "click"
  console.log(event.key);             // (for keyboard events) which key was pressed
  event.preventDefault();             // Stop the default browser action
  event.stopPropagation();            // Stop the event from bubbling further
});
```

### Example

```html
<form id="myForm">
  <input type="text" id="name">
  <button type="submit">Submit</button>
</form>
```

```js
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();  // Stop the page from reloading
  console.log("Form submitted without reload!");
});

document.addEventListener("keydown", function(e) {
  console.log("You pressed:", e.key);
});
```

### Explanation

- `event.target` is the element that was **actually clicked/interacted with** — could be a nested `<span>` inside a button.
- `event.currentTarget` is always the element the listener was **attached to** — this can differ from `target` when the event bubbles from a child.
- `preventDefault()` stops the browser's default behavior (form submission reload, link navigation, checkbox toggle) without stopping the event from continuing to bubble.
- `stopPropagation()` stops the event from continuing to travel up (or down) through the DOM tree — this is different from `preventDefault()`.

### Important Notes

- `target` vs `currentTarget` is a very common interview trap — remember: **target = who was clicked, currentTarget = who is listening.**
- `preventDefault()` and `stopPropagation()` do two completely different things and are often confused.

### Best Practices

- Always call `preventDefault()` early inside form submit handlers if you're handling submission manually (e.g., via `fetch`).
- Use `event.target` combined with `closest()` for delegation patterns.

### Common Mistakes

- Confusing `preventDefault()` (stops default browser action) with `stopPropagation()` (stops event travel).
- Assuming `event.target` and `event.currentTarget` are always the same element.

### Interview Questions

**Q: What is the difference between `event.target` and `event.currentTarget`?**
A: `target` is the actual element where the event originated; `currentTarget` is the element the event listener is currently attached to.

**Q: What does `preventDefault()` do?**
A: It cancels the browser's default action for that event (e.g., stopping a form from submitting/reloading, or a link from navigating).

### Summary

The Event object carries all context about what happened and where — `target`, `currentTarget`, `type`, `key` — plus two critical control methods, `preventDefault()` and `stopPropagation()`, for shaping exactly how your page responds.

---

## 🫧 Event Bubbling

### 📖 Definition

Event Bubbling is the process where an event, after firing on the deepest (innermost) target element, **travels upward** through each ancestor in the DOM tree, triggering any listeners along the way.

### 📝 বাংলা ব্যাখ্যা

Event Bubbling মানে হলো, কোনো ভেতরের element-এ event ঘটার পর সেটা ধাপে ধাপে **উপরের দিকে** parent, grandparent হয়ে document পর্যন্ত ভ্রমণ করে।

### Visual Diagram

```
        document
           ^
           |  (3) bubbles here last
        <div id="outer">
           ^
           |  (2) bubbles here next
        <div id="inner">
           ^
           |  (1) event STARTS here — actual click target
        <button id="btn">Click</button>
```

### Example

```html
<div id="outer">
  <div id="inner">
    <button id="btn">Click</button>
  </div>
</div>
```

```js
document.getElementById("outer").addEventListener("click", () => console.log("outer"));
document.getElementById("inner").addEventListener("click", () => console.log("inner"));
document.getElementById("btn").addEventListener("click", () => console.log("btn"));
```

**Clicking the button logs:**

```
btn
inner
outer
```

### Explanation

The click starts at `<button>` (the deepest target) and **bubbles up** through `<div id="inner">`, then `<div id="outer">`, then eventually to `document`. Each listener fires in that innermost-to-outermost order — this is the **default** behavior of almost all DOM events.

### Important Notes

- Bubbling is the **default phase** most `addEventListener` calls listen on.
- You can stop bubbling with `event.stopPropagation()` inside any handler in the chain.

### Best Practices

- Understand bubbling before attempting event delegation — delegation *relies* on bubbling.

### Common Mistakes

- Not realizing that a click on a nested `<span>` inside a `<button>` still bubbles up and triggers the button's own click listener.

### Interview Questions

**Q: What is event bubbling?**
A: The process where an event travels from the target element upward through its ancestors, triggering listeners on each ancestor along the way.

### Summary

Event bubbling makes events travel **upward** from the clicked element to the document root, forming the foundation for the event delegation pattern.

---

## 🎯 Event Capturing

### 📖 Definition

Event Capturing (also called the "capture phase") is the **opposite direction** of bubbling — the event travels **downward** from `document` to the target element, *before* the bubbling phase begins.

### 📝 বাংলা ব্যাখ্যা

Event Capturing হলো Bubbling-এর ঠিক উল্টো — event প্রথমে document থেকে **নিচের দিকে** target element পর্যন্ত যায়, তারপর bubbling phase শুরু হয়।

### Visual Diagram

```
        document
           |
           v  (1) capturing starts here
        <div id="outer">
           |
           v  (2) capturing continues
        <div id="inner">
           |
           v  (3) reaches target
        <button id="btn">Click</button>
```

### Syntax

```js
element.addEventListener("click", handler, true);  // true = capture phase
element.addEventListener("click", handler, { capture: true }); // equivalent
```

### Example

```js
document.getElementById("outer").addEventListener("click", () => console.log("outer (capture)"), true);
document.getElementById("inner").addEventListener("click", () => console.log("inner (capture)"), true);
document.getElementById("btn").addEventListener("click", () => console.log("btn (capture)"), true);
```

**Clicking the button logs:**

```
outer (capture)
inner (capture)
btn (capture)
```

### Explanation

With `true` (or `{capture: true}`) as the third argument, listeners fire in **outer-to-inner order** — the exact opposite of the bubbling example above.

### Important Notes

- The full event lifecycle for any click is: **Capture phase (top → target) → Target phase → Bubbling phase (target → top)**.
- The third argument to `addEventListener` defaults to `false` (bubbling phase) if omitted.

### Best Practices

- Capturing is rarely needed in everyday code — reach for it only when you specifically need to intercept an event *before* it reaches a deeply nested child (e.g., global click-outside-to-close logic).

### Common Mistakes

- Forgetting that most tutorials/examples use bubbling by default, and being confused when capturing-based code logs in a different order.

### Interview Questions

**Q: What are the three phases of an event's lifecycle in the DOM?**
A: Capturing phase (top-down), target phase (on the element itself), and bubbling phase (bottom-up).

**Q: How do you register a listener for the capture phase?**
A: Pass `true` or `{ capture: true }` as the third argument to `addEventListener()`.

### Summary

Capturing is the top-down phase of event propagation, occurring before bubbling. Combined, capturing and bubbling define the complete path an event takes through the DOM tree.

---

## 🪄 Event Delegation

### 📖 Definition

Event Delegation is a pattern where you attach **one single listener** to a common parent element instead of separate listeners on many child elements, relying on event bubbling and `event.target` to determine which child was actually interacted with.

### 📝 বাংলা ব্যাখ্যা

Event Delegation মানে হলো, প্রতিটা child element-এ আলাদা listener না দিয়ে, তাদের **common parent**-এ একটামাত্র listener বসানো — bubbling আর `event.target` ব্যবহার করে বোঝা যায় ঠিক কোন child-এ ক্লিক হয়েছে।

### Visual Diagram

```
   <ul id="list">        <-- ONE listener attached HERE
      ├── <li>Apple</li>
      ├── <li>Banana</li>   <-- click bubbles UP to <ul>
      └── <li>Mango</li>
```

### Real-World Example

```html
<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>
```

```js
// ❌ Without delegation — one listener PER item (wasteful, breaks for dynamically added items)
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => console.log(li.textContent));
});

// ✅ With delegation — ONE listener on the parent, works for future items too
document.getElementById("list").addEventListener("click", function(e) {
  const clickedItem = e.target.closest("li");
  if (clickedItem) {
    console.log("You clicked:", clickedItem.textContent);
  }
});

// New items added LATER still work automatically:
const newFruit = document.createElement("li");
newFruit.textContent = "Orange";
document.getElementById("list").appendChild(newFruit);
```

### Explanation

Instead of attaching listeners to every `<li>` (which also fails for items added later), we attach **one** listener to `<ul>`. When any `<li>` is clicked, the event bubbles up to `<ul>`, and `event.target.closest("li")` tells us exactly which item was clicked.

### Important Notes

- Delegation dramatically reduces memory usage on pages with hundreds/thousands of similar items (like a big table or list).
- Delegation automatically works for elements added to the DOM **after** the listener was set up — no need to re-attach anything.

### Best Practices

- Use delegation for any list/table/grid where items are added or removed dynamically.
- Always use `closest()` inside the delegated handler to correctly identify the target, even if the click landed on a nested icon/span.

### Common Mistakes

- Using `event.target` directly without `closest()`, which breaks when the click lands on a nested child element (like an icon inside the `<li>`).
- Attaching individual listeners to every row of a large dynamic table, causing memory bloat and missed listeners on newly added rows.

### Interview Questions

**Q: What problem does event delegation solve?**
A: It avoids attaching a separate listener to every individual child element, reducing memory usage and automatically supporting dynamically added elements, by relying on event bubbling and a single listener on a common ancestor.

**Q: Why use `closest()` instead of `event.target` alone in delegation?**
A: Because a click might land on a nested child (like an icon), and `closest()` reliably finds the intended ancestor element matching the selector, regardless of how deep the actual click landed.

### Summary

Event delegation leverages bubbling to manage many child elements with a **single** listener on their parent — more memory-efficient, and automatically compatible with dynamically added elements.

---

## 📄 DOMContentLoaded

### 📖 Definition

`DOMContentLoaded` is an event that fires as soon as the initial HTML has been completely parsed into the DOM — **without** waiting for images, stylesheets, or other external resources to finish loading.

### 📝 বাংলা ব্যাখ্যা

`DOMContentLoaded` তখন ঘটে যখন HTML সম্পূর্ণভাবে পার্স হয়ে DOM তৈরি হয়ে যায় — ছবি, CSS, বা অন্যান্য এক্সটার্নাল রিসোর্স লোড হওয়ার জন্য **অপেক্ষা না করেই**।

### Syntax

```js
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is fully parsed and ready!");
});

window.addEventListener("load", function() {
  console.log("Everything (images, CSS, fonts) has finished loading!");
});
```

### Difference: DOMContentLoaded vs window.onload

| Event                        | Fires When               | Waits For Images/CSS? |
| ---------------------------- | ------------------------ | --------------------- |
| `DOMContentLoaded`         | HTML parsing complete    | No                    |
| `load` (`window.onload`) | Entire page fully loaded | Yes                   |

### Explanation

If your script needs to safely select and manipulate elements, `DOMContentLoaded` is usually the right choice — it fires much earlier than `load`, so your page feels responsive sooner. Use `load` only when you specifically need to know that images/media have finished downloading (e.g., measuring an image's natural dimensions).

### Important Notes

- Placing your `<script>` tag at the very end of `<body>` (just before `</body>`) achieves a similar effect to `DOMContentLoaded` without needing the event at all.
- `defer` attribute on `<script>` tags also delays execution until after HTML parsing, similar in spirit to `DOMContentLoaded`.

### Best Practices

- Wrap DOM-manipulation code in `DOMContentLoaded` if your script is in the `<head>`.
- Prefer placing scripts at the end of `<body>` or using `defer` for cleaner, dependency-free loading.

### Common Mistakes

- Running DOM-selection code in the `<head>` without `DOMContentLoaded`, resulting in `null` because the body hasn't been parsed yet.
- Using `window.onload` when `DOMContentLoaded` would be faster and sufficient.

### Interview Questions

**Q: What's the difference between `DOMContentLoaded` and `window.onload`?**
A: `DOMContentLoaded` fires once the HTML is parsed, without waiting for images/stylesheets; `load` fires only after the entire page, including all external resources, has finished loading.

### Summary

`DOMContentLoaded` lets your script safely start manipulating the DOM as soon as HTML parsing finishes, without the extra wait for images and other external resources that `window.onload` requires.

---

## 🛠️ Mini Projects

Each of these projects is designed to combine multiple DOM concepts from this repository into a real, working feature. Build them **in order** — each one reinforces the previous one and adds a new skill.

| #  | Project                    | Key DOM Concepts Practiced                                             |
| -- | -------------------------- | ---------------------------------------------------------------------- |
| 1  | **Counter**          | Selection,`textContent`, click events                                |
| 2  | **Calculator**       | Event delegation,`innerText`, keyboard events                        |
| 3  | **To-Do App**        | `createElement`, `append`, `classList`, delegation, `remove()` |
| 4  | **Accordion**        | `classList.toggle()`, traversal (`nextElementSibling`)             |
| 5  | **FAQ Section**      | Event delegation,`closest()`, `classList`                          |
| 6  | **Modal**            | `classList`, `style.display`, `stopPropagation()`, `closest()` |
| 7  | **Tabs**             | `classList`, `dataset`, traversal, delegation                      |
| 8  | **Image Slider**     | `style` manipulation, `setInterval`, traversal                     |
| 9  | **Stopwatch**        | `setInterval`/`clearInterval`, `textContent`                     |
| 10 | **Digital Clock**    | `setInterval`, `Date` object, `textContent`                      |
| 11 | **Dark Mode Toggle** | `classList.toggle()`, `localStorage`                               |
| 12 | **Weather App**      | `fetch()`, DOM rendering from API data                               |
| 13 | **Quiz App**         | `createElement`, event delegation, scoring logic                     |
| 14 | **Shopping Cart**    | Dynamic rendering,`dataset`, event delegation, totals calculation    |
| 15 | **Expense Tracker**  | `createElement`, array + DOM sync, `remove()`                      |

### 🧮 Example Walkthrough: Counter (Beginner Project)

```html
<div class="counter">
  <button id="decrease">-</button>
  <span id="count">0</span>
  <button id="increase">+</button>
</div>
```

```js
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});
```

This tiny project alone touches **selection** (`getElementById`), **manipulation** (`textContent`), and **events** (`addEventListener`) — the three most-used DOM skills, combined.

### 🧾 Example Walkthrough: To-Do App (Intermediate Project)

```html
<input id="taskInput" placeholder="New task...">
<button id="addBtn">Add</button>
<ul id="taskList"></ul>
```

```js
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

document.getElementById("addBtn").addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  li.appendChild(deleteBtn);

  list.appendChild(li);
  input.value = "";
});

// Event delegation for delete buttons (works even for future items)
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.closest("li").remove();
  }
});
```

This project combines **creating elements**, **appending**, **event delegation**, and **removing elements** — the full manipulation lifecycle.

> 💡 **Challenge yourself:** Try building all 15 projects without looking at outside tutorials — use only this repository's explanations above.

---

## ✅ Best Practices (20)

1. Always cache DOM selections in variables instead of re-querying repeatedly.
2. Prefer `textContent` over `innerHTML` unless you specifically need to insert markup.
3. Sanitize any user-generated content before using `innerHTML`.
4. Use event delegation for lists/tables with many similar child elements.
5. Prefer `addEventListener` over inline `onclick="..."` HTML attributes.
6. Use `classList` methods instead of manually editing `className` strings.
7. Batch multiple DOM insertions using a `DocumentFragment`.
8. Wrap DOM code in `DOMContentLoaded` if scripts are placed in `<head>`.
9. Use `closest()` inside delegated event handlers to correctly find the target.
10. Convert `NodeList`/`HTMLCollection` to real arrays (`Array.from()`) when you need `.map()`/`.filter()`.
11. Avoid inline styles for anything beyond quick, temporary changes — use CSS classes instead.
12. Remove event listeners you no longer need to avoid memory leaks.
13. Use `dataset` for custom data attributes instead of manual `getAttribute("data-...")`.
14. Debounce/throttle expensive event handlers like `scroll` and `resize`.
15. Keep JavaScript and HTML structure separate — avoid mixing logic into markup.
16. Use semantic HTML elements so your DOM tree is meaningful, not just `<div>` soup.
17. Test selection logic in the browser console before writing full functions.
18. Always check for `null` after using `querySelector`/`getElementById` on optional elements.
19. Minimize reflows by reading all layout values first, then writing changes, rather than interleaving.
20. Comment complex traversal logic — the next reader (including future you) will thank you.

---

## ⚠️ Common Mistakes (25)

1. Using `innerHTML` for plain text when `textContent` is safer and faster.
2. Forgetting `getElementsByClassName`/`getElementsByTagName` return **live** collections.
3. Calling `.forEach()` directly on an `HTMLCollection` (it doesn't exist there).
4. Confusing `childNodes` (includes text nodes) with `children` (elements only).
5. Using `firstChild` and landing on an unexpected whitespace text node instead of `firstElementChild`.
6. Passing `fn()` instead of `fn` into `addEventListener`, causing it to run immediately.
7. Forgetting `removeEventListener` needs the exact same function reference used originally.
8. Confusing `preventDefault()` (stops default action) with `stopPropagation()` (stops event travel).
9. Assuming `event.target` always equals `event.currentTarget`.
10. Overwriting all classes accidentally via `element.className = "..."`.
11. Not using `closest()` in delegated handlers, breaking on clicks to nested children.
12. Looping over a **live** collection while removing elements, causing skipped items.
13. Forgetting units when setting styles (`style.width = 200` instead of `"200px"`).
14. Writing `element.style.background-color` (invalid syntax — must be camelCase).
15. Running DOM selection code before the HTML has been parsed (missing `DOMContentLoaded`).
16. Repeatedly calling `appendChild` inside a big loop directly on the live DOM instead of using a `DocumentFragment`.
17. Assuming `cloneNode(true)` also clones attached event listeners (it does not).
18. Not checking for `null` before using a `querySelector` result, causing runtime errors.
19. Using `getElementById` with a `#` prefix (unlike `querySelector`, no `#` is needed for `getElementById`).
20. Mixing up `attribute` and `property` values, especially for form inputs like `value` and `checked`.
21. Forgetting that `querySelectorAll` returns a **static** snapshot, not a live list.
22. Using `var` in loops attaching event listeners, leading to incorrect closures (should use `let`).
23. Not debouncing `scroll`/`resize`/`input` handlers, causing performance issues.
24. Nesting too many inline styles instead of toggling a single CSS class.
25. Forgetting that `hasAttribute()` returns a boolean, not the attribute's value.

---

## 💼 Interview Questions (100+)

### 🌱 DOM Basics (Q1–Q10)

**Q1. What is the DOM?**
A: A programming interface representing an HTML document as a tree of objects that JavaScript can read and manipulate.

**Q2. Is the DOM a part of JavaScript?**
A: No, it's a separate Web API provided by the browser environment.

**Q3. What is the root node of the DOM tree?**
A: The `document` object.

**Q4. What are the main node types in the DOM?**
A: Element, text, attribute, comment, and document nodes.

**Q5. What is the difference between HTML and the DOM?**
A: HTML is static source text; the DOM is the live, in-memory tree built from parsing that HTML, which can be modified by JavaScript.

**Q6. Can whitespace create nodes in the DOM?**
A: Yes — spaces and newlines between tags can become text nodes.

**Q7. What does "Inspect Element" show compared to "View Page Source"?**
A: Inspect Element shows the current live DOM (possibly modified by JS); View Page Source shows the original server-sent HTML.

**Q8. Is the DOM specific to JavaScript only?**
A: No, DOM is a W3C standard usable from multiple programming languages, though it's most commonly used with JavaScript in browsers.

**Q9. What is a "node" in DOM terms?**
A: Any single object in the DOM tree — could be an element, text, comment, or the document itself.

**Q10. How is a sibling relationship defined in the DOM?**
A: Nodes that share the same direct parent are siblings.

### 🎯 DOM Selection (Q11–Q22)

**Q11. What does `getElementById()` return if no match is found?**
A: `null`.

**Q12. What does `querySelector()` return if no match is found?**
A: `null`.

**Q13. What type of collection does `getElementsByClassName()` return?**
A: A live `HTMLCollection`.

**Q14. What type of collection does `querySelectorAll()` return?**
A: A static `NodeList`.

**Q15. Which selection method is generally fastest?**
A: `getElementById()`, because IDs are indexed by the browser.

**Q16. Can `querySelector` use complex CSS selectors like `div.card > p.title`?**
A: Yes, it accepts any valid CSS selector.

**Q17. Does `getElementById` need a `#` prefix like CSS?**
A: No — you just pass the raw id string, e.g. `getElementById("main")`.

**Q18. How would you select the first element with class "box"?**
A: `document.querySelector(".box")`.

**Q19. How would you select all `<p>` tags on the page?**
A: `document.getElementsByTagName("p")` or `document.querySelectorAll("p")`.

**Q20. Does `querySelectorAll` update automatically if new matching elements are added later?**
A: No, it's a static snapshot taken at the moment of the call.

**Q21. What happens if you call `.length` on the result of `getElementById`?**
A: It's `undefined`, because `getElementById` returns a single element, not a collection.

**Q22. Is `getElementsByClassName` case-sensitive?**
A: Yes, class names must match exactly, including case.

### ✍️ DOM Manipulation (Q23–Q32)

**Q23. What's the main difference between `innerText` and `textContent`?**
A: `innerText` respects CSS visibility (won't return hidden text); `textContent` ignores CSS and returns all text.

**Q24. Why is `innerHTML` considered a security risk?**
A: Because it parses and can execute injected HTML/scripts, opening the door to XSS attacks with untrusted input.

**Q25. Which property is generally fastest for reading/writing plain text?**
A: `textContent`.

**Q26. How do you insert HTML markup, not just plain text, into an element?**
A: Using `innerHTML`.

**Q27. Does `textContent` trigger a layout reflow like `innerText` can?**
A: No, `textContent` is generally faster and doesn't force layout recalculation.

**Q28. What happens if you set `innerHTML` to a string containing a `<script>` tag?**
A: The script tag is inserted into the DOM but will NOT execute (browsers block scripts inserted this way for security).

**Q29. How would you safely display user-submitted text without HTML injection risk?**
A: Use `textContent` instead of `innerHTML`.

**Q30. What does `element.innerText` return for a `display:none` element?**
A: An empty string, since `innerText` respects CSS visibility.

**Q31. Can you read/write `innerHTML` on any element?**
A: Yes, on any DOM element that supports child content.

**Q32. Why should you avoid repeatedly using `innerHTML +=` inside a loop?**
A: It destroys and rebuilds the whole subtree each time, hurting performance significantly.

### 🎨 Styling (Q33–Q40)

**Q33. How do you set an element's background color via JavaScript?**
A: `element.style.backgroundColor = "red";`.

**Q34. Why is `background-color` written as `backgroundColor` in JS?**
A: Because hyphens aren't valid in JavaScript property names, so CSS properties are converted to camelCase.

**Q35. Does `element.style.color` reflect styles set in an external CSS file?**
A: No, it only reflects inline styles; use `getComputedStyle()` for the final rendered style.

**Q36. How do you get the actual computed/rendered style of an element?**
A: `window.getComputedStyle(element)`.

**Q37. What's a more maintainable alternative to setting many `.style.x` properties one by one?**
A: Define a CSS class and toggle it with `classList`.

**Q38. Does `element.style.width = 200` work correctly?**
A: No, it needs a unit string like `"200px"`.

**Q39. How would you hide an element using JavaScript?**
A: `element.style.display = "none";`.

**Q40. What's the difference between `visibility: hidden` and `display: none`?**
A: `visibility: hidden` hides the element but keeps its space in the layout; `display: none` removes it from the layout entirely.

### 🏷️ Attributes & classList (Q41–Q52)

**Q41. How do you read an attribute's value?**
A: `element.getAttribute("attrName")`.

**Q42. How do you check if an attribute exists on an element?**
A: `element.hasAttribute("attrName")`, returns a boolean.

**Q43. How do you access custom `data-*` attributes conveniently?**
A: Via the `dataset` property, e.g. `element.dataset.userId`.

**Q44. What's the difference between an HTML attribute and a DOM property?**
A: Attributes come from the markup and represent initial state; properties are live and can diverge after user interaction (e.g., typing into an input).

**Q45. How do you add a class without removing existing ones?**
A: `element.classList.add("newClass")`.

**Q46. How do you flip a class on/off with one call?**
A: `element.classList.toggle("className")`.

**Q47. How do you force-add a class regardless of its current state?**
A: `element.classList.toggle("className", true)`.

**Q48. How do you check if an element has a specific class?**
A: `element.classList.contains("className")`.

**Q49. How do you swap one class for another in a single call?**
A: `element.classList.replace("oldClass", "newClass")`.

**Q50. Why is `classList` preferred over setting `className` directly?**
A: Because `className = "..."` overwrites the entire class string, risking accidental removal of other classes.

**Q51. How do you remove an attribute entirely?**
A: `element.removeAttribute("attrName")`.

**Q52. Is `dataset.userId` linked to `data-user-id` or `data-userId` in HTML?**
A: `data-user-id` — hyphenated attribute names convert to camelCase in `dataset`.

### 📦 Collections & Traversing (Q53–Q66)

**Q53. What's the key difference between NodeList and HTMLCollection?**
A: NodeList can hold any node type and is usually static; HTMLCollection holds only elements and is always live.

**Q54. Does a NodeList have a `.forEach()` method?**
A: Yes, in modern browsers.

**Q55. Does an HTMLCollection have a `.forEach()` method?**
A: No — convert it to an array first with `Array.from()`.

**Q56. How do you convert a NodeList/HTMLCollection into a real array?**
A: `Array.from(collection)` or `[...collection]`.

**Q57. What is the difference between `children` and `childNodes`?**
A: `children` returns only element nodes; `childNodes` returns all node types including text and comments.

**Q58. How do you get an element's parent that is guaranteed to be an Element (not any node)?**
A: `element.parentElement`.

**Q59. What does `closest()` do?**
A: It searches upward through ancestors (including the element itself) for the nearest match to a given selector.

**Q60. What does `matches()` do?**
A: It checks whether the current element itself matches a given CSS selector, returning true/false.

**Q61. How do you get the next sibling element, skipping over text nodes?**
A: `element.nextElementSibling`.

**Q62. Why might `element.firstChild` unexpectedly return a text node?**
A: Because whitespace between HTML tags creates text nodes, and `firstChild` includes all node types.

**Q63. What's a common cause of skipped iterations when looping over a live collection?**
A: Removing elements during the loop shrinks the collection's length in real time, shifting indices mid-iteration.

**Q64. How would you find the nearest `.card` ancestor of a clicked icon?**
A: `event.target.closest(".card")`.

**Q65. Is `document.querySelectorAll()` result live or static?**
A: Static — it's a fixed snapshot at query time.

**Q66. How do you loop over an HTMLCollection safely?**
A: Convert it to an array first, or use a traditional `for` loop while being cautious about live-length changes.

### 🏗️ Creating Elements (Q67–Q75)

**Q67. How do you create a brand-new `<div>` element in memory?**
A: `document.createElement("div")`.

**Q68. Does `appendChild()` accept multiple nodes at once?**
A: No — only a single Node; use `append()` for multiple nodes/strings.

**Q69. What's the difference between `append()` and `appendChild()`?**
A: `append()` accepts multiple nodes/strings and returns nothing; `appendChild()` accepts only one Node and returns the appended node.

**Q70. How do you insert a new element as the very first child?**
A: `parent.prepend(newElement)`.

**Q71. How do you replace an existing element entirely with a new one?**
A: `oldElement.replaceWith(newElement)`.

**Q72. Does `cloneNode(true)` copy event listeners?**
A: No, only the DOM structure, attributes, and content.

**Q73. What's the modern way to remove an element from the DOM?**
A: `element.remove()`.

**Q74. Why use a `DocumentFragment` when inserting many elements?**
A: To batch all insertions into a single reflow instead of triggering one reflow per insertion.

**Q75. What does `cloneNode(false)` do differently from `cloneNode(true)`?**
A: `false` clones only the element itself, without its children; `true` performs a deep clone including all descendants.

### ⚡ Events & Propagation (Q76–Q90)

**Q76. What's the advantage of `addEventListener` over `onclick = fn`?**
A: It allows multiple listeners on the same event without overwriting previous ones.

**Q77. What information does the Event object provide?**
A: Details like `target`, `currentTarget`, `type`, `key`, and methods like `preventDefault()`/`stopPropagation()`.

**Q78. What is the difference between `event.target` and `event.currentTarget`?**
A: `target` is where the event actually originated; `currentTarget` is the element the listener is attached to.

**Q79. What does `preventDefault()` do?**
A: Cancels the browser's default action for that event (e.g., form submission reload, link navigation).

**Q80. What does `stopPropagation()` do?**
A: Stops the event from continuing to travel through the DOM (bubbling or capturing).

**Q81. What is event bubbling?**
A: The process where an event travels from the target element upward through its ancestors.

**Q82. What is event capturing?**
A: The process where an event travels from `document` downward to the target element, before bubbling begins.

**Q83. What are the three phases of DOM event propagation?**
A: Capturing phase, target phase, and bubbling phase.

**Q84. How do you register a listener for the capturing phase?**
A: Pass `true` or `{capture: true}` as the third argument to `addEventListener`.

**Q85. What is event delegation?**
A: Attaching a single listener to a common parent element to handle events from many children, relying on bubbling and `event.target`.

**Q86. Why is event delegation more efficient for large lists?**
A: It requires only one listener instead of one per item, reducing memory usage and automatically supporting dynamically added items.

**Q87. Why should you use `closest()` inside a delegated handler?**
A: Because the click might land on a nested child element, and `closest()` reliably finds the intended target ancestor.

**Q88. What's the default phase for `addEventListener` if the third argument is omitted?**
A: The bubbling phase (`false`/capture disabled).

**Q89. Can `stopPropagation()` be called during the capturing phase too?**
A: Yes, it stops propagation in whichever phase it's currently in.

**Q90. What happens to nested listeners if a parent's handler calls `stopPropagation()` during bubbling?**
A: Any handlers further up the ancestor chain (that haven't fired yet) will not fire.

### 📄 Loading & Misc (Q91–Q100+)

**Q91. What does `DOMContentLoaded` wait for?**
A: Only the HTML parsing to complete — not images, CSS, or other external resources.

**Q92. What does `window.onload` wait for?**
A: The entire page, including all images, stylesheets, and other resources.

**Q93. Which fires first: `DOMContentLoaded` or `load`?**
A: `DOMContentLoaded` fires first.

**Q94. What is an alternative to wrapping code in `DOMContentLoaded`?**
A: Placing the `<script>` tag at the end of `<body>`, or using the `defer` attribute.

**Q95. Why might `document.getElementById()` return `null` when called in the `<head>`?**
A: Because the body hasn't been parsed yet at that point in page load.

**Q96. What does the `defer` attribute do on a `<script>` tag?**
A: Delays script execution until after HTML parsing is complete, without blocking parsing.

**Q97. How do you measure how long images take to fully load?**
A: Use the `window.onload` event, since it waits for all resources including images.

**Q98. Why is `getElementById` generally the fastest DOM selection method?**
A: Browsers maintain an internal index of element IDs for instant lookup.

**Q99. What is the safest way to insert dynamic, user-provided text into the page?**
A: Use `textContent`, avoiding `innerHTML` for untrusted input.

**Q100. What is the overall purpose of the DOM API?**
A: To provide a structured, programmable interface between HTML documents and JavaScript, enabling dynamic, interactive web pages.

**Q101. What's the difference between static and live collections in one sentence?**
A: A live collection automatically updates as the DOM changes, while a static collection is a frozen snapshot taken at query time.

**Q102. Can you attach more than one event listener of the same type to one element?**
A: Yes, `addEventListener` supports multiple listeners for the same event type on the same element.

**Q103. What's the safest way to remove a specific event listener?**
A: Keep a named reference to the handler function and pass that same reference to `removeEventListener`.

---

## 🏋️ Practice Exercises

### 🟢 Beginner (30)

1. Select an element by ID and log it to the console.
2. Select all `<li>` elements using `querySelectorAll`.
3. Change a `<h1>`'s text using `textContent`.
4. Change a `<div>`'s background color using `.style`.
5. Add a class to a button using `classList.add`.
6. Remove a class from a `<p>` using `classList.remove`.
7. Toggle a class on click using `classList.toggle`.
8. Read an image's `src` attribute using `getAttribute`.
9. Change an image's `src` using `setAttribute`.
10. Check if a `<div>` has a `data-id` attribute using `hasAttribute`.
11. Create a new `<p>` element and append it to the body.
12. Create a `<li>` and prepend it to a `<ul>`.
13. Remove an element using `.remove()`.
14. Clone an existing element using `cloneNode(true)`.
15. Add a click event listener to a button that logs "Clicked!".
16. Add a `mouseover` event listener that changes background color.
17. Build a button that increments a counter displayed in a `<span>`.
18. Use `preventDefault()` to stop a form from submitting.
19. Log `event.target` inside a click listener.
20. Select the first element with class `.item` using `querySelector`.
21. Compare `innerText` vs `textContent` on a hidden element.
22. Use `firstElementChild` and `lastElementChild` on a list.
23. Use `nextElementSibling` to log the next item in a list.
24. Use `parentElement` to log an item's parent.
25. Build a simple show/hide toggle button using `style.display`.
26. Use `document.getElementsByTagName("p")` and log the count.
27. Build a "change text on click" button.
28. Use `classList.contains()` to check if a class exists.
29. Use `dataset` to read a custom `data-name` attribute.
30. Create three `<li>` elements in a loop and append them all.

### 🟡 Intermediate (30)

1. Build a live character counter for a text input.
2. Build a to-do list with add + delete functionality using event delegation.
3. Build an accordion using `classList.toggle` and traversal.
4. Build a tab-switcher UI using `dataset` and `classList`.
5. Build a modal window that opens/closes and closes when clicking outside.
6. Build a dark mode toggle that persists using `localStorage`.
7. Build a simple stopwatch with start/stop/reset using `setInterval`.
8. Build a digital clock updating every second.
9. Build an image gallery where clicking a thumbnail changes a big preview image.
10. Build a form validator that highlights empty required fields in red.
11. Build a dropdown menu that opens/closes on click, closing when clicking elsewhere.
12. Build a "read more/read less" text expander.
13. Build a simple star-rating widget using event delegation.
14. Build a live search filter for a list of names.
15. Build a color-picker preview box using an `<input type="color">`.
16. Build a progress bar that fills based on a button click sequence.
17. Build a quiz question renderer using `createElement` and delegation.
18. Build a simple shopping cart list with quantity +/- buttons.
19. Build a notification/toast component that auto-dismisses after 3 seconds.
20. Build a drag-free reorderable list using up/down buttons.
21. Build a password-strength checker with live feedback text.
22. Build a simple carousel/slider with next/prev buttons.
23. Build a "copy to clipboard" button using the Clipboard API.
24. Build a live word counter for a `<textarea>`.
25. Build a multi-step form wizard (Next/Back buttons).
26. Build a simple event-delegated context menu.
27. Build a "scroll to top" button that appears after scrolling down.
28. Build a temperature converter (Celsius ↔ Fahrenheit) with live updates.
29. Build a simple digital clock with an AM/PM toggle.
30. Build a nested accordion (accordion within an accordion) using traversal + delegation.

### 🔴 Advanced (20)

1. Build a full expense tracker that syncs an array of expenses to the DOM and to `localStorage`.
2. Build a weather app that fetches live data from an API and renders it dynamically.
3. Build a fully keyboard-accessible modal (trap focus inside, close on `Escape`).
4. Build an infinite-scroll list using the Intersection Observer API + DOM insertion.
5. Build a drag-and-drop to-do board (like a mini Trello) using native drag events.
6. Build a custom autocomplete/typeahead search box.
7. Build a form with real-time, field-by-field validation and error messages.
8. Build a virtualized list that only renders visible DOM rows for performance (windowing).
9. Build a theme-switcher that persists across page reloads using `localStorage` and CSS variables.
10. Build a fully event-delegated data table with sortable columns.
11. Build a custom video player UI (play/pause/seek/volume) controlling a native `<video>` element.
12. Build a nested comment thread renderer (comments with replies, dynamically created).
13. Build a multi-level dropdown navigation menu with keyboard support.
14. Build a live chat UI that appends new messages and auto-scrolls to the bottom.
15. Build a canvas-free animated progress ring updated via DOM/style changes.
16. Build a form builder that lets users add/remove custom input fields dynamically.
17. Build an image lazy-loader using Intersection Observer.
18. Build a custom toast/notification queue system (multiple stacked toasts).
19. Build a full quiz app with a timer, scoring, and a results summary screen.
20. Build a complete shopping cart with add/remove/quantity, subtotal, and tax calculation, all DOM-driven.

---

## 📋 DOM Cheat Sheet

```js
/* ===== SELECTION ===== */
document.getElementById("id")
document.getElementsByClassName("class")
document.getElementsByTagName("tag")
document.querySelector("selector")
document.querySelectorAll("selector")

/* ===== CONTENT ===== */
element.innerText
element.textContent
element.innerHTML

/* ===== STYLE ===== */
element.style.propertyName = "value"
getComputedStyle(element)

/* ===== ATTRIBUTES ===== */
element.getAttribute("attr")
element.setAttribute("attr", "value")
element.removeAttribute("attr")
element.hasAttribute("attr")
element.dataset.customName

/* ===== CLASSLIST ===== */
element.classList.add("class")
element.classList.remove("class")
element.classList.toggle("class")
element.classList.contains("class")
element.classList.replace("old", "new")

/* ===== TRAVERSAL ===== */
element.parentNode / element.parentElement
element.childNodes / element.children
element.firstChild / element.firstElementChild
element.lastChild / element.lastElementChild
element.nextSibling / element.nextElementSibling
element.previousSibling / element.previousElementSibling
element.closest("selector")
element.matches("selector")

/* ===== CREATING / REMOVING ===== */
document.createElement("tag")
document.createTextNode("text")
parent.appendChild(node)
parent.append(node1, "text", node2)
parent.prepend(node)
node.before(newNode)
node.after(newNode)
node.replaceWith(newNode)
node.cloneNode(true / false)
element.remove()
parent.removeChild(child)

/* ===== EVENTS ===== */
element.addEventListener("event", handler, useCapture)
element.removeEventListener("event", handler)
event.target
event.currentTarget
event.type
event.key
event.preventDefault()
event.stopPropagation()

/* ===== LOADING ===== */
document.addEventListener("DOMContentLoaded", handler)
window.addEventListener("load", handler)
```

---

## 📊 Method Comparison Table

| Method / Property               | Category     | Returns             | Live?  | Notes                          |
| ------------------------------- | ------------ | ------------------- | ------ | ------------------------------ |
| `getElementById()`            | Selection    | Element / null      | N/A    | Fastest single-element lookup  |
| `getElementsByClassName()`    | Selection    | HTMLCollection      | Live   | Class-based, multiple elements |
| `getElementsByTagName()`      | Selection    | HTMLCollection      | Live   | Tag-based, multiple elements   |
| `querySelector()`             | Selection    | Element / null      | N/A    | Any CSS selector, first match  |
| `querySelectorAll()`          | Selection    | NodeList            | Static | Any CSS selector, all matches  |
| `innerText`                   | Manipulation | String              | N/A    | CSS-aware, respects visibility |
| `textContent`                 | Manipulation | String              | N/A    | CSS-blind, fastest text access |
| `innerHTML`                   | Manipulation | String (HTML)       | N/A    | Parses markup, XSS risk        |
| `style.property`              | Styling      | String              | N/A    | Inline styles only, camelCase  |
| `getAttribute()`              | Attributes   | String / null       | N/A    | Reads raw attribute value      |
| `setAttribute()`              | Attributes   | undefined           | N/A    | Sets/overwrites attribute      |
| `classList.add/remove/toggle` | Classes      | undefined / boolean | N/A    | Safe class management          |
| `parentElement`               | Traversal    | Element / null      | N/A    | One level up, elements only    |
| `children`                    | Traversal    | HTMLCollection      | Live   | Elements only                  |
| `childNodes`                  | Traversal    | NodeList            | Live   | All node types                 |
| `closest()`                   | Traversal    | Element / null      | N/A    | Searches upward, incl. self    |
| `createElement()`             | Creation     | Element             | N/A    | Builds new node in memory      |
| `appendChild()`               | Creation     | Node                | N/A    | Single node only               |
| `append()`                    | Creation     | undefined           | N/A    | Multiple nodes/strings         |
| `addEventListener()`          | Events       | undefined           | N/A    | Multiple listeners supported   |
| `DOMContentLoaded`            | Loading      | Event               | N/A    | Fires after HTML parse only    |

---

## 📚 Resources

- 📘 [MDN Web Docs — Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- 📗 [JavaScript.info — Document](https://javascript.info/document)
- 📙 [freeCodeCamp](https://www.freecodecamp.org/)
- 📕 [W3Schools — JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)
- 📓 [ECMAScript Language Specification](https://tc39.es/ecma262/)

---

## 🗂️ Folder Structure

```
tour-dom/
│
├── README.md
│
├── 01-dom-basics/
│   ├── index.html
│   └── script.js
│
├── 02-dom-selection/
│   ├── index.html
│   └── script.js
│
├── 03-dom-manipulation/
│   ├── index.html
│   └── script.js
│
├── 04-styling-dom/
│   ├── index.html
│   └── script.js
│
├── 05-attributes-classlist/
│   ├── index.html
│   └── script.js
│
├── 06-dom-collections-traversing/
│   ├── index.html
│   └── script.js
│
├── 07-creating-elements/
│   ├── index.html
│   └── script.js
│
├── 08-events/
│   ├── index.html
│   └── script.js
│
├── 09-event-propagation/
│   ├── index.html
│   └── script.js
│
├── 10-event-delegation/
│   ├── index.html
│   └── script.js
│
├── mini-projects/
│   ├── counter/
│   ├── calculator/
│   ├── todo-app/
│   ├── accordion/
│   ├── faq/
│   ├── modal/
│   ├── tabs/
│   ├── image-slider/
│   ├── stopwatch/
│   ├── digital-clock/
│   ├── dark-mode/
│   ├── weather-app/
│   ├── quiz-app/
│   ├── shopping-cart/
│   └── expense-tracker/
│
└── exercises/
    ├── beginner/
    ├── intermediate/
    └── advanced/
```

---

## 🤝 Contributing

Contributions are always welcome! If you'd like to improve an explanation, fix a typo, add a new mini project, or contribute additional practice exercises:

1. **Fork** this repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit: `git commit -m "Add: your change description"`.
4. Push to your fork: `git push origin feature/your-feature-name`.
5. Open a **Pull Request** describing your changes.

> 💡 Please keep the existing structure (English + বাংলা explanation for every topic) when adding new content, so the repository stays consistent for all learners.

---

## 📄 License

This project is licensed under the **MIT License** — free to use, modify, and distribute for personal or commercial learning purposes.

---

## 👤 Author

**Minhajul Islam**

- GitHub: [@Minhajul43](https://github.com/Minhajul43)

---

<div align="center">
