import React from "react";
import Header from "../components/header";
import SearchBox from "../components/SPsearchBox";
import SearchResult from "../components/SPsearchResult";
import searchResult from "../components/SPsearchResult"
//import { RouteComponentProps } from "react-router-dom"

interface Props {}

interface State {}

class SearchPage extends React.Component<Props, State> {
  render() {
    return (
      <>
    <Header h="8.375rem" c="#009ad1"/>
    <SearchBox searchResult = "REMBRANDT" nmbrOfArtworks = {1024} />
    <SearchResult/>
    </>
    );
  }
}

export default SearchPage;
