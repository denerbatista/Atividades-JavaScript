const prompt=require('prompt-sync')()
const figlet=require('figlet')
do{
    console.clear()
    console.log(figlet.textSync('Jokenpô', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}))
    let rounds=+prompt("Defina quantos rounds deseja jogar: ")
    let contador=[0,0]

    for(i=0;i<rounds;i++){
        const options=['PEDRA','PAPEL','TESOURA']
        const computer=Math.floor(Math.random()*3)
        console.log(`Rodada ${i+1} - Digite o número de sua escolha: 0-${options[0]}, 1-${options[1]}, 0-${options[2]}`)
        let user=+prompt()

        while(user!=0&&user!=1&&user!=2){
            console.clear()
            console.log(`Alternativa invalida escolha 0, 1 ou 2`)
            console.log(`Digite o numero de sua escolha: 0-${options[0]}, 1-${options[1]}, 2-${options[2]}`)
            user=+prompt()
        }

        if(user==computer){
            console.clear()
            console.log(`Você e o computador escolheram ${options[user]}, empate ninguém marcou ponto, Placar: computador ${contador[0]} X ${contador[1]} Jogador`)
        }else if((user==0&&computer==1)||(user==1&&computer==2)||(user==2&&computer==0)){
            console.clear()
            contador[0]++
            console.log(`${options[computer]} ganha de ${options[user]} Você perdeu, Placar: computador ${contador[0]} X ${contador[1]} Jogador`)
        }else if((user==1&&computer==0)||(user==0&&computer==2||(user==2&&computer==1))){
            console.clear()
            contador[1]++
            console.log(`${options[user]} ganha de ${options[computer]} Você ganhou, Placar: computador ${contador[0]} X ${contador[1]} Jogador`)
        }
    }  

console.clear()
if(contador[0]>contador[1]){
    console.log(figlet.textSync('Perdedor', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}))
    console.log(`Infelizmente você perdeu para o computador placar final: \nComputador  ${contador[0]} X ${contador[1]} Jogador\n`)
}else if(contador[0]<contador[1]){
    console.log(figlet.textSync('Vencedor', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}))
    console.log(`Parabéns você ganhou do computador placar final: \nComputador  ${contador[0]} X ${contador[1]} Jogador\n`)
}else{
    console.log(figlet.textSync('Empate', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}))
    console.log(`Você e o computador empataram computador placar final: \nComputador  ${contador[0]} X ${contador[1]} Jogador\n`)
}
var loop=prompt("Digite r para reiniciar ou qualquer tecla para terminar: ").toLowerCase()
}while(loop=='r')