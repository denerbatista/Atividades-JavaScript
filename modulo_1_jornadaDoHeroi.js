console.clear()
const prompt=require('prompt-sync')()
let resp
let respS=[]
const nome=prompt("Digite seu nome Herói: ")
console.clear()
const pergs=[`Primeiramente seja grato e fiel separou seu dizimo e oferta ${nome}? `,`Pagou água e luz ${nome}?, você precisa de água e energia, principalmente pra um banho quente antes do rolê. `,`Diga com sinceridade ${nome} pagou IPTU desse ano? `,`Não gaste tudo com besteiras ${nome}, você separou a grana do mercado? `,`E o cartão de crédito ${nome}, vc sabe a facada que são os juros, pagou ? `]
const result=[`Vish desse jeito ${nome}, você não pode botar a cara na rua acerta isso pra ficar de boa`,`Isso ainda é pouco,tem que agilizar isso ${nome}, seje mais responsável `,`Isso ainda é pouco,tem que agilizar isso ${nome}, seje mais responsável `,`Não está totalmente ruim mas o essencial o próprio nome já diz não é mesmo ${nome}.`,`Vamos lá não perde o pique, só falta mais uma, não deixe pra depois ${nome}.`,`Exelente ${nome}, você mais que meresse essa Pizza não perca tempo e corra pra recompensa, só não gaste tudo guarde um pouquinho para o próximo.`]
do{
    console.log(`\nFinal de mês chegando, vamos conferir se sobra uma graninha pra uma pizza ${nome} ? mas primeiro as contas essencias devem ser pagas, digite sim para confirmar ou qualquer tecla ou palavra para não.\n`)
    for(i=0,nivel=0;i<pergs.length;i++){
        resp=prompt(pergs[i]);
        respS.push(resp.toLowerCase());
        if(respS[i]=='sim'){
            nivel++
        }
    }
console.log(`\n${result[nivel]}\n`)
loop=prompt('Digite r para reiniciar ou qualquer tecla para finalizar: ')
}while(loop=='r'||loop=='R')
