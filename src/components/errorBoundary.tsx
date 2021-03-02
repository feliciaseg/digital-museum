import React, { CSSProperties } from "react";
import { translateColor } from "../helper";
import Button from "./button";

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  navigateBack() {
    window.history.back();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            ...errorContainer,
            backgroundColor: translateColor("yellow"),
          }}
        >
          <div
            style={{
              backgroundColor: translateColor("blue"),
              color: translateColor("black"),
              padding: "2rem 4rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Something went wrong...</p>
            <Button
              type="goBack"
              text="Go back"
              backgroundColor="black"
              textColor="blue"
              fontSize={1}
              onClick={this.navigateBack}
            />
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

interface Props {}

interface State {
  hasError: boolean;
}

const errorContainer: CSSProperties = {
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
};

export default ErrorBoundary;
