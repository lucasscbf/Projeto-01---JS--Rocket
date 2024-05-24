let numberOne = Number (prompt('Digite primeiro número:'))
let numberTwo = Number (prompt('Digite primeiro número:'));

let sum =  numberOne +  numberTwo;
alert(`A soma dos dois número é: ${sum}`)
let sub =  numberOne -  numberTwo;
alert(`A Subtração dos dois número é: ${sub}`)
let mul =  numberOne *  numberTwo;
alert(`A Multiplicação dos dois número é: ${mul}`)
if (numberTwo == 0) {
  alert('não pode dividir por 0 (zero)')
}else {
  let div =  numberOne /  numberTwo;
  alert(`A Divisão dos dois número é: ${div}`)

}
let rest =  numberOne %  numberTwo;
alert(`O resto da Divisão dos dois número é: ${rest}`)

if (numberOne == numberTwo) {
  alert('Os número são iguais')
} else {
  alert('Os números são diferentes')
}

if (sum % 2 === 0) {
  alert (`a soma dos número é: ${sum}, portando é: Par`);
  } else {
  alert (`a soma dos número é:${sum}, portanto Ímpar`)
  }