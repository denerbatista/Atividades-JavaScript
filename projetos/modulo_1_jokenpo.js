//Bibliotecas Usadas
const prompt=require('prompt-sync')();
const figlet=require('figlet');
const colors=require('colors');

//Função de criação de Arte
function design(text,font,width){   
    return figlet.textSync(text, {
        font: font,
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: width,
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
    var stop; //Variavel de cancelamento de rodadas restantes.
    console.clear();
    while(rounds<=0||isNaN(rounds)){ 
        console.clear();
        console.log(design('ERRO','ghost',90).red); //Gera desenho com palavra erro na cor vermelha com tema fantasma.
        rounds=+prompt(`Quantidade invalida ${name} digite um número maior que 0: `); //Variavel que armazena a quantidade de rodadas
    }

    //Armazenamento de jogadas e placar.
    let score=[0,0,0]; //score[0] armazena vitórias do computador, score[1] armazena vitórias do usuário, score[2] armazena empates
    let choice=[[],[],[]]; //choice[0] armazena jogadas do computador, choice[1] armazena jogadas do usuário, choice[2] armazena resultado da rodada.

    //Dados de opções de jogadas e ação de cada uma.
    const options=[['PEDRA','PAPEL','TESOURA'],['ESMAGA','EMBRULHA','CORTA'],['DERROTA','VITÓRIA','EMPATE']];

    //Loop de rodadas de acordo com a quantidade escolhida.
    for(var i=0;i<rounds;i++){
        //Jogada do computador e armazenamento.
        const computer=Math.floor(Math.random()*3+1); //Jogada do computador.
        choice[0].push(computer-1); //Armazena a jogada do computador convertendo 1,2 e 3 para 0,1 e 2.

        //Jogada do usúario e armazenamento.
        console.clear();
        console.log(design(`Rodada ${i+1}`,'Standard',90).blue); //Gera desenho da rodada com a contagem atual dela.
        console.log(`Digite o número de sua escolha ${name}: 1-${options[0][0]}, 2-${options[0][1]}, 3-${options[0][2]}`); //Exibe nome do usuário e as opções de jogada. 
        let user=prompt('R: '); //jogada do usuário.
        choice[1].push(user-1); //Armazena a jogada do usuário convertendo 1,2 e 3 para 0,1 e 2.

        //Função de resultado: mostra resultado da rodada, soma ao score do ganhador, mostra placar parcial, pergunta se deseja cancelar rodadas. 
        function result(a,b,c,d){//a score de quem recebe a pontuação: 0 computador, 1 usuario, 2 empate; b resultado: 0 derrota, 1 vitória, 2 empate; c quem ganha: computer, user, para empate qualquer um serve; d quem perde: inverso de c.
            score[a]++; //Armazena resultado no placar do vencedor ou no de empate.
            choice[2].push(`- ${options[2][b]}`); //Armazena resultado da rodada.
            console.log(`"${options[0][c-1]} ${options[1][c-1]} ${options[0][d-1]}" - ${options[2][b]} na rodada ${i+1} - Placar: Computador ${score[0]} X ${score[1]} ${name} - ${score[2]} empates\n`)
            stop=prompt(`Restam ${rounds-i-1} rodadas digite "pare" para finalizar agora ou enter para continuar: `).toLocaleLowerCase();
            console.clear();         
        }

        //Verificação de empate, derrota, vitória e opção inválida ou parar antes de terminar as rodadas.
        if((user==1&&computer==2)||(user==2&&computer==3)||(user==3&&computer==1)){ //Todas as condições de derrota do usuário.
            console.clear();
            console.log(design(`${options[0][user-1]}  X  ${options[0][computer-1]}`,'Standard',105).red); //Gera Desenho com as jogadas do usuário e computador na cor vermelho.
            result(0,0,computer,user)
        }else if((user==2&&computer==1)||(user==1&&computer==3||(user==3&&computer==2))){ //Todas as condições de vitória do usuário.
            console.clear();
            console.log(design(`${options[0][user-1]}  X  ${options[0][computer-1]}`,'Standard',105).green); //Gera Desenho com as jogadas do usuário e computador na cor verde.
            result(1,1,user,computer)
        }else if(user==computer){ //Condição de empate.
            console.clear();
            console.log(design(`${options[0][user-1]}  X  ${options[0][computer-1]}`,'Standard',105).yellow); //Gera Desenho com as jogadas do usuário e computador na cor amarelo.
            result(2,2,computer,user)
        }else{ //Condição para escolha invalida do usuário.
            console.clear();
            choice[0].length=i; //Apaga jogada do computador armazenada
            choice[1].length=i;//Apaga jogada inválida do usuário armazenada
            i--; //Anula a rodada.
            console.log(design('ERRO','ghost',90).red); //Gera desenho com palavra erro na cor vermelha com tema fantasma.
            console.log(`Sua escolha ${user} é uma alternativa invalida escolha 1, 2 ou 3\n`); //Retorna a resposta do usuário e informa quais as opções possiveis.
            prompt('Tecle ENTER para tentar novamente: ');
        }
        if(stop=="pare"){ //Condição para anular o restande das rodadas.
            break;
        }
    } 
    
    //Placar Final
    console.clear();
    if(score[0]>score[1]){
        console.log(design('PERDEDOR','Big Money-ne',90).red); //Gera desenho com palavra Perdedor com fonte Big Money-ne na cor vermelha.
        console.log(`Infelizmente você perdeu para o computador - Placar final: Computador  ${score[0]} X ${score[1]} ${name} - ${score[2]} empates\n`);
    }else if(score[0]<score[1]){
        console.log(design('VENCEDOR','Big Money-ne',90).green); //Gera desenho com palavra Vencedor com fonte Big Money-ne na cor verde.
        console.log(`Parabéns você ganhou do computador - Placar final: Computador  ${score[0]} X ${score[1]} ${name} - ${score[2]} empates\n`);
    }else{
        console.log(design('EMPATE','Big Money-ne',90).yellow); //Gera desenho com palavra Empate com fonte Big Money-ne na cor amarela.
        console.log(`Você e o computador empataram - Placar final: Computador  ${score[0]} X ${score[1]} ${name} - ${score[2]} empates\n`);
    }

    //Pergunta ao usúario se deseja reniciar e/ou verificar lista de rodadas.
    var loop=prompt("Digite 'R' para jogar novamente, 'L' para lista de jogadas ou qualquer tecla para terminar: ").toLowerCase(); //Variavel de escolha de reiniciar ou verificar rodadas.
    console.clear();
    if(loop=='l'){ //Condição para verificar a lista de rodadas.
        console.log(design('Jokempô','Speed',90).blue); //Gera desenho com o nome do jogo com fonte speed na cor azul.
        for(let j in choice[0]){
            console.log(`\nRodada ${Number(j)+1} - Computador ${options[0][choice[0][j]]} X ${options[0][choice[1][j]]} ${name} ${choice[2][j]}\n`); //Gera resumo de todas as rodadas jogadas.     
        }
        if(stop=="pare"){
            console.log(`${name} CANCELOU ${rounds-i-1} RODADAS RESTANTES.\n`) // Demonstra quantas rodadas o usuário cancelou.
        }
        loop=prompt("Digite 'R' para jogar novamente ou qualquer tecla para terminar: ").toLowerCase(); //Depois de mostrar a lista de rodadas pergunta novamente se deseja reiniciar.
    }      
}while(loop=='r');
