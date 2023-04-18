//Get the header element
const el = document.getElementsByTagName("header");
console.log(el);
//Get all the section elements
const sections = document.getElementsByTagName("section");
console.log(sections);
//Get the section element with class="current"
const currentSection = document.querySelector("section.current");
console.log("This is the currentSection:", currentSection);
//Get the section that comes after the current section
const nextSection = currentSection.nextElementSibling;
    //const nextSection = document.querySelector(".current").nextElementSibling;
console.log("This is the nextSection:", nextSection);
//Get the h2 node from the section before the 'current' section
const previousSection = currentSection.previousElementSibling;
    const h2Node = previousSection.querySelector('h2');
console.log("This is the h2Node: ", h2Node);
    const h2BeforeCurrent = document.querySelector('.current').previousElementSibling.querySelector('h2');
console.log("This is the h2Node Number2: ", h2BeforeCurrent);
//Get the div that contains the section that has an h2 with a class of 'highlight'
const divContainingHighlight = document.querySelector('div.col h2.highlight').parentNode.parentNode;
    //const divWithHighlight = document.querySelector('h2.highlight').parentNode.parentNode;
console.log("This is the divContainingHighlight: ", divContainingHighlight);
//Get all the sections that contain an H2 (using a single statement);
const sectionsContainingH2 = document.querySelectorAll('section:has(h2)');
    //   const sectionsWithH2 = document.querySelectorAll("section:has(h2)");
console.log("This is the sectionsContainingH2: ", sectionsContainingH2);

