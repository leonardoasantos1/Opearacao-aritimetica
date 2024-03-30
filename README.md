# Calculadora de Desconto

## Objetivo
A função `calculadoraDesconto` calcula o valor final após aplicar um desconto percentual sobre um valor original.

## Parâmetros
- `valorOriginal`: O valor original antes do desconto.
- `porcentagemDesconto`: A porcentagem de desconto a ser aplicada sobre o valor original.

## Retorno
A função retorna o valor final após o desconto ter sido aplicado.

## Funcionamento
1. Calcula o valor do desconto utilizando a fórmula: `(porcentagemDesconto * valorOriginal) / 100`.
2. Subtrai o valor do desconto do valor original: `valorOriginal - desconto`.
3. Retorna o valor final após o desconto.

## Exemplo de Uso
```javascript
const valorOriginal = 200; 
const porcentagemDesconto = 25; 
const valorFinal = calculadoraDesconto(valorOriginal, porcentagemDesconto);

console.log('Valor original: R$', valorOriginal.toFixed(2));
console.log('Porcentagem de desconto:', porcentagemDesconto + '%');
console.log('Valor final após desconto: R$', valorFinal.toFixed(2));
```
Neste exemplo, o código calcula o desconto de 25% sobre um valor original de R$ 200.
