const prompt = require('prompt-sync')();
do{
    console.log("\nVamos recompensar o bom trabalho do garçom?\n")
    let conta=parseFloat(prompt("Digite o valor da refeição: "))
    const taxa=0.10
    let total=parseFloat(conta*taxa+conta)
    console.log(`\nO valor total da refeição com a taxa de serviço é R$${total.toFixed(2)}\n`)
    confirmacao=prompt("Para calcular novamente digite r ou R, ou qualquer tecla para finalizar: ")
}while(confirmacao=="r"||confirmacao=="R")
console.log("\nObrigado pela preferência volte sempre !")
