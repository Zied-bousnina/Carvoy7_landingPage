import React from "react";
import { QrReader } from "react-qr-reader";

const EnterpriseDashboardQrCodeScanner = () => {
  // const [data, setData] = useState("No result");

  const qrCodeHandler = (result, error) => {
    if (!!result) {
      // setData((result as any).text);
    }

    if (!!error) {
      console.log(error);
    }
  };

  // Basic constraints for the rear-facing camera
  const constraints = {
    facingMode: "environment"
  };

  return (
<div className="overflow-hidden relative bottom-48 ">
  <QrReader
    onResult={qrCodeHandler}
    constraints={constraints}
    className="p-0"
  />
</div>

  );
};

export default EnterpriseDashboardQrCodeScanner;