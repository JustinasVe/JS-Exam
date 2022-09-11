/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
    this.a = a,
    this.b = b,
    this.sum = function(){
        return this.a + this.b;
    }
    this.subtraction = function(){
        return this.a - this.b;
    }
    this.multiplication = function(){
        return this.a * this.b;
    }
    this.division = function(){
        return this.a / this.b;
    }
};

const numbersSum = new Calculator(6, 5);
const numbersSubtraction = new Calculator(6, 5);
const numbersMultiplication = new Calculator(2, 2);
const numbersDivision = new Calculator(21, 3)

console.log(`Skaičių suma yra lygi ${numbersSum.sum()}`);
console.log(`Skaičių skirtumas yra lygus ${numbersSubtraction.subtraction()}`);
console.log(`Skaičių daugybos rezultatas yra lygus ${numbersMultiplication.multiplication()}`);
console.log(`Skaičių dalybos rezultatas yra lygus ${numbersDivision.division()}`);