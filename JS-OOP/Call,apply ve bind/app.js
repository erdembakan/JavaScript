const obj1 = {

    number1: 10,
    number2: 20,
};

const obj2 = {

    number1: 30,
    number2: 40,
};

function AddNumbers(number3,number4)
{
    console.log(this.number1 + this.number2 + number3 + number4);
}

// AddNumbers.call(obj1,100,200);
// AddNumbers.call(obj2,200,300);

// AddNumbers.apply(obj1,[100,200]);
// AddNumbers.apply(obj2,[200,300]);

function getNumbersTotal(number3,number4) {

    return this.number1 + this.number2 + number3 + number4;
}

const Copyfunct1 = getNumbersTotal.bind(obj1);
const Copyfunct2 = getNumbersTotal.bind(obj2);

console.log(Copyfunct1(100,200));
console.log(Copyfunct2(200,300));