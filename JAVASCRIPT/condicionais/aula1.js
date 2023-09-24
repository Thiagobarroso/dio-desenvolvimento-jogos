const valorGasolina = 5.79;
const valorEtanol = 3.99;
const combustivelUtilizado = 'gasolina';
const consumoPorKM = 10;
const distancia = 100;

const preçoViagemGasolina = (valorGasolina / consumoPorKM) * distancia;
const preçoViagemEtanol = (valorEtanol / consumoPorKM) * distancia;

if (combustivelUtilizado === 'gasolina' ) {
    console.log(preçoViagemGasolina.toFixed(2))
}else if (combustivelUtilizado === 'etanol') {
    console.log(preçoViagemEtanol.toFixed(2))
} 
else {
    console.log('Você não digitou um combustivel válido, digite (gasolina ou etanol)')
}