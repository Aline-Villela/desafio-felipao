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

     switch(novoHeroi.nomeHeroi, novoComabatente.nomeHeroi, novoBatalhador.nomeHeroi, novoDesafiante.nomeHeroi){
        case "Hercules":
            console.log(`O ${this.tipoDoHeroi} atacou usando ${this.ataqueDoHeroi}.`);
        case "Merlin":
            console.log(`O ${this.tipoDoHeroi} atacou usando ${this.ataqueDoHeroi}.`);
        case "Oogway":
            console.log(`O ${this.tipoDoHeroi} atacou usando ${this.ataqueDoHeroi}.`);
        case "Kurenai":
            console.log(`O ${this.tipoDoHeroi} atacou usando ${this.ataqueDoHeroi}.`);
     }

