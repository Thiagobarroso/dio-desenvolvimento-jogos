const num = [24, 33, 22, 54];

for (let i = 0; i < num.length; i++){
    const numero = num[i];

    if (numero % 2 === 0){
        console.log(`O Numero ${numero} é par`)
    }else {
        console.log(`${numero}, não é par`)
    }
}