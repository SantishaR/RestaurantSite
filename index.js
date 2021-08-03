export const HomePage = (() => {

    // creating DOM elements
    
    const homeSection = document.createElement('div');
    const heading = document.createElement('h1');
    const paragraph = document.createElement('p');
    const headingTwo = document.createElement('h2');
    const email = document.createElement('p');
    const number = document.createElement('p');


    homeSection.classList.add('content-section');
    
    heading.textContent = 'Sky Dining';
    paragraph.textContent = 'Fine dining at its highest!';
    headingTwo.textContent = 'Contact Us';
    email.textContent = 'info@skydining.co.za';
    number.textContent = '011-254-8545';


// append elements to parent div
    
    section.appendChild(heading);
    section.appendChild(paragraph);
    section.appendChild(headingTwo);
    section.appendChild(email);
    section.appendChild(number);

   
    return {homeSection}

})();