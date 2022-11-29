class Veiculo{
    placa = String;
    ano = Number;

    constructor(placa, ano){
        this.placa = placa;
        this.ano = ano;
    }

    setPlaca(placa){
        this.placa = placa;
    }

    setAno(ano){
        this.ano = ano;
    }

    getPlaca(){
        return this.placa;
    }

    getAno(){
        return this.ano;
    }

    exibirDados(){
        console.log(`Placa: ${this.placa} Ano: ${this.ano}`);
        
    }

}

class Caminhao extends Veiculo{
    eixos = Number;
    constructor(placa, ano, eixos){
        super(placa,ano);
        this.eixos = eixos;
    }

    setEixos(eixos){
        this.eixos = eixos;
    }

    getEixos(){
        return this.eixos;
    }

    exibirDados(){
        console.log("Caminhao:") 
        super.exibirDados();
        console.log("eixos:",this.eixos)
    }
}

class Onibus extends Veiculo{
    assentos = Number;

    constructor(placa,ano,assentos){
        super(placa,ano);
        this.assentos = assentos;
    }

    setAssentos(assentos){
        this.assentos = assentos
    }

    getAssentos(){
        return this.assentos
    }

    exibirDados(){
        console.log("Onibus:"); 
        super.exibirDados()
        console.log(`Assentos: ${this.assentos}`)
        
    }
}

let caminhao = new Caminhao("OLA-123",1995,5)
let onibus = new Onibus("OLA-456",1992,50)
caminhao.exibirDados();
onibus.exibirDados();