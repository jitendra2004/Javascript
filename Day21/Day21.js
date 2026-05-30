// DOM Node Creation and Attribute Methods

const root = document.getElementById("root");

// 1. Create a Element
const heading = document.createElement("h1");
heading.innerText = "This is my new project";

// 2. Create a Text Node
const textNode = document.createTextNode("Jitendra Yadav");

// 3. Create a Attribute Node
const classAttr = document.createAttribute("class");
classAttr.value = "mohan";
heading.setAttributeNode(classAttr);


// Accessing Attributes
// 1. getAttribute()
console.log(root.getAttribute("id"));

// 2. setAttribute()
root.setAttribute("title", "Day 21 DOM practice");

// 3. removeAttribute()
root.removeAttribute("class");

// Add Nodes to the DOM
// 1. appendChild(node)
document.body.appendChild(heading);

// 2. append(node1, node2, ...)
document.body.append(" ", textNode);

// 3. insertBefore(newNode, referenceNode)
const newItem = document.createElement("li");
newItem.innerText = "Java";
root.insertBefore(newItem, root.firstElementChild);

// 4. prepend()
const firstItem = document.createElement("li");
firstItem.innerText = "Python";
root.prepend(firstItem);

// 5. replaceChild()
const replaceItem = document.createElement("li");
replaceItem.innerText = "React";
root.replaceChild(replaceItem, root.children[1]);

// 6. Using innerHTML
const box = document.createElement("div");
box.innerHTML = "<p>Added using innerHTML</p>";
document.body.appendChild(box);

// 7. Using insertAdjacentHTML()
root.insertAdjacentHTML("beforeend", "<li>Node.js</li>");

// beforebegin: Before the element itself.
// afterbegin: Inside the element, before its first child.
// beforeend: Inside the element, after its last child.
// afterend: After the element itself.

// 8. removeChild(node)
if (root.lastElementChild) {
  root.removeChild(root.lastElementChild);
}

// 9. remove()
box.remove();
