const prompt=require('prompt-sync')()
const figlet=require('figlet')
const art=require('ascii-art')
let loop
do{
    console.clear()
    let resp
    let respS=[]
    console.log(figlet.textSync('Jornada Do Herói', {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}));
    const nome=prompt("Digite seu nome Herói: ")
    const pergs=[`Primeiramente seja grato e fiél, separou seu dizimo e oferta ${nome}? `,`Pagou água e luz ${nome}?, você precisa de água e energia, principalmente pra um banho quente antes do rolê. `,`Diga com sinceridade ${nome} pagou IPTU desse ano? `,`Não gaste tudo com besteiras ${nome}, você separou a grana do mercado? `,`E o cartão de crédito ${nome}, você sabe a facada que são os juros, pagou ? `]
    const result=[`Vish desse jeito ${nome}, você não pode botar a cara na rua acerta isso pra ficar de boa,`,`Isso ainda é pouco,tem que agilizar isso ${nome}, seja mais responsável,`,`Isso ainda é pouco,tem que agilizar isso ${nome}, seja mais responsável,`,`Não está totalmente ruim você fez o mínimo esperado ${nome},`,`Vamos lá não perde o pique, só falta mais uma, não deixe pra depois ${nome},`,`Exelente ${nome}, você mais que meresse essa Pizza não perca tempo e corra pra recompensa, \nsó não gaste tudo, guarde um pouquinho para o próximo fim de semana,`]
    console.clear()
    console.log(`Grande ${nome}! Vamos conferir se todas as contas do mês foram pagas, para ir na pizzaria com a conciência limpa? \nDigite 'sim' ou 'nao':\n`)
    for(i=0,nivel=0;i<pergs.length;i++){
        resp=prompt(pergs[i]);
        respS.push(resp.toLowerCase());
        if(respS[i]=='sim'||respS[i]=='s'){
            nivel++
            console.clear()
            console.log(art.style(`Sua resposta da pergunta ${i+1} foi sim.\n`, 'green'))
            respS[i]='sim'
        }else if(respS[i]=='nao'||respS[i]=='n'){
            console.clear()
            console.log(art.style(`Sua resposta da pergunta ${i+1} foi não.\n`, 'yellow'))
            respS[i]='não'
        }else{
            console.clear()
            console.log(art.style(`A resposta ${respS[i]} é inválida, responda sim ou nao.\n`, 'red'))
            respS.length=i
            i=i-1
        }
    }
    console.clear()
    console.log(figlet.textSync(`HERÓI NIVEL ${nivel}`, {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}));
    console.log(`${result[nivel]} você pagou ${nivel} contas.\n`)
    loop=prompt('Digite "l" para listar todas as suas respostas, "r" para reiniciar ou qualquer tecla para finalizar: ').toLowerCase()
    while(loop=='l'){
        console.clear()
        console.log(`${result[nivel]} você pagou ${nivel} contas.\n\n${pergs[0]}\nResposta: ${respS[0]}\n\n${pergs[1]}\nResposta: ${respS[1]}\n\n${pergs[2]}\nResposta: ${respS[2]}\n\n${pergs[3]}\nResposta: ${respS[3]}\n\n${pergs[4]}\nResposta: ${respS[4]}\n\n`)
        loop=prompt('Digite r para reiniciar ou qualquer tecla para finalizar: ').toLowerCase()
    }
    console.clear()
}while(loop=='r')