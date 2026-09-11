// REST OPERATOR
const scores = [95, 88, 73, 64, 51, 42];

const account = {
  username: 'petra28',
  password: 'tajneHeslo123',
  email: 'petra@example.com',
  role: 'admin',
};


// 1
// Napiš funkci sum(...numbers), která sečte libovolný počet čísel.
// Ověř: sum(1, 2, 3)  i  sum(5, 10, 15, 20, 25)


// 2
// Pomocí destrukturování pole scores ulož první hodnotu do proměnné
// best, druhou do second a zbytek do pole rest.


// 3
// Napiš funkci createUser(name, ...roles), která vrátí objekt ve tvaru
// { name: '...', roles: [...] }.
// Ověř: createUser('Jan', 'admin', 'editor')  i  createUser('Eva')


// 4
// Pomocí destrukturování objektu account vytvoř nový objekt safeAccount,
// který obsahuje všechny vlastnosti KROMĚ password.
