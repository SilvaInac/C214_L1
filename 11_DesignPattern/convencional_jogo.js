class Jogo{
    constructor (name,lancamento,plataforma)
    {
        this.name = name;
        this.lancamento = lancamento,
        this.plataforma = plataforma
    }

    getName(){
        return this.name;
    }
    getLancamento(){
        return this.lancamento;
    }
    getPlataforma(){
        return this.plataforma;
    }
}

const jogo = new Jogo('God of War',2018,"Playstation")
console.log(jogo.getName())
console.log(jogo.getLancamento())
console.log(jogo.getPlataforma())
