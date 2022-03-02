const prompt = require('prompt-sync')();
const data=new Date();
let anoA=data.getFullYear();
console.log("\nQual seu ano de nascimento ? ")
let anoN=prompt()
console.log(`\nPossui apenas ${anoA-anoN} anos você está na flor da idade ! `)
