// === Arrays e Métodos de Manipulação ===

let notas: number[] = [6, 7, 5, 8, 3];

//FOREACH
notas.forEach(n => console.log("Nota: ", n)); //Intera sobre elementos de uma cleção

//MEP
let notasAjustadas = notas.map(n => n + 0.5); // Criar um novo array com os resultados da chamada de uma função fornecida

//FILTER
let aprovados = notas.filter(n => n >= 6); // Criar um novo array contendo somente elementos que atendem uma condição especifica

//PUSH E POP
notas.push(10); // Adiciona um elemento no final do array
notas.pop() // Remover um elemto do final do array