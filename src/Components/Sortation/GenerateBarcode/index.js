import React from "react";
import { useBarcode } from "@createnextapp/react-barcode";

function GenerateBarcode() {
  const barcodevalue = Math.floor(Math.random() * 10002312 + 1);
  const { inputRef } = useBarcode({
    value: barcodevalue,
    options: {
      height: 40,
      width: 3,
      marginLeft: 550,
    },
  });
  return <svg ref={inputRef} />;
}
export default GenerateBarcode;
