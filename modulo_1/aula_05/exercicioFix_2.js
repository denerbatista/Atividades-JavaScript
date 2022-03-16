const prompt=require('prompt-sync')()
do{
    
    while(true){
        
        name = prompt('Digite seu nome: ')
        nameC = name.length
        if(nameC<3){
            console.log('Digite um nome com mais de 3 caracteres\n')
            continue
        }else{
            break;
        }   
    }
    
    while(true) {
        old = +prompt('Digite uma sua idade: ')
        if(old<0||old>150){
            console.log('Quantidade invalida idade deve estar entre 0 e 150.\n')
            continue
        }else{
            break;
        }
    }
    
    while(true){
        wage = +prompt('Digite seu salário, que dever ser maior que 0: ')
        if(wage<=0){
            console.log('Quantidade invalida salario deve ser maior que 0.\n')
            continue
        }else{
            break;
        }
    }
    
    while(true){
        maritalStatus = prompt('Digite seu estado civil, "s" para Solteiro, "c" para casado, "v" para viúvo ou "d" para divorciado: ')
        if(maritalStatus!='s'&&maritalStatus!='c'&&maritalStatus!='v'&&maritalStatus!='d'){
            console.log('Resposta invalida, respostas aceitas: s,c,v ou d.\n')
            continue
        }else{
            break;
        }
    } 
    console.log(`\nNome: ${name} \nIdade: ${old} \nSalário: ${wage} \n`)
loop=prompt("Digite r para reiniciar ou qualquer tecla para finalizar: ")
console.log(loop)
}while(loop=='r'||loop=="R")