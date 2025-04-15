// Function to change the text content
function changeText() {
    document.getElementById("intro-text").textContent = "The text has been changed successfully!";
  }
  
  // Function to change CSS style
  function changeStyle() {
    const element = document.getElementById("style-text");
    element.classList.add("highlight");
  }
  
  // Function to add an element
  function addElement() {
    const container = document.getElementById("container");
    const newElement = document.createElement("p");
    newElement.textContent = "A new paragraph has been added!";
    newElement.id = "dynamic-paragraph"; // Give it an ID so we can remove it later
    container.appendChild(newElement);
  }
  
  // Function to remove the added element
  function removeElement() {
    const element = document.getElementById("dynamic-paragraph");
    if (element) {
      element.remove();
    }
  }
  