let nota1 = 5.0;
let nota2 = 3.0;
let nota3 = 5.0;

let media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2))

if (media > 7) {
    console.log ('O aluno foi aprovado')

}else if (media >= 5 && media <= 7) {
    console.log ('O aluno está de recuperação')

} else {
    console.log ('média menor que 5, Aluno reprovado.')
}