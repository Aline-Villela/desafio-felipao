
let total = saldoDeVitorias(86,37)


console.log (`o saldo de vitórias do herói é ${total}`)

function saldoDeVitorias(vitorias, derrotas){
 let resultado = vitorias - derrotas 
 return resultado 
}
 
 let nivelHeroi = 65
 
switch (true){
    case nivelHeroi <= 10: 
    console.log("o herói está no nível Ferro");
    break;
     case nivelHeroi <=20:
    console.log("o herói está no nível Bronze"); 
     break;
    case nivelHeroi <=50: 
    console.log("o herói está no nível Prata");
     break; 
     case nivelHeroi <= 80: 
     console.log("o herói está no nível Ouro"); 
     break; 
     case nivelHeroi <= 90: 
     console.log("o herói está no nível Diamante");
      break; 
      case nivelHeroi <= 100: 
      console.log("o herói está no nível lendário"); 
      break; 
     case nivelHeroi >= 101: 
     console.log("o herói está no nível Radiante"); 
    break;

}