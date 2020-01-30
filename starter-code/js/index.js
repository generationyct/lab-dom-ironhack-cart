var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $unitPrice = document.getElementById('#pu-number');
var $quantity = document.getElementById('quantity').value
var $subTotal = +document.querySelector('#subtot-span').textContent

// function updateSubtot($product) {

  // Iteration 1.1
const unitPrice = document.querySelectorAll('#pu-number')
  for (let i = 0; i < unitPrice.length; i++) {
    $unitPrice = +unitPrice[i].innerText
  }

const updateQuantity = document.getElementById('quantity').addEventListener("click", () => {
  $quantity = document.getElementById('quantity').value
  calcSubTotal()
})

const calcSubTotal = () => {
  let subTotal = $unitPrice * $quantity
  $subTotal = subTotal
  document.querySelector('#subtot-span').innerHTML = $subTotal
}

function calcAll() {
  // Iteration 1.2
}
$calc.onclick = calcAll;