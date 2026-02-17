import { memo } from "react";
//import pdfButton from "/media/button-pdf.jpg";

const linkAttributes = {
  href: "/docs/Mujer-oblicua.pdf",
  target: "_blank",
  rel: "noopener noreferrer",
};

const PdfButton = memo(() => {
  return (
    <a {...linkAttributes}>
      <img src={"/media/button-pdf.jpg"} height={50} alt="PDF Button" loading="lazy" />
    </a>
  );
});

PdfButton.displayName = "PdfButton";

export default PdfButton;
