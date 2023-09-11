import "../styles/global.css";
import GlobalArrayProvider from "../context/GlobalArrayContext";

function App({ Component, pageProps }) {
  return (
    <GlobalArrayProvider>
      <Component {...pageProps} />
    </GlobalArrayProvider>
  );
}

export default App;
