/*
REACT

1)
Vytvoř komponentu App a zařiď, aby se vykreslila na stránce.
Komponenta by měla zobrazit:
- nadpis h1 s textem "Komponenta"
- odstavec s textem "Zrcadlo, zrcadlo, pověz mi, kdo je na světě nejkrásnější komponenta."
- zařiď, aby komponenta nevracela žádné nadbytečné elementy, kromě těchto dvou

2)
Komponentu App přenes do samostatného souboru App.jsx
a v hlavním souboru naimportuj.

3)
V samostatném souboru vytvoř komponentu Book, která bude přijímat props:
- title, author, description, pages

Komponenta by měla vracet div s třídou "book" a v něm nadpis h2 s názvem,
odstavec se jménem autora, a pak odstavec s popisem a odstavec s počtem stran.

Uvnitř komponenty App použij komponentu Book takto:
<Book
  title="Ferda mravenec"
  author="Ondřej Sekora"
  description="Nenechte si ujít oblíbené příhody, v nichž se setkáte nejen s Ferdou, ale třeba i se známým popletou broukem Pytlíkem a proradnou Beruškou."
  pages={76}
/>

4)
Vytvořte komponentu BookList, která jako props bude přijímat pole objektů se seznamem knih.
Komponenta zobrazí jednotlivé knihy jako seznam pod sebou pomocí komponenty Book.
Pole objektů je uložené v samostatném souboru books-data.js.
*/

import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Ahoj</h1>);



