function calculate() {
  // set initial output value
  let output = 0;

  document.getElementById('output').textContent = `${output}`;

  // set the initial input value
  document.getElementById('inputnum').value = 1;

  let input = parseInt(document.getElementById('inputnum').value);

  function add() {
    //let input = parseInt(document.getElementById('inputnum').value);
    let newnum = output + input;
    output = newnum;
    printout();
    //document.getElementById('output').textContent = `${output}`;
  }

  function sub() {
    //let input = parseInt(document.getElementById('inputnum').value);
    let newnum = output - input;
    output = newnum;
    printout();
    //document.getElementById('output').textContent = `${output}`;
  }

  function printout() {
    if (output < 0) {
      document.getElementById('output').style.color = '#FA4659';
      document.getElementById('output').textContent = `${output}`;
    } else {
      document.getElementById('output').style.color = '#FFFFFF';
      document.getElementById('output').textContent = `${output}`;
    }
  }

  document.getElementById('plus').addEventListener('click', add);
  document.getElementById('minus').addEventListener('click', sub);
}

window.addEventListener('DOMContentLoaded', function () {
  calculate();
});
