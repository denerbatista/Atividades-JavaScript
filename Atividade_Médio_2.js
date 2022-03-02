const prompt = require('prompt-sync')();
do{
    console.log("\nDigite um número e direi se é Positivo ou Negativo: ")
    let number=parseFloat(prompt())
    if(number==0){
        console.log(`\nO número 0 é invalido tente novamente!\n`)
    }else{
        if(number>0){
        console.log(`\nO número ${number} é POSITIVO !\n`)
        }else if(number<0){
        console.log(`\nO número ${number} é NEGATIVO !\n`)
        }
    }
    reiniciar=prompt("Digite r ou R para reiniciar ou qualquer tecla para finalizar: ")   
}while(reiniciar=="r"||reiniciar=="R")
