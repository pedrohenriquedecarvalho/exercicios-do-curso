// quando nós traabalhamos com estrutura condicionais temos de ter em mente a tabela da verdade.

//  vamos criar um programa para verificar a maioridade penal.

let idade = 19;

if(idade >18){
    // se  idade for maior ou igual a 18 , ele executará a seguinte mensagem:
    console.log("Você é maior de idade");

}else{ 
    // Se ele nãao for maior ou igual a 18, ele executará a seguinte mensagem:
    console.log("Você é menor de idade");
}

// comparação de números:
let a = 10;
let b = 11;

if (a >= b){
    console.log("a é MAIOR ou IFUAL a b!");
}else{
    console.log("a é MENOR que b!");
}

// comparando tipo e valor

let valor1 = '10';
let valor2 = 10;


if(valor1 == valor2){
    console.log("os valores são iguais, mas os tipos não");
}
if(valor1 === valor2){
    console.log("os valores e tipos são iguais");
}
// = atribui valor
// == atribui igualdade
// compara valores e tipos

let email = "pedroyire@gmail.com";
let senha = "12345678";
let privilegio = "adm";

if(email ==="pedroyire@gmail.com" && senha ==="12345678" && (privilegio === "adm" || privilegio === "aluno")){
    console.log("logado!");
}else{ 
    console.log("login incorreto!");
}