//Desafio Classificador

let nomeDoHeroi = 'crash'
let xpDoHeroi = 3000
;

switch (true) { 
    case xpDoHeroi <= 1000: 
    console.log("classificação do herói é de ferro");
    break;
     case xpDoHeroi <=2000:
     console.log("classificação do herói é de Bronze"); 
     break;
    case xpDoHeroi <=5000: 
    console.log("classificação do herói é de Prata");
     break; 
     case xpDoHeroi <= 6000: 
     console.log("classificação do herói é de Ouro"); 
     break; 
     case xpDoHeroi <= 8000: 
     console.log("classificação do herói é de Platina");
      break; 
      case xpDoHeroi <= 9000: 
      console.log("classificação do herói é de Ascendente"); 
      break; 
      case xpDoHeroi <= 10000: 
      console.log("classificação do herói é de Imortal"); 
      break; 
      case xpDoHeroi >= 10001: 
    console.log("classificação do herói é Radiante"); 
    break;

}
    
    console.log( "o herói " + nomeDoHeroi  +  " está no nivel "  +  xpDoHeroi )



