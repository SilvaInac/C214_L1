const Jogo = (name,lancamento,plataforma) => ({
    name,
    lancamento,
    plataforma,
    getName: () => name,
    getLancamento: () =>lancamento,
    getPlataforma:() => plataforma

})

const jogo = Jogo('God of War',2018,"Playstation")
console.log(jogo.getName())
console.log(jogo.getLancamento())
console.log(jogo.getPlataforma())