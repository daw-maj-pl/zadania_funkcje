function isEven(numFromPrompt) {
  const evenNumber = (numFromPrompt % 2 === 0) ? `Liczba ${numFromPrompt} jest parzysta.` : `Liczba ${numFromPrompt} NIE jest parzysta.`;
  console.log(evenNumber);
  document.querySelector('.is-even').textContent = evenNumber;
}

function isInRange(numFromPrompt) {
  const condition = ((numFromPrompt >= -35) && (numFromPrompt < 2)) || ((numFromPrompt > 11) && (numFromPrompt <= 27));
  const inRange = condition ? 'Ta liczba mieści się w przedziale <-35;2) lub (11;27>.' : 'Ta liczba NIE mieści się w przedziale <-35;2) lub (11;27>.';
  console.log(inRange);
  document.querySelector('.is-in-range').textContent = inRange;
}

function isPassed(numFromPrompt) {  
  let message = '';
  switch (numFromPrompt) {
    case 0:
      message = 'Egzamin do poprawy';
      break;
    case 1:
      message = 'Zdałeś Egzamin';
      break;
    case 2:
      message = 'Zaliczona tylko teoria';
      break;
    case 3:
      message = 'Zaliczona tylko praktyka';
      break;
    default:
      message = 'Wprowadzona liczba jest spoza zakresu 0-3.';
      break;
  }
  console.log(message);
  document.querySelector('.is-passed').textContent = message;
}

function getValueFromPrompt() {
  let numberFromPrompt = parseInt(prompt("Wprowadź liczbę całkowitą"));
  console.log(typeof numberFromPrompt);
  isEven(numberFromPrompt);
  isInRange(numberFromPrompt);
  isPassed(numberFromPrompt);
}

getValueFromPrompt();