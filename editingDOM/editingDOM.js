//Update the 'Apples' item to say 'Granny Smith Apples'
const Apples = document.querySelectorAll("li")[1];
Apples.textContent = "Granny Smith Apples";
//Remove 'Oat Milk' from the list
document.querySelectorAll("li")[3].remove();
//Add an item 'Kombucha'
const Kombucha = document.createElement("li");
Kombucha.innerHTML = "Kombucha";
const list = document.querySelector("ul");
list.appendChild(Kombucha);
//Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
let listElements = document.querySelectorAll("li");
let clearList  = document.querySelectorAll("li").length;
    for (let i = clearList - 1; i >= 0; i--){
        listElements[i].remove();
    };
ReplacementArray = ["protein bars", "almonds", "peanut butter"];
    for (let i = 0; i < ReplacementArray.length; i++) {
        let newLiList = document.createElement("li");
        newLiList.innerHTML = ReplacementArray[i];
        list.appendChild(newLiList);
    };
//Add the class 'important' to the almonds item.
let almonds = document.querySelectorAll("li")[1];
    almonds.classList = "important";