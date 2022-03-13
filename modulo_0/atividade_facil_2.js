const prompt = require('prompt-sync')();
do{
  console.log("Informe seus dados abaixo para cadastro: \n")
  let nome = prompt("Digite seu nome completo: ")
  let endereco = prompt("Digite seu endereço: ")
  let cep = prompt("Digite seu CEP: ")
  let telefone = prompt("Digite deu Telefone: ")
  console.log(`\nConfirme se os dados abaixo estão corretos:\n\nNome completo: ${nome}\nEndereço: ${endereco} \nCEP: ${cep}\nTelefone: ${telefone}\n`)
  confirmacao=prompt("Para confirmar os dados digite qualquer tecla ou digite R para reiniciar: ")
}while(confirmacao=="r"||confirmacao=="R")
console.log("\nDados Registrados com Sucesso!")
