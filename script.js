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

function calcTotal (y, x) {
    return Number(y) + (Number(y) * x / 100);
}

function calcTip (y, x) {
    return y / x;
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
    const Total = calcTotal(bill.value, 5).toFixed(2);
    const Tip = calcTip(Total, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

ten.addEventListener('click', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, 10).toFixed(2);
    const Tip = calcTip(Total, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

fifteen.addEventListener('click', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, 15).toFixed(2);
    const Tip = calcTip(Total, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

twentyfive.addEventListener('click', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, 25).toFixed(2);
    const Tip = calcTip(Total, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

fifty.addEventListener('click', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, 50).toFixed(2);
    const Tip = calcTip(Total, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})

reset.addEventListener('click', () => {
    location.reload();
})

tip.addEventListener('input', () => {
    if (checkPeople() == false) return;
    const Total = calcTotal(bill.value, tip.value).toFixed(2);
    const Tip = calcTip(Total, people.value).toFixed(2);
    insertTotal.innerHTML = "$"+Total
    insertTip.innerHTML = "$"+Tip;
})
