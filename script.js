function Tabuada() {
  var num = window.document.getElementById("num");
  var mult = window.document.getElementById("mult");

  if (num.value.length == 0 || mult.value.length == 0) {
    window.alert("[ERRO] Campos inválidos.");
  } else {
    var n = Number(num.value);
    var m = Number(mult.value);
    var x = 0;
    var res = window.document.getElementById("resposta");
    res.innerHTML = `A tabuada do ${n} é: <br>`;
    
    do {
      r = n * x;
      res.innerHTML += `${n} x ${x} = ${r} <br>`;
      x++;
    } while (x <= m);
  }
}