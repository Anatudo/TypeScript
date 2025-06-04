// ===FUNÇÃO===

// FUNÇÃO TRADICIONAL
function saudacao(nome: String): String{
    return `Olá, $(nome)`
}

console.log(saudacao(`Ana Clara`))

//ARROW FUNCION
const soma = (x: number, y: number): number => x + y;
console.log(`Soma:`, soma(2, 3))

//FUNÇÃO  COM VALOR PADÃO
function mesagem(texto: String = `BEM VINDO (A)!`): void{
    console.log(texto);
}

//FUNÇÃO PARÂMETRO OPICIONAL
function apresentar(nome?: String){
    if(nome){
        console.log(`Olá, ${nome}`);
    }
    else{
        console.log(`Olá Visitantes`);
    }
}