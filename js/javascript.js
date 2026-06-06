const botaoTema = document.getElementById("theme-toggle");

botaoTema.onclick = function () {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        botaoTema.textContent = "Modo Escuro";
    } else {
        botaoTema.textContent = "Modo Claro";
    }
};