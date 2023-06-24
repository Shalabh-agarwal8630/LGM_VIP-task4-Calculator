function appendToScreen(value) {
 calculator.screen.value += value;
}

function clearScreen() {
 calculator.screen.value = '';
}

function evaluateExpression() {
 try {
   calculator.screen.value = eval(calculator.screen.value);
 } catch (error) {
   calculator.screen.value = 'Error';
 }
}
