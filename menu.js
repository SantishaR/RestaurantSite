export const MenuPage = (() => {

const menuBox = document.createElement('div');
const headOne = document.createElement('h1');
const unoderedList = document.createElement('ul');
const listOne = document.createElement('li');
const listTwo = document.createElement('li');
const listThree = document.createElement('li');
const listFour = document.createElement('li');
const pricesOne = document.createElement('span');
const pricesTwo = document.createElement('span');
const pricesThree = document.createElement('span');
const pricesFour = document.createElement('span');

headOne.textContent = 'Our Menu';
 listOne.textContent = 'Grilled Pork with salads';
 listTwo.textContent = 'Grilled Steak with Salsa';
 listThree.textContent = 'Creamy Red Pepper Pasta ';
 listFour.textContent = 'Glazed Pork Chops';
 pricesOne.textContent = 'R269.99';
 pricesTwo.textContent = 'R279.99';
 pricesThree.textContent = 'R169.99';
 pricesFour.textContent = 'R149.99';


 //Dessert Section
const headTwo = document.createElement('h1');
const unordered = document.createElement('ul');
const dessertOne =document.createElement('li');
const dessertTwo =document.createElement('li');
const dessertThree =document.createElement('li');
const secPricesOne = document.createElement('span');
const secPricesTwo= document.createElement ('span');
const secPricesThree = document.createElement('span');

headTwo.textContent = 'Dessert';
dessertOne.textContent = 'Chocolate banoffee pie';
dessertTwo.textContent = 'Vanilla banoffee pie';
dessertThree.textContent = 'Mixed berry mousse ';
secPricesOne.textContent = 'R59.90';
secPricesTwo.textContent = 'R49.99';
secPricesThree.textContent = 'R49.99';

//Drinks Section 
const headThree  = document.createElement('h1');
const unoderedlistTwo = document.createElement('ul');
const thirdListOne = document.createElement('li');
const thirdListTwo = document.createElement('li');
const thirdListThree = document.createElement('li');
const thirdListFour = document.createElement('li'); 
const thirdPricesOne = document.createElement('span');
const thirdPricesTwo = document.createElement('span');
const thirdPricesThree = document.createElement('span');
const thirdPricesFour = document.createElement('span');


headThree.textContent = 'Drinks';
thirdListOne.textContent = 'Orange juice';
thirdListTwo.textContent = 'Milkshake'
thirdListThree.textContent = 'Cafe Latte';
thirdListFour.textContent = 'Red Or White Wine';
thirdPricesOne.textContent = 'R59.99';
thirdPricesTwo.textContent = 'R49.90';
thirdPricesThree.textContent = 'R69.99';
thirdPricesFour.textContent = 'R75.99'; 



 // Appending children
 menuBox.appendChild(headOne);
 listOne.appendChild(pricesOne);
 listTwo.appendChild(pricesTwo);
 listThree.appendChild(pricesThree);
 listFour.appendChild(pricesFour);
menuBox.appendChild(unoderedList);
unoderedList.appendChild(listOne);
unoderedList.appendChild(listTwo);
unoderedList.appendChild(listThree);
unoderedList.appendChild(listFour);

menuBox.appendChild(headTwo);
dessertThree.appendChild(secPricesThree);
dessertTwo.appendChild(secPricesTwo);
dessertOne.append(secPricesOne)
unordered.appendChild(dessertThree);
unordered.appendChild(dessertTwo);
unordered.appendChild(dessertOne);
menuBox.appendChild(unordered);

menuBox.appendChild(headThree);
 thirdListOne.appendChild(thirdPricesOne);
 thirdListTwo.appendChild(thirdPricesTwo);
 thirdListThree.appendChild(thirdPricesThree);
 thirdListFour.appendChild(thirdPricesFour);
 unoderedlistTwo.appendChild(thirdListOne);
 unoderedlistTwo.appendChild(thirdListTwo);
 unoderedlistTwo.appendChild(thirdListThree);
 unoderedlistTwo.appendChild(thirdListFour);
 menuBox.appendChild(unoderedlistTwo);




// Adding Classes
menuBox.classList = 'menu-box';
headOne.classList = 'menu-heading';
unoderedList.classList = 'unordered';
listOne.classList = 'list-items';
listTwo.classList = 'list-items';
listThree.classList = 'list-items';
listFour.classList = 'list-items';
pricesOne.classList = 'prices'; 
pricesTwo.classList = 'prices';
pricesThree.classList = 'prices'; 
pricesFour.classList = 'prices'; 

headTwo.classList = 'heading';
unordered.classList = 'unordered';
dessertOne.classList = 'list-items';
dessertTwo.classList = 'list-items';
dessertThree.classList = 'list-items';
secPricesOne.classList = 'prices';
secPricesTwo.classList = 'prices';
secPricesThree.classList = 'prices';

headThree.classList = 'heading';
unoderedlistTwo.classList = 'unordered';
thirdListOne.classList = 'list-items';
thirdListTwo.classList = 'list-items';
thirdListThree.classList = 'list-items';
thirdListFour.classList = 'list-items';
thirdPricesOne.classList = 'prices';
thirdPricesTwo.classList ='prices';
thirdPricesThree.classList = 'prices';
thirdPricesFour.classList = 'prices';

    
    
return {menuBox};
})(); 