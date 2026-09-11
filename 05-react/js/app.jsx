import {Book} from "./book.jsx";
import books from "./books-data.js";
import {BooksList} from "./bookList.jsx";

export function App() {
  return (
    <>
      <h1>Komponenta</h1>
      <p>Zrcadlo, zrcadlo, pověz mi, kdo je na světě nejkrásnější komponenta.</p>
      <Book
        title="Ferda mravenec"
        author="Ondřej Sekora"
        description="Nenechte si ujít oblíbené příhody, v nichž se setkáte nejen s Ferdou, ale třeba i se známým popletou broukem Pytlíkem a proradnou Beruškou."
        pages={76}
      />
      <Book
        title="Kocour Mikeš"
        author="Josef Lada"
        description="Příběhy o kocourovi Mikešovi, který prožívá různá dobrodružství se svými přáteli."
        pages={120}
      />
      <BooksList books={books} />

    </>
  );
}
