import { CSSProperties } from "react";
import translateColor from "../helper";

export default function Button(props: Props) {
  console.log(props);
  const backgroundColor = translateColor(props.backgroundColor);
  const textColor = translateColor(props.textColor);
  if (props.type === "search") {
    return (
      <button
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          fontSize: props.fontSize + "rem",
          ...button,
        }}
      >
        {props.text}
        <svg
          style={{
            marginLeft: "0.5em",
            transform: "rotate(180deg)",
            height: props.fontSize + "rem",
          }}
          id="a25da762-1f06-423a-b3b7-6a2f62f84950"
          data-name="Lager 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 509.48 587.52"
        >
          <title>Namnlöst-1</title>
          <path
            style={{ fill: textColor }}
            d="M757,89.79q-20.47,39.66-40.94,79.32Q662.36,273.32,608.57,377.49c-1.8,3.48-1.87,6,0,9.57q73.23,141.59,146.22,283.3c.8,1.54,1.48,3.15,2.84,6.08L248.1,382.31,756.28,88.91Z"
            transform="translate(-248.1 -88.91)"
          />
        </svg>
      </button>
    );
  } else {
    return (
      <button
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          fontSize: props.fontSize + "rem",
          ...button,
        }}
      >
        <svg
          style={{
            marginRight: "0.5em",
            height: props.fontSize + "rem",
          }}
          id="a25da762-1f06-423a-b3b7-6a2f62f84950"
          data-name="Lager 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 509.48 587.52"
        >
          <title>Namnlöst-1</title>
          <path
            style={{ fill: textColor }}
            d="M757,89.79q-20.47,39.66-40.94,79.32Q662.36,273.32,608.57,377.49c-1.8,3.48-1.87,6,0,9.57q73.23,141.59,146.22,283.3c.8,1.54,1.48,3.15,2.84,6.08L248.1,382.31,756.28,88.91Z"
            transform="translate(-248.1 -88.91)"
          />
        </svg>
        {props.text}
      </button>
    );
  }
}

interface Props {
  type: "goBack" | "search";
  text: string;
  backgroundColor: "blue" | "orange" | "black" | "yellow" | "beige";
  textColor: "blue" | "orange" | "black" | "yellow" | "beige";
  fontSize: number;
}

const button: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  padding: "0.5em 2em",
  alignItems: "center",
  border: "none",
};
