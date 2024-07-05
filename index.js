/*
1
const element = document.createElement("p");
element.innerText = "Hello this is a test";
document.body.appendChild(element);
//The node-element which is element becomes the last child of the body-element
//it gets added from the appendchild method

2
const element2 = document.createElement("p")
element2.innerText = "This is another test"
document.body.insertAdjacentElement("beforeend",element2)
//The argument should be beforeend

3
console.log(element.innerHTML + " " + element2.innerHTML)/*

/*
4 och 5
const innerHTMLOfDiv = "<div>This is a div element as a string</div>";
const body = document.querySelector("body");
body.innerHTML = innerHTMLOfDiv;
//When i do that the elements gets replaced by the new div*/


//6
const innerHTMLOfDiv = "<div>This is a div element as a string</div>";
const list = document.querySelector(".list");
list.insertAdjacentHTML("afterbegin",innerHTMLOfDiv);


//7
text = "";
for(i = 0; i<3; i++){
    text += "<p> loop test " + i + "<br> </p>";
}
list.insertAdjacentHTML("beforeend",text);

//8
console.log(list.children)
//5 items

//9
const owner = document.querySelector(".owner");
owner.innerHTML = "Anas's";

//10
const newString = document.createElement("p");
newString.innerText = "First text that has been replaced"
const toReplace = list.children[0];
list.replaceChild(newString, toReplace)


//11
const newStringMid = document.createElement("p");
newStringMid.innerText = "Middle Text has been replaced"
const toReplaceMid = list.children[2];
list.replaceChild(newStringMid, toReplaceMid)

//12
list.removeChild(list.lastElementChild)