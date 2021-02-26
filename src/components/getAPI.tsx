import { useState } from 'react';


interface Props {
  type: "keyword" | "artworkinfo";
  title: string;
}

// interface State {
//   data: {};
//   isLoaded: boolean;
//   error: string;
// }

export default function GetAPI(props: Props) {

 const [isLoaded, setIsLoaded] = useState(false)
 const [error, setError] = useState("")
  const [keyWordData, setKeyWordData] = useState({})


    if (props.type === "keyword") {
        fetch(
            `https://www.rijksmuseum.nl/api/en/collection?key=dZz20am8&q=${props.title}&ps=3&p=0`
          )
            .then((res) => res.json())
            .then(
              (data) => {
                setKeyWordData(data)
                setIsLoaded(true)
                return setKeyWordData;
              },
              () => {
                  setIsLoaded(true)
                  setError("error");
                  return null;
              }
            );
            
      
    } else {
    //   getArtwork()
    }
  

//   public getArtwork() {}

return setKeyWordData;
  
  }



