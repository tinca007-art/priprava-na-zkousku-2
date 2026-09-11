// REST OPERATOR

const account = {
  username: 'petra28',
  password: 'tajneHeslo123',
  email: 'petra@example.com',
  role: 'admin',
};


// 1
// Napiš funkci sum(...numbers), která sečte libovolný počet čísel.
// Ověř: sum(1, 2, 3)  i  sum(5, 10, 15, 20, 25)
const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0); // funkce sečte libovolný počet čísel
console.log(sum(1, 2, 3)); // ověří funkci sum s 3 čísly
console.log(sum(5, 10, 15, 20, 25)); // ověří funkci sum s 5 čísly


// 2
// Pomocí destrukturování pole scores ulož první hodnotu do proměnné
// best, druhou do second a zbytek do pole rest.
const scores = [95, 88, 73, 64, 51, 42]; // pole s výsledky

const [best, second, ...rest] = scores; // destrukturování pole scores
console.log(best); // vypíše první hodnotu
console.log(second); // vypíše druhou hodnotu
console.log(rest); // vypíše zbytek hodnot

// 3
// Napiš funkci createUser(name, ...roles), která vrátí objekt ve tvaru
// { name: '...', roles: [...] }.
// Ověř: createUser('Jan', 'admin', 'editor')  i  createUser('Eva')
const createUser = (name, ...roles) => ({ name, roles }); // funkce vrátí objekt s name a roles
console.log(createUser('Jan', 'admin', 'editor')); // ověří funkci createUser s více rolemi
console.log(createUser('Eva')); // ověří funkci createUser s žádnou rolí


// 4
// Pomocí destrukturování objektu account vytvoř nový objekt safeAccount,
// který obsahuje všechny vlastnosti KROMĚ password.
const { password, ...safeAccount } = account; // destrukturování objektu account, vynechá password
console.log(safeAccount); // vypíše nový objekt safeAccount bez password
console.log(account); // vypíše původní objekt account, který zůstal beze změny
