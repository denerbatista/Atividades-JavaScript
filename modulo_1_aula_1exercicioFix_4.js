const prompt=require("prompt-sync")();
do{
    const montante=+prompt("Digite quantos dias de idade possui: ")
    const ano=parseInt(montante/365)
    const meses=parseInt((montante-ano*365)/30)
    const dias=montante-(ano*365+meses*30)
    if(meses==0&&dias==0){
        console.log(`Parabéns então hoje é seu aniversário, você completa extatos ${ano} anos !`)
    }else{
        console.log(`\nVocê tem hoje ${ano} anos, ${meses} meses e ${dias} dias !\n`)
    } 
    loop=prompt("Digite r ou R para reiniciar ou qualquer tecla para finalizar: ")
}while(loop=="r"||loop=="R")
