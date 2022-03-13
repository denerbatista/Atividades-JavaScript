const prompt=require("prompt-sync")();
do{
    const peca1=prompt("Qual nome do produto 1? ")
    const valor1=parseFloat(prompt(`Qual o valor unitário de ${peca1}? `))
    const qtd1=+prompt(`Quantas unidades de ${peca1} que custam R$ ${valor1.toFixed(2)} cada você deseja? `)
    const peca2=prompt("Qual nome do produto 2? ")
    const valor2=parseFloat(prompt(`Qual o valor unitário de ${peca2}? `))
    const qtd2=+prompt(`Quantas unidades de ${peca2} que custam R$ ${valor2.toFixed(2)} cada você deseja? `)
    console.log(`\n${qtd1} unidades de ${peca1} = R$ ${(qtd1*valor1).toFixed(2)}\n${qtd2} unidades de ${peca2} = R$ ${(qtd2*valor2).toFixed(2)}\nTotal = R$ ${((qtd1*valor1)+(qtd2*valor2)).toFixed(2)}\n`)
    loop=prompt("Digite r ou R para reiniciar ou qualquer tecla para finalizar: ")
}while(loop=="r"||loop=="R")
