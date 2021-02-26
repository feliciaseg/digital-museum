import { CSSProperties } from "react";
import { beigeBg } from "../css";
import Card from "./card";

export default function Collection(props: Props) {
  return (
    <div style={{ ...beigeBg, ...container }}>
      <h2 style={h2}>SOME OF OUR COLLECTIONS</h2>

      <div style={cardWrapper}>
        <div style={cardContainer}>
          <Card color="blue" fontSize="large" title="Rembrandt Van Rijn" />
        </div>
        <div style={cardContainer}>
          <Card color="blue" fontSize="large" title="Rembrandt Van Rijn" />
        </div>
        <div style={cardContainer}>
          <Card color="blue" fontSize="large" title="Rembrandt Van Rijn" />
        </div>
        <div style={cardContainer}>
          <Card color="blue" fontSize="large" title="Rembrandt Van Rijn" />
        </div>
      </div>
    </div>
  );
}

/* ----- INTERFACE ----- */

interface Props {
  //Ta in props för title samt img-src?
}

/* ----- CSS ----- */

const container: CSSProperties = {
  flex: 1,
  height: "61.4rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const cardContainer: CSSProperties = {
  width: 488, //Can't be written in rem for some reason
  height: "41.5rem",
  flex: "0 0 auto",
  marginRight: "2.3rem",
  position: "relative",
  left: "5.9rem",
};

const cardWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  overflowX: "auto",
  overflowY: "hidden",
  paddingTop: "2rem",
};

const h2: CSSProperties = {
  margin: 0,
  fontSize: "4rem",
  paddingLeft: "5.9rem",
};