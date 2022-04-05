const prompt = require("prompt-sync")();
const figlet = require("figlet");
const colors = require("colors");
do {
  function design(text, font, hL, vL, width) {
    return figlet.textSync(text, {
      font: font,
      horizontalLayout: hL,
      verticalLayout: vL,
      width: width,
      whitespaceBreak: false,
    });
  }
  function pescar() {
    metodo.geradorRandom();
    if (metodo.random == 0) {
      status(metodo.i);
      console.log(
        `\nCaramba não peguei nada só gastei energia e tempo, espero ter mais sorte da próxima vez.`
          .yellow
      );
      usuario.perdeEnergia();
    } else if (metodo.random == 1) {
      status(metodo.i);
      console.log(`\nPeguei uma traíra de aproximadamente 300 gramas.`.yellow);
      prompt("tecle enter para continuar");
      metodo.geradorEscolhas(
        metodo.i,
        "Estou com muita fome e agora, ASSAR e perder tempo e energia fazendo fogo ou COMER CRU ?",
        metodo.opcoesAssarCru
      );
      if (metodo.escolha[0] == "assar") {
        status(metodo.i);
        metodo.alteraOpcoesTemp("comer essa traíra assada", 10, "pescar");
        metodo.fazerFogo(metodo.opcoesTemp);
        usuario.alteraAsp(1);
        metodo.comeu = true;
      } else if (metodo.escolha[0] == "comercru") {
        status(metodo.i);
        metodo.comerCru();
      }
    } else {
      status(metodo.i);
      console.log(
        `\nPeguei umas 3 traíras que dão aproximadamente 900 gramas, estou muito feliz, obrigado Deus !`
          .yellow
      );
      prompt("Tecle enter para continuar:");
      metodo.geradorEscolhas(
        metodo.i,
        "Estou com muita fome e agora, ASSAR e perder tempo e energia fazendo fogo ou COMER CRU ?",
        metodo.opcoesAssarCru
      );
      if (metodo.escolha[0] == "assar") {
        metodo.alteraOpcoesTemp("comer essas 3 traíras assada", 30, "pescar");
        metodo.fazerFogo(metodo.opcoesTemp);
        usuario.alteraAsp(1);
        metodo.comeu = true;
      } else if (metodo.escolha[0] == "comercru") {
        metodo.comerCru();
      }
    }
  }
  let metodo = {
    i: [0],
    j: [0],
    atividades: [
      [" Explorar ", " Dormir "],
      ["explorar", "dormir"],
    ],
    opcoesAssarCru: [
      [" Assar ", " Comer cru "],
      ["assar", "comercru"],
    ],
    opcoesFerramentas: [[], []],
    opcoesAlimentos: [[], []],
    opcaoSimNao: [
      [" Sim ", " Não "],
      ["sim", "nao"],
    ],
    opcaoContinuaDesiste: [
      [" Continuar ", " Desistir "],
      ["continuar", "desistir"],
    ],
    opcoesAbrigo: [
      [" Emergência ", " Semi-permanente ", " Permanente "],
      ["emergencia", "semi-permanente", "permanente"],
    ],
    opcoesExplorar: [
      [" Água ", " Local abrigo ", " Mapa ", " Banana "],
      ["agua", "localabrigo", "mapa", "banana"],
    ],
    opcoesItens: [
      [" Panela ", " Pederneira ", " Facão ", " Mosquiteiro "],
      ["panela", "pederneira", "facao", "mosquiteiro"],
    ],
    itensEscolhidos: [[], []],
    opcoesTemp: ["", 0, ""],
    escolha: [""],
    escolhaItens: function () {
      for (let i = 0; i < 2; i++) {
        metodo.geradorEscolhas(
          metodo.i,
          `Posso escolher 2 itens qual o ${
            i + 1
          }º item de sobrevivência que vou escolher: ${
            metodo.opcoesItens[0]
          } ? `,
          metodo.opcoesItens,
          "Preparação",
          1
        );
        if (metodo.escolha == "panela") {
          this.panela = true;
          this.removeAddOpcoes(this.itensEscolhidos, " Panela ", "panela", 1);
          this.removeAddOpcoes(this.opcoesItens, " Panela ", "panela", 0);
        } else if (metodo.escolha == "pederneira") {
          this.pederneira = true;
          this.removeAddOpcoes(
            this.itensEscolhidos,
            " Pederneira ",
            "pederneira",
            1
          );
          this.removeAddOpcoes(
            this.opcoesItens,
            " Pederneira ",
            "pederneira",
            0
          );
        } else if (metodo.escolha == "facao") {
          this.facao = true;
          this.removeAddOpcoes(this.itensEscolhidos, " Facão ", "facao", 1);
          this.removeAddOpcoes(this.opcoesItens, " Facão ", "facao", 0);
          this.removeAddOpcoes(this.opcoesExplorar, " Bambu ", "bambu", 1);
          this.removeAddOpcoes(
            this.opcoesExplorar,
            " Madeira e ossos ",
            "madeiraosso",
            1
          );
        } else if (metodo.escolha == "mosquiteiro") {
          this.mosquiteiro = true;
          this.removeAddOpcoes(
            this.itensEscolhidos,
            " Mosquiteiro ",
            "mosquiteiro",
            1
          );
          this.removeAddOpcoes(
            this.opcoesItens,
            " Mosquiteiro ",
            "mosquiteiro",
            0
          );
        }
      }
      status(metodo.i, "Preparação", 1);
      console.log(
        `\nTerei${metodo.itensEscolhidos[0][0]}e${metodo.itensEscolhidos[0][1]}como itens de sobrevivência espero ter feito uma boa escolha.`
          .yellow
      );
      prompt("Tecle enter para continuar:");
    },
    removeAddOpcoes: function (
      array,
      textExibido,
      textLeitura,
      removeAdiciona
    ) {
      if (removeAdiciona == 0) {
        if (
          array[0].includes(textExibido) == true &&
          array[1].includes(textLeitura) == true
        ) {
          array[0].splice(array[0].indexOf(textExibido), 1);
          array[1].splice(array[1].indexOf(textLeitura), 1);
        }
      } else if (removeAdiciona == 1) {
        if (
          array[0].includes(textExibido) == false &&
          array[1].includes(textLeitura) == false
        ) {
          array[0].push(textExibido);
          array[1].push(textLeitura);
        }
      }
      return array;
    },
    alteraOpcoesTemp: function (acao, valor, atividade) {
      this.opcoesTemp[0] = acao;
      this.opcoesTemp[1] = valor;
      this.opcoesTemp[2] = atividade;
      return this.opcoesTemp;
    },
    geradorEscolhas: function (
      variavelControle,
      textPergunta,
      arrayOpcoes,
      textStatus = "",
      valorStatus = 0
    ) {
      status(variavelControle, textStatus, valorStatus);
      console.log(`\n${textPergunta}`);
      this.escolha[0] = prompt().toLowerCase().replace(/ /g, "");
      while (arrayOpcoes[1].indexOf(this.escolha[0]) == -1) {
        console.clear();
        status(variavelControle, textStatus, valorStatus);
        console.log(
          `\nVocê escreveu "${this.escolha[0]}" as opções possiveis são: ${arrayOpcoes[0]}`
        );
        console.log(
          "Opção escolhida não é valida ou ainda não foi atribuida, Tecle enter para tentar novamente."
            .red
        );
        prompt();
        console.clear();
        status(variavelControle, textStatus, valorStatus);
        console.log(`\n${textPergunta}`);
        this.escolha[0] = prompt().toLowerCase().replace(/ /g, "");
      }
      return this.escolha;
    },
    random: [0],
    geradorRandom: function (qtd = 3, situacao = "", array) {
      if (situacao == "palavra") {
        this.random = array[Math.floor(Math.random() * qtd)];
      } else if (usuario.saude > 50 || situacao == "normal") {
        this.random = Math.floor(Math.random() * qtd);
      } else if (usuario.saude < 50) {
        if (qtd == 3) {
          let listaFerrada = [0, 0, 0, 1, 2];
          this.random =
            listaFerrada[Math.floor(Math.random() * listaFerrada.length)];
          console.log(
            `Estou muito mal não sei se consigo ter algum resultado nas atividades!!`
              .yellow
          );
        } else if (qtd == 2) {
          let listaFerrada2 = [0, 0, 0, 1];
          this.random =
            listaFerrada2[Math.floor(Math.random() * listaFerrada2.length)];
          console.log(
            `Estou muito mal não sei se consigo ter algum resultado nas atividades!!`
              .yellow
          );
        }
      }
      return this.random;
    },
    construirAbrigo: function (array) {
      this.geradorEscolhas(
        this.i,
        `Qual tipo de abrigo devo construir: ${array[0]} ?`,
        array
      );
      status(metodo.i);
      usuario.alteraAsp(1);
      this.localAbrigo = false;
      if (this.escolha == "emergencia") {
        console.log(
          `\nNão gastei muita energia pra fazer, e ficou bom só não sei é resistente a chuvas fortes.`
            .yellow
        );
        this.abrigoEmergencial = true;
        usuario.perdeEnergia();
        this.removeAddOpcoes(
          this.atividades,
          " Construir abrigo ",
          "construirabrigo",
          0
        );
      } else if (this.escolha == "semi-permanente") {
        console.log(
          `\nGastei um pouco mais de energia pra fazer, ficou mais resistente mas ainda posso ter problemas com chuvas fortes.`
            .yellow
        );
        this.abrigoSemiPermanente = true;
        usuario.perdeEnergia(20);
        this.removeAddOpcoes(
          this.atividades,
          " Construir abrigo ",
          "construirabrigo",
          0
        );
      } else if (this.escolha == "permanente") {
        console.log(
          `\nGastei bastante energia pra fazer, ficou muito resistente não terei problemas com chuvas fortes.`
            .yellow
        );
        this.abrigoPermanente = true;
        usuario.perdeEnergia(30);
        this.removeAddOpcoes(
          this.atividades,
          " Construir abrigo ",
          "construirabrigo",
          0
        );
      }
    },
    fimDeJogo: false,
    localAbrigo: true,
    abrigoEmergencial: false,
    abrigoSemiPermanente: false,
    abrigoPermanente: false,
    negarDesistencia: false,
    buscarAlimento: function () {
      this.geradorEscolhas(
        metodo.i,
        `Qual eu escolho ? ${metodo.opcoesAlimentos[0]}`,
        metodo.opcoesAlimentos
      );
      if (this.escolha == "pescar") {
        if (this.agua == true) {
          if (
            this.pescar == true &&
            (this.mosquiteiro == true || this.arpao == true)
          ) {
            pescar();
          } else {
            status(metodo.i);
            console.log(
              "\nTentei pescar, mas não tenho um arpão, uma besta de bambu ou um mosquiteiro que possa usar como rede para pescar, não consegui nada"
                .yellow
            );
            usuario.perdeEnergia();
          }
        }
      } else if (this.escolha == "cacar") {
        if (this.cacar == true && (this.besta == true || this.arpao == true)) {
          this.funcaoCacar();
          usuario.perdeEnergia();
        } else {
          status(metodo.i);
          console.log(
            "\nTentei caçar, mas não tenho um arpão ou uma besta de bambu para capturar um animal, não consegui nada"
              .yellow
          );
          usuario.perdeEnergia();
        }
      } else if (this.escolha == "coletar") {
        if (this.coletar == true) {
          this.funcaoColetar();
        }
      }
    },
    cacar: false,
    funcaoColetar: function () {
      this.geradorRandom(2);
      if (this.random == 0) {
        status(this.i);
        console.log(
          `\nCaramba não consegui pegar as bananas, esses macacos são muito violentos, e estavam vigiando a moita.`
            .yellow
        );
        usuario.perdeEnergia();
      } else if (this.random == 1) {
        metodo.comeu = true;
        status(this.i);
        console.log(
          `\nConsegui driblar os macacos e pegar algumas bananas estão um delicia.`
            .yellow
        );
        usuario.ganhaEnergia(10);
      }
    },
    funcaoCacar: function () {
      this.geradorRandom();
      if (this.random == 0) {
        status(this.i);
        console.log(
          `\nCaramba não consegui nada só gastei energia e tempo, espero ter mais sorte da próxima vez.`
            .yellow
        );
        usuario.perdeEnergia();
      } else if (this.random == 1) {
        status(this.i);
        console.log(`\nPeguei um animal de porte pequeno.`.yellow);
        prompt("tecle enter para continuar");
        this.geradorEscolhas(
          this.i,
          "Estou com muita fome e agora, ASSAR e perder tempo e energia fazendo fogo ou COMER CRU ?",
          this.opcoesAssarCru
        );
        if (this.escolha[0] == "assar") {
          status(this.i);
          this.alteraOpcoesTemp("comer esse animal assado", 30, "cacar");
          this.fazerFogo(this.opcoesTemp);
          usuario.alteraAsp(1);
          metodo.comeu = true;
        } else if (this.escolha[0] == "comercru") {
          status(this.i);
          this.comerCru();
        }
      } else {
        status(this.i);
        console.log(
          `\nPeguei um animal de porte médio, estou muito feliz, obrigado Deus !`
            .yellow
        );
        prompt("Tecle enter para continuar:");
        this.geradorEscolhas(
          this.i,
          "Estou com muita fome e agora, ASSAR e perder tempo e energia fazendo fogo ou COMER CRU ?",
          this.opcoesAssarCru
        );
        if (this.escolha[0] == "assar") {
          this.alteraOpcoesTemp("comer esse animal assado", 50, "cacar");
          this.fazerFogo(this.opcoesTemp);
          usuario.alteraAsp(1);
          metodo.comeu = true;
        } else if (this.escolha[0] == "comercru") {
          this.comerCru();
        }
      }
    },
    pescar: false,
    coletar: false,
    bananas: false,
    bambu: false,
    madeiraosso: false,
    conseguirAgua: function () {
      status(metodo.i);
      if (this.panela == true || this.panelaBambu == true) {
        this.geradorEscolhas(
          this.i,
          "Estou com muita sede, mas será que devo ferver antes ?",
          this.opcaoSimNao
        );
        status(metodo.i);
        if (this.escolha == "sim") {
          this.alteraOpcoesTemp(
            "beber água purificada",
            10,
            "beberagua".yellow
          );
          this.fazerFogo(this.opcoesTemp);
        } else if (this.escolha == "nao") {
          console.log(
            `\nVou beber assim mesmo, mas minha saúde irá diminuir.`.yellow
          );
          usuario.alteraSaude();
          usuario.alteraAsp(0);
        }
      } else {
        console.log(
          `\nTerei que beber assim mesmo sem purificar não tenho panela para ferver, mas minha saúde irá diminuir.`
            .yellow
        );
        usuario.alteraSaude();
      }
      usuario.alteraHidratacao(1);
    },
    agua: false,
    bebeuAgua: false,
    comeu: false,
    dormiu: false,
    explorarArea: function () {
      usuario.perdeEnergia();
      usuario.alteraAsp(1);
      status(this.i);
      this.geradorRandom(
        this.opcoesExplorar[1].length,
        "palavra",
        this.opcoesExplorar[1]
      );
      if (this.random == "agua") {
        console.log(
          `\nEncontrei uma fonte de água, agora tenho como me hidratar e também pescar.`
            .yellow
        );
        this.agua = true;
        this.pescar = true;
        this.removeAddOpcoes(
          this.atividades,
          " Conseguir água ",
          "conseguiragua",
          1
        );
        this.removeAddOpcoes(this.opcoesAlimentos, " Pescar ", "pescar", 1);
        this.removeAddOpcoes(this.opcoesExplorar, " Água ", "agua", 0);
      } else if (this.random == "localabrigo") {
        console.log(
          `\nEncontrei um ótimo lugar para contruir um abrigo e os recursos para isso já estão perto.`
            .yellow
        );
        this.removeAddOpcoes(
          this.atividades,
          " Construir abrigo ",
          "construirabrigo",
          1
        );
        this.removeAddOpcoes(
          this.opcoesExplorar,
          " Local abrigo ",
          "localabrigo",
          0
        );
      } else if (this.random == "mapa") {
        console.log(
          `\nEncontrei o mapa agora sei onde será o ponto de resgate para ir no 7º dia.`
            .yellow
        );
        this.mapa = true;
        this.removeAddOpcoes(this.opcoesExplorar, " Mapa ", "mapa", 0);
      } else if (this.random == "banana") {
        console.log(
          `\nEncontrei uma moita de bananas, agora posso vir aqui coletar, porém há alguns macacos babuinos em volta devo tomar cuidado com eles.`
            .yellow
        );
        this.coletar = true;
        this.bananas = true;
        this.removeAddOpcoes(
          this.atividades,
          " Buscar alimento ",
          "buscaralimento",
          1
        );
        this.removeAddOpcoes(this.opcoesAlimentos, " Coletar ", "coletar", 1);
        this.removeAddOpcoes(this.opcoesExplorar, " Banana ", "banana", 0);
      } else if (this.random == "bambu") {
        console.log(
          `\nEncontrei o uma moita de bambus, agora posso vir aqui coletar e construir ferramentas com ele.`
            .yellow
        );
        this.bambu = true;
        this.removeAddOpcoes(
          this.atividades,
          " Construir ferramentas ",
          "construirferramentas",
          1
        );
        this.removeAddOpcoes(
          this.opcoesFerramentas,
          " Besta de bambu ",
          "bestadebambu",
          1
        );
        if (this.panela == false) {
          this.removeAddOpcoes(
            this.opcoesFerramentas,
            " Panela de bambu ",
            "paneladebambu",
            1
          );
        }
        this.removeAddOpcoes(this.opcoesExplorar, " Bambu ", "bambu", 0);
      } else if (this.random == "madeiraosso") {
        console.log(
          `\nEncontrei madeira e ossos posso construir um arpão com isso.`
            .yellow
        );
        this.madeiraosso = true;
        this.removeAddOpcoes(
          this.atividades,
          " Construir ferramentas ",
          "construirferramentas",
          1
        );
        this.removeAddOpcoes(this.opcoesFerramentas, " Arpão ", "arpao", 1);
        this.removeAddOpcoes(
          this.opcoesExplorar,
          " Madeira e ossos ",
          "madeiraosso",
          0
        );
      } else {
        console.log(
          `\nAcredito que ja tenha explorado tudo que é possivel, andei bastante não encontrei mais nada.`
            .yellow
        );
        this.removeAddOpcoes(this.atividades, " Explorar ", "explorar", 0);
      }
    },
    explorar: true,
    construirFerramentas: function () {
      if (this.opcoesFerramentas[0].length != 0) {
        this.geradorEscolhas(
          this.i,
          `Quais dessas ferramentas irei construir: ${this.opcoesFerramentas[0]}?`,
          this.opcoesFerramentas
        );
        status(this.i);
        if (this.escolha[0] == "arpao") {
          this.arpao = true;
          this.cacar = true;
          this.removeAddOpcoes(this.opcoesFerramentas, " Arpão ", "arpao", 0);
          this.removeAddOpcoes(
            this.atividades,
            " Buscar alimento ",
            "buscaralimento",
            1
          );
          this.removeAddOpcoes(this.opcoesAlimentos, " Caçar ", "cacar", 1);
          console.log(
            `\nMuito bom agora com esse arpão posso pescar ou caçar.`.yellow
          );
        } else if (this.escolha[0] == "bestadebambu") {
          this.bestaBambu = true;
          this.cacar = true;
          this.removeAddOpcoes(
            this.opcoesFerramentas,
            " Besta de bambu ",
            "bestadebambu",
            0
          );
          this.removeAddOpcoes(
            this.atividades,
            " Buscar alimento ",
            "buscaralimento",
            1
          );
          this.removeAddOpcoes(this.opcoesAlimentos, " Caçar ", "cacar", 1);
          console.log(
            `\nMuito bom agora com essa besta de bambu posso pescar ou caçar.`
              .yellow
          );
        } else if (this.escolha[0] == "paneladebambu") {
          this.panelaBambu = true;
          this.removeAddOpcoes(
            this.opcoesFerramentas,
            " Panela de bambu ",
            "paneladebambu",
            0
          );
          console.log(
            `\nMuito bom agora com essa panela posso purificar minha água, nem fez falta eu não ter trazido a minha.`
              .yellow
          );
        }
      } else {
        console.log(
          `\nTentei construir mais alguma coisa mas não tenho matéria prima nem ideias, acho que já deu de ferramentas por enquanto.`
            .yellow
        );
        this.removeAddOpcoes(
          this.atividades,
          " Construir ferramentas ",
          "construirferramentas",
          0
        );
      }
    },
    facao: false,
    arpao: false,
    besta: false,
    panela: false,
    mosquiteiro: false,
    mapa: false,
    fazerFogo: function fazerFogo(array) {
      if (this.pederneira == true) {
        status(metodo.i);
        console.log(
          `\nCom essa pederneira é mole fazer fogo, agora posso ${array[0]}.`
            .yellow
        );
        usuario.perdeEnergia(5);
        usuario.ganhaEnergia(array[1]);
      } else if (this.pederneira == false) {
        status(metodo.i);
        console.log(
          `\nNão tenho pederneira para fazer fogo terei que tentar por fricção isso nem sempre da certo.`
            .yellow
        );
        prompt("tecle enter para continuar.");
        this.geradorRandom(2);
        if (this.random == 0) {
          status(metodo.i);
          usuario.perdeEnergia(20);
          if (array[2] == "dormir") {
            console.log(
              `\nNão consegui fazer fogo estou exausto só perdi energia e tempo, agora não posso ${array[0]}, a noite será longa`
            );
          } else if (array[2] == "pescar" || array[2] == "cacar") {
            console.log(
              `\nNão consegui fazer fogo estou exausto só perdi energia e tempo, agora não posso ${array[0]}, terei que arriscar e comer cru mesmo.`
            );
            this.comerCru();
          } else if (array[2] == "beberagua") {
            console.log(
              `\nNão consegui fazer fogo estou exausto só perdi energia e tempo, agora não posso ${array[0]}, terei que beber assim mesmo, minha saúde irá diminuir.`
            );
            usuario.alteraSaude();
          }
        } else if (this.random == 1) {
          status(metodo.i);
          console.log(
            `\nNão foi fácil conseguir uma brasa, mas consegui, da até vontade de chorar agora posso ${array[0]}.`
              .yellow
          );
          usuario.perdeEnergia(20);
          usuario.ganhaEnergia(array[1]);
        }
      }
    },
    pederneira: false,
    comerCru: function () {
      status(metodo.i);
      metodo.comeu = true;
      console.log(
        `\nComer alimentos de origem animal cru ou sem processo de higienização pode causar diarréia ou intoxicação. `
          .red
      );
      prompt("Tecle enter para continuar:");
      metodo.geradorRandom(2);
      if (metodo.random == 0) {
        status(metodo.i);
        console.log(
          `\nNão sei se foi uma boa escolha comer sem assar estou com dor de barriga !`
            .yellow
        );
        usuario.alteraSaude(20, 0);
        usuario.perdeEnergia();
        usuario.alteraAsp(0);
      } else if (metodo.random == 1) {
        status(metodo.i);
        console.log(
          `\nO sabor não é muito bom, mas pelo menos acumulei alguma energia e por sorte não tive dor de barriga.`
            .yellow
        );
        usuario.ganhaEnergia();
        usuario.alteraAsp(0);
      }
    },
    dormir: function () {
      this.dormiu = true;
      status(metodo.i);
      if (this.localAbrigo == false) {
        usuario.alteraSaude(10, 1, 10);
        if (this.abrigoPermanente == true) {
          console.log(
            `\nSerá ótimo um descanso, ainda mais neste abrigo permanente que fiz, não preciso temer chuvas.`
              .yellow
          );
          prompt("tecle enter para continuar:");
          this.verificaMosquito();
        } else if (this.abrigoSemiPermanente == true) {
          console.log(
            `\nSerá ótimo um descanso, meu abrigo semi-permanente é bom porém não é reforçado contra chuvas mais fortes.`
              .yellow
          );
          prompt("tecle enter para continuar:");
          this.verificaMosquito();
          this.chuva(this.abrigoSemiPermanente, 3);
        } else if (this.abrigoEmergencial == true) {
          console.log(
            `\nSerá ótimo um descanso, mas meu abrigo emergencial não é páreo contra chuvas mais fortes.`
              .yellow
          );
          prompt("tecle enter para continuar:");
          this.verificaMosquito();
          this.chuva(this.abrigoEmergencial, 2);
        }
      } else {
        console.log(
          `\nDormir fora de um abrigo não vai ser legal minha saúde vai diminuir.`
            .yellow
        );
        usuario.alteraSaude(10);
        usuario.alteraAsp(0);
      }
    },
    verificaNoiteSede: function () {
      if (this.agua == true && usuario.hidratacao < 60) {
        this.removeAddOpcoes(
          metodo.atividades,
          " Conseguir água ",
          "conseguiragua",
          1
        );
      } else if (this.agua == true && usuario.hidratacao == 60) {
        this.removeAddOpcoes(
          metodo.atividades,
          " Conseguir água ",
          "conseguiragua",
          0
        );
      }
      if (metodo.j == 2) {
        this.removeAddOpcoes(metodo.atividades, " Dormir ", "dormir", 1);
      } else if (metodo.j == 0) {
        this.removeAddOpcoes(metodo.atividades, " Dormir ", "dormir", 0);
      }
    },
    mosquitos: true,
    verificaMosquito: function () {
      if (this.mosquitos == true) {
        this.geradorEscolhas(
          this.i,
          "Não tenho mosquiteiro preciso conter esses insetos, eles irão atrapalhar meu sono será que tento fazer fogo pra afastá-los ou não ?",
          this.opcaoSimNao
        );
        if (this.escolha == "sim") {
          metodo.alteraOpcoesTemp("dormir em paz", 10, "dormir");
          this.fazerFogo(this.opcoesTemp);
          usuario.alteraAsp(1);
        } else if (this.escolha == "nao") {
          status(metodo.i);
          console.log(
            `\nVou tentar suportar esses mosquitos, mas já sei que perderei energia fazendo isso.`
              .yellow
          );
          usuario.alteraAsp(0);
          usuario.perdeEnergia(10);
        }
      } else {
        console.log(
          `Pelo menos não terei problemas com insetos com esse mosquiteiro`
            .yellow
        );
        usuario.alteraAsp(1);
        usuario.ganhaEnergia(10);
      }
    },
    pedirAjudaMedica: function () {
      status(this.i);
      console.log(
        "\nO médico irá avaliar se pode me ajudar aqui, ou se vou precisar desistir para ir a um hospital"
          .yellow
      );
      prompt("tecle enter para continuar");
      this.geradorRandom(2, "normal");
      if (this.random == 0) {
        this.geradorEscolhas(
          this.i,
          "O médico me orientou a desistir e ir no hospital me tratar e agora CONTINUAR ou DESISTIR ? \nSe eu continuar posso até conseguir chegar no dia 21, mas minhas atividades terão mais chance de erro por conta da minha condição.",
          metodo.opcaoContinuaDesiste
        );
        if (this.escolha[0] == "desistir") {
          status(this.i);
          console.log(
            `\nMelhor mesmo desistir minha saúde em primeiro lugar !`.red
          );
          metodo.escolha = "Fiquei desidratado";
          this.resultado(metodo.escolha);
        } else if (this.escolha[0] == "continuar") {
          status(this.i);
          console.log(
            "\nOk vou continuar mas a vida não vai ser fácil pra mim daqui por diante, mas vou continuar até não aguentar mais."
              .yellow
          );
          this.negarDesistencia = true;
        }
      } else if (this.random == 1) {
        status(this.i);
        console.log(
          "\nGraças a Deus o médico conseguiu resolver meu problema me sinto muito melhor, vou poder continuar no programa."
            .yellow
        );
        usuario.alteraSaude(10, 1);
      }
    },
    chuva: function (tipoAbrigo, qtdRandom) {
      this.geradorRandom(qtdRandom, "normal");
      if (this.random == 0) {
        console.log(
          "\nHouve uma chuva a noite meu abrigo não resistiu, terei que construir outro."
            .yellow
        );
        tipoAbrigo = false;
        this.removeAddOpcoes(
          this.atividades,
          " Construir abrigo ",
          "construirabrigo",
          1
        );
      }
    },
    resultado: function (motivo) {
      if (usuario.peso < 80) {
        peso = "Perdi";
      } else {
        peso = "Ganhei";
      }
      if (metodo.i < 7) {
        this.fimDeJogo = true;
        status(metodo.i, "Perdedor", 1);
        console.log(
          `\n${motivo} e precisei sair do programa fiquei apenas ${
            metodo.i
          } dias! ${peso} ${80 - usuario.peso}Kg e minha ASP fechou em ${
            usuario.asp
          }.`.yellow
        );
      } else if (metodo.i == 7 && this.mapa == true) {
        status(metodo.i, "Vencedor", 1);
        console.log(
          `\nVenci cheguei ao 7º dia, tenho tudo para sobreviver largado e pelado! ${peso} ${
            80 - usuario.peso
          }Kg e minha ASP fechou em ${usuario.asp}.`.yellow
        );
      } else {
        status(metodo.i, "Perdedor", 1);
        console.log(
          `\nCheguei ao 7º dia, mas não encontrei o mapa para o local de resgate, não acredito! ${peso} ${
            80 - usuario.peso
          }Kg e minha ASP fechou em ${usuario.asp}.`.yellow
        );
      }
    },
  };
  function administradorEscolhas(a) {
    if (a == "explorar") {
      metodo.explorarArea();
    } else if (a == "construirabrigo") {
      metodo.construirAbrigo(metodo.opcoesAbrigo);
    } else if (a == "buscaralimento") {
      metodo.buscarAlimento();
    } else if (a == "conseguiragua") {
      metodo.conseguirAgua();
    } else if (a == "dormir") {
      metodo.dormir();
    } else if (a == "construirferramentas") {
      metodo.construirFerramentas();
    }
  }
  function status(i, text = "", valor = 0) {
    if (valor == 0) {
      console.clear();
      console.log(
        design(
          `                                              ${i + 1} º  DIA`,
          "Standard",
          "Default",
          "Default",
          90
        )
      );
      console.log(
        "##########################################################################################################################"
      );
      console.log(
        ` ########################## PESO: ${usuario.peso}Kg ## ENERGIA: ${usuario.energia} ## HIDRATAÇÃO: ${usuario.hidratacao} ## SAÙDE: ${usuario.saude} ## ASP: ${usuario.asp} ##########################`
      );
      console.log(
        "##########################################################################################################################"
      );
    } else if (valor == 1) {
      console.clear();
      console.log(
        design(
          `                                 ${text}`,
          "Standard",
          "Default",
          "Default",
          90
        )
      );
      console.log(
        "##########################################################################################################################"
      );
      console.log(
        ` ########################## PESO: ${usuario.peso}Kg ## ENERGIA: ${usuario.energia} ## HIDRATAÇÃO: ${usuario.hidratacao} ## SAÙDE: ${usuario.saude} ## ASP: ${usuario.asp} ##########################`
      );
      console.log(
        "##########################################################################################################################"
      );
    }
  }
  let usuario = {
    nome: "",
    peso: 80,
    hidratacao: 60,
    energia: 50,
    asp: 0,
    saude: 100,
    perdeEnergia: function (valor = 10) {
      if (this.energia <= 0) {
        this.peso -= 1;
        this.energia = 0;
        console.log(
          `\nEstou consumindo mais energia do que estou ingerindo e quando isso acontece eu perco peso.`
            .yellow
        );
      } else {
        this.energia -= valor;
        if (this.energia < 0) {
          this.energia = 0;
          this.peso -= 1;
          console.log(
            `\nEstou consumindo mais energia do que estou ingerindo e quando isso acontece eu perco peso.`
              .yellow
          );
        }
      }
    },
    ganhaEnergia: function (valor = 10) {
      if (this.energia == 100) {
        this.peso += 1;
      } else {
        this.energia += valor;
        if (this.energia > 100) {
          this.energia = 100;
          this.peso += 1;
        }
      }
    },
    alteraAsp: function (valor) {
      if (valor == 0) {
        if (this.asp >= 1) {
          this.asp -= 1;
        }
      } else if (valor == 1) {
        if (this.asp < 10) {
          this.asp += 1;
        }
      }
    },
    alteraSaude: function (valor = 10, restaurar = 0, valor2 = 100) {
      if (restaurar == 1) {
        this.saude += valor2;
        if (this.saude >= 100) {
          this.saude = 100;
        }
      } else if (this.saude > 50 && restaurar == 0) {
        this.saude -= valor;
        if (this.saude < 50 && this.negarDesistencia == false) {
          metodo.geradorEscolhas(
            metodo.i,
            `Minha saúde está baixa será que devo pedir ajuda ${metodo.opcaoSimNao[0][0]} ou ${metodo.opcaoSimNao[0][1]} ? `,
            metodo.opcaoSimNao
          );
          if ((metodo.escolha[0] = "sim")) {
            metodo.pedirAjudaMedica();
          } else if (this.saude <= 0) {
            prompt("tecle enter para continuar");
            status(metodo.i);
            console.log(
              `\nNão suporto mais minha saúde chegou no limite estou morrendo, produção me ajuda por favor!`
                .red
            );
            metodo.escolha = "Cheguei no limite da minha saúde";
            this.resultado(metodo.escolha);
          }
        }
      } else if (this.saude <= 50 && restaurar == 0) {
        this.saude -= valor;
        if (this.saude <= 0) {
          prompt("tecle enter para continuar");
          status(metodo.i);
          console.log(
            `\nNão suporto mais minha saúde chegou no limite estou morrendo, produção me ajuda por favor!`
              .red
          );
          metodo.escolha = "Cheguei no limite da minha saúde";
          this.resultado(metodo.escolha);
        } else if (metodo.negarDesistencia == false) {
          metodo.geradorEscolhas(
            metodo.i,
            `Minha saúde está baixa será que devo pedir ajuda ${metodo.opcaoSimNao[0][0]} ou ${metodo.opcaoSimNao[0][1]} ?`,
            metodo.opcaoSimNao
          );
          if ((metodo.escolha[0] = "sim")) {
            metodo.pedirAjudaMedica();
          }
        }
      }
    },
    alteraHidratacao: function (valor) {
      if (valor == 1) {
        metodo.bebeuAgua = true;
        if (this.hidratacao < 60) {
          this.hidratacao += 20;
        }
      } else if (valor == 0) {
        if (this.hidratacao >= 20) {
          this.hidratacao -= 20;
          if (this.hidratacao <= 0) {
            console.log(
              `Sinto caimbras não consigo ficar de pé estou a três dias sem água, produção por favor me ajuda!`
                .red
            );
            metodo.escolha = "Fiquei desidratado";
            metodo.resultado(metodo.escolha);
          }
        }
      }
    },
    verificaComeuBebeuDormiu: function () {
      status(metodo.i);
      if (metodo.comeu == true) {
        metodo.comeu = false;
      } else if (metodo.comeu == false) {
        console.log("\nPassei o dia sem comer, isso afeta minha saúde.".yellow);
        this.alteraSaude();
      }
      if (metodo.bebeuAgua == true) {
        metodo.bebeuAgua = false;
      } else if (metodo.bebeuAgua == false) {
        console.log(
          "\nPassei o dia sem tomar água, se fico três dias seguidos sem me hidratar não sobrevivo."
            .yellow
        );
        this.alteraHidratacao(0);
      }
      if (metodo.dormiu == true) {
        metodo.dormiu = false;
      } else if (metodo.dormiu == false) {
        console.log("\nVirei o dia sem dormir, isso afeta minha saúde.".yellow);
        this.alteraSaude();
      }
      prompt("Tecle enter para continuar:");
    },
  };
  let perguntas = [
    `São 6h do dia ${metodo.i + 1} o que farei pela manhã: ${
      metodo.atividades[0]
    } ?`,
    `São 12h do dia ${metodo.i + 1} o que farei pela tarde: ${
      metodo.atividades[0]
    } ? `,
    `Já está anoitecendo são 18h do dia ${metodo.i + 1} o que farei: ${
      metodo.atividades[0]
    } ?`,
  ];
  console.clear();
  console.log(
    design(
      "               Largado\n                             e\n                  Pelado",
      "Epic",
      "default",
      "default",
      200
    )
  );
  prompt("Tecle enter para continuar");
  metodo.escolhaItens();
  for (metodo.i = 0; metodo.i < 7; metodo.i++) {
    for (metodo.j = 0; metodo.j < 3; metodo.j++) {
      metodo.verificaNoiteSede();
      perguntas = [
        `São 6h do dia ${metodo.i + 1} o que farei pela manhã: ${
          metodo.atividades[0]
        } ?`,
        `São 12h do dia ${metodo.i + 1} o que farei pela tarde: ${
          metodo.atividades[0]
        } ? `,
        `Já está anoitecendo são 18h do dia ${metodo.i + 1} o que farei: ${
          metodo.atividades[0]
        } ?`,
      ];
      metodo.geradorEscolhas(metodo.i, perguntas[metodo.j], metodo.atividades);
      administradorEscolhas(metodo.escolha[0], metodo.atividades);
      prompt("Tecle enter para continuar:");
    }
    usuario.verificaComeuBebeuDormiu();
    if (metodo.fimDeJogo == true) {
      break;
    }
  }
  metodo.resultado(metodo.escolha);
  loop = prompt(
    "Digite 'R' para reiniciar o jogo ou qualquer tecla para finalizar: "
  )
    .toLowerCase()
    .replace(/ /g, "");
} while (loop == "r");
