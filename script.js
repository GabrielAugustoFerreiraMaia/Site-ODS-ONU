const langToggle = document.getElementById('lang-toggle');
const flagIcon = document.getElementById('flag-icon');
let currentLanguage = 'pt-br';

langToggle.addEventListener('click', () => {
    if (currentLanguage === 'pt-br') {
        currentLanguage = 'en';
        flagIcon.src = 'images/brazil-flag.png'; // Imagem da bandeira do Brasil
    } else {
        currentLanguage = 'pt-br';
        flagIcon.src = 'images/us-flag.png'; // Imagem da bandeira dos EUA
    }

    translatePage(currentLanguage);
});

function translatePage(targetLanguage) {
    const elementsToTranslate = document.querySelectorAll('.translate');

    elementsToTranslate.forEach(element => {
        const translation = element.getAttribute(`data-${targetLanguage}`);
        element.textContent = translation;
    });
}