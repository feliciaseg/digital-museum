import React, { CSSProperties } from "react";
import * as css from "../styling/css";
import Header from "../components/header";
import Button from "../components/button";
import Card from "../components/card";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { fetchSearchData, fetchObjectData } from "../helper";

interface MatchParams {
  object: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  width: number;
}

interface State {
  object: string;
  APIData: any;
  searchData: any;
  mainDataLoading: boolean;
  cardsDataLoading: boolean;
  reload: boolean;
}

class ArtworkPage extends React.Component<Props, State> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      object: this.props.match.params.object,
      APIData: {},
      searchData: {},
      mainDataLoading: true,
      cardsDataLoading: true,
      reload: false,
    };
  }

  async componentDidMount() {
    this.setState({
      APIData: await fetchObjectData(this.props.match.params.object),
      mainDataLoading: false,
    });
  }

  async componentDidUpdate(prevProps: Props, prevState: State) {
    // When the URL updates, the API is fetched and the data updated
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        APIData: await fetchObjectData(this.props.match.params.object),
        mainDataLoading: false,
      });
    }

    // searchData uses the state of APIData
    // so it needs to be called after APIData has updated
    if (this.state.APIData !== prevState.APIData) {
      this.setState({
        searchData: await fetchSearchData(
          this.state.APIData.principalOrFirstMaker
        ),
        cardsDataLoading: false,
      });
    }
  }

  navigateBack() {
    // Funkar inte???
    window.history.back();
  }

  createCards() {
    let cards: JSX.Element[] = [];
    for (let i = 0; i < this.state.searchData.length; i++) {
      if (i === 3) {
        break;
      }
      let artwork: string = this.state.searchData[i].title;
      let image: string = this.state.searchData[i].headerImage.url;
      let objectNumber: string = this.state.searchData[i].objectNumber;
      cards.push(
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={{
            pathname: `/artwork/${objectNumber}`,
          }}
          key={i}
        >
          <Card color="orange" fontSize={1.8} title={artwork} imgSrc={image} />
        </Link>
      );
    }
    return cards;
  }

  render() {
    if (this.props.width > 1024) {
      return (
        <>
          {this.state.mainDataLoading ? (
            <>
              <Header h="8.375rem" c="#FAFF70"></Header>
              <div style={{ ...css.orangeBg, width: "100%", height: "100%" }}>
                <div style={{ float: "right", margin: "2rem 5.75rem 0 0" }}>
                  <Button
                    type="goBack"
                    text="back"
                    backgroundColor="black"
                    textColor="orange"
                    fontSize={1.2}
                    onClick={this.navigateBack}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <Header h="8.375rem" c="#FAFF70"></Header>
              <div style={{ ...css.orangeBg, ...hero }}>
                <div style={{ float: "right", margin: "2rem 5.75rem 0 0" }}>
                  <Button
                    type="goBack"
                    text="back"
                    backgroundColor="black"
                    textColor="orange"
                    fontSize={1.2}
                    onClick={this.navigateBack}
                  />
                </div>
                <img
                  style={{ ...heroImg, ...desktopHero }}
                  src={this.state.APIData.webImage.url}
                  alt = ""
                ></img>
              </div>
              <div style={{ ...css.blueBg }}>
                <div style={{ ...descriptionContainer, ...desktopDescription }}>
                  <h2
                    style={{ ...css.title, ...desktopTitle, ...artworkTitle }}
                  >
                    {this.state.APIData.title}
                  </h2>
                  <div style={metaContainer}>
                    <p style={meta}>
                      {this.state.APIData.principalOrFirstMaker},{" "}
                      {this.state.APIData.dating.presentingDate}
                    </p>
                    <p style={meta}>{this.state.APIData.materials[0]}</p>
                  </div>
                  <p style={artworkDescription}>
                    {this.state.APIData.plaqueDescriptionEnglish
                      ? this.state.APIData.plaqueDescriptionEnglish
                      : this.state.APIData.label.description}
                  </p>
                </div>
                {this.state.cardsDataLoading ? (
                  <div style={{ ...css.beigeBg, ...desktopMore }}>
                    <h3 style={{ ...css.title, ...moreTitle }}>More work by</h3>
                    <h3 style={{ ...css.title, ...moreTitle }}>
                      {this.state.APIData.principalOrFirstMaker}
                    </h3>
                    <div
                      style={{ ...css.orangeBg, width: "100%", height: "100%" }}
                    ></div>
                    <div
                      style={{ ...css.orangeBg, width: "100%", height: "100%" }}
                    ></div>
                    <div
                      style={{ ...css.orangeBg, width: "100%", height: "100%" }}
                    ></div>
                  </div>
                ) : (
                  <div style={{ ...css.beigeBg, ...desktopMore }}>
                    <h3 style={{ ...css.title, ...moreTitle }}>More work by</h3>
                    <h3 style={{ ...css.title, ...moreTitle }}>
                      {this.state.APIData.principalOrFirstMaker}
                    </h3>
                    <div style={cardsContainer}>{this.createCards()}</div>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      );
    } else if (this.props.width > 768) {
      return (
        <>
          {this.state.mainDataLoading ? (
            <>
              <Header h="8.375rem" c="#FAFF70"></Header>
              <div style={{ ...css.orangeBg, width: "100%", height: "100%" }}>
                <div style={{ float: "right", margin: "2rem 3.5rem 0 0" }}>
                  <Button
                    type="goBack"
                    text="back"
                    backgroundColor="black"
                    textColor="orange"
                    fontSize={1.2}
                    onClick={this.navigateBack}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <Header h="8.375rem" c="#FAFF70"></Header>
              <div style={{ ...css.orangeBg, ...hero }}>
                <div style={{ float: "right", margin: "2rem 3.5rem 0 0" }}>
                  <Button
                    type="goBack"
                    text="back"
                    backgroundColor="black"
                    textColor="orange"
                    fontSize={1.2}
                    onClick={this.navigateBack}
                  />
                </div>
                <img
                  style={{ ...heroImg, ...tabletHero }}
                  src={this.state.APIData.webImage.url}
                  alt = ""
                ></img>
              </div>
              <div style={{ ...css.blueBg }}>
                <div style={{ ...descriptionContainer, ...tabletDescription }}>
                  <h2 style={{ ...css.title, ...tabletTitle, ...artworkTitle }}>
                    {this.state.APIData.title}
                  </h2>
                  <div style={metaContainer}>
                    <p style={meta}>
                      {this.state.APIData.principalOrFirstMaker},{" "}
                      {this.state.APIData.dating.presentingDate}
                    </p>
                    <p style={meta}>{this.state.APIData.materials[0]}</p>
                  </div>
                  <p style={artworkDescription}>
                    {this.state.APIData.plaqueDescriptionEnglish
                      ? this.state.APIData.plaqueDescriptionEnglish
                      : this.state.APIData.label.description}
                  </p>
                </div>
                {this.state.cardsDataLoading ? (
                  <div style={{ ...css.beigeBg, ...tabletMore }}>
                    <h3 style={{ ...css.title, ...moreTitle }}>More work by</h3>
                    <h3 style={{ ...css.title, ...moreTitle }}>
                      {this.state.APIData.principalOrFirstMaker}
                    </h3>
                    <div
                      style={{ ...css.orangeBg, width: "100%", height: "100%" }}
                    ></div>
                    <div
                      style={{ ...css.orangeBg, width: "100%", height: "100%" }}
                    ></div>
                    <div
                      style={{ ...css.orangeBg, width: "100%", height: "100%" }}
                    ></div>
                  </div>
                ) : (
                  <div style={{ ...css.beigeBg, ...tabletMore }}>
                    <h3 style={{ ...css.title, ...moreTitle }}>More work by</h3>
                    <h3 style={{ ...css.title, ...moreTitle }}>
                      {this.state.APIData.principalOrFirstMaker}
                    </h3>
                    <div style={cardsContainer}>{this.createCards()}</div>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          {this.state.mainDataLoading ? (
            <>
              <Header h="8.375rem" c="#FAFF70"></Header>
              <div style={{ ...css.orangeBg, width: "100%", height: "100%" }}>
                <div style={{ float: "right", margin: "2rem 2rem 0 0" }}>
                  <Button
                    type="goBack"
                    text="back"
                    backgroundColor="black"
                    textColor="orange"
                    fontSize={1.2}
                    onClick={this.navigateBack}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <Header h="8.375rem" c="#FAFF70"></Header>
              <div style={{ ...css.orangeBg, ...hero }}>
                <div style={{ float: "right", margin: "2rem 2rem 0 0" }}>
                  <Button
                    type="goBack"
                    text="back"
                    backgroundColor="black"
                    textColor="orange"
                    fontSize={1.2}
                    onClick={this.navigateBack}
                  />
                </div>
                <img
                  style={{ ...heroImg, ...mobileHero }}
                  src={this.state.APIData.webImage.url}
                  alt=""
                ></img>
              </div>
              <div style={{ ...css.blueBg }}>
                <div style={{ ...descriptionContainer, ...mobileDescription }}>
                  <h2 style={{ ...css.title, ...mobileTitle, ...artworkTitle }}>
                    {this.state.APIData.title}
                  </h2>
                  <div style={metaContainer}>
                    <p style={meta}>
                      {this.state.APIData.principalOrFirstMaker},{" "}
                      {this.state.APIData.dating.presentingDate}
                    </p>
                    <p style={meta}>{this.state.APIData.materials[0]}</p>
                  </div>
                  <p style={artworkDescription}>
                    {this.state.APIData.plaqueDescriptionEnglish
                      ? this.state.APIData.plaqueDescriptionEnglish
                      : this.state.APIData.label.description}
                  </p>
                </div>
                {this.state.cardsDataLoading ? (
                  <div style={{ ...css.beigeBg, ...mobileMore }}>
                    <h3 style={{ ...css.title, ...moreTitle }}>More work by</h3>
                    <h3 style={{ ...css.title, ...moreTitle }}>
                      {this.state.APIData.principalOrFirstMaker}
                    </h3>
                    <div
                      style={{ ...css.orangeBg, width: "100%", height: "100%" }}
                    ></div>
                    <div
                      style={{ ...css.orangeBg, width: "100%", height: "100%" }}
                    ></div>
                    <div
                      style={{ ...css.orangeBg, width: "100%", height: "100%" }}
                    ></div>
                  </div>
                ) : (
                  <div style={{ ...css.beigeBg, ...mobileMore }}>
                    <h3 style={{ ...css.title, ...moreTitle }}>More work by</h3>
                    <h3 style={{ ...css.title, ...moreTitle }}>
                      {this.state.APIData.principalOrFirstMaker}
                    </h3>
                    <div style={cardsContainer}>{this.createCards()}</div>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      );
    }
  }
}

const hero: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "75vh",
};

const heroImg: CSSProperties = {
  position: "absolute",
  height: "inherit",
  width: "inherit",
  objectFit: "cover",
  objectPosition: "center",
};

const mobileHero: CSSProperties = {
  padding: "6rem 2rem 4rem 2rem",
};

const tabletHero: CSSProperties = {
  padding: "6rem 3.5rem 4rem 3.5rem",
};

const desktopHero: CSSProperties = {
  padding: "6rem 5.75rem 4rem 5.75rem",
};

const artworkTitle: CSSProperties = {
  position: "relative",
  width: "100%",
  fontWeight: 900,
  margin: "-8.5rem 0 0 0",
  wordBreak: "break-word",
};

const mobileTitle: CSSProperties = {
  fontSize: "3rem",
};

const tabletTitle: CSSProperties = {
  fontSize: "4rem",
};

const desktopTitle: CSSProperties = {
  fontSize: "5rem",
};

const descriptionContainer: CSSProperties = {
  width: "100%",
  maxWidth: "60rem",
};

const mobileDescription: CSSProperties = {
  padding: "7rem 2rem 4rem 2rem",
};

const tabletDescription: CSSProperties = {
  padding: "7rem 3.5rem 4rem 3.5rem",
};

const desktopDescription: CSSProperties = {
  padding: "7rem 5.75rem 4rem 5.75rem",
};

const metaContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

const meta: CSSProperties = {
  fontWeight: "bolder",
  margin: "1rem 0",
};

const artworkDescription: CSSProperties = {
  position: "relative",
  margin: "2rem 0 0 0",
  lineHeight: "1.5",
};

const mobileMore: CSSProperties = {
  padding: "5rem 2rem 8rem 2rem",
};

const tabletMore: CSSProperties = {
  padding: "5rem 3.5rem 8rem 3.5rem",
};

const desktopMore: CSSProperties = {
  padding: "5rem 5.75rem 8rem 5.75rem",
};

const moreTitle: CSSProperties = {
  fontSize: "2.2rem",
  width: "100%",
  maxWidth: "60rem",
  margin: "0.3rem 0",
  fontWeight: 900,
};

const cardsContainer: CSSProperties = {
  display: "grid",
  width: "100%",
  height: "auto",
  marginTop: "2rem",
  gap: "3rem 1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
  gridAutoRows: "20rem",
};

export default withRouter(ArtworkPage);
