let numero = 0;

console.log("Digite um número para gerar a tabuada de 1 a 10:");

process.stdin.on("data", function (data) {
  entrada = data.toString().trim().toLowerCase();
  numero = entrada;
  for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
  }
  process.exit();
});
