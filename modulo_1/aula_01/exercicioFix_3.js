const prompt=require("prompt-sync")();
do{
    const ano=+prompt("Quantos anos você tem ? ")
    const meses=+prompt(`Legal então você tem ${ano} anos, e quantos meses? `)
    const dias=+prompt(`Se eu entendi direito você tem ${ano} anos e ${meses} meses e quantos dias? `)
    if(meses==0&&dias==0){
        console.log(`Parabéns então hoje é seu aniversário, você completa extatos ${(ano*365)} dias de vida !`)
    }else{
        console.log(`\nVocê tem hoje ${ano*365+meses*30+dias} dias de vida, faltam ${365-(meses*30+dias)} dias para o seu próximo aniversário !\n`)
    } 
    loop=prompt("Digite r ou R para reiniciar ou qualquer tecla para finalizar: ")
}while(loop=="r"||loop=="R")
