function convert() {
  var dollarValue = document.getElementById("dollar").value;
  // Converter o valor para um número
  var numericValue = parseFloat(
    dollarValue.replace(/\./g, "").replace(",", ".")
  );
  document.getElementById("result").value = numericValue * 100;
}

function mask(input) {
  let value = input.value;
  value = value.replace(/\D/g, "");

  value = (value / 100).toFixed(2) + "";
  value = value.replace(".", ",");

  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  input.value = value;
}

// Adiciona o evento de entrada ao campo de entrada
document.getElementById("dollar").addEventListener("input", function () {
  mask(this);
});
