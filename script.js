function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    resultado.innerHTML = "Por favor, insira valores válidos.";
    return;
  }

  const imc = peso / (altura * altura);
  const pesoIdeal = 21.7 * (altura * altura); // IMC médio saudável

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso ideal.";
  } else if (imc >= 18.5 && imc < 25) {
    classificacao = "Peso ideal. Parabéns!";
  } else if (imc >= 25 && imc < 30) {
    classificacao = "Acima do peso.";
  } else if (imc >= 30 && imc < 35) {
    classificacao = "Obesidade grau I.";
  } else if (imc >= 35 && imc < 40) {
    classificacao = "Obesidade grau II.";
  } else {
    classificacao = "Obesidade grau III (mórbida).";
  }

  resultado.innerHTML = `
    Seu IMC é <strong>${imc.toFixed(2)}</strong><br>
    ${classificacao}<br>
    Peso ideal para sua altura: <strong>${pesoIdeal.toFixed(1)} kg</strong>
  `;
}
