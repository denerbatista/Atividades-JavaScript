const prompt = require('prompt-sync')();
do{
    console.log("\nPara caulcular seu aumento digite seu salário atual abaixo: ")
    let atual=parseFloat(prompt())
    if(atual<=280){
        console.log(`\nSeu salario era R$ ${atual} teve um aumento de 20% que equivale a R$ ${(atual*0.2).toFixed(2)}, seu novo salario é: R$ ${(atual*0.2+atual).toFixed(2)}\n`)
    }else if(atual>280&&atual<=700){
        console.log(`\nSeu salario era R$ ${atual} teve um aumento de 15% que equivale a R$ ${(atual*0.15).toFixed(2)}, seu novo salario é: R$ ${(atual*0.15+atual).toFixed(2)}\n`)
    }else if(atual>700&&atual<=1500){
        console.log(`\nSeu salario era R$ ${atual} teve um aumento de 10% que equivale a R$ ${(atual*0.1).toFixed(2)}, seu novo salario é: R$ ${(atual*0.1+atual).toFixed(2)}\n`)        
    }else if(atual>1500){
        console.log(`\nSeu salario era R$ ${atual} teve um aumento de 5% que equivale a R$ ${(atual*0.05).toFixed(2)}, seu novo salario é: R$ ${(atual*0.05+atual).toFixed(2)}\n`)        
    }
    reiniciar=prompt("Digite r ou R para reiniciar ou qualquer tecla para finalizar: ")   
}while(reiniciar=="r"||reiniciar=="R")
