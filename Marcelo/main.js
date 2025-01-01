function calcularFinanciamento() {
    const valor = parseFloat(document.getElementById('valor').value);
    const prazo = parseInt(document.getElementById('prazo').value);

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido para o financiamento.");
        return;
    }

    if (prazo <= 0) {
        alert("Por favor, selecione um prazo válido.");
        return;
    }

    // Taxa de juros fictícia de 1% ao mês (pode ser alterada)
    const taxaJuros = 0.01;

    // Fórmula dos juros compostos: M = P * (1 + i)^n
    const montante = valor * Math.pow((1 + taxaJuros), prazo);
    const parcela = montante / prazo;

    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Valor financiado: R$ ${valor.toFixed(2)} <br>
                            Prazo: ${prazo} meses <br>
                            Montante final: R$ ${montante.toFixed(2)} <br>
                            Parcela mensal: R$ ${parcela.toFixed(2)}`;
}