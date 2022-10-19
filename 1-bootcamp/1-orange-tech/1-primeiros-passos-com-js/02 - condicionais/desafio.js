/* 
Faça um porgrma para calcuçar o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço etanol
2 - Preço gasolina
3 - Tipo do combustível que está no seu carro;
4 - Gasto médio do combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem
 */

const precoGasolina = 5.46;
const precoEtanol = 3.4;
const tipoCombustivel = "Etanol";
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === "Etanol") {
  const valorGastoEtanol = litrosConsumidos * precoEtanol;
  console.log("O valor da etanol é de: " + valorGastoEtanol.toFixed(2));
} else {
  const valorGastoGasolina = litrosConsumidos * precoGasolina;
  console.log("O valor da gasolina é de: " + valorGastoGasolina.toFixed(2));
}
