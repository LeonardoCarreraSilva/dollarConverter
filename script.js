function convert() {
  document.getElementById("result").value =
    document.getElementById("dollar").value * 100;
}


function mask(){
  value = document.getElementById("dollar").value.replace('.', '').replace(',', '').replace(/\D/g, '').replace(/[,!]/g, '')

  const options = { minimumFractionDigits: 2 }
  const result = new Intl.NumberFormat('pt-BR', options).format(
    parseFloat(value) / 100
  )

  console.log(result)

  return 'R$ ' + result
}