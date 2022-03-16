const prompt = require('prompt-sync')();
do{
    console.log("\nDigite um número e direi se é par ou Impar: ")
    let number=parseInt(prompt())
    if(number==0){
        console.log(`\nO número 0 é invalido tente novamente!\n`)
    }else{
        if((number%2)==0){
        console.log(`\nO número ${number} é par !\n`)
        }else if((number%2)>0){
        console.log(`\nO número ${number} é impar !\n`)
        }
    }
    reiniciar=prompt("Digite r ou R para reiniciar ou qualquer tecla para finalizar: ")   
}while(reiniciar=="r"||reiniciar=="R")
