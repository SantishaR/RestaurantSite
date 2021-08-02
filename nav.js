export const Head = (() => {

    // creating DOM elements
    const navbar = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');


    navbar.classList = "nav-bar";

    home.href = "index.html";
    menu.href = "menu.html";

    home.textContent = "Home";
    menu.textContent = "Menu";
 

// append elements to parent div
    
    navbar.appendChild(home);
    navbar.appendChild(menu);

    return {navbar}


})();