import React from "react";

export const colors = {
  blue: {
    color: "#161717",
    background: "#6ad0fc",
    fill: "#161717",
  },
  dark: {
    color: "#c8cccc",
    background: "#484a4a",
    fill: "#c8cccc"
  },
  green: {
    color: "#012409",
    background: "#b2f7c2",
    fill: "#012409"
  }
};

const ColorSchema = React.createContext(colors.blue);

export default ColorSchema;