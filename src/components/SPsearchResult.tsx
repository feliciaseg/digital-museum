import React from "react";
import { CSSProperties } from "react";
import { yellowBg } from "../css";
import Card from "./card";
// import { Link } from "react-router-dom";

export default function SearchResult(props: Props) {
  return (
    <div style={{ ...container, ...yellowBg }}>
      <div style={cardContainer}>
        <Card color="orange" fontSize={3} title="Rembrandt Van Rijn" />
      </div>
      <div style={cardContainer}>
        <Card color="orange" fontSize={3} title="Rembrandt Van Rijn" />
      </div>
      <div style={cardContainer}>
        <Card color="orange" fontSize={3} title="Rembrandt Van Rijn" />
      </div>
      <div style={cardContainer}>
        <Card color="orange" fontSize={3} title="Rembrandt Van Rijn" />
      </div>
      <div style={cardContainer}>
        <Card color="orange" fontSize={3} title="Rembrandt Van Rijn" />
      </div>
      <div style={cardContainer}>
        <Card color="orange" fontSize={3} title="Rembrandt Van Rijn" />
      </div>
    </div>
  );
}

/* ----- INTERFACE ----- */

interface Props {
  //Ta in props för title samt img-src.
}

/* ----- CSS ----- */
const container: CSSProperties = {
  height: "75.1rem",
  paddingTop: "2.9rem",
  paddingBottom: "8.1rem",
  paddingRight: "6.3rem",
  paddingLeft: "5.1rem",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignContent: "space-between",
};

const cardContainer: CSSProperties = {
  height: "29.3rem",
  width: "24.5rem",
};
