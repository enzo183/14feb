
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Tu es sûre ?",
    "Vraiemnt sûre ??",
    "Es-tu malade ? Tu te sens bien ?",
    "P'tit Coeur s'il te plaît...",
    "Réfléchis juste un peu !",
    "Si tu dis non j'vais être triste...",
    "Je vais être très triste...",
    "Je vais être très très très triste...",
    "D'accord j'arrête de demander..",
    "J'rigole dis oui s'teu plaît! ❤️"
];

let messageIndex = 0;


}
document.addEventListener('DOMContentLoaded', function() {
    let noButtonClicked = false;

    document.getElementById('.no-button').addEventListener('click', function() {
        noButtonClicked = true;
       const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    });

    document.getElementById('.yes-button').addEventListener('click', function() {
        if (noButtonClicked) {
            // Rediriger vers une page si "Non" a été cliqué auparavant
            window.location.href = "yes_page.html";
        } else {
            // Rediriger vers une autre page si "Oui" est cliqué directement
            window.location.href = 'direct_yes_page.html';
        }
    });
