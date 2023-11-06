let soma = 0;
let padrao =0;
let padraoClick = 1;
let testeLvl1 = 0;
let somaT = document.getElementById('soma');

somaT.innerHTML = soma;

function somar(){
    console.log('somando');
    soma = soma + padraoClick;
    somaT.innerHTML = soma;
}

setInterval(() =>{
soma = soma +1;
somaT.innerHTML = soma;
}, 1000);

function lvl1(){
    if(testeLvl1==0){
    if(soma>20){
        soma = soma -20;
    }
    padraoClick = 2;
    somaT.innerHTML = soma;
    testeLvl1 = 1;
}
}