import fp from "lodash/fp";

export const fibo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  if (n > 2) {
    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
    return memo[n];
  }
};

export const factorial = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 0) return 1;
  if (n >= 1) return n * factorial(n - 1, memo);
};

export const multiplicacion = "???";

// Funciones de lodash/fp que les pueden ser útiles a partir de este punto:
// Las vistas en la clase (particularmente fp.flow y fp.curry)
// fp.sortBy (para ordenar un array)
// fp.reverse (para dar vuelta un array)
// fp.first (para obtener el primer valor de un array)

export const atributo = "???";

export const multiplicarAtributo = "???";

export const ordenarPor = "???";

export const mayorPersona = "???";
