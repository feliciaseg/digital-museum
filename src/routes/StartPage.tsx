import React from "react";
import * as css from "../STPcss";
import { Link, RouteComponentProps } from "react-router-dom";
import { fetchObjectData } from "../helper";
import Button from "../components/button";
import Header from "../components/header";
import { beigeBg, yellowBg } from "../css";
import Card from "../components/card";

interface Props {
  width: number;
}
interface State {
  object1: any;
  object2: any;
  object3: any;
  object4: any;
  loading: boolean;
  collections: string[];
  inputValue: string;
}

export default class StartPage extends React.Component<Props, State> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      inputValue: "",
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

  async fetchData() {
    this.setState({
      object1: await fetchObjectData(this.state.collections[0]),
      object2: await fetchObjectData(this.state.collections[1]),
      object3: await fetchObjectData(this.state.collections[2]),
      object4: await fetchObjectData(this.state.collections[3]),
    });
  }

  async componentDidMount() {
    await this.getRandomArray();
    await this.fetchData();
    this.setState({
      loading: false,
    });
  }

  render() {
    if (this.props.width > 1024) {
      return (
        <>
          {this.state.loading ? (
            <>
              <Header h="16rem" c="#FF9C5B" windowWidth={this.props.width} />
              <div style={css.landingContainerL}>
                <h2 style={css.h3L}>
                  EXPLORE THE <br />
                  DIGITAL MUSEUM
                </h2>
                <p style={css.pL}>Loading...</p>
              </div>
              <div style={{ ...yellowBg, height: "100%" }} />
            </>
          ) : (
            <>
              <>
                <Header h="16rem" c="#FF9C5B" windowWidth={this.props.width} />
                <div style={css.landingContainerL}>
                  <h2 style={css.h3L}>
                    EXPLORE THE <br />
                    DIGITAL MUSEUM
                  </h2>
                  <p style={css.pL}>
                    Search for an artist, an artwork or something else that
                    might peak your interest
                  </p>
                  <div style={css.searchL}>
                    <input
                      onChange={(event) =>
                        this.setState({ inputValue: event.target.value })
                      }
                      style={css.inputL}
                      type="text"
                    />
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `/search/${this.state.inputValue}`,
                      }}
                    >
                      <Button
                        type="search"
                        text="SEARCH"
                        backgroundColor="black"
                        textColor="yellow"
                        fontSize={1.5}
                      />
                    </Link>
                  </div>
                </div>
                <div style={{ ...yellowBg, ...css.yellowBoxL }} />
              </>
              <div style={{ ...beigeBg, ...css.containerL }}>
                <h2 style={css.h2L}>SOME OF OUR COLLECTIONS</h2>

                <div style={css.cardWrapperL} className="no-scrollbar">
                  <div style={css.cardContainerL}>
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
                  <div style={css.cardContainerL}>
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
                  <div style={css.cardContainerL}>
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
                  <div style={css.cardContainerL}>
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
            </>
          )}
        </>
      );
    } else if (this.props.width > 767) {
      return (
        <>
          {this.state.loading ? (
            <>
              <Header h="11rem" c="#FF9C5B" windowWidth={this.props.width} />
              <div style={css.landingContainerM}>
                <h2 style={css.h3M}>
                  EXPLORE THE <br />
                  DIGITAL MUSEUM
                </h2>
                <p style={css.pM}>Loading...</p>
              </div>
              <div style={{ ...yellowBg, height: "100%" }} />
            </>
          ) : (
            <>
              <>
                <Header h="11rem" c="#FF9C5B" windowWidth={this.props.width} />
                <div style={css.landingContainerM}>
                  <h2 style={css.h3M}>
                    EXPLORE THE <br />
                    DIGITAL MUSEUM
                  </h2>
                  <p style={css.pM}>
                    Search for an artist, an artwork or something else that
                    might peak your interest
                  </p>
                  <div style={css.searchM}>
                    <input
                      onChange={(event) =>
                        this.setState({ inputValue: event.target.value })
                      }
                      style={css.inputM}
                      type="text"
                    />
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `/search/${this.state.inputValue}`,
                      }}
                    >
                      <Button
                        type="search"
                        text="SEARCH"
                        backgroundColor="black"
                        textColor="yellow"
                        fontSize={1.5}
                      />
                    </Link>
                  </div>
                </div>
                <div style={{ ...yellowBg, ...css.yellowBoxM }} />
              </>
              <div style={{ ...beigeBg, ...css.containerM }}>
                <h2 style={css.h2M}>SOME OF OUR COLLECTIONS</h2>

                <div style={css.cardWrapperM} className="no-scrollbar">
                  <div style={css.cardContainerM}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={{
                        pathname: `/collection/${this.state.object1.principalMaker}`,
                      }}
                    >
                      <Card
                        color="blue"
                        fontSize={1.9}
                        title={this.state.object1.principalMaker}
                        imgSrc={this.state.object1.webImage.url}
                      />
                    </Link>
                  </div>
                  <div style={css.cardContainerM}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={{
                        pathname: `/collection/${this.state.object2.principalMaker}`,
                      }}
                    >
                      <Card
                        color="blue"
                        fontSize={1.9}
                        title={this.state.object2.principalMaker}
                        imgSrc={this.state.object2.webImage.url}
                      />{" "}
                    </Link>
                  </div>
                  <div style={css.cardContainerM}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={{
                        pathname: `/collection/${this.state.object3.principalMaker}`,
                      }}
                    >
                      <Card
                        color="blue"
                        fontSize={1.9}
                        title={this.state.object3.principalMaker}
                        imgSrc={this.state.object3.webImage.url}
                      />{" "}
                    </Link>
                  </div>
                  <div style={css.cardContainerM}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={{
                        pathname: `/collection/${this.state.object4.principalMaker}`,
                      }}
                    >
                      <Card
                        color="blue"
                        fontSize={1.9}
                        title={this.state.object4.principalMaker}
                        imgSrc={this.state.object4.webImage.url}
                      />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          {this.state.loading ? (
            <>
              <Header h="7.75rem" c="#FF9C5B" windowWidth={this.props.width} />
              <div style={css.landingContainerS}>
                <h2 style={css.h3S}>
                  EXPLORE THE <br />
                  DIGITAL MUSEUM
                </h2>
                <p style={css.pS}>Loading...</p>
              </div>

              <div style={{ ...yellowBg, height: "100%" }} />
            </>
          ) : (
            <>
              <>
                <Header
                  h="7.75rem"
                  c="#FF9C5B"
                  windowWidth={this.props.width}
                />
                <div style={css.landingContainerS}>
                  <h2 style={css.h3S}>
                    EXPLORE THE <br />
                    DIGITAL MUSEUM
                  </h2>
                  <p style={css.pS}>
                    Search for an artist, an artwork or something else that
                    might peak your interest
                  </p>
                  <div style={css.searchS}>
                    <input
                      onChange={(event) =>
                        this.setState({ inputValue: event.target.value })
                      }
                      style={css.inputS}
                      type="text"
                    />
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `/search/${this.state.inputValue}`,
                      }}
                    >
                      <Button
                        type="search"
                        text="SEARCH"
                        backgroundColor="black"
                        textColor="yellow"
                        fontSize={1.5}
                      />
                    </Link>
                  </div>
                </div>
                <div style={{ ...yellowBg, ...css.yellowBoxS }} />
              </>
              <div style={{ ...beigeBg, ...css.containerS }}>
                <h2 style={css.h2S}>SOME OF OUR COLLECTIONS</h2>

                <div style={css.cardWrapperS} className="no-scrollbar">
                  <div style={css.cardContainerS}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={{
                        pathname: `/collection/${this.state.object1.principalMaker}`,
                      }}
                    >
                      <Card
                        color="blue"
                        fontSize={1.9}
                        title={this.state.object1.principalMaker}
                        imgSrc={this.state.object1.webImage.url}
                      />
                    </Link>
                  </div>
                  <div style={css.cardContainerS}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={{
                        pathname: `/collection/${this.state.object2.principalMaker}`,
                      }}
                    >
                      <Card
                        color="blue"
                        fontSize={1.9}
                        title={this.state.object2.principalMaker}
                        imgSrc={this.state.object2.webImage.url}
                      />{" "}
                    </Link>
                  </div>
                  <div style={css.cardContainerS}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={{
                        pathname: `/collection/${this.state.object3.principalMaker}`,
                      }}
                    >
                      <Card
                        color="blue"
                        fontSize={1.9}
                        title={this.state.object3.principalMaker}
                        imgSrc={this.state.object3.webImage.url}
                      />{" "}
                    </Link>
                  </div>
                  <div style={css.cardContainerS}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={{
                        pathname: `/collection/${this.state.object4.principalMaker}`,
                      }}
                    >
                      <Card
                        color="blue"
                        fontSize={1.9}
                        title={this.state.object4.principalMaker}
                        imgSrc={this.state.object4.webImage.url}
                      />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      );
    }
  }
}
