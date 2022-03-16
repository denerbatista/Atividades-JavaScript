const prompt=require('prompt-sync')()
const figlet=require('figlet')
do{
    console.clear()
    console.log(figlet.textSync('Jokenpô', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}))
    let rounds=parseInt(prompt("Defina quantos rounds deseja jogar: "))
    let contador=[0,0]

    for(i=0;i<rounds;i++){
        const options=['0-PEDRA',' 1-PAPEL',' 2-TESOURA']
        const computer=Math.floor(Math.random()*3)
        console.log(`Rodada ${i+1} - Digite o número de sua escolha: ${options}`)
        let user=+prompt()

        while(user!=0&&user!=1&&user!=2){
            console.clear()
            console.log(`Alternativa invalida escolha 1, 2 ou 3`)
            console.log(`Digite o numero de sua escolha: ${options}`)
            user=+prompt()
        }

        if(user==computer){
            console.clear()
            console.log(`Você e o computador escolheram ${options[user-1]}, empate ninguém marcou ponto, Placar :computador ${contador[0]} X ${contador[1]} Jogador`)
        }else if(user==0&&computer==1){
            console.clear()
            contador[0]=contador[0]+1
            console.log(`Papel embrulha pedra Você perdeu, Placar: computador ${contador[0]} X ${contador[1]} Jogador`)
        }else if(user==0&&computer==2){
            console.clear()
            contador[1]=contador[1]+1
            console.log(`Pedra destroi tesoura você ganhou, Placar: computador ${contador[0]} X ${contador[1]} Jogador`)
        }else if(user==1&&computer==0){
            console.clear()
            contador[1]=contador[1]+1
            console.log(`Papel embrulha pedra Você ganhou, Placar: computador ${contador[0]} X ${contador[1]} Jogador`)
        }else if(user==1&&computer==2){
            console.clear()
            contador[0]=contador[0]+1
            console.log(`Tesoura corta papel você perdeu, Placar: computador ${contador[0]} X ${contador[1]} Jogador`)
        }else if(user==2&&computer==0){
            console.clear()
            contador[0]=contador[0]+1
            console.log(`Pedra destroi tesoura você perdeu, Placar: computador ${contador[0]} X ${contador[1]} Jogador`)
        }else if(user==2&&computer==1){
            console.clear()
            contador[1]=contador[1]+1
            console.log(`Tesoura corta papel você ganhou, Placar: computador ${contador[0]} X ${contador[1]} Jogador`)
        }  
    }
console.clear()
if(contador[0]>contador[1]){
    console.log(figlet.textSync('Perdedor', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}))
    console.log(`Infelizmemte você perdeu para o computador placar final: \nComputador  ${contador[0]} X ${contador[1]} Jogador\n`)
}else if(contador[0]<contador[1]){
    console.log(figlet.textSync('Vencedor', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}))
    console.log(`Parabéns você ganhou do computador placar final: \nComputador  ${contador[0]} X ${contador[1]} Jogador\n`)
}else{
    console.log(figlet.textSync('Empate', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}))
    console.log(`Você e o computador empataram computador placar final: \nComputador  ${contador[0]} X ${contador[1]} Jogador\n`)
}
var loop=prompt("Digite r para reiniciar ou qualquer tecla para terminar: ").toLowerCase()
}while(loop=='r') 
