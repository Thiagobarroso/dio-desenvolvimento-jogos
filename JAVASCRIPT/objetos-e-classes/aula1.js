class Carros {
    marca;
    cor;
    ano;

    constructor(marca, cor, ano){
        this.marca = marca;
        this.cor = cor; 
        this.ano = ano;
    }

    gastoPorKm() {
        console.log(`O carro é da marca ${this.marca} e da cor ${this.cor}.`)
    }
}

function compararAno(carro1, carro2){
    if (carro1.ano > carro2.ano){
        console.log(`O Carro ${carro2.marca} é mais velho que o carro ${carro1.marca}`)
    }else if (carro2.ano > carro1.ano){
        console.log(`O Carro ${carro1.marca} é mais velho que o carro ${carro2.marca}`)
    }else {
        console.log('Os carros tem o mesmo ano de fabricação')
    }

}

const Chevet = new Carros('Chevrolet', 'Prata', 2020);
const KA = new Carros('Ford', 'Preta', 2020);

compararAno(Chevet,KA);