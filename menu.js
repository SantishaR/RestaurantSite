export const MenuPage = (() => {

const menuBox = document.createElement('section');
const headOne = document.createElement('h1');
const unoderedList = document.createElement('ul');
const list1 = document.createElement('li');
const list2 = document.createElement('li');
const list3 = document.createElement('li');
const list4 = document.createElement('li');
const prices1 = document.createElement('span');
const prices2 = document.createElement('span');
const prices3 = document.createElement('span');
const prices4 = document.createElement('span');

headOne.textContent = 'Our Menu';
 list1.textContent = 'Grilled Pork with salads';
 list2.textContent = 'Grilled Steak with Salsa';
 list3.textContent = 'Creamy Red Pepper Pasta ';
 list4.textContent = 'Glazed Pork Chops';
 prices1.textContent = 'R269.99';
 prices2.textContent = 'R279.99';
 prices3.textContent = 'R169.99';
 prices4.textContent = 'R149.99';


 //Dessert Section
const headTwo = document.createElement('h1');
const unordered = document.createElement('ul');
const dessert1 =document.createElement('li');
const dessert2 =document.createElement('li');
const dessert3 =document.createElement('li');
const secPrices1 = document.createElement('span');
const secPrices2= document.createElement ('span');
const secPrices3 = document.createElement('span');

headTwo.textContent = 'Dessert';
dessert1.textContent = 'Chocolate banoffee pie';
dessert2.textContent = 'Vanilla banoffee pie';
dessert3.textContent = 'Mixed berry mousse ';
secPrices1.textContent = 'R59.90';
secPrices2.textContent = 'R49.99';
secPrices3.textContent = 'R49.99';

//Drinks Section 
const headThree  = document.createElement('h1');
const unoderedlistTwo = document.createElement('ul');
const listTwo1 = document.createElement('li');
const listTwo2 = document.createElement('li');
const listTwo3 = document.createElement('li');
const listTwo4 = document.createElement('li'); 
const pricesTwo1 = document.createElement('span');
const pricesTwo2 = document.createElement('span');
const pricesTwo3 = document.createElement('span');
const pricesTwo4 = document.createElement('span');


headThree.textContent = 'Drinks';
listTwo1.textContent = 'Orange juice';
listTwo2.textContent = 'Milkshake'
listTwo3.textContent = 'Cafe Latte';
listTwo4.textContent = 'Red Or White Wine';
 pricesTwo1.textContent = 'R59.99';
 pricesTwo2.textContent = 'R49.90';
 pricesTwo3.textContent = 'R69.99';
 pricesTwo4.textContent = 'R75.99'; 



 // Appending children
 menuBox.appendChild(headOne);
 list1.appendChild(prices1);
 list2.appendChild(prices2);
 list3.appendChild(prices3);
 list4.appendChild(prices4);
menuBox.appendChild(unoderedList);
unoderedList.appendChild(list1);
unoderedList.appendChild(list2);
unoderedList.appendChild(list3);
unoderedList.appendChild(list4);

menuBox.appendChild(headTwo);
dessert3.appendChild(secPrices3);
dessert2.appendChild(secPrices2);
dessert1.append(secPrices1)
unordered.appendChild(dessert3);
unordered.appendChild(dessert2);
unordered.appendChild(dessert1);
menuBox.appendChild(unordered);

menuBox.appendChild(headThree);
 listTwo1.appendChild( pricesTwo1);
 listTwo2.appendChild(pricesTwo2);
 listTwo3.appendChild(pricesTwo3);
 listTwo4.appendChild(pricesTwo4);
 unoderedlistTwo.appendChild(listTwo1);
 unoderedlistTwo.appendChild(listTwo2);
 unoderedlistTwo.appendChild(listTwo3);
 unoderedlistTwo.appendChild(listTwo4);
 menuBox.appendChild(unoderedlistTwo);




// Adding Classes
menuBox.classList = 'menu-box';
headOne.classList = 'menu-heading';
unoderedList.classList = 'unordered';
list1.classList = 'list-items';
list2.classList = 'list-items';
list3.classList = 'list-items';
list4.classList = 'list-items';
prices1.classList = 'prices'; 
prices2.classList = 'prices';
prices3.classList = 'prices'; 
prices4.classList = 'prices'; 

headTwo.classList = 'heading';
unordered.classList = 'unordered';
dessert1.classList = 'list-items';
dessert2.classList = 'list-items';
dessert3.classList = 'list-items';
secPrices1.classList = 'prices';
secPrices2.classList = 'prices';
secPrices3.classList = 'prices';

headThree.classList = 'heading';
unoderedlistTwo.classList = 'unordered';
listTwo1.classList = 'list-items';
listTwo2.classList = 'list-items';
listTwo3.classList = 'list-items';
listTwo4.classList = 'list-items';
pricesTwo1.classList = 'prices';
pricesTwo2.classList ='prices';
pricesTwo3.classList = 'prices';
pricesTwo4.classList = 'prices';

    
    
return {menuBox};
})(); 