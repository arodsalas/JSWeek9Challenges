function sharePizza(x, y) {
    function phrase() {
      return `each person gets ${x / y} slices of pizza; from our ${x} slice of pizza`;
    }
    return phrase();
  }
  
  console.log(sharePizza(10, 3));