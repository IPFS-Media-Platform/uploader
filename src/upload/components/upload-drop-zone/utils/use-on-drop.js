import React, { useCallback } from "react";
import ipfsClient from "ipfs-http-client";
import axios from "axios";
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https"
});

const useOnDrop = (setIsUploaded, setIsUploading, setIpfsHash) =>
  useCallback(acceptedFiles => {
    console.log("starting");
    setIsUploading(true);
    let files = [];
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      // console.log(file);
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        files.push({
          path: file.path,
          content: reader.result
        });
        ipfs.add(reader.result, async (err, result) => {
          console.log(err, result);
          setIsUploading(false);
          const resp = await axios.post("https://staging.chain-abstraction.dev/ipfs-media-platform/manager/add-vault", {ipfsHash:result[0].hash})
          console.log(resp)
          setIpfsHash(result[0].hash);
        });

        
      };
      console.log(file);
      reader.readAsArrayBuffer(file);
    });
    setIsUploaded(true);
    console.log("finishing");
  }, []);

export default useOnDrop;
