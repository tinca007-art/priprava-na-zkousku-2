const numbers = [
  42, 7, 83, 15, 96, 31, 68, 4, 57, 22,
  90, 13, 77, 49, 61, 8, 35, 100, 26, 54,
  71, 19, 88, 3, 46, 63, 29, 95, 11, 80,
];

const names = [
  'Jan',
  'Petra',
  'Tomáš',
  'Lucie',
  'Martin',
  'Kateřina',
  'Jakub',
  'Veronika',
  'Ondřej',
  'Tereza',
];

const animals = [
  {
    id: 1,
    name: 'Bella',
    type: 'pes',
    age: 5,
    color: 'hnědá',
    numberOfLegs: 4,
    continent: 'Evropa',
  },
  {
    id: 2,
    name: 'Micka',
    type: 'kočka',
    age: 3,
    color: 'černá',
    numberOfLegs: 4,
    continent: 'Evropa',
  },
  {
    id: 3,
    name: 'Dumbo',
    type: 'slon',
    age: 24,
    color: 'šedá',
    numberOfLegs: 4,
    continent: 'Afrika',
  },
  {
    id: 4,
    name: 'Kiwi',
    type: 'papoušek',
    age: 2,
    color: 'zelená',
    numberOfLegs: 2,
    continent: 'Austrálie',
  },
  {
    id: 5,
    name: 'Rocky',
    type: 'klokan',
    age: 6,
    color: 'ryšavá',
    numberOfLegs: 2,
    continent: 'Austrálie',
  },
  {
    id: 6,
    name: 'Šimon',
    type: 'pavouk',
    age: 1,
    color: 'černá',
    numberOfLegs: 8,
    continent: 'Jižní Amerika',
  },
  {
    id: 7,
    name: 'Leo',
    type: 'lev',
    age: 8,
    color: 'zlatá',
    numberOfLegs: 4,
    continent: 'Afrika',
  },
  {
    id: 8,
    name: 'Pepa',
    type: 'tučňák',
    age: 4,
    color: 'černobílá',
    numberOfLegs: 2,
    continent: 'Antarktida',
  },
  {
    id: 9,
    name: 'Máňa',
    type: 'kráva',
    age: 7,
    color: 'strakatá',
    numberOfLegs: 4,
    continent: 'Evropa',
  },
  {
    id: 10,
    name: 'Sisi',
    type: 'had',
    age: 3,
    color: 'zelená',
    numberOfLegs: 0,
    continent: 'Asie',
  },
  {
    id: 11,
    name: 'Bimbo',
    type: 'panda',
    age: 9,
    color: 'černobílá',
    numberOfLegs: 4,
    continent: 'Asie',
  },
  {
    id: 12,
    name: 'Grizzly',
    type: 'medvěd',
    age: 12,
    color: 'hnědá',
    numberOfLegs: 4,
    continent: 'Severní Amerika',
  },
];


// filter
const bigNumbers = numbers.filter((num) => {
  if (num >= 50) {
    return true;
  }
  return false;
});
console.log(bigNumbers);
// jiný zápis
const bigNumbersShort = numbers.filter(num => num >= 50);
console.log(bigNumbersShort);

const fourLegs4 = animals.filter(animal => animal.numberOfLegs === 4);
console.log(fourLegs4);
// map
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

const namesLengths2 = names.map(name => ({name: name, length: name.length}));
console.log(namesLengths2);

// sort
names.sort() // seřadí jména v abecedním pořadí
console.log(names);

const sortedNames = names.toSorted(); // vytvoří novou seřazenou kopii pole, původní pole zůstane nezměněno
console.log(sortedNames);

const sortedNumbers = numbers.toSorted((a, b) => a - b); // čísla seřazená od nejmenšího po největší b-a by se seřadilo od největšího po nejmenší
console.log(sortedNumbers);

const sortedAnimals = animals.toSorted((a, b) => a.age - b.age); // seřadí zvířata podle věku od nejmladšího po nejstarší
console.log(sortedAnimals);

const sortedAnimals2 = animals.toSorted((a,b) => a.name > b.name ? 1 : -1); // seřadí zvířata podle jména v abecedním pořadí
console.log(sortedAnimals2);

// includes - kontroluje, zda pole obsahuje určitou hodnotu, vrací true nebo false
console.log(names.includes('Pepa')); // zkontroluje, zda pole obsahuje jméno 'Pepa', vrátí true nebo false
console.log(names.includes('Jan')); // zkontroluje, zda pole obsahuje jméno 'Jan', vrátí true nebo false
console.log(numbers.includes(50)); // zkontroluje, zda pole obsahuje číslo 50, vrátí true nebo false
console.log(numbers.includes(100)); // zkontroluje, zda pole obsahuje číslo 100, vrátí true nebo false

// some - kontroluje, zda alespoň jeden prvek pole splňuje podmínku, vrací true nebo false
// every - kontroluje, zda všechny prvky pole splňují podmínku, vrací true nebo false
// find - vrací první prvek pole, který splňuje podmínku, nebo undefined, pokud žádný prvek nevyhovuje
const snake = animals.find(animal => animal.name === 'had'); // najde první zvíře s názvem 'Snake', nebo undefined, pokud neexistuje
console.log(snake); // vypíše nalezené zvíře nebo undefined
const hasSnake = animals.some(animal => animal.name === 'had'); // zkontroluje, zda alespoň jedno zvíře má jméno 'had', vrátí true nebo false
console.log(hasSnake); // vypíše true nebo false
const allHaveFourLegs = animals.every(animal => animal.numberOfLegs === 4); // zkontroluje, zda všechna zvířata mají 4 nohy, vrátí true nebo false
console.log(allHaveFourLegs); // vypíše true nebo false
// řetězení metod - umožňuje kombinovat více metod pole dohromady
const bigFourLeggedAnimalsNames = animals
  .filter(animal => animal.numberOfLegs === 4)
  .map(animal => ({name:animal.name, numberOfLegs: animal.numberOfLegs }))
  .toSorted((a, b) => a.age - b.age);
console.log(bigFourLeggedAnimalsNames); // vypíše jména všech zvířat, která mají 4 nohy