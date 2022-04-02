const prompt=require('prompt-sync')();
const figlet=require('figlet');
const colors=require('colors');
function design(text,font,hL,vL,width){   
  return figlet.textSync(text, {
      font: font,
      horizontalLayout: hL,
      verticalLayout: vL,
      width: width,
      whitespaceBreak: false
  });
}
function pescar(){
  metodo.geradorRandom();
  if(metodo.random==0){
    status(metodo.i)
    console.log(`Caramba não peguei nada só gastei energia e tempo, espero ter mais sorte da próxima vez.`);
    usuario.perdeEnergia();
  }else if(metodo.random==1){
    status(metodo.i)
    console.log(`Peguei uma traíra de aproximadamente 300 gramas.`);
    prompt('tecle enter para continuar');
    metodo.geradorEscolhas(metodo.i,'Estou com muita fome e agora, ASSAR e perder tempo e energia fazendo fogo ou COMER CRU ?',metodo.opcoesAssarCru)
    if(metodo.escolha[0]=="assar"){
      status(metodo.i)
      metodo.alteraOpcoesTemp('comer essa traíra assada',10,'pescar')
      metodo.fazerFogo(metodo.opcoesTemp)
      usuario.alteraAsp(1)
    }else if(metodo.escolha[0]=="comercru"){
      status(metodo.i)
      metodo.comerCru()
    }
  }else{
    console.log(`Peguei umas 3 traíras que dão aproximadamente 900 gramas, estou muito feliz, obrigado Deus !`)
    prompt("Tecle enter para continuar:")
    metodo.geradorEscolhas(metodo.i,'Estou com muita fome e agora, ASSAR e perder tempo e energia fazendo fogo ou COMER CRU ?',metodo.opcoes)
    if(metodo.escolha[0]=="assar"){
      metodo.alteraOpcoesTemp('comer essas 3 traíras assada',30,'pescar')
      metodo.fazerFogo(metodo.opcoesTemp)
      usuario.alteraAsp(1)
    }else if(metodo.escolha[0]=="comercru"){
      metodo.comerCru()
    }
  }
} 
let metodo={
  i:[0],
  j:[0],
  atividades:[[" Explorar "," Dormir "],["explorar","dormir"]],
  opcoesAssarCru:[[' Assar ', ' Comer cru '],['assar','comercru']],
  opcoesAlimentos:[[],[]],
  opcaoSimNao:[[' Sim ',' Não '],['sim','nao']],
  opcaoContinuaDesiste:[[' Continuar ',' Desistir '],['continuar,desistir']],
  opcoesAbrigo:[[' Emergência ', ' Semi-permanente ',' Permanente '],['emergencia', 'semi-permanente','permanente']],
  opcoesExplorar:[[' Água ',' Local abrigo ',' Mapa ',' Banana ',' Bambu '],['agua','localabrigo','mapa','banana','bambu']],
  opcoesItens:[[' Panela ',' Pederneira ',' Facão ',' Mosquiteiro '],['panela','pederneira','facao','mosquiteiro']],
  itensEscolhidos:[[],[]],
  opcoesTemp:['',0,''],
  escolha:[''],
  escolhaItens:function(){
    for(let i=0;i<2;i++){
      metodo.geradorEscolhas(metodo.i,`Posso escolher 2 itens qual o ${i+1}º item de sobrevivência que vou escolher: ${metodo.opcoesItens[0]} ? `,metodo.opcoesItens,'Preparação',1)
      if(metodo.escolha=='panela'){
        this.panela=true;
        this.removeAddOpcoes(this.itensEscolhidos,' Panela ','panela',1)
        this.removeAddOpcoes(this.opcoesItens,' Panela ','panela',0)
      }else if(metodo.escolha=='pederneira'){
        this.pederneira=true
        this.itensEscolhidos.push(' Pederneira ')
        this.removeAddOpcoes(this.itensEscolhidos,' Pederneira ','pederneira',1)
        this.removeAddOpcoes(this.opcoesItens,' Pederneira ','pederneira',0)
      }else if(metodo.escolha=='facao'){
        this.facao=true
        this.removeAddOpcoes(this.itensEscolhidos,' Facão ','facao',1)
        this.removeAddOpcoes(this.opcoesItens,' Facão ','facao',0)
      }else if(metodo.escolha=='mosquiteiro'){
        this.mosquiteiro=true
        this.removeAddOpcoes(this.itensEscolhidos,' Mosquiteiro ','mosquiteiro',1)
        this.removeAddOpcoes(this.opcoesItens,' Mosquiteiro ','mosquiteiro',0) 
      }
    }
    status(metodo.i,'Preparação',1)
    console.log(`\nTerei${metodo.itensEscolhidos[0][0]}e${metodo.itensEscolhidos[0][1]}como itens de sobrevivência espero ter feito uma boa escolha.`.yellow)
    prompt('Tecle enter para continuar:')
  },
  removeAddOpcoes:function(array,textExibido,textLeitura,removeAdiciona){
    if(removeAdiciona==0){
      array[0].splice((array[0].indexOf(textExibido)),1);
      array[1].splice((array[1].indexOf(textLeitura)),1);
    }else if(removeAdiciona==1){
      if(array[0].includes(textExibido)==false&&array[1].includes(textLeitura)==false){
        array[0].push(textExibido);
        array[1].push(textLeitura);
      }
    }
    return array;
  },
  alteraOpcoesTemp:function(acao,valor,atividade){
      this.opcoesTemp[0]=acao;
      this.opcoesTemp[1]=valor;
      this.opcoesTemp[2]=atividade;
      return this.opcoesTemp;
  },
  geradorEscolhas:function(variavelControle,textPergunta,arrayOpcoes,textStatus='',valorStatus=0){
    status(variavelControle,textStatus,valorStatus);
    console.log(`\n${textPergunta}`);
    this.escolha[0]=(prompt().toLowerCase()).replace(/ /g, '');
    while(arrayOpcoes[1].indexOf(this.escolha[0])==-1){
        console.clear();
        status(variavelControle,textStatus,valorStatus);
        console.log(`\nVocê escreveu ${this.escolha[0]} as opções possiveis são: ${arrayOpcoes[0]}`)
        console.log("Opção escolhida não é valida ou ainda não foi atribuida, Tecle enter para tentar novamente.".red);
        prompt();
        console.clear();
        status(variavelControle,textStatus,valorStatus);
        console.log(`\n${textPergunta}`);
        this.escolha[0]=(prompt().toLowerCase()).replace(/ /g, '');
    }
    return this.escolha;
  },
  random:[0],
  geradorRandom:function(qtd=3,situacao='',array){
    if(situacao=='palavra'){
      this.random=array[Math.floor(Math.random()*qtd)]
    }else if(usuario.saude>50||situacao=='normal'){
      this.random=Math.floor(Math.random()*qtd)
    }else if(usuario.saude<50){
      if(qtd==3){
        let listaFerrada=[0,0,0,1,2]
        this.random=listaFerrada[Math.floor(Math.random()*listaFerrada.length)]
        console.log(`Estou muito mal não sei se consigo ter algum resultado nas atividades!!`.yellow)
      }else if(qtd==2){
        let listaFerrada2=[0,0,0,1]
        this.random=listaFerrada2[Math.floor(Math.random()*listaFerrada2.length)]
        console.log(`Estou muito mal não sei se consigo ter algum resultado nas atividades!!`.yellow)
      } 
    }
    return this.random   
  },
  construirAbrigo:function(array) {
    this.geradorEscolhas(this.i,`Qual tipo de abrigo devo construir ${array[0]} ?`,array);
    status(metodo.i)
    usuario.alteraAsp(1)
    if (this.escolha == "emergencia") {
      console.log(`Não gastei muita energia pra fazer, e ficou bom só não sei é resistente a chuvas fortes.`.yellow);
      this.abrigoEmergencial == true;
      usuario.perdeEnergia();
      this.removeAddOpcoes(this.atividades,' Construir abrigo ','construirabrigo',0);
    } else if (this.escolha == "semi-permanente") {
      console.log(`Gastei um pouco mais de energia pra fazer, ficou mais resistente mas ainda posso ter problemas com chuvas fortes.`.yellow);
      this.abrigoSemiPermanente == true;
      usuario.perdeEnergia(20);
      this.removeAddOpcoes(this.atividades,' Construir abrigo ','construirabrigo',0)
    } else if (this.escolha == "permanente") {
      console.log(`Gastei bastante energia pra fazer, ficou muito resistente não terei problemas com chuvas fortes.`.yellow);
      this.abrigoSemiPermanente == true;
      usuario.perdeEnergia(30);
      this.removeAddOpcoes(this.atividades,' Construir abrigo ','construirabrigo',0)
    }
  },
  localAbrigo:true,
  abrigoEmergencial:false,
  abrigoSemiPermanente:false,
  abrigoPermanente:false,
  buscarAlimento:function(){
    this.geradorEscolhas(metodo.i,`Qual eu escolho ? ${metodo.opcoesAlimentos[0]}`,metodo.opcoesAlimentos);
    if(this.escolha=='pescar'){
      if(this.agua==true){
        if(this.pescar==true&&(this.mosquiteiro==true||this.arpao==true)){
          pescar()
        }else{
          status(metodo.i)
          console.log('Tentei pescar, mas não tenho um arpão, uma besta de bambu ou um mosquiteiro que possa usar como rede para pescar, não consegui nada'.yellow);
          usuario.perdeEnergia()
        }   
      }
    }else if(this.escolha=='cacar'){
      if(this.cacar==true&&(this.besta==true||this.arpao==true)){
        console.log('Verificado')
        usuario.perdeEnergia()
      }else{
        status(metodo.i)
        console.log('Tentei caçar, mas não tenho um arpão ou uma besta de bambu para capturar um animal, não consegui nada'.yellow);
        usuario.perdeEnergia()
      }   
    }else if(this.escolha=='coletar'){
      console.log('Verificado')
      usuario.perdeEnergia()
    } 
  },
  cacar:false,
  pescar:false,
  coletar:false,
  bananas:false,
  conseguirAgua:function(){console.log('verificado')},
  agua:false,
  aguaImpura:false,
  aguaPura:false,
  explorarArea:function(){
    usuario.perdeEnergia();
    usuario.alteraAsp(1);
    status(this.i);
    this.geradorRandom(this.opcoesExplorar[1].length,'palavra',this.opcoesExplorar[1]);
    if(this.random=='agua'){
      console.log(`\nEncontrei uma fonte de água, agora tenho como me hidratar e também pescar`.yellow);
      this.agua=true;
      this.pescar=true;
      this.removeAddOpcoes(this.atividades,' Conseguir água ','conseguiragua',1);
      this.removeAddOpcoes(this.opcoesAlimentos,' Pescar ','pescar',1);
      this.removeAddOpcoes(this.opcoesExplorar,' Água ','agua',0);
    }else if(this.random=='localabrigo'){
      console.log(`\nEncontrei um ótimo lugar para contruir um abrigo e os recursos para isso já estão perto.`.yellow);
      this.localAbrigo==false;
      this.removeAddOpcoes(this.atividades,' Construir abrigo ','construirabrigo',1);
      this.removeAddOpcoes(this.opcoesExplorar,' Local abrigo ','localabrigo',0);
    }else if(this.random=='mapa'){
      console.log(`\nEncontrei o mapa agora sei onde será o ponto de resgate para ir no 21º dia.`.yellow)
      this.mapa==true
      this.removeAddOpcoes(this.opcoesExplorar,' Mapa ','mapa',0)
    }else if(this.random=='banana'){
      console.log(`\nEncontrei uma moita de bananas, agora posso vir aqui coletar, porém há alguns macacos babuinos em volta devo tomar cuidado com eles`.yellow)
      this.coletar==true;
      this.bananas==true;
      this.removeAddOpcoes(this.atividades,' Buscar alimento ','buscaralimento',1)
      this.removeAddOpcoes(this.opcoesAlimentos,' Coletar ','coletar',1)
      this.removeAddOpcoes(this.opcoesExplorar,' Banana ','banana',0)
    }else if(this.random=='bambu'){ 
      console.log(`\nEncontrei o uma moita de bambus, agora posso vir aqui coletar e construir ferramentas com ele`.yellow)
      this.bambu==true
      this.removeAddOpcoes(this.opcoesExplorar,' Bambu ','bambu',0)
    }else{
      console.log(`\nAcredito que ja tenha explorado tudo que é possivel, andei bastante não encontrei mais nada.`.yellow)
      this.removeAddOpcoes(this.atividades,' Explorar ','explorar',0)
    }
  },
  explorar:true,
  facao:false,
  arpao:false,
  besta:false,
  panela:false,
  mosquiteiro:false,
  mapa:false,
  fazerFogo: function fazerFogo(array) {
    if (this.pederneira == true) {
      status(metodo.i)
      console.log(`\nCom essa pederneira é mole fazer fogo, agora posso ${array[0]}`);
      usuario.perdeEnergia(5);
      usuario.ganhaEnergia(array[1]);
    } else if (this.pederneira == false) {
      status(metodo.i)
      console.log(`Não tenho pederneira para fazer fogo terei que tentar por fricção isso nem sempre da certo.`.yellow);
      prompt('tecle enter para continuar.');
      this.geradorRandom(2);
      if (this.random == 0) {
        status(metodo.i)
        usuario.perdeEnergia(20);
        if(array[2]=='dormir'){
          console.log(`Não consegui fazer fogo estou exausto só perdi energia e tempo, agora não posso ${array[0]}, a noite será longa`);
        }else if(array[2]=='pescar'){
          console.log(`Não consegui fazer fogo estou exausto só perdi energia e tempo, agora não posso ${array[0]}, terei que arriscar e comer cru mesmo.`);
          this.comerCru();
        }
      } else if (this.random == 1) {
        status(metodo.i)
        console.log(`Não foi fácil conseguir uma brasa, mas consegui, da até vontade de chorar agora posso ${array[0]}.`);
        usuario.perdeEnergia(20);
        usuario.ganhaEnergia(array[1]);
      }
    }
  },
  pederneira:false,
  comerCru:function(){
    console.log(`Comer alimentos de origem animal cru ou sem processo de higienização pode causar diarréia ou intoxicação. `.red);
    prompt("Tecle enter para continuar:");
    metodo.geradorRandom(2);
      if(metodo.random==0){
        console.log(`Não sei se foi uma boa escolha comer sem assar estou com dor de barriga !`)
        usuario.alteraSaude(20,0);
        usuario.perdeEnergia();
        usuario.alteraAsp(0);
      }else if(metodo.random==1){
        console.log(`O sabor não é muito bom, mas pelo menos acumulei alguma energia e por sorte não tive dor de barriga.`);
        usuario.ganhaEnergia();
        usuario.alteraAsp(0);
      }        
  },
  dormir:function(){console.log('verificado')},
  mosquitos:true,
  pedirAjudaMedica:function(){
    status(this.i);
    console.log("O médico irá avaliar se pode me ajudar aqui, ou se vou precisar desistir para ir a um hospital".yellow);
    prompt("tecle enter para continuar");
    status(this.i);
    this.geradorRandom(2,'normal');
    if(this.random==0){
      this.geradorEscolhas(this.i,'O médico me orientou a desistir e ir no hospital me tratar e agora CONTINUAR ou DESISTIR ? \nSe eu continuar posso até conseguir chegar no dia 21, mas minhas atividades terão mais chance de erro por conta da minha condição.',metodo.opcaoContinuaDesiste[1])
      if(this.escolha[0]=='desistir'){
        usuario.resultado();
      }else if(this.escolha[0]=='continuar'){
        console.log("Ok vou continuar mas a vida não vai ser fácil pra mim daqui por diante, mas vou continuar até não aguentar mais.");
      }
    }else if(this.random==1){
      console.log('Graças a Deus o médico conseguiu resolver meu problema me sinto muito melhor, vou poder continuar no programa.');
      usuario.alteraSaude(1)
    }
  }
}
function administradorEscolhas(a){
    if(a=='explorar'){
        metodo.explorarArea();
    }else if(a=='construirabrigo'){
        metodo.construirAbrigo(metodo.opcoesAbrigo)
    }else if(a=='buscaralimento'){
        metodo.buscarAlimento();
    }else if(a=='conseguiragua'){
        metodo.conseguirAgua();
    }else if(a=='dormir'){
        metodo.dormir();
    }       
}
function status(i,text='',valor=0){
  if(valor==0){
    console.clear();  
    console.log(design(`                                              ${i+1} º  DIA`,'Standard','Default','Default',90))
    console.log('##########################################################################################################################')
    console.log(` ########################## PESO: ${usuario.peso}Kg ## ENERGIA: ${usuario.energia} ## HIDRATAÇÃO: ${usuario.hidratacao} ## SAÙDE: ${usuario.saude} ## ASP: ${usuario.asp} ##########################`)
    console.log('##########################################################################################################################')
  }else if(valor==1){
    console.clear();  
    console.log(design(`                                 ${text}`,'Standard','Default','Default',90))
    console.log('##########################################################################################################################')
    console.log(` ########################## PESO: ${usuario.peso}Kg ## ENERGIA: ${usuario.energia} ## HIDRATAÇÃO: ${usuario.hidratacao} ## SAÙDE: ${usuario.saude} ## ASP: ${usuario.asp} ##########################`)
    console.log('##########################################################################################################################')
  }
  
}
let usuario = {
  nome:'',
  peso: 60,
  hidratacao: 60,
  energia: 50,
  asp:0,
  saude:100,
  resultado:function(){
    console.log('verificado')
  },
  perdeEnergia:function(valor=10){
    if(usuario.energia==0){
      this.peso-=1
      console.log(`Estou consumindo mais energia do que estou ingerindo e quando isso acontece eu perco peso.`.yellow)
    }else{
      this.energia-=valor
      if(this.energia<0){
        this.energia==0
      }
    } 
  },
  ganhaEnergia:function(valor=10){
    if(this.energia==100){
      this.peso+=1
    }else{
      this.energia+=valor
      if(this.energia>100){
        this.energia=100
        this.peso+=1
      }
    }    
  },
  alteraAsp:function(valor){
    if(valor==0){
      if(this.asp>=1){
        this.asp-=1
      }
    }else if(valor==1){
      if(this.asp<10){
        this.asp+=1
        if(this.asp>=10){
          this.asp=10
        }
      } 
    }
  },
  alteraSaude:function(valor,restaurar=0){
    if(restaurar==1){
      this.saude=100
    }else if(this.saude>50&&restaurar==0){
      this.saude-=valor
      if(this.saude<50){
        metodo.geradorEscolhas(metodo.i,`Minha saúde está baixa será que devo pedir ajuda ${metodo.opcaoSimNao[0][0]} ou ${metodo.opcaoSimNao[0][1]} ? `,metodo.opcaoSimNao[1])
        if(metodo.escolha[0]='sim'){
          metodo.pedirAjudaMedica()
        }   
      }
    }else if(this.saude<=50&&restaurar==0){
      metodo.geradorEscolhas(metodo.i,`Minha saúde está baixa será que devo pedir ajuda ${metodo.opcaoSimNao[0][0]} ou ${metodo.opcaoSimNao[0][1]} `,metodo.opcaoSimNao[1])
      if(metodo.escolha[0]='sim'){
        metodo.pedirAjudaMedica()
      }   
    }

  }
}
console.clear()
console.log(design('               Largados\n                             e\n                  Pelados',"Sub-Zero",'default','default',200))
prompt('Tecle enter para continuar')
metodo.escolhaItens()
for(metodo.i=0;metodo.i<21;metodo.i++){
  let perguntas=[`São 6h do dia ${metodo.i+1} o que farei: ${metodo.atividades[0]} ?`,`São 12h do dia ${metodo.i+1} o que farei: ${metodo.atividades[0]} ? `,`Já está anoitecendo são 18h do dia ${metodo.i+1} o que farei: ${metodo.atividades[0]} ?`]
  for(metodo.j in perguntas ){
    metodo.geradorEscolhas(metodo.i,perguntas[metodo.j],metodo.atividades)
    administradorEscolhas(metodo.escolha[0],metodo.atividades)
    perguntas=[`São 6h do dia ${metodo.i+1} o que farei pela manhã: ${metodo.atividades[0]} ?`,`São 12h do dia ${metodo.i+1} o que farei pela tarde ${metodo.atividades[0]} ? `,`Já está anoitecendo são 18h do dia ${metodo.i+1} o que farei ${metodo.atividades[0]}: ?`]
    prompt('Tecle enter para continuar:')
  } 
}    
