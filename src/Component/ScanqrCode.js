import React, { useState } from "react";
import QrScanner from "qr-scanner";
function ScanqrCode() {
  // const [textcamerea, setTextcamerea] = useState("");
  const hitMe = (e) => {
    e.preventDefault();
    const idFile = document.getElementById("file__scan");
    idFile.addEventListener("change", () => {
      const file = idFile.files[0];
      if (!file) {
        return;
      }
      QrScanner.scanImage(file)
        .then((res) => console.log(res))
        .catch((err) => console.log(err || "No QR code found."));
    });
  };
  return (
    <div>
      <h1>halaman scanner QRCODE</h1>
      <button
        onClick={hitMe}
        style={{
          backgroundColor: "lightblue",
          padding: "50px",
          borderRadius: "20px",
          cursor: "pointer",
          margin: "50px",
        }}
      >
        Scan From Gallery
      </button>
      <input type="file" id="file__scan" />
      <h1 style={{ margin: "100px" }}>hasil:</h1>
    </div>
  );
}

export default ScanqrCode;
