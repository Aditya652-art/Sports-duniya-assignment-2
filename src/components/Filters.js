export default function Filters({ filters, setFilters }) {
  return (
    <div>
      <input placeholder="Author" onChange={(e) => setFilters(f => ({ ...f, author: e.target.value }))} />
      <input type="date" onChange={(e) => setFilters(f => ({ ...f, start: e.target.value }))} />
      <input type="date" onChange={(e) => setFilters(f => ({ ...f, end: e.target.value }))} />
      <select onChange={(e) => setFilters(f => ({ ...f, type: e.target.value }))}>
        <option value="">All</option>
        <option value="news">News</option>
        <option value="blog">Blog</option>
      </select>
      <input placeholder="Search title..." onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))} />
    </div>
  );
}
