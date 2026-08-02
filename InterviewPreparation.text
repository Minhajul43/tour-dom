
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
