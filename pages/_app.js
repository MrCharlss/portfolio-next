import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-brand">
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
