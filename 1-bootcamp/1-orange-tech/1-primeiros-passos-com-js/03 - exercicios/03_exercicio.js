/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoDoProduto = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  const valorDoDesconto = (10 / 100) * precoDoProduto;
  console.log(valorDoDesconto);
  const valorFinalDeDesconto = precoDoProduto - valorDoDesconto;
  console.log(valorFinalDeDesconto);
} else if (formaDePagamento === 2) {
  const valorDoDesconto = (15 / 100) * precoDoProduto;
  console.log(valorDoDesconto);
  const valorFinalDeDesconto = precoDoProduto - valorDoDesconto;
  console.log(valorFinalDeDesconto);
} else if (formaDePagamento === 3) {
  console.log(precoDoProduto);
} else {
  const valorDoJuros = (10 / 100) * precoDoProduto;
  const valorFinalJuros = precoDoProduto + valorDoJuros;
  console.log(valorFinalJuros);
}
