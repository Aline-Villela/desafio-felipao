class HeroiDessaAventura{
    constructor(nomeHeroi, idade, tipoDoHeroi, ataqueDoHeroi){
        this.nomeHeroi = nomeHeroi;
        this.idade = idade;
        this.tipoDoHeroi = tipoDoHeroi;
        this.ataqueDoHeroi = ataqueDoHeroi;

    }

    atacar(){
        console.log(`O ${this.tipoDoHeroi} ${this.nomeHeroi} atacou usando ${this.ataqueDoHeroi}.`);
           
    }
}

     let novoHeroi= new HeroiDessaAventura ("Hercules", "32", "guerreiro", "espada");
     let novoComabatente = new HeroiDessaAventura("Merlin" , "208", "mago", "magia");
     let novoBatalhador = new HeroiDessaAventura("Oogway" , "150", "monge", "artes marciais");
     let novoDesafiante = new HeroiDessaAventura("Kurenai" , "27", "ninja", "shuriken");

       
let listaDeHerois = [novoHeroi, novoComabatente, novoBatalhador, novoDesafiante];


for (let i = 0; i < 4; i++) {

    console.log(`i: ${i}`);

    let heroi = listaDeHerois[i];

    switch (heroi.nomeHeroi) {
        case "Hercules":
            console.log(`O ${heroi.tipoDoHeroi} atacou usando ${heroi.ataqueDoHeroi}.`);
            break;
        case "Merlin":
            console.log(`O ${heroi.tipoDoHeroi} atacou usando ${heroi.ataqueDoHeroi}.`);
            break;
        case "Oogway":
            console.log(`O ${heroi.tipoDoHeroi} atacou usando ${heroi.ataqueDoHeroi}.`);
            break;
        case "Kurenai":
            console.log(`O ${heroi.tipoDoHeroi} atacou usando ${heroi.ataqueDoHeroi}.`);
            break;
    }
}