import { memo } from "react";
import pdfButton from "/media/button-pdf.webp";

const PdfButton = memo(() => {
  return (
    <a href="/docs/Mujer-oblicua.pdf" target="_blank" rel="noopener noreferrer">
      <img src={pdfButton} height={50} alt="PDF Button" />
    </a>
  );
});

PdfButton.displayName = "PdfButton";

export default PdfButton;
