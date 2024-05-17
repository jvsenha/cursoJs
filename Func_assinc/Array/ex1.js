/*1. Exercício de Transformação e Redução:
-Crie um array de 5 números chamado 'valores com valores de 1 a 5.
- Utilize os métodos map", "filter" e "reduce para encontrar a soma dos quadrados dos números pares em 'valores*/
const valores = [1, 2, 3, 4, 5];

const valoresQuadrados = valores.map(num => num**num)
                                .filter(num => num%2==0)
                                .reduce((soma, valor)=> soma+valor,0)
console.log(valoresQuadrados)

/*2. Exercício de Pesquisa e Ordenação: 
- Crie um array de 5 objetos contendo informações de produtos, com nome e preço. 
- Utilize os métodos `filter` para encontrar os produtos com preço abaixo de 50 e `sort` para ordená-los por ordem crescente de preço. */
const produtos = [
    {nome: "Camiseta", preco: 25.99},
    {nome: "Calça Jeans", preco: 69.99},
    {nome: "Tênis", preco: 490.99},
    {nome: "short", preco: 17.99},
    {nome: "Meias", preco: 9.99}
];

const produto = produtos.filter(prod => prod.preco<=50).sort((a,b)=>a.preco-b.preco)
console.log( produto)

/*3. Exercício de Modificação: 
- Crie um array de 5 strings contendo nomes de frutas. 
- Mostre uma lista com uma caixa de seleção (check box) na frente de cada fruta. Para cada fruta marcada utilize os métodos `map` 
para adicionar "deliciosa" na frente da fruta e `join` para transformar o vetor em uma única string separada por vírgulas com a string
“deliciosa” na frente. */  
