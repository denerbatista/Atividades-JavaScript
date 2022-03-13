const prompt=require('prompt-sync')()
while(true){
   // console.clear()
    let name = prompt('Digite seu novo ID de usuário:')
    console.log()
    let senha = prompt('Digite uma senha:')
    if(name==senha){
        console.log("Senha e ID são iguais, tente outra.\n")
        continue 
    }
    console.log('\nDados resgistrados com sucesso!\n')
    break;
    
    //loop = prompt("Digite r para tentar novamente: ").toLowerCase()
}