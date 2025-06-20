export default function NewsList({ articles }) {
  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h4>{article.title}</h4>
          <p>{article.author} | {new Date(article.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
