// Components
import React, { useCallback, useState, Fragment } from "react";
import { Upload as UploadIcon } from "react-feather";
import { Lock } from "react-feather";
import { useDropzone } from "react-dropzone";
import useOnDrop from "./utils/use-on-drop";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

// Styling
import "./upload-drop-zone.css";

const UploadDropZone = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [ipfsHash, setIpfsHash] = useState("");

  const onDrop = useOnDrop(setIsUploaded, setIsUploading, setIpfsHash);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (isUploading)
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <CircularProgress className="progress" size={110} color="inherit" />
        </Grid>
        <Grid item>
          <p>Securing files in vault...</p>
        </Grid>
      </Grid>
    );

  if (isUploaded)
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Lock size={120} />
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid>
              <p>FIles added to vault </p>
            </Grid>
            <Grid>
              <h1>{ipfsHash}</h1>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );

  if (!isUploaded && !isUploading)
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <UploadIcon size={120} />
        )}
      </div>
    );
};
export default UploadDropZone;
