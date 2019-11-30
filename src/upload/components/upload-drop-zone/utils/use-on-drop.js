import React, { useCallback } from "react";

const useOnDrop = hook =>
  useCallback(acceptedFiles => {
    console.log("starting");

    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      // console.log(file);
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        // console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
    hook(true);
    console.log("finishing");
  }, []);

export default useOnDrop;
