// selecting selector
const bill = document.querySelector('.bill-input');
const people = document.querySelector('.people-input');

const btn5 = document.querySelector('.five');
const btn10 = document.querySelector('.ten');
const btn15 = document.querySelector('.fifteen');
const btn25 = document.querySelector('.twentyfive');
const btn50 = document.querySelector('.fifty');
const reset = document.querySelector('.reset');
const custom = document.querySelector('.custom-input');

const tip = document.querySelector('.amount-result');
const total = document.querySelector('.total-result');
const peopleContainer = document.querySelector('.people');

// getting the bill value
let billValue = 0;
const billAmount = () => {
  bill.addEventListener('keyup', () => {
    billValue = bill.value;
    return billValue;
  });
};
billValue = billAmount();

// getting the people value
let peopleValue = 0;
const peopleAmount = () => {
  people.addEventListener('keyup', () => {
    peopleValue = people.value;
    return peopleValue;
  });
};
peopleValue = peopleAmount();

// tip% and display
let tipAmount = 0;
let totalPerson = 0;

const calcul = (value) => {
  if (!peopleValue) {
    peopleContainer.classList.add('zero');
    return;
  } else {
    peopleContainer.classList.remove('zero');
  }
  // tip amount
  tipAmount = (billValue * value) / peopleValue;
  tipAmount = Math.ceil(tipAmount);
  console.log(tipAmount);
  tip.textContent = `$${tipAmount}`;

  // people amount
  totalPerson = billValue / peopleValue + tipAmount;
  total.innerHTML = `$${totalPerson}`;
};

btn5.addEventListener('click', () => {
  calcul(0.05);
});
btn10.addEventListener('click', () => {
  calcul(0.1);
});
btn15.addEventListener('click', () => {
  calcul(0.15);
});
btn25.addEventListener('click', () => {
  calcul(0.25);
});
btn50.addEventListener('click', () => {
  calcul(0.5);
});

// custom btn
let customValue = 0;
custom.addEventListener('keyup', () => {
  customValue = custom.value;
  calcul(customValue / 100);
});

// reset btn
reset.addEventListener('click', () => {
  total.innerHTML = `$0.00`;
  tip.textContent = `$0.00`;
  people.value = null;
  bill.value = null;
  custom.value = null;
  peopleContainer.classList.remove('zero');
});
