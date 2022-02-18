let x = parseInt(prompt('Digite o valor da Variável X'))
let y = parseInt(prompt('Digite o valor da Variável Y'))

alert(`Valor de X = ${x} e o valor de Y = ${y}`)

let z = x

x = y
y = z

alert(`Valor de X = ${x} e o valor de Y = ${y}`)
