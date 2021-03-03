import React, { CSSProperties } from "react";
import Header from "../components/header";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import Card from "../components/card";
import { blackBg, orangeTxt, yellowBg } from "../styling/css";
import Button from "../components/button";

interface MatchParams {
  search: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  width: number;
}

interface State {
  inputValue: string;
  loading: boolean;
  APIdata: any;
  newSearch: string;
}

class SearchPage extends React.Component<Props & RouteComponentProps, State> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      inputValue: this.props.match.params.search,
      loading: true,
      APIdata: {},
      newSearch: "",
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const url: string = `https://www.rijksmuseum.nl/api/en/collection?key=dZz20am8&q=${this.state.inputValue}&imgonly=true`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ APIdata: data, loading: false });
    this.render();
  }

  /**
   * Create cards depending on the number of objects of the search, but never more than six.
   */
  createCards() {
    let cards: JSX.Element[] = [];
    for (let i = 0; i < this.state.APIdata.artObjects.length; i++) {
      if (i === 6) {
        break;
      }
      let artist: string = this.state.APIdata.artObjects[i].principalOrFirstMaker;
      let image: string = this.state.APIdata.artObjects[i].headerImage.url;
      let objectNumber: string = this.state.APIdata.artObjects[i].objectNumber;
      cards.push(
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={{pathname: `/artwork/${objectNumber}`}}
          key={i}>
          <Card color="orange" fontSize={2} title={artist} imgSrc={image} />
        </Link>
      );
    }
    return cards;
  }

  /**
   * Updates the inputValue to the new search
   */
  async handleButtonClick() {
    console.log("how many times is it clicked")
    // await this.setState({ inputValue: this.state.newSearch });
    // await this.fetchData();
    // this.render();
  }

  /** Checks current width and renders so that it fits. */
  render() {
    if (this.props.width > 1023) {
      return (
        <>
          {this.state.loading ? (
            <div>
              <Header h="8.375rem" c="#009ad1" />
              <div
                style={{
                  ...blackBg,
                  position: "absolute",
                  top: "8.375rem",
                  width: "100%",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    ...orangeTxt,
                    textAlign: "center",
                    fontSize: "2rem",
                  }}
                >
                  {" "}
                  Loading....
                </p>
              </div>
            </div>
          ) : (
            <>
              <Header h="8.375rem" c="#009ad1" />
              <div style={{ ...searchContainerL, ...blackBg }}>
                <div style={searchL}>
                  <input
                    onChange={(event) =>
                      this.setState({ newSearch: event.target.value })
                    }
                    style={{ ...blackBg, ...inputL }}
                    type="text"
                  />
                  {/* <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: `/search/${this.state.newSearch}`,
                    }}
                  > */}
                    <Button
                      type="search"
                      text="SEARCH"
                      backgroundColor="orange"
                      textColor="black"
                      fontSize={1.5}
                      onClick={this.handleButtonClick}
                    />
                  {/* </Link> */}
                </div>
                <div style={textL}>
                  <p style={{ margin: 0 }}>
                    {" "}
                    SEARCH RESULTS FOR "{this.state.inputValue}"{" "}
                  </p>
                  <p style={{ margin: 0 }}>
                    {" "}
                    {this.state.APIdata.count} ARTWORKS{" "}
                  </p>
                </div>
              </div>
              <div
                style={{
                  ...yellowBg,
                  width: "100%",
                  height: "fit-content",
                  paddingBottom: "3rem",
                }}
              >
                <div style={{ ...container }}>{this.createCards()}</div>
              </div>
            </>
          )}
        </>
      );
    } else if (this.props.width > 767) {
      return (
        <>
          {this.state.loading ? (
            <div>
              <Header h="8.375rem" c="#009ad1" />
              <div
                style={{
                  ...blackBg,
                  position: "absolute",
                  top: "8.375rem",
                  width: "100%",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    ...orangeTxt,
                    textAlign: "center",
                    fontSize: "2rem",
                  }}
                >
                  {" "}
                  Loading....
                </p>
              </div>
            </div>
          ) : (
            <>
              <Header h="8.375rem" c="#009ad1" />
              <div style={{ ...searchContainerM, ...blackBg }}>
                <div style={searchM}>
                  <input
                    onChange={(event) =>
                      this.setState({ newSearch: event.target.value })
                    }
                    style={{ ...blackBg, ...inputL }}
                    type="text"
                  />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: `/search/${this.state.newSearch}`,
                    }}
                  >
                    <Button
                      type="search"
                      text="SEARCH"
                      backgroundColor="orange"
                      textColor="black"
                      fontSize={1.5}
                      onClick={this.handleButtonClick}
                    />
                  </Link>
                </div>
                <div style={textM}>
                  <p style={{ margin: 0 }}>
                    {" "}
                    SEARCH RESULTS FOR "{this.state.inputValue}"{" "}
                  </p>
                  <p style={{ margin: 0 }}>
                    {" "}
                    {this.state.APIdata.count} ARTWORKS{" "}
                  </p>
                </div>
              </div>
              <div
                style={{
                  ...yellowBg,
                  width: "100%",
                  height: "fit-content",
                  paddingBottom: "3rem",
                }}
              >
                <div style={{ ...container }}>{this.createCards()}</div>
              </div>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          {this.state.loading ? (
            <div>
              <Header h="5.3rem" c="#009ad1" />
              <div
                style={{
                  ...blackBg,
                  position: "absolute",
                  top: "5.3rem",
                  width: "100%",
                  height: "100%",
                }}
              >
                <p
                  style={{
                    ...orangeTxt,
                    textAlign: "center",
                    fontSize: "2rem",
                  }}
                >
                  {" "}
                  Loading....
                </p>
              </div>
            </div>
          ) : (
            <>
              <Header h="5.3rem" c="#009ad1" />
              <div style={{ ...searchContainerS, ...blackBg }}>
                <div style={searchS}>
                  <input
                    onChange={(event) =>
                      this.setState({ newSearch: event.target.value })
                    }
                    style={{ ...blackBg, ...inputS }}
                    type="text"
                  />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: `/search/${this.state.newSearch}`,
                    }}
                  >
                    <Button
                      type="search"
                      text="SEARCH"
                      backgroundColor="orange"
                      textColor="black"
                      fontSize={0.8}
                      onClick={this.handleButtonClick}
                    />
                  </Link>
                </div>
                <div style={textS}>
                  <p style={{ margin: 0 }}>
                    {" "}
                    SEARCH RESULTS FOR "{this.state.inputValue}"{" "}
                  </p>
                  <p style={{ margin: 0 }}>
                    {" "}
                    {this.state.APIdata.count} ARTWORKS{" "}
                  </p>
                </div>
              </div>
              <div
                style={{
                  ...yellowBg,
                  width: "100%",
                  height: "fit-content",
                  paddingBottom: "3rem",
                }}
              >
                <div style={{ ...containerS }}>{this.createCards()}</div>
              </div>
            </>
          )}
        </>
      );
    }
  }
}

