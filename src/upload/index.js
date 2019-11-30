// Components
import React from "react";
import UploadButton from "./components/upload-button";
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
    <UploadButton />
  </Grid>
);

export default upload;
