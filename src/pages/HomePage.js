import { useEffect, useState, useContext } from "react";
import { fetchNews } from "../api/newsAPI";
import NewsList from "../components/NewsList";
import Filters from "../components/Filters";
import PayoutTable from "../components/PayoutTable";
import ExportButtons from "../components/ExportButtons";
import NewsChart from "../components/NewsChart";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({});
  const [rate, setRate] = useState(+localStorage.getItem("payoutRate") || 100);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchNews().then(setArticles);
  }, []);

  useEffect(() => {
    let result = articles;
    if (filters.author) result = result.filter(a => a.author?.toLowerCase().includes(filters.author.toLowerCase()));
    if (filters.type) result = result.filter(a => a.type === filters.type);
    if (filters.start) result = result.filter(a => new Date(a.date) >= new Date(filters.start));
    if (filters.end) result = result.filter(a => new Date(a.date) <= new Date(filters.end));
    if (filters.search) result = result.filter(a => a.title.toLowerCase().includes(filters.search.toLowerCase()));
    setFiltered(result);
  }, [filters, articles]);

  return (
    <div>
      <h2>Dashboard</h2>
      <Filters filters={filters} setFilters={setFilters} />
      <NewsChart articles={filtered} />
      <NewsList articles={filtered} />
      {user?.isAdmin && (
        <>
          <PayoutTable data={filtered} rate={rate} setRate={setRate} />
          <ExportButtons data={filtered} />
        </>
      )}
    </div>
  );
}
