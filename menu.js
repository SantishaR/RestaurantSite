export const MenuPage = (() => {

    // creating DOM elements
    
    const menuContent = document.createElement('div');
    const headingOne = document.createElement('h1');
    const para = document.createElement('p');
    


    menuContent.classList.add('menu-content');
    

    headingOne.textContent = 'Our Menu';
    para.textContent = 'Hamburger';
    


// append elements to parent div
    
    
    menuContent.appendChild(headingOne);
    menuContent.appendChild(para);


   
    return {menuContent}

})();