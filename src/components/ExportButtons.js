import { exportCSV, exportPDF, exportToGoogleSheet } from "../utils/exportUtils";

export default function ExportButtons({ data }) {
  return (
    <div>
      <button onClick={() => exportPDF(data)}>Export PDF</button>
      <button onClick={() => exportCSV(data)}>Export CSV</button>
      <button onClick={() => exportToGoogleSheet(data)}>Export to Google Sheets</button>
    </div>
  );
}
