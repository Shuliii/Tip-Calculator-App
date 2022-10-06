const bill = document.querySelector('.billamount');
const people = document.querySelector('.people');
const error = document.querySelector('.error');
const five = document.querySelector('.five');
const ten = document.querySelector('.ten');
const fifteen = document.querySelector('.fifteen');
const twentyfive = document.querySelector('.twentyfive');
const fifty = document.querySelector('.fifty');
const reset = document.querySelector('.reset');
const tip = document.querySelector('.tip');
const insertTip = document.querySelector('.insertTip');
const insertTotal = document.querySelector('.insertTotal')

function calcTotal (y, x, z) {
    return (Number(y) + (Number(y) * x / 100)) / z;
}

function calcTip (y, x, z) {
    return (Number(y) * x / 100) / z;
}

function checkPeople () {
    if (people.value <= 0) {
        error.classList.add('visible')
        people.classList.add('red')
        return false;
    } else {
        error.classList.contains('visible') && error.classList.toggle('visible');
        people.classList.contains('red') && people.classList.toggle('red');
    }
}

five.addEventListener('click', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, 5, people.value).toFixed(2);
    const Tip = calcTip(bill.value, 5, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

ten.addEventListener('click', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, 10, people.value).toFixed(2);
    const Tip = calcTip(bill.value, 10, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

fifteen.addEventListener('click', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, 15, people.value).toFixed(2);
    const Tip = calcTip(bill.value, 15, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

twentyfive.addEventListener('click', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, 25, people.value).toFixed(2);
    const Tip = calcTip(Total, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

fifty.addEventListener('click', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, 50, people.value).toFixed(2);
    const Tip = calcTip(Tbill.value, 50, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

reset.addEventListener('click', () => {
    location.reload();
})

tip.addEventListener('change', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, tip.value, people.value).toFixed(2);
    const Tip = calcTip(bill.value, tip.value, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

bill.addEventListener('change', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, tip.value, people.value).toFixed(2);
    const Tip = calcTip(bill.value, tip.value, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

people.addEventListener('change', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, tip.value, people.value).toFixed(2);
    const Tip = calcTip(bill.value, tip.value, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})
