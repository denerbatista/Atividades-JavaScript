const prompt=require('prompt-sync')()

do{
    console.clear()
    let num1 = Math.floor(Math.random() * (11))
    let num2 = +prompt('Qual número eu pensei entre 0 e 10? ')
    let cont=1
    while (num1 != num2){
        if (num2 > num1) {
            console.clear()
            console.log('O número que você escolheu é maior do que eu pensei.')
            cont=cont+1
        } else if (num2 < num1) {
            console.log('O número que vc escolheu é menor do que eu pensei.')
            cont=cont+1
        }
        num2 = +(prompt('Digite um número: '))
    }
    console.log(`\nO número que escolhi é ${num1} VOCÊ ACERTOU COM ${cont} TENTATIVAS !\n`)
    loop=prompt('Gostou da brincadeira ? Digite r para reiniciar ou qualquer tecla para finalizar: ').toLowerCase()
    console.clear()
}while(loop=='r')
