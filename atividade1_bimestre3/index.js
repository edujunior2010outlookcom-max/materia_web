const matematica = require('./math');
let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
console.log("A soma de", a, "com", b, "é:", matematica.somar(a, b));
console.log("A subtração de", a, "com", b, "é: ", matematica.subtrair(a, b));
console.log("A divisão de", a, "com", b, "é:", matematica.divisao(a, b));
console.log("A multiplicação de", a, "com", b, "é: ", matematica.multiplicacao(a, b));
console.log("A potenciação de", a, "com", b, "é: ", matematica.potencia(a, b));
