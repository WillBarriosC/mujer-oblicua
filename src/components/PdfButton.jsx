import pdfButton from "/media/button-pdf.webp";

export default function PdfButton() {
  return (
    <a href="/docs/Mujer-oblicua.pdf" target="_blank">
      <img src={pdfButton} height={50} />
    </a>
  );
}
