let valor
let quantidade
let opcao = prompt ("Escolha entre essas opções: \n1 Abastecer com gasolina \n2 Abastecer com álcool \n3 Calibrar os pneus")

switch (opcao) {
  case "1": 
    valor = parseInt (prompt("Digite o valor que voce quer colocar"))
    quantidade = valor / 5
    console.log (quantidade + " litros De gasolina abastecidos" )
    break;
  case "2":
    valor= parseInt (prompt("Digite o valor que voce quer colocar"))
    quantidade = valor / 3
    console.log (quantidade + " Litros de álcool abastecidos")
    break;
  default:
        console.log ("Voce calibrou os pneus")
    break;
}
        