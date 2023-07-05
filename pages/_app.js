import useSWR from "swr";
import Layout from "../components/Layout.js";
import GlobalStyle from "../styles";

const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading || error) {
    return <div>Loading...</div>; // or display an error message
  }

  console.log(data);
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
    </Layout>
  );
}
