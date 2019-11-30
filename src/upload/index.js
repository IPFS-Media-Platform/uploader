// Components
import React from "react";
import UploadDropZone from "./components/upload-drop-zone";
import Grid from "@material-ui/core/Grid";

// Styling
import "./upload.css";
const upload = () => (
  <Grid
    container
    className="container"
    direction="row"
    justify="center"
    alignItems="center"
  >
    <UploadDropZone />
  </Grid>
);

export default upload;
