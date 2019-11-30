// Components
import React, { useCallback, useState, Fragment } from "react";
import { Upload as UploadIcon } from "react-feather";
import { Check } from "react-feather";
import { useDropzone } from "react-dropzone";
import useOnDrop from "./utils/use-on-drop";
import Grid from "@material-ui/core/Grid";

// Styling
import "./upload-drop-zone.css";

const UploadDropZone = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const onDrop = useOnDrop(setIsUploaded);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      {isUploaded ? (
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Check size={120} />
          </Grid>
          <Grid item>
            <p>Uploaded</p>
          </Grid>
        </Grid>
      ) : (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <UploadIcon size={120} />
          )}
        </div>
      )}
    </>
  );
};
export default UploadDropZone;
