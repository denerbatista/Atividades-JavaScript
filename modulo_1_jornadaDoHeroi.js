console.clear()
const prompt=require('prompt-sync')()
do{
    console.clear()
    let resp
    let respS=[]
    const nome=prompt("Digite seu nome Herói: ")
    const pergs=[`Primeiramente seja grato e fiél, separou seu dizimo e oferta ${nome}? `,`Pagou água e luz ${nome}?, você precisa de água e energia, principalmente pra um banho quente antes do rolê. `,`Diga com sinceridade ${nome} pagou IPTU desse ano? `,`Não gaste tudo com besteiras ${nome}, você separou a grana do mercado? `,`E o cartão de crédito ${nome}, você sabe a facada que são os juros, pagou ? `]
    const result=[`Vish desse jeito ${nome}, você não pode botar a cara na rua acerta isso pra ficar de boa`,`Isso ainda é pouco,tem que agilizar isso ${nome}, seja mais responsável `,`Isso ainda é pouco,tem que agilizar isso ${nome}, seja mais responsável `,`Não está totalmente ruim você fez o mínimo esperado ${nome}.`,`Vamos lá não perde o pique, só falta mais uma, não deixe pra depois ${nome}.`,`Exelente ${nome}, você mais que meresse essa Pizza não perca tempo e corra pra recompensa, só não gaste tudo, guarde um pouquinho para o próximo fim de semana.`]
    console.clear()
    console.log(`Grande ${nome}! Vamos conferir se todas as contas do mês foram pagas, para ir na pizzaria com a conciência limpa? Digite 'sim' ou 'nao' para as perguntas a seguir:\n`)
    for(i=0,nivel=0;i<pergs.length;i++){
        resp=prompt(pergs[i]);
        respS.push(resp.toLowerCase());
        if(respS[i]==='sim'||respS[i]==='s'){
            nivel++
            console.clear()
            console.log(`Sua resposta foi sim.\n`)
        }else if(respS[i]==='nao'|respS[i]==='n'){
            console.clear()
            console.log(`Sua resposta foi não.\n`)
        }else{
            console.clear()
            console.log(`A resposta ${respS[i]} é inválida, responda sim ou nao\n`)
            respS.splice(i, 1)
            i=i-1
            continue;
        }
    }
    console.clear()
    console.log(`${result[nivel]} Você pagou ${nivel} contas\n`)
    loop=prompt('Digite r para reiniciar ou qualquer tecla para finalizar: ').toLowerCase()
}while(loop=='r')
