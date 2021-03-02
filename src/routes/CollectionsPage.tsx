import React, { CSSProperties } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Card from "../components/card";
import Header from "../components/header";
import { beigeBg, orangeBg } from "../css";
import { fetchMakerData} from "../helper";
//import { RouteComponentProps } from "react-router-dom"
interface MatchParams {
  collection: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

interface State {
  loading: boolean;
  APIdata: any;
  collection: string;
}
class CollectionsPage extends React.Component<
  Props & RouteComponentProps,
  State
> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      loading: true,
      APIdata: {},
      collection: "",
    };
  }

  /**
   * Changes the artistname to a string that can be put into a link
   */
  async changeToString() {
    let input = this.props.match.params.collection;
    let output = input.replace(/ /g, "+");
    this.setState({
      collection: output,
    });
  }

  async componentDidMount() {
    await this.changeToString();
    this.setState({
      APIdata: await fetchMakerData(this.state.collection),
      loading: false,
    });
  }

  createCards() {
    let cards: JSX.Element[] = [];
    for (let i = 0; i < this.state.APIdata.length; i++) {
      if ( i === 9 ){
        break;
      }
      let objectTitle: string = this.state.APIdata[i].title;
      let image: string = this.state.APIdata[i].webImage.url;
      let objectNumber: string = this.state.APIdata[i].objectNumber;
      cards.push(
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={{
            pathname: `/artwork/${objectNumber}`,
          }}
          key={i}
        >
          <div style={cardContainer}>
          <Card
            color="yellow"
            fontSize={2}
            title={objectTitle}
            imgSrc={image}
          />
          </div>
        </Link>
      );
    }
    return cards;
  }


  render() {
    console.log(this.state.APIdata)
    return (
      <>
       {this.state.loading ? (
          <div style = {{...beigeBg, height: "100%", width: "100%" }}> Loading.....</div> //Här kanske vi skickar in en ''loading'' komponent istället?
        ) : (
        <>
          <Header h="18.8rem" c="#E2D0BA"></Header>
         
         
          <div style={{ ...container, ...orangeBg }}>
            <h3 style={title}>{this.props.match.params.collection.toUpperCase()}</h3>
            <p style = {p}>{this.state.APIdata.length} ARTWORKS</p>
            <div style={cardWrapper}>{this.createCards()}</div>
          </div>
          
          </>
        )
        }
      </>
    );
  }
}

const container: CSSProperties = {
  flex: 1,
  height: "112.7rem",
  //padding: "0 5.75rem 0 5.75rem",
  display:"flex",
  flexDirection: "column",
  alignItems: "center"
};

const p: CSSProperties = {
  padding: "0 5.75rem 0 5.75rem",
  position: "absolute",
  top: 451,
  right: 91,
  fontWeight: 700,
  fontSize: 24,


}

const title: CSSProperties = {
  padding: "0 5.75rem 0 5.75rem",
  fontSize: "6rem",
  position: "absolute",
  top: 130,
  wordBreak: "break-word",
  fontWeight: 900,
};

const cardWrapper: CSSProperties = {
  padding: "14.1rem 5.75rem 14.5rem 5.75rem",
  display: "flex",
  height: "94rem",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignContent: "space-between",
};

const cardContainer: CSSProperties = {
  height: "29.3rem",
  width: "24.5rem",
  paddingBottom: "5rem",
};

export default CollectionsPage;
