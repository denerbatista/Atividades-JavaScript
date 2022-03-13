const prompt=require("prompt-sync")()
const notaA=+prompt("Digite nota A: ")
const notaB=+prompt("Digite nota B: ")
console.log(`\nSua média é ${(notaA*4+notaB*6)/(4+6)}\n`)