function checkAge(age) {
  return (age > 18) || confirm('Батьки дозволили?');
}

function checkAge2(age) {
  return (age > 18) ? true : confirm('Батьки дозволили?');
}

function min(a, b) {
  return (a < b) ? a : b;
}

function min2(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

function pow2(x, n) {
  if(n == 1) {
    return x;
  } else {
    return x * pow2(x, n - 1);
  }
}

let x = prompt('Введіть x:', '');
let n = prompt('Введіть n (показник степеня):', '');
x = Number(x);
n = Number(n);
alert(pow(x, n));

const ask = (question, yes, no) => {
  return confirm(question) ? yes() : no();
}

ask(
  "Ви згодні?",
  () => { alert("Ви погодились."); },
  () => { alert("Ви скасували виконання."); }
);