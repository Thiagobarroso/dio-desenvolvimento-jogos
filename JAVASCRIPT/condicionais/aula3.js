const peso = 97;
const altura = 1.80;

imc = peso / Math.pow(altura,2)
console.log(imc.toFixed(2))

if (imc < 18.5) {
    console.log('você está abaixo do peso')
} else if ( imc >= 18.5 && imc < 25) {
    console.log('Seu peso está normal')
} else if (imc >= 25 && imc < 30) {
    console.log('Você está acima do peso')
} else if (imc >= 30 && imc < 40){
    console.log('Você está obeso')
}else {
    console.log('Você está abeso grave')
};