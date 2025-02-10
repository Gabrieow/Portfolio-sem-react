 const projetos = [
    {
        titulo: "Pavimento",
        subtitulo: "Portal de Arquitetura e Urbanismo Sustentável.",
        imagem: "../imgs/provisorio.jpg",
        tecnologias: ["../imgs/icones-cards/html5-white.png", "../imgs/icones-cards/css-white.png", "../imgs/icones-cards/javascript-white.png"]
    },
    {
        titulo: "RPG Combat System",
        subtitulo: "Jogo RPG de Turnos.",
        imagem: "../imgs/provisorio.jpg",
        tecnologias: ["../imgs/icones-cards/csharp-white.png"]
    },
    {
        titulo: "MiAuDote!",
        subtitulo: "Portal de adoção e doação de animais domésticos.",
        imagem: "../imgs/provisorio.jpg",
        tecnologias: ["../imgs/icones-cards/html5-white.png", "../imgs/icones-cards/css-white.png", "../imgs/icones-cards/javascript-white.png"]
    },
    
  ];
  
  
  function gerarCards() {

    // pegando a div projetos-container
    const container = document.getElementById("projetos-container");
  
    projetos.forEach((projeto) => {

        // criando a div card-interativo-projetos
        const card = document.createElement("div");
        card.classList.add("card-interativo-projetos");

        // criando a img no corpo da div
        const imagem = document.createElement("img");
        imagem.src = projeto.imagem;
        imagem.classList.add("card-projetos-corpo-img");
  
        // criando o overlay
        const overlay = document.createElement("div");
        overlay.classList.add("card-overlay");
  
        // criando o titulo por cima do overlay
        const titulo = document.createElement("h2");
        titulo.innerText = projeto.titulo;
        titulo.classList.add("card-titulo");
  
        // criando o subtitulo por cima do overlay
        const subtitulo = document.createElement("h3");
        subtitulo.innerText = projeto.subtitulo;
        subtitulo.classList.add("card-subtitulo");
  
        // criando a div dos card-tecnologias em baixo do subtitulo
        const tecContainer = document.createElement("div");
        tecContainer.classList.add("card-tecnologias");
  
        projeto.tecnologias.forEach((tecSrc) => {
            const tecImg = document.createElement("img");
            tecImg.src = tecSrc;
            tecContainer.appendChild(tecImg);
      });
  
        overlay.appendChild(titulo);
        overlay.appendChild(subtitulo);
        overlay.appendChild(tecContainer);
        card.appendChild(imagem);
        card.appendChild(overlay);
        container.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", gerarCards);

  