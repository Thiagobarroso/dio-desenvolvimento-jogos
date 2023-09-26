class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    gastoPercurso(distancia, valorCombustivel) {
        return (distancia * valorCombustivel) / this.gastoMedioPorKm;
    }

}

const Onix = new Carros('Prata', 'Chevrolet', 12)
console.log(Onix.gastoPercurso(70,5))
const Palio = new Carros('Fiat', 'Preto', 10)
console.log(Palio.gastoPercurso(70, 5))


