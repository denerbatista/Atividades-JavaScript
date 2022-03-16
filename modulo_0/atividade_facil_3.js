const prompt = require('prompt-sync')();
const musicasTitulo=[
    " 1 - Tudo por ELE" ,
    " 2 - Eu creio" ,
    " 3 - Inteiramente fiel" ,
    " 4 - Ao olhar pra Cruz" ,
    " 5 - Descansar"
]
const musicasLetra=[
    `
    Tudo Por Ele
    (Ministério Jovem Adventista)

    Os céus proclamam as obras do Eterno
    Galáxias cantam de sua imensidão
    E uma voz com sons de glória
    Ecoa em toda a criação
    
    Do grão que faz a vida irromper
    O esplendor, o invisível faz nascer
    E uma voz com sons de glória
    Ecoa em nosso coração
    
    Diante Dele nos rendemos
    É tudo por Ele, tudo por Ele
    A Ele a glória e para sempre
    É tudo por Ele, tudo por Ele
    
    Em oração e na palavra seguiremos
    Em um só corpo rendido à missão
    E nossa voz com sons de glória
    Irá romper a escuridão
    Diante Dele nos rendemos
    
    É tudo por Ele, tudo por Ele
    A Ele a glória e para sempre
    É tudo por Ele, tudo por Ele
    
    A Ele a honra, a glória e o louvor
    Que o reino seja em nós
    E nossa vida só por Ele
    A Ele a honra, a glória e o louvor
    Que o reino seja em nós
    E nossa vida só por Ele
    A Ele a honra, a glória e o louvor
    Que o reino seja em nós
    E nossa vida só por Ele
    
    Diante Dele nos rendemos
    É tudo por Ele, tudo por Ele
    A Ele a glória e para sempre
    É tudo por Ele, tudo por Ele
    
    A Ele a glória e para sempre
    É tudo por Ele, tudo por Ele
    A Ele a honra, a glória e o louvor
    Que o reino seja em nós
    E nossa vida só por Ele`,
    `
    Eu Creio
    (Ministério Jovem Adventista)

    Queima um fogo intenso no meu coração
    Arde um desejo forte de pregar
    De contar pra todo mundo o que eu descobri
    A verdade que encontrei
    O Deus que eu conheci

    A mensagem que eu tenho, recebi
    Por herança, através de gerações
    Homens e mulheres que estudaram a Palavra
    Pregaram suas teses sem temer a espada
    E essas verdades não vou calar
    Com minha vida vou anunciar

    Eu creio só no que está escrito na Palavra
    Eu creio que sou salvo somente pela graça
    Creio que é só por Cristo e Seu sacrifício
    Eu creio que é só pela fé que sou justificado
    Eu creio que só Deus merece ser glorificado
    Creio com minha mente e coração
    Com o mesmo amor daquela geração

    Queima um fogo intenso no meu coração
    Arde um desejo forte de pregar
    De contar pra todo mundo o que eu descobri
    A verdade que encontrei
    O Deus que eu conheci

    A mensagem que eu tenho, recebi
    Por herança, através de gerações
    Homens e mulheres que estudaram a Palavra
    Pregaram suas teses sem temer a espada
    E essas verdades não vou calar
    Com minha vida vou anunciar

    Eu creio só no que está escrito na Palavra
    Eu creio que sou salvo somente pela graça
    Creio que é só por Cristo e Seu sacrifício
    Eu creio que é só pela fé que sou justificado
    Eu creio que só Deus merece ser glorificado
    Creio com minha mente e coração
    Com o mesmo amor daquela geração

    Eu creio só no que está escrito na Palavra
    Eu creio que sou salvo somente pela graça
    Creio que é só por Cristo e Seu sacrifício

    Eu creio só no que está escrito na Palavra
    Eu creio que sou salvo somente pela graça
    Creio que é só por Cristo e Seu sacrifício
    Eu creio que é só pela fé que sou justificado
    Eu creio que só Deus merece ser glorificado
    Creio com minha mente e coração
    Com o mesmo amor daquela geração
    `,
    `
    Inteiramente Fiel
    (Ministério Jovem)

    Não vou mais pensar no que passou ou deu errado
    Aquilo que Deus começou irá crescer, pois tem o Seu cuidado
    Quem tanto me amou, merece de mim a entrega do meu melhor

    Sou inteiramente de Cristo Jesus
    Fui feito pra viver como filho do Rei
    Sou eternamente ligado a Jesus, pra sempre serei
    Inteiramente fiel eu quero ser

    Eu sei de um lugar que está além do que é comum
    A vida que existe lá não vai ter fim, por causa de Jesus
    Quem tanto me amou merece de mim
    A entrega do meu melhor

    Sou inteiramente de Cristo Jesus
    Fui feito pra viver como filho do Rei
    Sou eternamente ligado a Jesus, pra sempre serei
    Inteiramente fiel, inteiramente fiel
    Inteiramente fiel eu quero ser
    `,
    `
    Ao Olhar Pra Cruz
    (Adoradores Novo Tempo)

    Ouça Ao Olhar Pra Cruz
 
    Andei tão cego, sem rumo certo
    Buscando a paz e descanso
    Eu procurei por tantos meios
    Justificar meus erros
    Mas ao clamar, meus olhos abri

    E ao olhar pra cruz eu entendo o amor
    Derramado ali por mim
    Sacrifício de sangue por um pecador
    Não sou merecedor, tua graça me alcançou

    E ao ver tua glória, naquele dia
    Me alegrarei em gratidão
    Tocarei as marcas, marcas de vitória
    Vencido é o pecado
    Perante Ti me prostrarei

    E ao olhar pra cruz eu entendo o amor
    Derramado ali por mim
    Sacrifício de sangue por um pecador
    Não sou merecedor, tua graça me alcançou
    `,
    `
    Descansar
    (Ministério Jovem)

    Não quero viver pensando no amanhã
    eu quero ser feliz
    Dias vem e vão não irei temer,
    posso confiar em Ti
    Se o futuro incerto é, basta olhar com os olhos da fé
    E descansar nos braços do Pai

    Descansar, confiando em Tua proteção
    Descansar, vou me entregar em tuas mãos
    Descansar sei que cuidará de mim Senhor,
    Ensina-me a descansar

    Cada passo que eu der seja aonde estiver
    Quero entregar a Ti
    Cada decisão vou depor em Tuas mãos e esperar
    Se das aves Deus cuida
    Sei que tenho muito mais valor
    Posso esperar e descansar nos braços do Pai

    Descansar, confiando em Tua proteção
    Descansar, vou me entregar em tuas mãos
    Descansar sei que cuidará de mim Senhor,
    Ensina-me a descansar

    Só em Teus braços encontro paz pra repousar
    Mesmo que os temores me vençam, vou descansar.

    Confiando em Tua proteção
    Vou me entregar em tuas mãos
    Sei que cuidará de mim Senhor
    Ensina-me a descansar
    `
]
do{
    console.log(`Qual das suas músicas favoritas quer a letra ?\n${musicasTitulo}\n`)
    let escolha = +prompt("Digite o numero correspondente: ")
    console.log(`\n${musicasLetra[escolha-1]}\n`)
    reiniciar = prompt("Digite r ou R para escolher outra ou qualquer tecla pra finalizar: ")
}while(reiniciar=="r"||reiniciar=="R")
console.log("\nBusca Finalizada\n")
