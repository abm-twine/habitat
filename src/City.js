import React from "react";
import Tile from "./Tile";
import { Grid } from "grommet";
import uuid from 'react-uuid'

const createGrid = size => {
  var gridAreas = [];
  var tiles = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let id = uuid();
      gridAreas.push({ name: id, start: [i, j], end: [i, j] });
      tiles.push(<Tile key={id} gridArea={id} />);
    }
  }
  return [gridAreas, tiles];
};

const SIZE = "small";

const City = props => {
  let grid = createGrid(props.size);
  return (
    <Grid
      rows={Array(props.size).fill(SIZE)}
      columns={Array(props.size).fill(SIZE)}
      gap="none"
      areas={grid[0]}
    >
      {grid[1]}
    </Grid>
  );
};

export default City;
