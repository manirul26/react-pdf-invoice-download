import React, { useEffect, useState, useRef } from "react";
import ReactPDF from '@react-pdf/renderer';
import jsPDF from 'jspdf'; //npm install jspdf

import { PDFViewer } from '@react-pdf/renderer';
import ReportTemplate from "./file/ReportTemplate";
//import MyDocument from "./file/MyDocument";

function App() {
  const reportTemplateRef = useRef(null);
  
  const download = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
    });

    // Adding the fonts.
    doc.setFont('Inter-Regular', 'normal');

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save('document');
      },
    });
  }
  return (
    <div style={{ width: '100%' }}>
      <h3>Invoice No</h3>
      <button onClick={download}>Download</button>

      <div ref={reportTemplateRef}>
        <ReportTemplate />
      </div>
    </div>
    /*  <PDFViewer style={{ width: '100%', height: 700 }}>
    https://www.youtube.com/watch?v=Dc-HUp-iI4E  JS PDF 
      <MyDocument />
     </PDFViewer> */
  );
}

export default App;


