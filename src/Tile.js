import React from "react";
import { Box } from "grommet";

const Tile = props => {
  let randNum = parseInt(Math.random() * 5) + 1
  return <Box gridArea={props.gridArea} background={`light-${randNum}`} />;
};

export default Tile;
