/* 
Faça um porgrma para calcuçar o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio do combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem
 */

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
console.log("Litros consumidos foram de: " + litrosConsumidos.toFixed(2) + "L");
const valorGasto = litrosConsumidos * precoCombustivel;
console.log("Valor Gasto da viagem foi de: " + "R$" + valorGasto.toFixed(2));
