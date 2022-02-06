// если export находится в тойже папке то запись адреса такая:

// import одной переменной, имя может не совпадать

// import ss from './js0.js'

// let pp = ss(6)
// console.log(pp)

// pp = ss(6, 20)
// console.log(pp)

// import нескольких переменных, с одним переименованием переменной(имена должны совпадать с export)

import {
  ffdf,
  kkff as dsss
} from './js0.js'

console.log(ffdf(7))
console.log(dsss(5))