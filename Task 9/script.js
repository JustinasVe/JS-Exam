/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title,
        this.director = director,
        this.budget = budget
    }
    
    wasExpensive() {
        // ar galima su ternary operator returninti? Nepavyko vietoj if-else panaudoti šitoje vietoje
        if (this.budget > 100000000) {
            return true;
        } else {
            return false;
        }
    }
};

const myMovie = new Movie('Home Alone', 'Chris Columbus', 18000000);

console.log(myMovie.wasExpensive());

