export function Book({ title, author, description, pages }) {
  return (
    <div className="book">
      <h2>{title}</h2>
      <p>Autor: {author}</p>
      <p>{description}</p>
      <p>{pages} stran</p>
    </div>
  );
}