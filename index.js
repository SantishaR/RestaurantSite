export const HomePage = (() => {

    // creating DOM elements
    
    const homeSection = document.createElement('div');
    const mainHeading = document.createElement('h1');
    const slogan = document.createElement('h3');

    const addressHead = document.createElement('h2');
    const address = document.createElement('p');

    const contactUs = document.createElement('h2');
    const email = document.createElement('p');
    const number = document.createElement('p');

    const hours = document.createElement('h2');
    const times = document.createElement('p');
    const timesTwo = document.createElement('p');

// adding page content
    homeSection.classList.add('content-section');
    
    mainHeading.textContent = 'Sky Dining';
    slogan.textContent = 'Fine dining at its highest!';

    addressHead.textContent = 'Our Address';
    address.textContent = 'Magwa Crescent, Waterfall City, Midrand';

    contactUs.textContent = 'Contact Us';
    email.textContent = 'info@skydining.co.za';
    number.textContent = '011-254-8545';

    hours.textContent = 'Opening Hours';
    times.textContent = 'Mon - Fri: 9am - 8pm';
    timesTwo.textContent = ' Sat - Sun: 9am - 10pm';


// append elements to parent div
    
homeSection.appendChild(mainHeading);
homeSection.appendChild(slogan);
homeSection.appendChild(contactUs);
homeSection.appendChild(email);
homeSection.appendChild(number);
homeSection.appendChild(hours);
homeSection.appendChild(times);
homeSection.appendChild(timesTwo);
homeSection.appendChild(addressHead);
homeSection.appendChild(address);

   
    return {homeSection}

})();