var botaoTema = document.getElementById("theme-toggle");
var temas = ["escuro", "claro", "floresta"];
var temaAtualIndex = 0;

botaoTema.onclick = function() {
    temaAtualIndex = temaAtualIndex + 1;
    if (temaAtualIndex >= temas.length) {
        temaAtualIndex = 0;
    }
    
    var proximoTema = temas[temaAtualIndex];

    document.body.classList.remove("light-theme", "forest-theme");

    if (proximoTema === "claro") {
        document.body.classList.add("light-theme");
        botaoTema.textContent = "Tema: Claro";
    } else if (proximoTema === "floresta") {
        document.body.classList.add("forest-theme");
        botaoTema.textContent = "Tema: Floresta";
    } else {
        botaoTema.textContent = "Tema: Escuro";
    }
};

// Carrossel de imagens de fundo
var slides = document.querySelectorAll(".carousel-slide");
var currentSlideIndex = 0;

function trocarSlide() {
    if (slides.length > 0) {
        slides[currentSlideIndex].classList.remove("active");
        currentSlideIndex = currentSlideIndex + 1;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        slides[currentSlideIndex].classList.add("active");
    }
}

if (slides.length > 1) {
    setInterval(trocarSlide, 5000);
}

// Perguntas do Quiz
var quizData = [
    {
        question: "Qual o principal objetivo do sistema ForestEye?",
        options: ["Comercializar créditos de carbono", "Mapear riscos ambientais e desmatamento em tempo real", "Desenvolver softwares de jogos florestais", "Automatizar tratores agrícolas"],
        answer: 1
    },
    {
        question: "Qual conjunto de tecnologias é usado pelo ForestEye para prever crimes ambientais?",
        options: ["Apenas fotografias aéreas antigas", "Sensores de áudio subterrâneos", "Inteligência Artificial combinada com imagens de satélites", "Termômetros analógicos de campo"],
        answer: 2
    },
    {
        question: "A tecnologia central do ForestEye Core foi inspirada em qual setor?",
        options: ["Indústria automotiva de luxo", "Sistemas de gerenciamento térmico da indústria espacial", "Painéis solares residenciais", "Engenharia naval de submarinos"],
        answer: 1
    },
    {
        question: "Quem é o principal público-alvo das soluções do ForestEye?",
        options: ["Consumidores finais de e-commerce", "Órgãos ambientais, governos, ONGs e gestores florestais", "Escolas de ensino fundamental apenas", "Empresas de aviação civil"],
        answer: 1
    },
    {
        question: "Qual benefício estratégico o ForestEye traz para a alocação de recursos?",
        options: ["Aumenta o consumo de papel nos escritórios", "Permite reagir apenas meses após o desmatamento", "Otimiza fundos públicos direcionando fiscais diretamente às áreas de risco", "Substitui completamente a necessidade de fiscais humanos"],
        answer: 2
    },
    {
        question: "O painel matinal do ForestEye classifica as áreas monitoradas em quais níveis de risco?",
        options: ["Crítico e Não Crítico", "Inexistente e Total", "Baixo, Médio e Alto", "Verde, Azul e Amarelo"],
        answer: 2
    },
    {
        question: "Como o ForestEye auxilia no combate às mudanças climáticas?",
        options: ["Reduzindo o desmatamento através da inteligência preditiva", "Controlando a ocorrência de chuvas na região", "Diminuindo artificialmente a temperatura global", "Limpando rios poluídos de forma mecânica"],
        answer: 0
    },
    {
        question: "O desmatamento ilegal afeta gravemente qual desses fatores biológicos?",
        options: ["A velocidade de conexão de rede", "A biodiversidade e o equilíbrio dos ecossistemas", "A rotação interna do núcleo da Terra", "A quantidade de ferro nos oceanos"],
        answer: 1
    },
    {
        question: "O que a equipe técnica recebe quando novos riscos são detectados no decorrer da semana?",
        options: ["Cartas físicas registradas", "Alertas e notificações em tempo real", "Relatórios impressos anuais", "Ligações telefônicas automáticas"],
        answer: 1
    },
    {
        question: "Com que frequência o painel consolida relatórios automáticos sobre a evolução dos riscos?",
        options: ["Apenas a cada década", "Diariamente a cada hora", "Ao final de cada mês", "Exclusivamente em anos bissextos"],
        answer: 2
    }
];

