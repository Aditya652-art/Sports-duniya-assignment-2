import axios from "axios";
export const fetchNews = async () => {
  const res = await axios.get(`
https://newsapi.org/v2/everything?q=tesla&from=2025-05-19&sortBy=publishedAt&apiKey=eebe14ccd4974615a9242dc2d6f2cd82`);
  return res.data.articles.map((article, i) => ({
    id: i,
    author: article.author || "Unknown",
    title: article.title,
    date: article.publishedAt,
    type: "news"
  }));
};
