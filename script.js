
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual tipo de carro você prefere para o seu dia a dia?",
        alternativas: [
            {
                texto: "Um carro compacto e econômico para o trânsito urbano.",
                afirmacao: "Pode indicar uma pessoa prática, que valoriza a economia de combustível e a agilidade no trânsito."
            },
            {
                texto:  "Um SUV mais espaçoso e confortável, perfeito para viagens e aventuras",
                afirmacao: "Mostra alguém que aprecia conforto e estilo, possivelmente com mais necessidade de espaço."
            }    
           
        ]
    },
    {
       
            enunciado: "Quando se trata de design de carros, você prefere...?",
            alternativas: [
                {
                    texto: "Carros com um design mais moderno e inovador, com tecnologia de ponta.",
                    afirmacao: "Reflete uma pessoa antenada nas tendências, que gosta de novidades e tecnologia no veículo."
                },
                {
                    texto:  "Carros com um estilo mais clássico e atemporal, que nunca saem de moda.",
                    afirmacao: "Indica alguém com gosto por tradição e que valoriza a durabilidade de um design mais clássico."
                }    
               
            ]
        },
        {
            enunciado: "Em uma viagem longa, qual é a característica mais importante que um carro deve ter?",

            alternativas: [
                {
                    texto: "Conforto e assentos ergonômicos para longas horas de viagem.",
                    afirmacao: "Aponta para uma pessoa que prioriza o conforto e a tranquilidade durante viagens longas."
                },
                {
                    texto:    "Desempenho e potência para ter uma experiência de direção mais emocionante.",
               
                    afirmacao: "Mostra uma pessoa que busca emoção e performance, ideal para quem gosta de dirigir com mais liberdade."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();