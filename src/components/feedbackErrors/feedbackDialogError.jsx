import { Alert } from "@material-ui/lab";
import { AlertTitle } from "@material-ui/lab";
import React, { useState } from "react";


function SetEmptyFeedbackAlert() {

return (
  <Alert severity="info">
    <AlertTitle>Info</AlertTitle>
    Your Feedback is empty. <strong>Please let us know what you're recycling.</strong>
  </Alert>
);

}

export default SetEmptyFeedbackAlert;