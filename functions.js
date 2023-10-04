function f(x) {
  return Math.abs((6 * x) - 11);
}

function g(x) {
  return (1 + Math.pow(x, 2)) / (x + 1);
}

function h(x) {
  return 5 + Math.pow(x - 1, 1 / 2);
}

function f2(x) {
  return {x: x, y: (-3 * x**2) + 2};
};

const xPoints = [-2, -1, 0, 1, 2];

const allPoints = xPoints.map((x) => {
  return f(x);
});

console.log(allPoints);