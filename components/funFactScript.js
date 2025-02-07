(function() {
    const funFacts = [
        "Eu adoro explorar novas tecnologias.",
        "Sou fã de filosofia e livros de terror.",
        "Sempre estou buscando aprender novas tecnologias.",
        "Filmes que nos fazem refletir são os meus favoritos.",
        "Nada como uma caminhada para relaxar.",
        "Gosto de me desafiar com projetos inovadores.",
        "Busco soluções criativas para problemas complexos.",
        "Desenho e arte são formas de me expressar.",
        "Inteligência Artificial me fascina cada vez mais.",
        "Viajar me inspira a criar e explorar."
    ];

    const element = document.getElementById("fun-fact");
    let currentFact = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentText = funFacts[currentFact];

        if (isDeleting) {
            element.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentFact = (currentFact + 1) % funFacts.length;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
})();
