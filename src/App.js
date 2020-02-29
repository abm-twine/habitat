import React from "react";

import { Box, Header, Grid } from "grommet";
import City from "./City";
import ControlPanel from "./ControlPanel";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid
        rows={["xsmall", "small"]}
        columns={["2/3", "1/3"]}
        gap="small"
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "city", start: [0, 1], end: [0, 1] },
          { name: "controlPanel", start: [1, 1], end: [1, 1] }
        ]}
      >
        <Header gridArea="header" background="brand" />
        <Box gridArea="city"><City size={20} /></Box>
        <Box gridArea="controlPanel"><ControlPanel gridArea="gridPanel" className="App__ControlPanel" /></Box>
      </Grid>
    );
  }
}
