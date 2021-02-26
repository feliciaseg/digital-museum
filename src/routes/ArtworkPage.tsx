import React, { CSSProperties } from "react";
import Header from "../components/header";
import * as css from "../css";
import arrow from "../assets/yellow-arrow.png";
import Card from "../components/card";
//import { RouteComponentProps } from "react-router-dom"

// Ska ta in ett objektnummer
interface Props {}

interface State {}

class ArtworkPage extends React.Component<Props, State> {
  navigateBack() {
    window.history.back();
  }

  render() {
    return (
      <>
        <Header h="8.375rem" c="#FAFF70"></Header>
        <div style={{ ...css.orangeBg, ...hero }}>
          <button
            onClick={this.navigateBack}
            style={{ ...button, ...css.blackBg, ...css.orangeTxt }}
          >
            <img style={{ transform: "rotate(180deg)" }} src={arrow}></img>
            Go back
          </button>
          <img style={heroImg} src="../assets/testImg.jpg"></img>
        </div>
        <div style={{ ...css.blueBg }}>
          <div style={descriptionContainer}>
            <h2 style={{ ...css.title, ...artworkTitle }}>
              Johannes Wtenbogaert
            </h2>
            <div style={metaContainer}>
              <p style={meta}>Rembrandt van Rijn, 1633</p>
              <p style={meta}>oil on canvas</p>
            </div>
            <p style={artworkDescription}>
              The Amsterdam merchant Abraham Anthonisz Recht was a convinced
              Remonstrant and great admirer of Wtenbogaert. He commissioned this
              portrait from Rembrandt in 1633 and hung it in his home.
              Wtenbogaert looks at you with a penetrating gaze, he is clearly a
              man of moral authority. And, a man of the Word, as the open book
              suggests. But exactly which book it is, remains unknown.
            </p>
          </div>
          <div style={{ ...css.beigeBg, ...moreContainer }}>
            <h3 style={{ ...css.title, ...moreTitle }}>More work by</h3>
            <h3 style={{ ...css.title, ...moreTitle }}>Rembrandt van Rijn</h3>
            <div style={cardsContainer}>
              <Card
                fontSize={1.5}
                color={"orange"}
                title={"Johannes Wtenbogaert"}
              />
              <Card
                fontSize={1.5}
                color={"orange"}
                title={"Johannes Wtenbogaert"}
              />
              <Card
                fontSize={1.5}
                color={"orange"}
                title={"Johannes Wtenbogaert"}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const hero: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "100%",
  height: "30rem",
};

const heroImg: CSSProperties = {
  position: "absolute",
  height: "inherit",
  width: "inherit",
  padding: "6rem 5.9rem 5.9rem 5.9rem",
  objectFit: "cover",
  objectPosition: "center",
};

const button: CSSProperties = {
  maxWidth: "15rem",
  alignSelf: "flex-end",
  margin: "2rem 5.9rem 0 5.9rem",
  fontSize: "1.5rem",
  fontWeight: 700,
  height: "3.25rem",
  width: "15.9rem",
  outline: "none",
  border: 3,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

const artworkTitle: CSSProperties = {
  position: "relative",
  width: "100%",
  margin: "0",
  fontSize: "4.8rem",
  marginTop: "-10rem",
  wordBreak: "break-word",
};

const descriptionContainer: CSSProperties = {
  width: "100%",
  maxWidth: "60rem",
  padding: "7rem 5.9rem 4rem 5.9rem",
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

const moreContainer: CSSProperties = {
  padding: "3em 5.9rem 5rem 5.9rem",
};

const moreTitle: CSSProperties = {
  fontSize: "2.2rem",
  width: "100%",
  maxWidth: "60rem",
  margin: "0.3rem 0",
};

const cardsContainer: CSSProperties = {
  display: "grid",
  width: "100%",
  height: "auto",
  marginTop: "2rem",
  gap: "2rem 1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
  gridAutoRows: "20rem",
};

export default ArtworkPage;
