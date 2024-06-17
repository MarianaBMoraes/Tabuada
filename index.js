let numero = 0;

console.log("Digite um número para gerar a tabuada de 1 a 10:");

process.stdin.on("data", function (data) {
  numero = data.toString().trim().toLowerCase();
  for (let i = 1; i <= 10; i++) {
    console.log(numero + "x" + i + "=" + (numero * i));
  }
  process.exit();
});
