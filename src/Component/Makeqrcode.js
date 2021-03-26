import React, { useState } from "react";
import QRCode from "qrcode";
function Makeqrcode() {
  const [inputqr, setInputqr] = useState("");
  const [imgqr, setImgqr] = useState("");
  const makeQrCode = async (e) => {
    e.preventDefault();
    const dataCreate = await QRCode.create(inputqr);
    const segment = dataCreate.segments;
    setImgqr(await QRCode.toDataURL(segment));
  };
  return (
    <div>
      <h1>Buat QR Code anda di sini</h1>
      <input
        type="text"
        value={inputqr}
        onChange={(val) => setInputqr(val.target.value)}
      />
      <button onClick={makeQrCode}>Buat QR Code</button>
      <br /> <br />
      {imgqr && (
        <img
          src={imgqr}
          style={{ marginTop: "100px" }}
          width="500"
          height="500"
          alt=""
        />
      )}
    </div>
  );
}

export default Makeqrcode;
