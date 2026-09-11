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
