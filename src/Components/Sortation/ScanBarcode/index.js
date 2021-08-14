import React from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
// This component canread both barcode and qrcode
function ScanBarcode({title}) {
  const [data, setData] = React.useState(title);
  const mystle = {
    marginLeft: "600px",
  };
  return (
    <>
      <div style={mystle}>
        <BarcodeScannerComponent
          width={400}
          height={400}
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            // else setData("Not Found");
          }}
        />
        <p>{data}</p>
      </div>
    </>
  );
}
export default ScanBarcode;
