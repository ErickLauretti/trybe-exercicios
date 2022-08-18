const custo = 50 * 1000;
const valor = 100;
const imposto = custo % 20;
const custoTotal = custo + imposto;
const produtos1000 = valor * 1000;
let lucro1000 = produtos1000 - custoTotal

if (produtos1000 - custoTotal) {
    console.log(lucro1000);
} else if (custo < 0) {
    console.log('erro');
} else {
    console.log('erro');
}