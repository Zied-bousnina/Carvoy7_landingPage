import React from "react";
import { QrReader } from "react-qr-reader";

const UserDashboardQrCodeScanner = () => {
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

export default UserDashboardQrCodeScanner;

//* old component
// import { useEffect, useState } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// export default function UserDashboardQrCodeScanner() {
//   const [scannerResult, setScannerResult] = useState();

//   useEffect(() => {
//     let scanner;
//     try {
//       scanner = new Html5QrcodeScanner(
//         "reader",
//         {
//           qrbox: { width: 250, height: 250 }, // Adjusted for practicality
//           fps: 5,
//         },
//         false
//       );

//       const success = (result) => {
//         setScannerResult(result);
//         console.log(result);
//         // Consider delaying cleanup to ensure it doesn't interfere with state updates
//       };

//       const error = (err) => {
//         console.log(err);
//       };

//       scanner.render(success, error);
//     } catch (error) {
//       console.error("Error initializing QR scanner: ", error);
//     }
//     // Cleanup function
//     return () => {
//       if (scanner) {
//         scanner.clear().catch((err) => {
//           console.error("Error clearing QR scanner: ", err);
//         });
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <div>
//         <div id="reader"></div>
//         {scannerResult && <p>Scan Result: {scannerResult}</p>}
//       </div>
//     </div>
//   );
// }