var currentQuestionIndex = 0;
var score = 0;

function loadQuestion() {
    var questionBox = document.getElementById("question-box");
    if (!questionBox) return;

    var currentQuiz = quizData[currentQuestionIndex];
    questionBox.innerHTML = "";

    var questionTitle = document.createElement("h3");
    questionTitle.innerText = (currentQuestionIndex + 1) + ". " + currentQuiz.question;
    questionBox.appendChild(questionTitle);

    // Loop tradicional para renderizar os botões das alternativas
    for (var i = 0; i < currentQuiz.options.length; i++) {
        var button = document.createElement("button");
        button.innerText = currentQuiz.options[i];
        button.classList.add("quiz-btn");
        
        // Armazena o índice atual em uma variável para o escopo do clique
        var indexSelecionado = i;
        button.onclick = criarManipuladorClique(indexSelecionado);
        
        questionBox.appendChild(button);
    }
}

function criarManipuladorClique(index) {
    return function() {
        checkAnswer(index);
    };
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestionIndex].answer) {
        score = score + 1;
    }

    currentQuestionIndex = currentQuestionIndex + 1;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("question-box").style.display = "none";
    var resultBox = document.getElementById("quiz-result");
    resultBox.style.display = "block";
    
    var feedbackMsg = "Boa Tentativa! Que tal ler nossa página para aprender mais?";
    if (score >= 7) {
        feedbackMsg = "Excelente! Você conhece muito sobre preservação!";
    }

    resultBox.innerHTML = "<h3>Quiz Concluído!</h3>" +
                          "<p>Você acertou <strong>" + score + "</strong> de <strong>" + quizData.length + "</strong> perguntas.</p>" +
                          "<p style='font-size: 0.95rem; margin-bottom: 20px; opacity: 0.8;'>" + feedbackMsg + "</p>" +
                          "<button onclick='restartQuiz()' class='btn' style='color: white; border: 1px solid white;'>Refazer Quiz</button>";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("question-box").style.display = "block";
    document.getElementById("quiz-result").style.display = "none";
    loadQuestion();
}

// Validação do formulário de contato
function validarFormulario(event) {
    var isValid = true;

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("mensagem");

    var errorNome = document.getElementById("error-nome");
    var errorEmail = document.getElementById("error-email");
    var errorMensagem = document.getElementById("error-mensagem");

    errorNome.innerText = "";
    errorEmail.innerText = "";
    errorMensagem.innerText = "";
    
    nome.style.borderColor = "rgba(255,255,255,0.1)";
    email.style.borderColor = "rgba(255,255,255,0.1)";
    mensagem.style.borderColor = "rgba(255,255,255,0.1)";

    if (nome.value.trim() === "") {
        errorNome.innerText = "Por favor, insira o seu nome completo.";
        nome.style.borderColor = "#ff5252";
        isValid = false;
    }

    if (email.value.trim() === "") {
        errorEmail.innerText = "O campo de e-mail institucional é obrigatório.";
        email.style.borderColor = "#ff5252";
        isValid = false;
    } else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        errorEmail.innerText = "Por favor, digite um formato de e-mail válido!'";
        email.style.borderColor = "#ff5252";
        isValid = false;
    }

    if (mensagem.value.trim() === "") {
        errorMensagem.innerText = "O campo da mensagem não pode ficar vazio. Por favor, descreva sua dúvida ou comentário.";
        mensagem.style.borderColor = "#ff5252";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert("Obrigado pelo contato! A equipe TechBuilders responderá em breve. (Verifique a caixa de spam caso não receba uma resposta em até 48 horas.)");
        document.getElementById("contact-form").reset();
    }
}

// Inicialização dos eventos ao carregar a página
window.onload = function() {
    if (document.getElementById("question-box")) {
        loadQuestion();
    }

    var form = document.getElementById("contact-form");
    if (form) {
        form.onsubmit = validarFormulario;
    }
};