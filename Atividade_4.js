const prompt = require('prompt-sync')();

const cardapioEntrada = ["1 - Batata frita","2 - Aimpim frito", "3 - Salgadinhos","4 - Nenhum"]  
const cardapioPrincipal = ["1 - Macarrão a Bolonhesa", "2 - Estrogonofe Vegetariano", "3 - Arroz a Grega", "4 - Nenhum"]
const cardapioBebidas = ["1 - Refrigerante","2 - Vinho","3 - Suco Natural","4 - Nenhum" ]
let nome
let pedido1 = "0"
let pedido2 = "0"
let pedido3 = "0"
let reiniciar
console.log("Bem vindo ao Restaurante Br 101\n")
nome = prompt("Qual é o seu nome ? ")
do{
    console.log(`\nOlá ${nome} Digite apenas numerais de 1 a 4 para fazer seu pedido nos cardapios a seguir:\n`) 
    console.log("Qual sua escolha para Entrada ? ")
    console.log(cardapioEntrada)
    pedido1 = prompt("Digite o numero da sua escolha: ")
    console.log("Qual sua escolha para Prato Principal ? ")
    console.log(cardapioPrincipal)
    pedido2 = prompt("Digite o numero da sua escolha: ")
    console.log("Qual sua escolha para Bebida ? ")
    console.log(cardapioBebidas)
    pedido3 = prompt("Digite o numero da sua escolha: ")
    console.log(`\nMuito bem ${nome} suas escolhas foram:\n`)
    if(pedido1 == 1){
        console.log(cardapioEntrada[0])
    } else if(pedido1 == 2){
        console.log(cardapioEntrada[1])
    }else if(pedido1 == 3){
        console.log(cardapioEntrada[2])
    }else if(pedido1 == 4){
        console.log(cardapioEntrada[3])
    }else{
        console.log("Opção Invalida")
    }
    
    if(pedido2 == 1){
        console.log(cardapioPrincipal[0])
    } else if(pedido2 == 2){
        console.log(cardapioPrincipal[1])
    }else if(pedido2 == 3){
        console.log(cardapioPrincipal[2])
    }else if(pedido2 == 4){
        console.log(cardapioPrincipal[3])
    }else{
        console.log("Opção Invalida")
    }
    
    if(pedido3 == 1){
        console.log(cardapioBebidas[0])
    } else if(pedido3 == 2){
        console.log(cardapioBebidas[1])
    }else if(pedido3 == 3){
        console.log(cardapioBebidas[2])
    }else if(pedido3 == 4){
        console.log(cardapioBebidas[3])
    }else{
        console.log("Opção Invalida")
    }
    reiniciar = prompt("Digite R ou r pra recomeçar ou qualquer tecla pra registrar pedido ")
}while(reiniciar == "r" || reiniciar == "R")

console.log("\nPedido Registrado com Sucesso")

