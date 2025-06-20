export default function PayoutTable({ data, rate, setRate }) {
  const total = data.length * rate;
  localStorage.setItem("payoutRate", rate);
  localStorage.setItem("totalPayout", total);

  const authorWise = [...new Set(data.map(a => a.author))].map(author => {
    const count = data.filter(d => d.author === author).length;
    return { author, count, payout: count * rate };
  });

  return (
    <div>
      <h3>Payout Rate:</h3>
      <input type="number" value={rate} onChange={(e) => setRate(+e.target.value)} />
      <table border="1">
        <thead><tr><th>Author</th><th>Articles</th><th>Payout</th></tr></thead>
        <tbody>
          {authorWise.map((item, i) => (
            <tr key={i}>
              <td>{item.author}</td>
              <td>{item.count}</td>
              <td>{item.payout}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><b>Total Payout: {total}</b></p>
    </div>
  );
}
