import React, { useReducer, useState } from "react";
import "./App.css";
import PokemonViewer from "../PokemonViewer";
import { Grid, Button } from "@mui/material";

function App() {
  const [{ id }, dispatch] = useReducer(reducer, { id: 0 });

  function reducer(state, action) {
    switch (action.type) {
      case "NEXT":
        return { id: state.id + 1 };
      case "BACK":
        return { id: state.id - 1 };
      default:
        return state;
    }
  }

  return (
    <>
      <h1 className="pokemonH1">
        <span>
          <img src="/Pokemon Logo.png" alt="" />
        </span>
        Generator
      </h1>
      <div className="App">
        <div className="btnContainer">
          <Grid
            container
            spacing={-5}
            justifyContent="space-between"
            marginTop={8}
          >
            <Button
              variant="contained"
              onClick={() => dispatch({ type: "BACK" })}
            >
              previous
            </Button>
            <Button
              variant="contained"
              onClick={() => dispatch({ type: "NEXT" })}
            >
              next
            </Button>
          </Grid>
        </div>
        <div className="AppCard" onClick={() => dispatch({ type: "NEXT" })}>
          <PokemonViewer id={id} key={id} />
        </div>
      </div>
    </>
  );
}

export default App;

// function handleClick() {
//   setId((currId) => currId + 1);
// }
// function backAPokeClick() {
//   setId((prevId) => prevId + -1);
// }
