let user = prompt('What day is it today?')

function exercise(x) {
  function day() {
    return 'Todays exercise is: ';
  }
  return day() + x;
}

console.log(exercise('running'))

//Lines 3 through 8 show a closure