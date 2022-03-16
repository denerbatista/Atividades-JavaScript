console.clear();
const prompt = require('prompt-sync')();
let number1=+prompt("Digite lado 1 do Triângulo. ")
let number2=+prompt("Digite lado 2 do Triangulo. ")
let number3=+prompt("Digite lado 3 do triângulo. ")
let a=0
let b=0
let c=0
if(number1>number2&&number1>number3){
    a=number1
    if(number2>number3){
        b=number2
        c=number3
        }else{
            b=number3
            c=number2
        }
}else if(number2>number1&&number2>number3){
    a=number2
    if(number1>number3){
        b=number1
        c=number3
        }else{
            b=number3
            c=number1
        }
}else if(number3>number1&&number3>number2){
    a=number3
        if(number2>number1){
        b=number2
        c=number1
        }else{
            b=number1
            c=number2
    }
}
console.log(`A:${a}, B:${b}, C:${c}`)
const aMathPow=Math.pow(a,2)
const bMathPow=Math.pow(b,2)
const cMathPow=Math.pow(c,2)
console.log(`A²:${aMathPow}, B²:${bMathPow}, C²:${cMathPow}`)
if(a>=(b+c)){
console.log("NAO FORMA TRIANGULO")
}
if(aMathPow==(b+c)){
console.log("TRIANGULO RETANGULO")
}
if(aMathPow>(bMathPow+cMathPow)){
console.log("TRIANGULO OBTUSANGULO")    
}
if(aMathPow<(bMathPow+cMathPow)){
console.log("TRIANGULO ACUTANGULO")
}
if(a==b&&b==c){
console.log("TRIANGULO EQUILATERO")
}
if(a==b||b==c||a==c){
console.log("TRIANGULO ISOSCELES")
}