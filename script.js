let total = 0;
let contador = 0;

function Adicionar() {
    let input = document.getElementById('inputField').value;

    if (input.trim() === "") {
        alert('Por favor, insira uma nota.');
        return;
    }

    let number = parseFloat(input.replace(',', '.')); 

    if (isNaN(number)) {
        alert('A nota digitada é inválida, por favor, insira uma nota válida.');
        return;
    }
    
    if (number < 0 || number > 10) {
        alert('A nota digitada é menor que 0 ou maior que 10.');
        return;
    }

    let numberadd = document.createElement('p');
    numberadd.innerText = `A nota ${contador + 1} foi ${number}`;
    let espaco = document.getElementById('espacobranco');
    espaco.append(numberadd);
    contador += 1;
    total += number;
}

function CalcularMedia() {
    if (contador === 0) {
        alert('Nenhuma nota foi adicionada.');
        return;
    }
    let media = total / contador;
    
    let h2 = document.querySelector('h2');
    h2.innerText = `A média é: ${media.toFixed(2)}`;

}