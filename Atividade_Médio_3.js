const prompt = require('prompt-sync')();
do{
    console.log("\nDigite dois números abaixo e direi qual é o maior ou se são iguais:\n")
    let number1=parseFloat(prompt("Digite o Primeiro número: "))
    let number2=parseFloat(prompt("Digite o Segundo número: "))
    if(number1>number2){
        console.log(`\nO número ${number1} é o maior !\n`)
    }else if(number1<number2){
        console.log(`\nO número ${number2} é o maior !\n`)
    }else if(number1==number2){
        console.log("\nOs números são iguais !\n")
    }    
    reiniciar=prompt("Digite r ou R para reiniciar ou qualquer tecla para finalizar: ")   
}while(reiniciar=="r"||reiniciar=="R")
