const prompt = require('prompt-sync')();
do{
    console.log("\nDigite sua nota abaixo para avaliar é ela é A,B,C,D OU F: ")
    let nota=parseFloat(prompt())
    if(nota>0&&nota<6){
        console.log("\nSua nota é F, mais dedicação da próxima vez.\n")
    }else if(nota>=6&&nota<=7){
        console.log("\nSua nota é D, se esforce mais você é capaz !\n")
    }else if(nota>7&&nota<=8){
        console.log("\nSua nota é C, muito bem seu esforço é notável !\n")
    }else if(nota>8&&nota<=9){
        console.log("\nSua nota é B, parabéns você está muito próximo da excelência !\n")
    }else if(nota>9&&nota<=10){
        console.log("\nSua nota é A, parabéns sua dedicação tem dado frutos !\n")
    }else{
        console.log("Nota Invalida.")
    }        
    reiniciar=prompt("Digite r ou R para reiniciar ou qualquer tecla para finalizar: ")   
}while(reiniciar=="r"||reiniciar=="R")
