### Tabuada em JavaScript

Este é um simples script em JavaScript que gera a tabuada de multiplicação de um número fornecido pelo usuário, de 1 a 10.

#### Utilização:

1. **Instruções de Uso:**
   - O script começa exibindo a mensagem: "Digite um número para gerar a tabuada de 1 a 10:".
   - Você deve digitar um número no console e pressionar Enter.

2. **Geração da Tabuada:**
   - Após receber o número digitado, o script calcula e exibe a tabuada desse número, multiplicando-o pelos números de 1 a 10.
   - Cada linha da tabuada é exibida no formato "número x i = resultado", onde `número` é o número digitado pelo usuário, `i` varia de 1 a 10, e `resultado` é o produto da multiplicação.

3. **Finalização:**
   - Após exibir a tabuada completa, o script finaliza automaticamente.

#### Como Executar:

Para executar o script:

1. Certifique-se de ter o Node.js instalado no seu sistema.
2. Copie o código JavaScript para um arquivo (por exemplo, `tabuada.js`).
3. Abra o terminal, navegue até o diretório onde o arquivo está localizado.
4. Execute `node tabuada.js`.
5. Siga as instruções exibidas no console para interagir com o script e visualizar a tabuada desejada.

#### Exemplo de Código:

```javascript
let numero = 0;

console.log("Digite um número para gerar a tabuada de 1 a 10:");

process.stdin.on("data", function (data) {
  numero = parseInt(data.toString().trim());

  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
  }

  process.exit();
});
```

#### Notas:

- Certifique-se de digitar apenas números inteiros positivos para obter resultados válidos.
- O script assume uma interação via terminal onde o usuário pode inserir o número desejado.
- Modifique o script conforme necessário para atender a requisitos adicionais ou personalizações específicas.

Este script oferece uma maneira rápida e eficiente de visualizar a tabuada de multiplicação de qualquer número de sua escolha. Experimente e divirta-se explorando os resultados! 🧮
