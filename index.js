const sqrtSymbol = '√';

const elements = {
  radicandInput: document.getElementById('radicand-input'),
  indexInput: document.getElementById('index-input'),
  sup: document.getElementById('sup'),
  symbol: document.getElementById('symbol'),
  radicand: document.getElementById('radicand'),
  answer: document.getElementById('simplify-radicals-answer'),
  radicalsButton: document.getElementById('simplify-radicals-button'),
  answerBig: document.getElementById('answer-big'),
  answerSup: document.getElementById('answer-sup'),
  answerSymbol: document.getElementById('answer-symbol'),
  answerRadicand: document.getElementById('answer-radicand'),
};

/**
 * Takes a number and returns an array of its factors
 * @param {number} number
 * @returns {number[]} Array of factors
 */
function getFactors(number) {
  const factors = [];
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

/** 
 * Takes a radicand and index and returns the simplified radical
 * @param {number} radicand
 * @param {number} index
 * @returns {number[]} Array containing the simplified radical
*/
function simplifyRadical(radicand, index) {
  const radicandFactors = getFactors(radicand);
  const commonFactors = radicandFactors.filter(function(factor) {
    return Math.pow(factor, 1 / index) % 1 === 0;
  });
  let a = commonFactors[commonFactors.length - 1];
  let b = Math.pow(a, 1 / index);
  return[b, index, radicand / a];
}

function updateProblem() {
  const radicand = elements.radicandInput.value;
  const index = elements.indexInput.value;
  elements.sup.innerText = index;
  elements.symbol.innerText = sqrtSymbol;
  elements.radicand.innerText = radicand;
}

function updateAnswer() {
  const answer = simplifyRadical(+elements.radicandInput.value, +elements.indexInput.value);
  elements.answerBig.innerText = answer[0];
  elements.answerSup.innerText = answer[1];
  elements.answerSymbol.innerText = sqrtSymbol;
  elements.answerRadicand.innerText = answer[2];
}

const radicandInputs = [
  elements.radicandInput,
  elements.indexInput,
];

radicandInputs.forEach(input => {
  input.addEventListener('input', updateProblem);
});

elements.radicalsButton.addEventListener('click', function(e) {
  e.preventDefault();
  updateAnswer();
})

function decimalToFraction(decimal) {
  let decimalLength = String(decimal).split('.')[1].length;
  let denominator = Math.pow(10, decimalLength);
  let numerator = decimal * denominator;
  let gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  gcd = gcd(numerator, denominator);
  let fraction = `${numerator / gcd} / ${denominator / gcd}`;
  return fraction;
}

document.getElementById('decimal-to-fraction-button').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('fraction').innerText = decimalToFraction(document.getElementById('decimal').value);
});