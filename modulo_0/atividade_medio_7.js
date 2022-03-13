const prompt = require('prompt-sync')();
do{
  let number=parseInt(prompt("Digite o número da Tabuada que deseja consultar: "))
  console.log(`\nTabuada de ${number}\n`)
  for(i=0;i<=10;i++){
    console.log(`${number} x ${i} = ${+number*i}`)  
  }
  reiniciar=prompt("Digite r ou R para consultar novamente ou qualquer tecla para finalizar: ")
  console.log()
}while(reiniciar=="r"||reiniciar=="R")
