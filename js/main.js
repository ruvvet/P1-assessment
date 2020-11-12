// main function
function calculate() {
  // set initial output value that's displayed
  let output = 0;

  // output it to the page
  document.getElementById('output').textContent = `${output}`;

  // set the initial input value at 1
  document.getElementById('inputnum').value = 1;

  // input is the value from the input form
  let input = parseInt(document.getElementById('inputnum').value);

  // function that adds the current output # displayed, and the input num in the form
  function add() {
    let newnum = output + input;
    //reassign the new num as the output
    output = newnum;
    // print it to the page
    printout();
  }

  // function that subtracts input num from current output
  function sub() {
    let newnum = output - input;
    output = newnum;
    printout();
  }

  // in charge of taking the new output value and printing it
  function printout() {
    // if its negative, its red
    if (output < 0) {
      document.getElementById('output').style.color = '#FA4659';
      document.getElementById('output').textContent = `${output}`;
    } else {
      // else white
      document.getElementById('output').style.color = '#FFFFFF';
      document.getElementById('output').textContent = `${output}`;
    }
  }

  // the event listeners, clicking each button calls a diff function
  document.getElementById('plus').addEventListener('click', add);
  document.getElementById('minus').addEventListener('click', sub);
}

// waits until dom is loaded, then calls the calculate function which does all the stuff
window.addEventListener('DOMContentLoaded', function () {
  calculate();
});
