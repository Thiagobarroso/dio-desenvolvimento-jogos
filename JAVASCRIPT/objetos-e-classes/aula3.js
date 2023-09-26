class Pessoa {
    nome;
    peso; 
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC (){
        return this.peso / Math.pow(this.altura,(2));
    }

    classificarIMC(){
        const imc = this.calcularIMC()
        if (imc < 18.5) {
            return ('você está abaixo do peso')
        } else if ( imc >= 18.5 && imc < 25) {
            return ('Seu peso está normal')
        } else if (imc >= 25 && imc < 30) {
            return ('Você está acima do peso')
        } else if (imc >= 30 && imc < 40){
            return ('Você está obeso')
        }else {
            return ('Você está abeso grave')
        };
    }


}

const p1 = new Pessoa('Thiago', 130 , 1.81)
console.log(p1.calcularIMC().toFixed(2))
console.log(p1.classificarIMC())