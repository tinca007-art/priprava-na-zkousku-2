/*
Připravujeme aplikaci pro knihovnu.

Vytvoř abstraktní třídu Book, jejíž konstruktor očekává
tyto parametry:
- isbn
- title
- author
- onLoan - zda je kniha aktuálně zapůjčená (true/false)
- loanCount - kolikrát byla kniha zapůjčená celkem

Třída bude mít metody:
- isOnLoad() - metoda vrátí text "Kniha je vypůjčená" nebo "Kniha je dostupná" v závislosti na hodnotě vlastnosti onLoan
- checkOut() - zapůjčení knihy, při zavolání nastavíme onLoan na true a zvýšíme počítadlo zapůjčení
- checkIn() - vrácení knihy, nastavíme onLoan na false
*/
class Book {
  constructor(isbn, title, author, onLoan, loanCount) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.onLoan = false;
    this.loanCount = 0;
  }

  isOnLoad() {
    return this.onLoan ? "Kniha je vypůjčená" : "Kniha je dostupná";
  }

  checkOut() {
    if (this.onLoan) {
      console.log("Kniha je již vypůjčená");
      return;
    }
    this.onLoan = true;
    this.loanCount += 1;
  }

  checkIn() {
    this.onLoan = false;
  }
}

const myBook = new Book('1234567890', 'Název knihy', 'Autor knihy');
console.log(myBook.isOnLoad()); // vypíše stav knihy
myBook.checkOut();
console.log(myBook.isOnLoad()); // vypíše stav knihy po zapůjčení
myBook.checkIn();
console.log(myBook.isOnLoad()); // vypíše stav knihy po vrácení




/*
Vytvoř třídu EBook, která bude rozšiřovat třídu Book.
Protože jde o elektronickou knihu, mohou si do ní uživatelé přidávat komentáře.

Třída tedy bude ve svém kontructoru potřebovat založit ještě dodatečnou vlastnost:
- comments - v konstruktoru se nastaví na prázdné pole

A bude mít navíc metody:
- addComment(userName, pageNumber, comment) - metoda přidá do pole comments objekt {user, page, comment}
- removeCommentsFromPage(pageNumber) - odstraní z pole všechny komentáře pro danou stránku
- removeCommentsFromUser(userName) - odstraní z pole všechny komentáře od daného uživatele
*/
class EBook extends Book {
  constructor(isbn, title, author, onLoan, loanCount) {
    super(isbn, title, author, onLoan, loanCount);
    this.comments = [];
  }

  addComment(userName, pageNumber, comment) {
    this.comments.push({ user: userName, page: pageNumber, comment });
  }

  removeCommentsFromPage(pageNumber) {
    this.comments = this.comments.filter(c => c.page !== pageNumber);
  }

  removeCommentsFromUser(userName) {
    this.comments = this.comments.filter(c => c.user !== userName);
  }
}

const myEBook = new EBook('0987654321', 'Název e-knihy', 'Autor e-knihy');
myEBook.addComment('Uživatel1', 10, 'Skvělá kapitola!');
myEBook.addComment('Uživatel2', 15, 'Zajímavé informace.');
console.log(myEBook.comments); // vypíše všechny komentáře
myEBook.removeCommentsFromPage(10);
console.log(myEBook.comments); // vypíše komentáře po odstranění komentářů z stránky 10
myEBook.removeCommentsFromUser('Uživatel2');
console.log(myEBook.comments); // vypíše komentáře po odstranění komentářů od uživatele2