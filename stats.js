const os = require('os');
const { freemem, totalmem } = os;
const { Mono } = require('reactor-core');
const { Flux } = require('reactor-core');
const { Operator } = require('reactor-core');

const total = parseInt(totalmem() / 1024 / 1024);
const mem = parseInt(freemem() / 1024 / 1024);
const percents = parseInt((mem / total) * 100);
const miliseconds = 5000;
const conditional = true;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function pcStats() {
    while(conditional){
        await sleep(miliseconds);
        const stats = {
            "free_memory": `${mem} MB`,
            "total_memory": `${total} MB`,
            "percent_memory": `${percents}%`
        };

        console.clear();
        console.log("========PC STATS=========");
        console.table(stats);
    };
};


// Função que representa a curva
function curve(x) {
  return x ** 2; 
}

// Função para calcular a derivada
function calculateDerivative(x) {
  return Flux.just(x) // Crie um fluxo com o valor de x
    .map(value => (f(value + 0.0001) - f(value)) / 0.0001) // Aproximação da derivada
    .next(); // Obtenha o valor calculado
}

pcStats();
