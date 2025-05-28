//==TIPOS EM TYPESCRIPT==

//Tipos primitivos
let texto: string = "olá mundo!";
let numero: number = 42;
let ativio: boolean = true; //ou falso

//Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let palavras: Array<string> = ["casa", "comida", "dança"]

//Tuplas
let pessoas: [string, number] = ["ola", 4]

//Enum -- Enumeração
enum Cores{
    Vermelho,
    Preto,
    Branco
}

let CorFavoritas: Cores = Cores.Vermelho;

//Any (Evitar sempre que possivel)
let dadoAleatorio: any = 5;
dadoAleatorio = "América";
dadoAleatorio = true;

//Unknow (tipo mais seguro do any)
let desconhecido: unknown = 10;
let desconhecidos: unknown = "Oi"
let desconhecid: unknown = true;

//Void
function mostrarAlerta(): void{
    console.log("Atenção, olhe para ela!")
}

//Null e Undefined
let nada: null = null;
let indefinido: undefined = undefined;

//Never (usado quando a função nunca retorna)
function erroFatal(mensagem:string): never{
    throw new Error(mensagem)
}

//Type aliases
type Usuario = {
    nome: string;
    idade: number;
}

let usuario1: Usuario = {nome:"Ana", idade: 17};