const container: CSSProperties = {
  display: "grid",
  width: "100%",
  height: "auto",
  gap: "3rem 2.3rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
  gridAutoRows: "30rem",
  padding: "2rem 5rem 2rem 5rem ",
};

const containerS: CSSProperties = {
  display: "grid",
  width: "100%",
  height: "fit-content",
  gap: "5rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
  gridAutoRows: "30rem",
  padding: "1rem 1rem 5.2rem 1rem ",
};

const searchContainerL: CSSProperties = {
  flex: 1,
  height: 255,
  paddingRight: "6.3rem",
  paddingLeft: "5.1rem",
  paddingTop: "2.6rem",
  paddingBottom: "2.1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const searchContainerM: CSSProperties = {
  flex: 1,
  height: 280,
  padding: "2rem 2.6rem 2rem 2.6rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const searchContainerS: CSSProperties = {
  //flex: 1,
  height: "auto",
  padding: "1rem 1.25rem 1rem 1.25rem",
  display: "flex",
  flexDirection: "column",
  //alignItems: "center",
  justifyContent: "space-between",
};

const searchL: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "57.4rem",
};

const searchM: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "8rem",
  width: "30rem",
};

const searchS: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "4rem",
  width: "17.25rem",
};

const inputL: CSSProperties = {
  outline: "none",
  border: 2,
  borderStyle: "solid",
  borderColor: "#FF9C5B",
  height: "3.4rem",
  width: "39.6rem",
  color: "#FF9C5B",
  fontWeight: 700,
  fontSize: "1.5rem",
  padding: 0,
};

const inputS: CSSProperties = {
  outline: "none",
  border: 2,
  borderStyle: "solid",
  borderColor: "#FF9C5B",
  height: "1.7rem",
  //width: "17rem",
  color: "#FF9C5B",
  fontWeight: 700,
  fontSize: "0.8rem",
  padding: 0,
};

const textL: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  color: "#FF9C5B",
  fontWeight: 700,
  fontSize: "1.5rem",
};
const textM: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  color: "#FF9C5B",
  fontWeight: 700,
  fontSize: "1.5rem",
};

const textS: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  color: "#FF9C5B",
  fontWeight: 700,
  fontSize: "0.8rem",
  paddingTop: "1rem",
  width: "17.25rem",
};

export default withRouter(SearchPage);
