import React from "react";

import classes from "./Spinner.module.css";

const spinner = () => (
  <div class = {classes.spinnerbackground}>
  <div class={classes.spinner}>
    <div class={classes.bounce1} />
    <div class={classes.bounce2} />
    <div class={classes.bounce3} />
  </div>
  </div>
);

export default spinner;
