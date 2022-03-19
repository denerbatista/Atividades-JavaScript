//Bibliotecas Usadas
const prompt=require('prompt-sync')();
const figlet=require('figlet');
const colors=require('colors');

//Função de criação de Arte
function design(text,font,size){   
    return figlet.textSync(text, {
        font: font,
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: size,
        whitespaceBreak: false
    });
}

do{
    //Definição de nome de usuário.
    console.clear();
    const name=prompt("Digite seu nome: "); //Armazena nome do usúario.

    //Definição de quantidade de rodadas não aceita menor ou igual a 0 nem letra.
    console.clear();
    console.log(design('Jokempô','Speed',90).blue); //Gera desenho com o nome do jogo com fonte speed na cor azul.
    let rounds=+prompt(`Defina quantos Rodadas deseja jogar ${name}: `); //Variavel que armazena a quantidade de rodadas.
    console.clear();
    while(rounds<=0||isNaN(rounds)){ 
        console.clear();
        console.log(design('ERRO','ghost',90).red); //Gera desenho com palavra erro na cor vermelha com tema fantasma.
        rounds=+prompt(`Quantidade invalida ${name} digite um número maior que 0: `); //Variavel que armazena a quantidade de rodadas
    }

    //Armazenamento de jogadas e placar.
    let score=[0,0]; //score[0] armazena vitórias do computador, score[1] armazena vitórias do usuário.
    let choice=[[],[],[]]; //choice[0] armazena jogadas do computador, choice[1] armazena jogadas do usuário, choice[2] armazena resultado da rodada.

    //Dados de opções de jogadas e ação de cada uma.
    const options=[['PEDRA','PAPEL','TESOURA'],['ESMAGA','EMBRULHA','CORTA']];

    //Loop de rodadas de acordo com a quantidade escolhida.
    for(i=0;i<rounds;i++){
        //Jogada do computador e armazenamento.
        const computer=Math.floor(Math.random()*3+1); //Jogada do computador.
        choice[0].push(computer-1); //Armazena a jogada do computador convertendo 1,2 e 3 para 0,1 e 2.

        //Jogada do usúario e armazenamento.
        console.clear();
        console.log(design(`Rodada ${i+1}`,'Standard',90).blue); //Gera desenho da rodada com a contagem atual dela.
        console.log(`Digite o número de sua escolha ${name}: 1-${options[0][0]}, 2-${options[0][1]}, 3-${options[0][2]}`); //Exibe nome do usuário e as opções de jogada. 
        let user=+prompt('R: '); //jogada do usuário.
        choice[1].push(user-1); //Armazena a jogada do usuário convertendo 1,2 e 3 para 0,1 e 2.

        //Verificação de empate, derrota, vitória e opção inválida
        if(user==computer){ //Condição de empate.
            console.clear();
            choice[2].push('- EMPATOU'); //Armazena resultado de empate na rodada.
            console.log(design(`${options[0][user-1]}  X  ${options[0][computer-1]}`,'Standard',105).yellow); //Gera Desenho com as jogadas do usuário e computador na cor amarelo.
            console.log(`Você e o computador escolheram ${options[0][user-1]} - Empate ninguém marcou ponto na rodada ${i+1} - Placar: Computador ${score[0]} X ${score[1]} ${name}\n`)
            prompt('Digite qualquer tecla para continuar: ');
            console.clear();
        }else if((user==1&&computer==2)||(user==2&&computer==3)||(user==3&&computer==1)){ //Todas as condições de derrota do usuário.
            console.clear();
            score[0]++; //Armazena vitória para o computador no placar.
            choice[2].push('- Computador GANHOU'); //Armazena resultado de ganho do computador na rodada.
            console.log(design(`${options[0][user-1]}  X  ${options[0][computer-1]}`,'Standard',105).red); //Gera Desenho com as jogadas do usuário e computador na cor vermeho.
            console.log(`"${options[0][computer-1]} ${options[1][computer-1]} ${options[0][user-1]}" - Você perdeu a rodada ${i+1} - Placar: Computador ${score[0]} X ${score[1]} ${name}\n`); // Forma frase de ação da jogada de acordo com a escolha do computador e usuário, informa ao usuario que que ele perdeu a rodada e mostra o placar parcial. 
            prompt('Digite qualquer tecla para continuar: ');
            console.clear();
        }else if((user==2&&computer==1)||(user==1&&computer==3||(user==3&&computer==2))){ //Todas as condições de vitória do usuário.
            console.clear();
            score[1]++; //Armazena vitória para o usuário no placar.
            choice[2].push(`- ${name} GANHOU`); //Armazena resultado de ganho do usuário na rodada.
            console.log(design(`${options[0][user-1]}  X  ${options[0][computer-1]}`,'Standard',105).green); //Gera Desenho com as jogadas do usuário e computador na cor verde.
            console.log(`"${options[0][user-1]} ${options[1][user-1]} ${options[0][computer-1]}" - Você ganhou a rodada ${i+1} - Placar: Computador ${score[0]} X ${score[1]} ${name}\n`); // Forma frase de ação da jogada de acordo com a escolha do computador e usuário, informa ao usuario que que ele ganhou a rodada e mostra o placar parcial. 
            prompt('Digite qualquer tecla para continuar: ');
            console.clear();
        }else{ //Condição para escolha invalida do usuário.
            console.clear();
            choice[0].length=i; //Apaga jogada do computador armazenada
            choice[1].length=i;//Apaga jogada do computador armazenada
            i--; //Anula a rodada.
            console.log(design('ERRO','ghost',90).red); //Gera desenho com palavra erro na cor vermelha com tema fantasma.
            console.log(`${user} é uma alternativa invalida escolha 1, 2 ou 3\n`); //Retorna a resposta do usuário e informa quais as opções possiveis.
            prompt('Digite qualquer tecla para tentar novamente: ');
        }
    } 
    
    //Placar Final
    console.clear();
    if(score[0]>score[1]){
        console.log(design('PERDEDOR','Big Money-ne',90).red); //Gera desenho com palavra Perdedor com fonte Big Money-ne na cor vermelha.
        console.log(`Infelizmente você perdeu para o computador placar final: Computador  ${score[0]} X ${score[1]} ${name}\n`);
    }else if(score[0]<score[1]){
        console.log(design('VENCEDOR','Big Money-ne',90).green); //Gera desenho com palavra Vencedor com fonte Big Money-ne na cor verde.
        console.log(`Parabéns você ganhou do computador placar final: Computador  ${score[0]} X ${score[1]} ${name}\n`);
    }else{
        console.log(design('EMPATE','Big Money-ne',90).yellow); //Gera desenho com palavra Empate com fonte Big Money-ne na cor amarela.
        console.log(`Você e o computador empataram placar final: Computador  ${score[0]} X ${score[1]} ${name}\n`);
    }

    //Pergunta ao usúario se deseja reniciar e/ou verificar lista de rodadas.
    var loop=prompt("Digite 'R' para reiniciar, 'L' para lista de jogadas ou qualquer tecla para terminar: ").toLowerCase(); //Variavel de escolha de reiniciar ou verificar rodadas.
    console.clear();
    if(loop=='l'){ //Condição para verificar a lista de rodadas.
        console.log(design('Jokempô','Speed',90).blue); //Gera desenho com o nome do jogo com fonte speed na cor azul.
        for(i in choice[0]){
        console.log(`\nRodada ${Number(i)+1} - Computador ${options[0][choice[0][i]]} X ${options[0][choice[1][i]]} ${name} ${choice[2][i]}\n`); //Gera resumo de todas as rodadas jogadas.     
        }
        loop=prompt("Digite 'R' para reiniciar ou qualquer tecla para terminar: ").toLowerCase(); //Depois de mostrar a lista de rodadas pergunta novamente se deseja reiniciar.
    }      
}while(loop=='r');
