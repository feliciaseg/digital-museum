import React, { Component, CSSProperties } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { beigeBg } from "../css";
import { fetchObjectData } from "../helper";
import Card from "./card";

interface Props {
  //Ta in props för title samt img-src?
}
interface State {
  object1: any;
  object2: any;
  object3: any;
  object4: any;
  loading: boolean;
  collections: string[];
}

export default class Collection extends Component<Props, State> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      object1: {},
      object2: {},
      object3: {},
      object4: {},
      loading: true,
      collections: [],
    };
  }

  /**
   * Returns an array of different objectnumbers for our chosen artists.
   */
  getRandomArray() {
    let randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    console.log(randomNumber);

    const alt1: string[] = [
      "SK-A-2860",
      "RP-P-1912-2398",
      "BI-1887-1463-92",
      "SK-A-1703",
    ];
    const alt2: string[] = [
      "RP-T-1892-A-2661",
      "SK-A-3184",
      "BI-1887-1463-92",
      "SK-A-2860",
    ];
    const alt3: string[] = [
      "RP-P-1912-2398",
      "RP-T-1892-A-2661",
      "SK-A-1703",
      "SK-A-2860",
    ];
    const alt4: string[] = [
      "BI-1887-1463-92",
      "SK-A-1703",
      "SK-A-3184",
      "RP-T-1892-A-2661",
    ];
    const alt5: string[] = [
      "BI-1887-1463-92",
      "SK-A-2860",
      "RP-P-1912-2398",
      "SK-A-3184",
    ];

    switch (randomNumber) {
      case 1:
        this.setState({ collections: alt1 });
        break;
      case 2:
        this.setState({ collections: alt2 });
        break;
      case 3:
        this.setState({ collections: alt3 });
        break;
      case 4:
        this.setState({ collections: alt4 });
        break;
      case 5:
        this.setState({ collections: alt5 });
        break;
    }
  }

  async componentDidMount() {
    await this.getRandomArray();
    this.setState({
      object1: await fetchObjectData(this.state.collections[0]),
      object2: await fetchObjectData(this.state.collections[1]),
      object3: await fetchObjectData(this.state.collections[2]),
      object4: await fetchObjectData(this.state.collections[3]),
      loading: false,
    });
  }

  createCards() {}

  render() {
    console.log(this.state.object1);
    return (
      <>
        {this.state.loading ? (
          <p style = {{...beigeBg, margin: 0,}}>Loading...</p>
        ) : (
          <div style={{ ...beigeBg, ...container }}>
            <h2 style={h2}>SOME OF OUR COLLECTIONS</h2>

            <div style={cardWrapper}>
              <div style={cardContainer}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={{
                    pathname: `/collection/${this.state.object1.principalMaker}`,
                  }}
                >
                  <Card
                    color="blue"
                    fontSize={3}
                    title={this.state.object1.principalMaker}
                    imgSrc={this.state.object1.webImage.url}
                  />
                </Link>
              </div>
              <div style={cardContainer}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={{
                    pathname: `/collection/${this.state.object2.principalMaker}`,
                  }}
                >
                  <Card
                    color="blue"
                    fontSize={3}
                    title={this.state.object2.principalMaker}
                    imgSrc={this.state.object2.webImage.url}
                  />{" "}
                </Link>
              </div>
              <div style={cardContainer}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={{
                    pathname: `/collection/${this.state.object3.principalMaker}`,
                  }}
                >
                  <Card
                    color="blue"
                    fontSize={3}
                    title={this.state.object3.principalMaker}
                    imgSrc={this.state.object3.webImage.url}
                  />{" "}
                </Link>
              </div>
              <div style={cardContainer}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to={{
                    pathname: `/collection/${this.state.object4.principalMaker}`,
                  }}
                >
                  <Card
                    color="blue"
                    fontSize={3}
                    title={this.state.object4.principalMaker}
                    imgSrc={this.state.object4.webImage.url}
                  />{" "}
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
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
  height: "42.5rem",
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
  padding: "2rem 0 6rem 0",
};

const h2: CSSProperties = {
  margin: 0,
  fontWeight: 900,
  fontSize: "4rem",
  paddingLeft: "5.9rem",
};
