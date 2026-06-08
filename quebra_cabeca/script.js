const puzzle = document.getElementById("puzzle");

const tamanho = 3;

let pecas = [
    0,1,2,
    3,4,5,
    6,7,null
];
let movimento=0;

function desenhar(){
    puzzle.innerHTML = "";

    pecas.forEach(valor => {

        const div = document.createElement("div");

        if(valor === null){
            div.classList.add("empty");
        }else{
            div.classList.add("tile");

            const x = -(valor % 3) * 150;
            const y = -Math.floor(valor / 3) * 150;

            div.style.backgroundPosition = `${x}px ${y}px`;

            div.addEventListener("click", () => mover(valor));
        }

        puzzle.appendChild(div);
    });
}

function mover(valor){

    const indicePeca = pecas.indexOf(valor);
    const indiceVazio = pecas.indexOf(null);

    const linhaPeca = Math.floor(indicePeca / tamanho);
    const colunaPeca = indicePeca % tamanho;

    const linhaVazio = Math.floor(indiceVazio / tamanho);
    const colunaVazio = indiceVazio % tamanho;

    const distancia =
        Math.abs(linhaPeca - linhaVazio) +
        Math.abs(colunaPeca - colunaVazio);

    if(distancia === 1){
        [pecas[indicePeca], pecas[indiceVazio]] =
        [pecas[indiceVazio], pecas[indicePeca]];

        movimento++;
        document.getElementById("contador").textContent = movimento;

        desenhar();
        verificarVitoria();
    }
    
}

function embaralhar(){

    for(let i = 0; i < 200; i++){

        const vazio = pecas.indexOf(null);

        const movimentos = [];

        const linha = Math.floor(vazio / tamanho);
        const coluna = vazio % tamanho;

        if(linha > 0) movimentos.push(vazio - 3);
        if(linha < 2) movimentos.push(vazio + 3);
        if(coluna > 0) movimentos.push(vazio - 1);
        if(coluna < 2) movimentos.push(vazio + 1);

        const aleatorio =
            movimentos[Math.floor(Math.random() * movimentos.length)];

        [pecas[vazio], pecas[aleatorio]] =
        [pecas[aleatorio], pecas[vazio]];
    }

    movimento = 0;
    document.getElementById("contador").textContent = movimento;

    desenhar();
}

function verificarVitoria(){

    const correto =
        [0,1,2,3,4,5,6,7,null];

    const venceu = pecas.every(
        (valor, indice) => valor === correto[indice]
    );

    if(venceu){
        setTimeout(() => {
            alert("Parabéns! Você venceu!");
        }, 100);
    }
}

desenhar();