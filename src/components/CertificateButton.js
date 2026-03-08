import { jsPDF } from "jspdf";

function CertificateButton({courseTitle}) {

  function generateCertificate(){

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text(
      "Certificate of Completion",
      50,
      40
    );

    doc.setFontSize(16);

    doc.text(
      "This certifies completion of:",
      60,
      70
    );

    doc.text(
      courseTitle,
      80,
      90
    );

    doc.text(
      "LMS Learning Platform",
      70,
      120
    );

    doc.save("certificate.pdf");

  }

  return(

    <button
      className="btn btn-success"
      onClick={generateCertificate}
    >
      Download Certificate
    </button>

  )

}

export default CertificateButton;