import fp from "lodash/fp";

export const fibo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  if (n > 2) {
    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
    return memo[n];
  }
};

export const factorial = n => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

export const multiplicacion = arr => arr.reduce((num, acc) => num * acc, 1);

export const atributo = str => obj => obj[str];

export const multiplicarAtributo = fp.curry((str, obj) =>
  multiplicacion(atributo(str)(obj))
);

export const ordenarPor = fp.curry((str, arr) =>
  fp.reverse(fp.sortBy(atributo(str), arr))
);

export const mayorPersona = fp.flow(
  fp.sortBy("edad"),
  fp.reverse,
  fp.first,
  atributo("nombre")
);
