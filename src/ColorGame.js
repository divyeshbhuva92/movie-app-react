import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ColorBox } from "./ColorBox";

// ====================
export function ColorGame() {
  const [color, setColor] = useState("");
  var styles1 = {
    background: color,
  };
  const [colorList, setcolorList] = useState([
    "orange",
    "crimson",
    "red",
    "orangered",
  ]);
  return (
    <div className="colorGame-container">
      <div className="colorGame-Input">
        <TextField
          label="Color"
          style={styles1}
          className="colorInput"
          size="small"
          defaultValue={color}
          onChange={(event) => setColor(event.target.value)}
        />
        <Button
          className="add-color-btn"
          variant="contained"
          size="medium"
          onClick={() => setcolorList([...colorList, color])}
        >
          Add Color
        </Button>
      </div>
      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
