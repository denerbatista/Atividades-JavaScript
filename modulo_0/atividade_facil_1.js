const prompt = require('prompt-sync')();

const inicio = 2022
const data = new Date();
let ano = data.getFullYear();
let tempo = ano-inicio;
console.log("\nDiga seu nome pequeno aprendiz... ")
let nome = prompt()

if(ano-inicio===0){
	console.log(`\nParabéns ${nome}, foi esse ano que você se tornou um Bluemer, "O primeiro programa a gente nunca esquece!"\n `)
}else{ console.log(`\nParabéns ${nome} faz ${tempo} ano(s) que você é um Bluemer, "O primeiro programa a gente nunca esquece!"\n `) }
console.log("Mas e ai como anda as coisas já se formou ? [s/n] ")
let perg1=prompt()
if(perg1=="s"||perg1=="S"){
    console.log("\nQue máximo !! Muito feliz por você, sempre acreditei no seu potencial !\n")
    let perg2=prompt("Já está trabalhando como programador ? [s/n] ")
        if(perg2=="s"||perg2=="S"){
        console.log("\nGenial !! É tudo que queriamos não é mesmo? Nunca se esqueça dos que te ajudaram a chegar onde está.\n")
        let perg3=parseFloat(prompt("Me conta ai, o salário é de quantos ? "))
            if(perg3>=3000){
            console.log(`\nIncrivel !! Atingimos nosso objetivo ${nome} já dá pra pagar a Provi e ainda sobra muito pra ser feliz !`)
            console.log(`\nMeu Script está acabando ${nome} preciso ir, não se esqueça de mim, volte aqui mais vezes para crescer meu código e me contar mais novidades, tchau !\n`)
            }else{
        console.log("\nNão se preocupe com valores agora, logo você estará no topo. \n")
        console.log(`Meu Script está acabando ${nome} preciso ir, não se esqueça de mim, volte aqui mais vezes para me contar as novidades, tchau !`)
            }
        }else{
        console.log("\nNão se preocupe, logo chegará a sua vez de brilhar. \n")
        console.log(`Meu Script está acabando ${nome} preciso ir, volte aqui mais vezes para me contar as novidades, tchau !`)    
        }    
    }else{
    console.log("\nNunca desista dos seus objetivos, acredito no seu Potencial !\n")
    console.log(`Meu Script está acabando ${nome} preciso ir, não se esqueça de mim, volte aqui mais vezes para me contar as novidades, tchau !`)
    }
