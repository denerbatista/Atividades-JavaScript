const prompt=require('prompt-sync')()
const figlet=require('figlet')
const colors=require('colors')
do{
    console.clear()
    const name=prompt("Digite seu nome: ")
    console.clear()
    console.log(figlet.textSync('Jokempô', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}).blue)
    let rounds=+prompt(`Defina quantos Rodadas deseja jogar ${name}: `)
    console.clear()
    while(rounds<=0||isNaN(rounds)){
        console.clear()
        console.log(figlet.textSync('ERRO', {font: 'ghost',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}).red)
        rounds=+prompt(`Quantidade invalida ${name} digite um número maior que 0: `)
        console.clear()
    }
    let contador=[0,0]
    let choice=[[],[],[]]
    for(i=0;i<rounds;i++){
        var options=[['PEDRA','PAPEL','TESOURA'],['esmaga','embrulha','corta']]
        const computer=Math.floor(Math.random()*3+1)
        choice[0].push(computer-1)
        console.clear()
        console.log(figlet.textSync(`Rodada ${i+1}`, {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}).blue)
        console.log(`Digite o número de sua escolha ${name}: 1-${options[0][0]}, 2-${options[0][1]}, 3-${options[0][2]}`)
        let user=+prompt('R: ')
        choice[1].push(user-1)
        if(user==computer){
            console.clear()
            choice[2].push('- EMPATOU')
            console.log(figlet.textSync(`${options[0][user-1]}  X  ${options[0][computer-1]}`, {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 105,whitespaceBreak: false}).yellow)
            console.log(`Você e o computador escolheram ${options[0][user-1]}, empate ninguém marcou ponto na rodada ${i+1}, Placar: Computador ${contador[0]} X ${contador[1]} ${name}\n`)
            prompt('Tecle Enter para próxima rodada: ')
            console.clear()
        }else if((user==1&&computer==2)||(user==2&&computer==3)||(user==3&&computer==1)){
            console.clear()
            contador[0]++
            choice[2].push('- Computador GANHOU')
            console.log(figlet.textSync(`${options[0][user-1]}  X  ${options[0][computer-1]}`, {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 105,whitespaceBreak: false}).red)
            console.log(`${options[0][computer-1]} ${options[1][computer-1]} ${options[0][user-1]} Você perdeu a rodada ${i+1}, Placar: Computador ${contador[0]} X ${contador[1]} ${name}\n`)
            prompt('Digite qualquer tecla para próxima rodada: ')
            console.clear()
        }else if((user==2&&computer==1)||(user==1&&computer==3||(user==3&&computer==2))){
            console.clear()
            contador[1]++
            choice[2].push(`- ${name} GANHOU`)
            console.log(figlet.textSync(`${options[0][user-1]}  X  ${options[0][computer-1]}`, {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 105,whitespaceBreak: false}).green)
            console.log(`${options[0][user-1]} ${options[1][user-1]} ${options[0][computer-1]} Você ganhou a rodada ${i+1}, Placar: Computador ${contador[0]} X ${contador[1]} ${name}\n`)
            prompt('Digite qualquer tecla para próxima rodada: ')
            console.clear()
        }else{
            console.clear()
            choice[1].length=i
            choice[0].length=i
            i--
            console.log(figlet.textSync('ERRO', {font: 'ghost',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}).red)
            console.log(`${user} é uma alternativa invalida escolha 1, 2 ou 3\n`)
            prompt('Digite qualquer tecla para tentar novamene: ')
        }
    }      
    console.clear()
    if(contador[0]>contador[1]){
        console.log(figlet.textSync('Perdedor', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}).red)
        console.log(`Infelizmente você perdeu para o computador placar final: \nComputador  ${contador[0]} X ${contador[1]} ${name}\n`)
    }else if(contador[0]<contador[1]){
        console.log(figlet.textSync('Vencedor', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}).green)
        console.log(`Parabéns você ganhou do computador placar final: \nComputador  ${contador[0]} X ${contador[1]} ${name}\n`)
    }else{
        console.log(figlet.textSync('Empate', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}).yellow)
        console.log(`Você e o computador empataram placar final: \nComputador  ${contador[0]} X ${contador[1]} ${name}\n`)
    }
    var loop=prompt("Digite 'r' para reiniciar, 'l' para lista de jogadas ou qualquer tecla para terminar: ").toLowerCase()
    console.clear()
    if(loop=='l'){
        for(i=0;i<choice[0].length;i++){
        console.log(`\nRodada ${i+1} - Computador ${options[0][choice[0][i]]} X ${options[0][choice[1][i]]} ${name} ${choice[2][i]}\n`)       
        }
        loop=prompt("Digite 'r' para reiniciar ou qualquer tecla para terminar: ").toLowerCase()
    }      
}while(loop=='r')
