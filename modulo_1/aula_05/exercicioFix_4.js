const prompt=require('prompt-sync')()
const figlet=require('figlet')
do{
    console.clear()
    let num1 = Math.floor(Math.random() * (11))
    console.log(figlet.textSync(`?`, {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}));
    let num2 = +prompt('Qual número eu pensei entre 0 e 10? ')
    let cont=1
    while (num1 != num2){
        if (num2 > num1) {
            console.clear()
            console.log(figlet.textSync(`${num2}   >   ?`, {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}));
            console.log('O número que você escolheu é maior do que eu pensei.')
            cont=cont+1
        } else if (num2 < num1) {
            console.clear()
            console.log(figlet.textSync(`${num2}   <   ?`, {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}));
            console.log('O número que vc escolheu é menor do que eu pensei.')
            cont=cont+1
        }else{
            console.clear()
            console.log(figlet.textSync(`?   <   ?`, {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}));
            console.log('Letras não são aceitas digite um número.')
        }
        num2 = +(prompt('Digite um número: '))  
    }
    console.clear()
    console.log(figlet.textSync(`${num1}`, {font: 'Standard',horizontalLayout: 'default',verticalLayout: 'default',width: 90,whitespaceBreak: false}));
    console.log(`\nO número que escolhi é ${num1} VOCÊ ACERTOU COM ${cont} TENTATIVAS !\n`)
    loop=prompt('Gostou da brincadeira ? Digite "r" para reiniciar ou qualquer tecla para finalizar: ').toLowerCase()
    console.clear()
}while(loop=='r')