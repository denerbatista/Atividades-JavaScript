const prompt = require('prompt-sync')();
do{
    console.log("\nDigite abaixo valores de compra e dinheiro pago separando casas decimais com ponto não utilize virgula\n")
    let compra=parseFloat(prompt("Digite valor da compra: "))
    let dinheiro=parseFloat(prompt("Digite o valor pago:  "))
    if((dinheiro-compra)>0){
    console.log(`\nO valor do troco é: R$ ${(dinheiro-compra).toFixed(2)}\n`)
    }else if((dinheiro-compra)<0){
    console.log(`\nO valor pago não é suficiente falta R$ ${(compra-dinheiro).toFixed(2)}\n`)
    }
    reiniciar=(prompt("Digite r ou R para reiniciar ou qualquer tecla para finalizar: "))
}while(reiniciar=="r"||reiniciar=="R")
