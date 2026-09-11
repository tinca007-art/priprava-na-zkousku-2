// SPREAD - POLE
const fruits = ['jablko', 'banán', 'hruška'];
const vegetables = ['mrkev', 'brokolice', 'paprika'];
const numbers = [42, 7, 83, 15, 96, 31, 68, 4, 57, 22];
const numbersWithDuplicates = [1, 3, 3, 7, 1, 9, 7, 4, 9, 2];

// 1
// Vytvoř kopii pole fruits (ne referenci!) a do kopie přidej 'mango'.
// Vypiš obě pole a ověř, že původní pole fruits zůstalo beze změny.


// 2
// Spoj pole fruits a vegetables do jednoho nového pole food.


// 3
// Z pole food vytvoř nové pole shoppingList tak, aby na začátku bylo
// 'chléb' a na konci 'mléko'. Pole food se nesmí změnit.


// 4
// Pomocí Math.max() a Math.min() najdi nejvyšší a nejnižší číslo
// v poli numbers. (Tyto funkce neumí pracovat s polem - použij spread.)


// 5
// Rozlož řetězec 'CodersLab' na pole jednotlivých znaků.



// SPREAD - OBJEKTY

const user = {
  id: 1,
  name: 'Petra',
  email: 'petra@example.com',
  age: 28,
};

const address = {
  street: 'Dlouhá 12',
  city: 'Praha',
  zip: '11000',
};

const defaultSettings = {
  theme: 'light',
  language: 'cs',
  notifications: true,
  fontSize: 14,
};

const userSettings = {
  theme: 'dark',
  fontSize: 18,
};

const employee = {
  name: 'Tomáš',
  position: 'vývojář',
  contact: {
    email: 'tomas@example.com',
    phone: '777123456',
  },
};


// 1
// Vytvoř kopii objektu user a v kopii změň email na 'novy@example.com'.
// Ověř, že původní objekt user zůstal beze změny.


// 2
// Spoj objekty user a address do jednoho nového objektu userWithAddress.


// 3
// Vytvoř nový objekt z objektu user, ve kterém bude age nastaveno na 29.
// Vyzkoušej si, co se stane, když spread napíšeš AŽ ZA vlastnost age
// - a vysvětli si proč (na pořadí záleží).


// 4
// Slouč defaultSettings a userSettings do objektu settings tak, aby
// uživatelské nastavení přepsalo výchozí hodnoty.


// 5
// Napiš funkci updateUser(user, changes), která dostane objekt uživatele
// a objekt se změnami a vrátí NOVÝ objekt se změnami zapracovanými.
// Původní objekt nesmí být změněn.
// Ověř zavoláním: updateUser(user, { age: 30, city: 'Brno' })


// BONUS 6
// Vytvoř kopii objektu employee, v kopii změň contact.phone na '111222333'
// a vypiš telefon u originálu i u kopie.
// Co se stalo? Spread dělá jen MĚLKOU kopii (shallow copy).
// Uprav svůj kód tak, aby se originál opravdu nezměnil.

