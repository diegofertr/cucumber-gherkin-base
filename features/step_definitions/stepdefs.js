const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function esViernes(_today) {
  // dejamos la implementacion en blanco por ahora
  return _today === 'VIERNES' ? "TGIF" : "NO";
}

// Write code here that turns the phrase above into concrete actions
Given('hoy es {string}', function (_dia) {
  this.today = _dia;
});
       
When('pregunto si es Viernes', function () {
  this.resultadoActual = esViernes(this.today);
});
       
Then('me deberian decir {string}', function (resultadoEsperado) {
  assert.strictEqual(this.resultadoActual, resultadoEsperado);
});