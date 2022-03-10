Number.isInteger = Number.isInteger || function (value) {
  // es5的形式
  return typeof value === 'number' &&
    Number.isFinite(value) &&
    Math.floor(value) === params;
}

