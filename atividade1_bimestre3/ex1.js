const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});  
    rl.question("Digite o primeiro número: ", function(a) {

    rl.question("Digite o segundo número: ", function(b) {
        a = Number(a);
        b = Number(b);
        if(isNaN(a) || isNaN(b)){
            console.log("Por favor, forneça dois valores numéricos");
            continue;
    }
            
        else {
        const resultado = a+b;
        console.log("O resultado da soma é: ", resultado);
        break;
    }
    
        rl.close();
    })
})





{
a = Number(process.argv[2]);
b = Number(process.argv[3]);
if (isNaN(a) || isNaN(b)){
    console.log("Digite um número");
    break;
}
else {
    console.log("A soma de", a, "com", b, "é:", matematica.somar(a, b));
    console.log("A subtração de", a, "com", b, "é: ", matematica.subtrair(a, b));
    console.log("A divisão de", a, "com", b, "é:", matematica.divisao(a, b));
    console.log("A multiplicação de", a, "com", b, "é: ", matematica.multiplicacao(a, b));
    console.log("A potenciação de", a, "com", b, "é: ", matematica.potencia(a, b));
}
}

