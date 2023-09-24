const valorProduto = 135;
const formaPagamento = 'Mais de 2x';


function criarDesconto (valor, desconto) {
    return  valor - (valor * (desconto / 100));
}

function criarAcrescimo (valor, acrescimo){
    return  valor + (valor * (acrescimo / 100))
}


if (formaPagamento === 'Debito') {
    console.log(criarDesconto(valorProduto, 10));

} else if (formaPagamento === 'Dinheiro' || formaPagamento === 'Pix' ) {
    console.log(criarDesconto(valorProduto, 15))

} else if (formaPagamento === '2x') {
    console.log(valorProduto)

} else if (formaPagamento === 'Mais de 2x' ) {
    console.log(criarAcrescimo(valorProduto, 15))

} else {
    console.log('Digite uma opção valida: [Debito], [Dinheiro], [Pix], [2x] ou [Mais de 2x]')
}


