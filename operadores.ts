let a: number = 10;
let b: number = 14;

//Aritméticos (=, -, *, /, %)
console.log('soma', a + b );
console.log('subtrção', a - b );
console.log('multiplicação', a * b );
console.log('divisão', a / b );
console.log('resto', a % b );

//Relacionais
console.log('igual (==)', a == b);
console.log('diferente (!=)', a != b);
console.log('maior que (>)', a > b);
console.log('menor que (<)', a < b);
console.log('maior ou maior (<=)', a >= b);
console.log('menor ou igual (>=)', a <= b);

//Identidade Restrita
console.log('Identico', a === b);
console.log('Não identico', a !== b);

//Lógicos
let x: boolean = true;
let y: boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);

//Condicional ou ternário
let idade: number = 17;
let acesso = idade >= 18 ? 'Permiotido beijar na boca' : 'Não permitido'