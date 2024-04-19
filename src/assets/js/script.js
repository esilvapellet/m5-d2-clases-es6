import Cliente from "./clases/Cliente.js";
import Impuesto from "./clases/Impuesto.js";

let impuesto1 = new Impuesto(1000000, 150000);
console.log(impuesto1.montoBrutoAnual);

let cliente1 = new Cliente("Ivan",impuesto1);
console.log(cliente1.calcularImpuesto());

console.log(cliente1.nombre);