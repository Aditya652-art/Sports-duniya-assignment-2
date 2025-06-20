import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function NewsChart({ articles }) {
  const counts = {};
  articles.forEach(a => {
    counts[a.author] = (counts[a.author] || 0) + 1;
  });

  return (
    <Pie
      data={{
        labels: Object.keys(counts),
        datasets: [{
          label: "Articles by Author",
          data: Object.values(counts),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#8BC34A", "#FF9800"],
        }],
      }}
    />
  );
}
