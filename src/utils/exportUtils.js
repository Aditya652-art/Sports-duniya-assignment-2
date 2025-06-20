import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";

export const exportCSV = (data) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Data");
  XLSX.writeFile(wb, "payout_data.csv");
};

export const exportPDF = (data) => {
  const doc = new jsPDF();
  doc.text("Payout Report", 10, 10);
  data.forEach((d, i) => doc.text(`${i + 1}. ${d.title} - ${d.author}`, 10, 20 + i * 10));
  doc.save("payout_report.pdf");
};
export const exportToGoogleSheet = async (data) => {
  const SHEET_URL = "https://sheet.best/api/sheets/YOUR-SHEET-ID-HERE"; // Replace this
  try {
    for (const row of data) {
      await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Author: row.author,
          Title: row.title,
          Date: new Date(row.date).toLocaleDateString(),
          Type: row.type
        })
      });
    }
    alert("Exported to Google Sheet successfully.");
  } catch (err) {
    alert("Failed to export to Google Sheet.");
    console.error(err);
  }
};
