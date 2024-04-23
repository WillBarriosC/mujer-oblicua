import { Button } from "@mui/material";
import pdfButton from "/src/assets/media/button-pdf.webp";

export default function PdfButton() {
  const handleDownloadPdf = () => {
    window.open("../../assets/docs/Mujer-oblicua.pdf", "_blank");
  };

  return (
    <Button onClick={handleDownloadPdf}>
      <img src={pdfButton} height={50} />
    </Button>
  );
}
