function escrevaNome(nome){
    console.log("Meu nome é: " + nome);
}

escrevaNome('Thiago');
escrevaNome('Andressa');


function isMaiorDeIdade(idade){
    if (idade >= 18) {
        console.log('Você é maior de idade');
    }else {
        console.log('Você ainda não atingiu a maior idade');
    }
}

isMaiorDeIdade(18);