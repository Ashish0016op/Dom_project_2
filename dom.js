//parentNode
let itemList=document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
//parentElement
console.log(itemList.parentElement);
//childNode
console.log(itemList.childNodes);
//children
console.log(itemList.children);
console.log(itemList.children[1]);
//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
//lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello4';
//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
//createElement
//create a div
let newDiv=document.createElement('div');
//Add Class
newDiv.className='hello';
//add Id
newDiv.id='hello1';
//add attr
newDiv.setAttribute('titel', 'Hello Div');
//createTextNode
let newDivText=document.createTextNode('Hello world');
//add text to div
newDiv.appendChild(newDivText);
let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';
console.log(newDiv);



