const prompt=require('prompt-sync')()
console.clear
let number=prompt('Digite um número: ')
while((number%2)==0){
    number=+prompt("Digite um número: ")
    if((number%2)!=0){
        console.log(`O numero ${number} é impar digite um número par.`)
        break;
    }
}