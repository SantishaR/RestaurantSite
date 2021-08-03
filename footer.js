export const Footer = (() => {
    
    const footer = document.createElement('footer');
    const link = document.createElement ('a');
    const gitLink = document.createElement('a');
    const gitHub = document.createElement('i');
    const gitHubOne = document.createElement('i');

   
    footer.classList = 'footer-style'
    gitHub.classList = 'fab fa-github';
    gitHubOne.classList = 'fab fa-github';

        
    link.href = 'https://github.com/Rorisang07';
    gitLink.href = 'https://github.com/SantishaR';

    link.textContent = 'Developed by Rorisang '
    gitLink.textContent = '&  Santisha '


    
    link.appendChild(gitHubOne);
    gitLink.appendChild(gitHub);
    footer.appendChild(link);
    footer.appendChild(gitLink);
    
     
    return {footer};

})();