// services/reportGenerator.js

import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const generatePDF = (tableRows, tableColumns, tableTitle, fileName) => {
  // initialize jsPDF
  const doc = new jsPDF();
  // for each data object pass all its data into an array

  // startY is basically margin-top
  doc.autoTable(tableColumns, tableRows, { startY: 20 });
  // ticket title. and margin-top + margin-left
  doc.text(tableTitle, 14, 15);
  // we define the name of our PDF file.
  doc.save(fileName);
};

export default generatePDF;
