const  prompt=require('prompt-sync')();
let moedas=[
    " 1 - DOLAR",
    " 2 - EURO",
    " 3 - LIBRA ESTERLINA",
    " 4 - DÓLAR CANADENSE",
    " 5 - PESO ARGENTINO",
    " 6 - PESO CHILENO"
]
let valores=[5.16,5.74,6.88,4.06,0.048,0.0064];
let siglas=["US$",'€','£',"C$",'$','$']
do{
    let real=parseFloat(prompt("Digite o valor em reais você quer converter ? "));
    console.log(`\nMoedas disponiveis para converção:\n${moedas}\n`);
    let resposta=prompt("Digite o numero correspondente: ");
    console.log(`\nVocê escolheu ${moedas[resposta-1]} seu valor em real corresponde a: ${siglas[resposta-1]} ${(real/valores[resposta-1]).toFixed(2)}\n`);
    reiniciar=prompt("Digite r ou R para fazer outra conversão ou qualquer tecla para finalizar: ");
}while(reiniciar=="r"||reiniciar=="R");
console.log("\nO maior valor está naquilo que não se pode comprar ou vender !\n");
