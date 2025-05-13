import { memo } from "react";
import pdfButton from "/media/button-pdf.webp";

const linkAttributes = {
  href: "/docs/Mujer-oblicua.pdf",
  target: "_blank",
  rel: "noopener noreferrer",
};

const PdfButton = memo(() => {
  return (
    <a {...linkAttributes}>
      <img src={pdfButton} height={50} alt="PDF Button" />
    </a>
  );
});

PdfButton.displayName = "PdfButton";

export default PdfButton;
