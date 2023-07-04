import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";


const fetchArtPieces = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export default function App({ Component, pageProps }) {
  const { data, error  } = useSWR(URL, fetchArtPieces);

  if ( error) {
    return <div>Loading...</div>; // or display an error message
  }



  return (
    <>
      <GlobalStyle />
      <Component {...pageProps}
             pieces={data} />
    </>
  );
}
