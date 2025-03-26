//Desafio Classificador

let nomeDoHeroi = 'crash'
let xpDoHeroi = 1500


switch (true) { 
    case xpDoHeroi <= 1000: 
    console.log("o herói "  + nomeDoHeroi + " está no nível Ferro");
    break;
     case xpDoHeroi <=2000:
     console.log("o herói "  + nomeDoHeroi + " está no nível Bronze"); 
     break;
    case xpDoHeroi <=5000: 
    console.log("o herói "  + nomeDoHeroi + " está no nível Prata");
     break; 
     case xpDoHeroi <= 6000: 
     console.log("o herói "  + nomeDoHeroi + " está no nível Ouro"); 
     break; 
     case xpDoHeroi <= 8000: 
     console.log("o herói "  + nomeDoHeroi + " está no nível Platina");
      break; 
      case xpDoHeroi <= 9000: 
      console.log("o herói "  + nomeDoHeroi + " está no nível Ascendente"); 
      break; 
      case xpDoHeroi <= 10000: 
      console.log("o herói "  + nomeDoHeroi + " está no nível Imortal"); 
      break; 
      case xpDoHeroi >= 10001: 
    console.log("o herói "  + nomeDoHeroi + " está no nível Radiante"); 
    break;

}
    
    



